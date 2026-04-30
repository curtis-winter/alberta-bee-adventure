import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Bug, 
  Home as HomeIcon, 
  Flower2, 
  Snowflake, 
  ThermometerSun, 
  Info,
  Users,
  Map,
  ChevronRight,
  Play,
  RotateCcw
} from 'lucide-react';
import Home from './components/Home';
import BeeLifecycle from './components/BeeLifecycle';
import BeeTypes from './components/BeeTypes';
import PollenGame from './components/PollenGame';
import HiveExplorer from './components/HiveExplorer';
import AlbertaStats from './components/AlbertaStats';
import AlbertaWinter from './components/AlbertaWinter';

export type Section = 'home' | 'lifecycle' | 'types' | 'explorer' | 'map' | 'game' | 'winter';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { id: 'home', label: 'Welcome', icon: HomeIcon, color: 'bg-yellow-400' },
    { id: 'lifecycle', label: 'Bee Life', icon: Bug, color: 'bg-rose-400 text-white' },
    { id: 'types', label: 'Bee Team', icon: Users, color: 'bg-orange-400 text-white' },
    { id: 'explorer', label: 'Hive Build', icon: Info, color: 'bg-amber-400' },
    { id: 'map', label: 'Alberta Map', icon: Map, color: 'bg-emerald-400 text-white' },
    { id: 'game', label: 'Pollen Power', icon: Flower2, color: 'bg-indigo-400 text-white' },
    { id: 'winter', label: 'Winter', icon: Snowflake, color: 'bg-blue-400 text-white' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 font-sans text-stone-900 overflow-x-hidden selection:bg-yellow-400">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-10 left-20 text-6xl">☁️</div>
        <div className="absolute top-20 right-40 text-7xl text-white">☁️</div>
        <div className="absolute bottom-32 left-1/4 text-6xl">🌼</div>
        <div className="absolute bottom-24 right-1/4 text-6xl">🌸</div>
      </div>

       {/* Navigation */}
       <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-8 border-black">
         <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollTo('home')}
          >
            <div className="bg-yellow-400 p-2 border-4 border-black group-hover:rotate-12 transition-transform">
              <Bug className="w-8 h-8 text-black" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-3xl uppercase tracking-tighter text-amber-500">
                ALBERTA <span className="text-black">BEES!</span>
              </span>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest px-1.5 py-0.5 bg-sky-200 rounded-full w-fit mt-0.5">
                Lab Adventure 🇨🇦
              </span>
            </div>
          </motion.div>

          <div className="flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-2 px-4 py-2 border-4 border-black transition-all text-sm font-black uppercase tracking-tight ${
                  activeSection === item.id 
                    ? `${item.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]` 
                    : 'bg-white hover:bg-stone-50 text-stone-900 shadow-none grayscale opacity-60'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:block">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
       {/* Progress bar under nav */}
       <motion.div
         className="h-1 bg-black origin-left mt-2"
         style={{ scaleX }}
       />
      </nav>

       {/* Main Content Area */}
       <main className="pt-24 min-h-screen relative z-10 flex flex-col items-center">
        <section id="home" className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 border-b-8 border-black/5">
          <Home onStart={() => scrollTo('lifecycle')} />
        </section>
        
        <section id="lifecycle" className="w-full min-h-screen flex items-center justify-center py-24 bg-white/50 border-b-8 border-black/5">
          <BeeLifecycle onNext={() => scrollTo('types')} />
        </section>

        <section id="types" className="w-full min-h-screen flex items-center justify-center py-24 border-b-8 border-black/5">
          <BeeTypes onNext={() => scrollTo('explorer')} />
        </section>

        <section id="explorer" className="w-full min-h-screen flex items-center justify-center py-24 bg-white/50 border-b-8 border-black/5">
          <HiveExplorer onNext={() => scrollTo('map')} />
        </section>

        <section id="map" className="w-full min-h-screen flex items-center justify-center py-24 border-b-8 border-black/5">
          <AlbertaStats onNext={() => scrollTo('game')} />
        </section>

        <section id="game" className="w-full min-h-screen flex items-center justify-center py-24 bg-white/50 border-b-8 border-black/5">
          <PollenGame onNext={() => scrollTo('winter')} />
        </section>

        <section id="winter" className="w-full min-h-screen flex items-center justify-center py-24">
          <AlbertaWinter />
        </section>
      </main>

      {/* Footer sticky-ish indicator */}
      <footer className="h-24 bg-green-500 border-t-8 border-black flex items-center justify-between px-6 md:px-12 z-50 sticky bottom-0">
        <div className="flex gap-4">
          <button 
            onClick={() => scrollTo('home')}
            className="w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            🏡
          </button>
          <div className="hidden sm:flex w-12 h-12 bg-green-400 border-4 border-black rounded-full items-center justify-center text-2xl opacity-50 cursor-not-allowed">⚙️</div>
          <div className="hidden sm:flex w-12 h-12 bg-green-400 border-4 border-black rounded-full items-center justify-center text-2xl">🏆</div>
        </div>
        
        <div className="flex items-center gap-6 flex-1 max-w-md ml-6 text-white font-black uppercase text-xl">
           KEEP EXPLORING! ↓
        </div>

        <div className="bg-white border-4 border-black p-2 rounded-2xl ml-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
           <div className="text-center leading-none">
             <span className="text-sm font-black uppercase text-stone-500 block">Honey</span>
             <span className="text-xl font-black text-amber-500">450 <span className="text-[10px] text-stone-900">PTS</span></span>
           </div>
        </div>
      </footer>
    </div>
  );
}

function FloatingBee({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut" 
      }}
      className="absolute text-yellow-500/20"
      style={{ left: x, top: y }}
    >
      <Bug size={64} />
    </motion.div>
  );
}
