import { useEffect, useState } from 'react';
import { WifiOff, Wifi, CheckCircle } from 'lucide-react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export default function OfflineNotice() {
const [isOnline, setIsOnline] = useState(true);
const [offlineReady, setOfflineReady] = useState(false);
const [needRefresh, setNeedRefresh] = useState(false);

const {
offlineReady: [offlineReadyState, setOfflineReadyState],
needRefresh: [needRefreshState, setNeedRefreshState],
updateServiceWorker,
} = useRegisterSW();

useEffect(() => {
setIsOnline(navigator.onLine);
setOfflineReady(offlineReadyState ?? false);
setNeedRefresh(needRefreshState ?? false);

const handleOnline = () => setIsOnline(true);
const handleOffline = () => setIsOnline(false);

window.addEventListener('online', handleOnline);
window.addEventListener('offline', handleOffline);

return () => {
window.removeEventListener('online', handleOnline);
window.removeEventListener('offline', handleOffline);
};
}, [offlineReadyState, needRefreshState]);

// Don't show anything if everything is fine
if (isOnline && !offlineReady && !needRefresh) {
return null;
}

return (
<div className="fixed bottom-4 right-4 z-[100]">
{!isOnline && (
<div className="bg-stone-900 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom">
<WifiOff className="w-6 h-6 text-rose-400" />
<div>
<p className="font-black uppercase text-sm">You're Offline</p>
<p className="text-xs text-stone-300">This app works offline!</p>
</div>
</div>
)}

{offlineReady && !offlineReadyState && (
<div className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom">
<CheckCircle className="w-6 h-6" />
<div>
<p className="font-black uppercase text-sm">Ready for Offline Use</p>
<p className="text-xs text-green-100">App cached successfully</p>
</div>
</div>
)}

{needRefresh && (
<div className="bg-amber-500 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom">
<Wifi className="w-6 h-6" />
<div>
<p className="font-black uppercase text-sm">Update Available</p>
<button
onClick={() => updateServiceWorker(true)}
className="text-xs font-bold underline mt-1 hover:text-amber-100"
>
Click to update
</button>
</div>
</div>
)}
</div>
);
}
