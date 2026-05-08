import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface WaggleDanceProps {
onNext: () => void;
}

const waggleDanceSteps = [
{ step: 1, title: 'Find Flowers', desc: 'A worker bee finds a great patch of flowers with lots of nectar', icon: '🌸' },
{ step: 2, title: 'Return Home', desc: 'She flies back to the hive to tell her sisters about the discovery', icon: '🏠' },
{ step: 3, title: 'Do The Dance', desc: 'She wiggles her body in a figure-8 pattern - this is the Waggle Dance!', icon: '💃' },
{ step: 4, title: 'Share Direction', desc: 'The angle of her dance shows the direction relative to the sun', icon: '☀️' },
{ step: 5, title: 'Share Distance', desc: 'How long she waggles shows how far away the flowers are', icon: '📏' },
{ step: 6, title: 'Teamwork!', desc: 'Other bees watch the dance and fly to find the exact same flowers!', icon: '🐝🐝🐝' }
];

export default function WaggleDance({ onNext }: WaggleDanceProps) {
const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
if (videoRef.current) {
videoRef.current.currentTime = 41;
}
}, []);

return (
<div className="max-w-6xl mx-auto px-6 py-16">
<div className="text-center mb-12">
<h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">The Waggle Dance</h2>
<p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">How bees talk with dance!</p>
</div>

<div className="text-center mb-12">
<p className="text-lg font-bold text-stone-700 max-w-2xl mx-auto">
Honey bees have a special way to tell their sisters where to find the best flowers.
They do a special dance called the <span className="bg-yellow-400 px-2 py-1 rounded">Waggle Dance</span>!
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
{waggleDanceSteps.map((item) => (
<motion.div
key={item.step}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: item.step * 0.1 }}
className="brutalist-card p-6 bg-white"
>
<div className="text-4xl mb-4">{item.icon}</div>
<div className="text-5xl font-black text-yellow-400 mb-2">Step {item.step}</div>
<h4 className="text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h4>
<p className="font-bold text-stone-700">{item.desc}</p>
</motion.div>
))}
</div>

{/* Interactive Waggle Dance Diagram */}
<div className="mb-12">
<h3 className="text-2xl font-black uppercase tracking-tighter mb-6 text-center">How the Waggle Dance Works</h3>
<div className="grid md:grid-cols-2 gap-6 mb-8">
{/* Figure-8 Pattern Diagram */}
<div className="bg-yellow-50 border-4 border-black rounded-xl p-6">
<h4 className="font-black uppercase mb-4">The Figure-8 Pattern</h4>
<svg viewBox="0 0 200 200" className="w-full h-48">
{/* Figure-8 pattern - single continuous path */}
<path
d="M 100 100 
   L 82 82
   A 25 25 0 1 1 118 82
   L 100 100
   L 118 118
   A 25 25 0 1 1 82 118
   L 100 100"
  fill="none"
  stroke="#fbbf24"
  strokeWidth="6"
  strokeDasharray="10 6"
  strokeLinecap="round"
/>
{/* Sun direction indicator */}
<circle cx="180" cy="20" r="15" fill="#fbbf24" stroke="black" strokeWidth="3" />
<text x="180" y="25" textAnchor="middle" className="text-xs font-black">☀️</text>
{/* Bee at center */}
<circle cx="100" cy="100" r="12" fill="black" />
<text x="100" y="105" textAnchor="middle" className="text-xs">🐝</text>
</svg>
<p className="text-sm font-bold mt-4 text-center">
The bee dances in a figure-8 pattern. The straight part points toward the food source!
</p>
</div>

{/* Direction & Distance */}
<div className="space-y-4">
<div className="bg-sky-50 border-4 border-black rounded-xl p-4">
<h4 className="font-black uppercase mb-2">🧭 Direction</h4>
<p className="text-sm font-bold">
If the bee waggles <strong>UP</strong> on the comb, the food is toward the <strong>SUN</strong>!
</p>
<p className="text-sm font-bold mt-2">
If the bee waggles <strong>DOWN</strong>, the food is <strong>AWAY</strong> from the sun!
</p>
</div>
<div className="bg-rose-50 border-4 border-black rounded-xl p-4">
<h4 className="font-black uppercase mb-2">📏 Distance</h4>
<p className="text-sm font-bold">
<strong>Long waggle</strong> = Food is FAR away<br/>
<strong>Short waggle</strong> = Food is CLOSE by!
</p>
</div>
</div>
</div>

{/* Video section */}
<div className="w-full max-w-2xl mx-auto">
<div className="aspect-video border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-black">
<video
ref={videoRef}
className="w-full h-full"
controls
controlsList="playbackrate"
>
<source src="./videos/The%20Waggle%20Dance%20_%20Inside%20the%20Animal%20Mind%20_%20BBC.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>
</div>
<p className="text-center text-sm font-bold text-stone-600 mt-3">
Waggle dance video (starts at 41s) - Works offline!
</p>
</div>
</div>

<div className="bg-sky-100 border-4 border-black rounded-3xl p-8 mb-12">
<h4 className="text-2xl font-black uppercase tracking-tighter mb-4">🎓 Science Connection!</h4>
<p className="text-lg font-bold text-stone-700">
The Waggle Dance is an example of <span className="bg-white px-2 py-1 rounded">animal communication</span> -
one of the most complex forms of communication in the animal kingdom!
Bees use the sun's position as a compass, and they can even adjust their dance if the sun moves!
</p>
</div>

<div className="mt-16 flex justify-center">
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={onNext}
className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] transition-all"
>
Bee Or Wasp?
<ChevronRight strokeWidth={4} className="w-6 h-6" />
</motion.button>
</div>
</div>
);
}
