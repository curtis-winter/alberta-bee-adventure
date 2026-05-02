import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Bug, 
  Home as HomeIcon, 
  Flower2, 
  Snowflake, 
  Info,
  Users,
  Map,
  ChevronRight,
  ArrowUp,
  Music2,
  CircleHelp
} from 'lucide-react';
import Home from './components/Home';
import BeeLifecycle from './components/BeeLifecycle';
import BeeTypes from './components/BeeTypes';
import WaggleDance from './components/WaggleDance';
import BeeOrWasp from './components/BeeOrWasp';
import AlbertaStats from './components/AlbertaStats';
import AlbertaSeasons from './components/AlbertaSeasons';
import AlbertaFlora from './components/AlbertaFlora';
import AlbertaBeekeeperProfiles from './components/AlbertaBeekeeperProfiles';
import AlbertaChallengesSolutions from './components/AlbertaChallengesSolutions';
import AlbertaWinter from './components/AlbertaWinter';
import ErrorBoundary from './components/ErrorBoundary';

export type Section = 'home' | 'lifecycle' | 'types' | 'waggle' | 'beeorwasp' | 'map' | 'flora' | 'seasons' | 'beekeepers' | 'challenges' | 'winter';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [remountKey, setRemountKey] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
    setRemountKey(prev => prev + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Welcome', icon: HomeIcon, color: 'bg-yellow-400' },
    { id: 'lifecycle', label: 'Bee Life', icon: Bug, color: 'bg-rose-400 text-white' },
    { id: 'types', label: 'Bee Team', icon: Users, color: 'bg-orange-400 text-white' },
    { id: 'waggle', label: 'Waggle Dance', icon: Music2, color: 'bg-indigo-400 text-white' },
    { id: 'beeorwasp', label: 'Bee Or Wasp', icon: CircleHelp, color: 'bg-purple-400 text-white' },
    { id: 'map', label: 'Alberta Stats', icon: Map, color: 'bg-emerald-400 text-white' },
    { id: 'flora', label: 'Flowers', icon: Flower2, color: 'bg-pink-400 text-white' },
    { id: 'seasons', label: 'Seasons', icon: Snowflake, color: 'bg-blue-400 text-white' },
    { id: 'beekeepers', label: 'Keepers', icon: Users, color: 'bg-purple-400 text-white' },
    { id: 'challenges', label: 'Challenges', icon: Bug, color: 'bg-red-400 text-white' },
    { id: 'winter', label: 'Winter', icon: Snowflake, color: 'bg-blue-600 text-white' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 132; // nav + progress bar height
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

  useEffect(() => {
    const activeBtn = document.querySelector(`[aria-current="true"]`) as HTMLElement;
    const navContainer = document.querySelector('.nav-scroll-container') as HTMLElement;
    if (activeBtn && navContainer) {
      const btnRect = activeBtn.getBoundingClientRect();
      const navRect = navContainer.getBoundingClientRect();
      const offset = 280;
      const scrollPos = activeBtn.offsetLeft - navRect.width / 2 + btnRect.width / 2 - offset;
      navContainer.scrollTo({ left: Math.max(0, scrollPos), behavior: 'smooth' });
    }
  }, [activeSection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey || e.metaKey) return;
      
      const sectionIds = navItems.map(item => item.id);
      const currentIndex = sectionIds.indexOf(activeSection);
      
      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, sectionIds.length - 1);
        scrollTo(sectionIds[nextIndex]);
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollTo(sectionIds[prevIndex]);
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleReset();
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollTo('winter');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-sky-50 font-sans text-stone-900 selection:bg-yellow-400 overflow-x-clip">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" aria-hidden="true">
        <div className="absolute top-10 left-20 text-6xl">☁️</div>
        <div className="absolute top-20 right-40 text-7xl text-white">☁️</div>
        <div className="absolute bottom-32 left-1/4 text-6xl">🌼</div>
        <div className="absolute bottom-24 right-1/4 text-6xl">🌸</div>
      </div>

{/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-[60] bg-white border-b-8 border-black">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              {/* Logo row */}
              <motion.div 
                className="flex items-center gap-3 cursor-pointer group shrink-0"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleReset()}
                role="button"
                tabIndex={0}
                aria-label="Return to home"
              >
                <div className="bg-yellow-400 p-2 border-4 border-black group-hover:rotate-12 transition-transform">
                  <span className="text-3xl block leading-none" role="img" aria-label="bee">🐝</span>
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

              {/* Navigation tabs row - full width */}
              <div className="overflow-x-auto nav-scroll-container [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-2 min-w-max">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      aria-label={`Navigate to ${item.label} section`}
                      aria-current={activeSection === item.id ? 'true' : undefined}
                      className={`flex items-center gap-2 px-4 py-2 border-4 border-black transition-all text-sm font-black uppercase tracking-tight shrink-0 ${
                        activeSection === item.id 
                          ? `${item.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]` 
                          : 'bg-white hover:bg-stone-50 text-stone-900 shadow-none grayscale opacity-60'
                      }`}
                    >
                      <item.icon className="w-4 h-4" aria-hidden="true" />
                      <span className="hidden sm:block">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Progress bar under nav */}
          <motion.div
            className="h-1 bg-black origin-left"
            style={{ scaleX }}
          />
        </nav>

        {/* Main Content Area */}
        <main className="pt-32 min-h-screen relative z-10 flex flex-col items-center">
          <section id="home" className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <Home onStart={() => scrollTo('lifecycle')} />
            </ErrorBoundary>
          </section>
          
          <section id="lifecycle" className="w-full min-h-screen flex items-center justify-center py-24 bg-white/50 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <BeeLifecycle onNext={() => scrollTo('types')} />
            </ErrorBoundary>
          </section>

<section id="types" className="w-full min-h-screen flex items-center justify-center py-24 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <BeeTypes onNext={() => scrollTo('waggle')} />
            </ErrorBoundary>
          </section>

          <section id="waggle" className="w-full min-h-screen flex items-center justify-center py-24 bg-white/50 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <WaggleDance onNext={() => scrollTo('beeorwasp')} />
            </ErrorBoundary>
          </section>

          <section id="beeorwasp" className="w-full min-h-screen flex items-center justify-center py-24 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <BeeOrWasp onNext={() => scrollTo('map')} />
            </ErrorBoundary>
          </section>

          <section id="map" className="w-full min-h-screen flex items-center justify-center py-24 bg-white/50 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <AlbertaStats onNext={() => scrollTo('flora')} />
            </ErrorBoundary>
          </section>

          <section id="flora" className="w-full min-h-screen flex items-center justify-center py-24 bg-white/50 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <AlbertaFlora onNext={() => scrollTo('seasons')} />
            </ErrorBoundary>
          </section>

          <section id="seasons" className="w-full min-h-screen flex items-center justify-center py-24 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <AlbertaSeasons onNext={() => scrollTo('beekeepers')} />
            </ErrorBoundary>
          </section>

          <section id="beekeepers" className="w-full min-h-screen flex items-center justify-center py-24 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <AlbertaBeekeeperProfiles onNext={() => scrollTo('challenges')} />
            </ErrorBoundary>
          </section>

          <section id="challenges" className="w-full min-h-screen flex items-center justify-center py-24 bg-white/50 border-b-8 border-black/5">
            <ErrorBoundary remountKey={remountKey}>
              <AlbertaChallengesSolutions onNext={() => scrollTo('winter')} />
            </ErrorBoundary>
          </section>

<section id="winter" className="w-full min-h-screen flex items-center justify-center py-24">
            <ErrorBoundary remountKey={remountKey}>
              <AlbertaWinter onNext={handleReset} />
            </ErrorBoundary>
          </section>
        </main>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={handleReset}
            aria-label="Scroll to top"
            className="fixed left-4 top-1/2 -translate-y-1/2 z-[70] w-12 h-12 bg-black border-4 border-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-stone-800 transition-colors"
          >
            <ArrowUp className="w-6 h-6 text-yellow-400" strokeWidth={3} />
          </button>
        )}
    </div>
  );
}


