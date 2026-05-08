/// <reference types="vite-plugin-pwa/react" />
declare module 'virtual:pwa-register/react' {
  import { RegisterSWOptions } from 'vite-plugin-pwa';
  
  export interface UseRegisterSWOptions {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegisteredSW?: (swUrl: string, r: ServiceWorkerRegistration) => void;
    onRegistered?: (registration: ServiceWorkerRegistration) => void;
    onRegisterError?: (error: any) => void;
  }

  export function useRegisterSW(options?: UseRegisterSWOptions): {
    needRefresh: [boolean, (value: boolean) => void];
    offlineReady: [boolean, (value: boolean) => void];
    updateServiceWorker: (reloadPage?: boolean) => void;
  };
}
