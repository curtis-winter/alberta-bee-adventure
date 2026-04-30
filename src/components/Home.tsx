import React from 'react';
import { motion } from 'motion/react';
import { Play, MapPin, Sun, Wind, Bug as BeeIcon } from 'lucide-react';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="relative isolate min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale opacity-10" 
          alt="Beekeeping"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-sky-50 mix-blend-multiply" />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center px-6 overflow-hidden z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 border-4 border-black bg-sky-200 text-sky-900 text-sm font-black uppercase tracking-widest mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <MapPin className="w-5 h-5 text-rose-500" />
            <span>Alberta, Canada</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-10">
            Alberta <br />
            <span className="text-amber-500">Bee Adventure!</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 mb-16">
             <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStart}
              className="bg-black text-white font-black text-2xl px-12 py-6 rounded-3xl shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] inline-flex items-center gap-4 transition-all uppercase tracking-tight"
            >
              Start Mission
              <Play className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            </motion.button>

            <div className="bg-white border-4 border-black p-6 rounded-3xl flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-xs text-left">
              <div className="text-5xl">🐝</div>
              <div>
                <p className="font-black uppercase tracking-tighter text-amber-500 text-xl leading-none">Buzzy</p>
                <p className="font-bold text-stone-500 text-sm">Your Guide</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Grid - Brutalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          <FeatureCard 
            icon={Sun} 
            title="Sunny Skies" 
            desc="Bees love our long Alberta summer days!"
            color="bg-amber-400"
            borderColor="border-amber-600"
          />
          <FeatureCard 
            icon={Wind} 
            title="Field Flow" 
            desc="Clover fields everywhere mean yummy honey."
            color="bg-emerald-400"
            borderColor="border-emerald-600"
          />
          <FeatureCard 
            icon={BeeIcon} 
            title="Busy Hives" 
            desc="Thousands of bees working as one family!"
            color="bg-rose-400"
            borderColor="border-rose-600"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, color, borderColor }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`${color} border-black border-4 border-b-[12px] ${borderColor} p-8 rounded-3xl flex flex-col items-center text-center`}
    >
      <div className="bg-white border-4 border-black p-4 rounded-2xl mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Icon className="w-10 h-10 text-black" />
      </div>
      <h3 className="font-black text-3xl uppercase tracking-tighter mb-3 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">{title}</h3>
      <p className="text-black font-bold opacity-80 leading-tight">{desc}</p>
    </motion.div>
  );
}
