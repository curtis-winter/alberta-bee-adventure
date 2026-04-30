import React from 'react';
import { motion } from 'motion/react';
import { Map, Flower, Users, Droplets, ChevronRight } from 'lucide-react';

interface AlbertaStatsProps {
  onNext: () => void;
}

const nectarSources = [
  { name: 'CLOVER', emoji: '☘️', color: 'bg-emerald-400', desc: 'The #1 source! Alberta is famous for "Clover Honey" which is crystal clear and sweet.' },
  { name: 'ALFALFA', emoji: '💜', color: 'bg-indigo-400', desc: 'Farmers grow this for cattle, and bees LOVE the purple flowers.' },
  { name: 'CANOLA', emoji: '🌼', color: 'bg-yellow-400', desc: 'Huge fields of yellow in the summer. It makes a very white, creamy honey.' },
  { name: 'WILDFLOWERS', emoji: '🌸', color: 'bg-rose-400', desc: 'Natural prairie flowers give Alberta honey a unique, floral taste!' },
];

export default function AlbertaStats({ onNext }: AlbertaStatsProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Map & Populations */}
        <div className="order-2 lg:order-1">
          <div className="bg-white border-4 border-black border-b-[12px] border-emerald-600 rounded-[3rem] p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]">
            <h2 className="text-5xl font-black text-black uppercase tracking-tighter mb-8 leading-none">Alberta: <span className="text-emerald-500 text-6xl">Honey Capital!</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-amber-100 border-4 border-black rounded-3xl flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">🏙️</div>
                <div>
                  <p className="text-3xl font-black uppercase tracking-tighter text-black">300,000+ HIVES</p>
                  <p className="font-bold text-stone-500 uppercase tracking-tight">Living across the Alberta prairies.</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-indigo-100 border-4 border-black rounded-3xl flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">🏗️</div>
                <div>
                  <p className="text-3xl font-black uppercase tracking-tighter text-black">40% OF CANADA'S HONEY</p>
                  <p className="font-bold text-stone-500 uppercase tracking-tight">Comes from our hard-working bees!</p>
                </div>
              </div>

              <div className="bg-stone-50 border-4 border-black p-6 rounded-3xl relative overflow-hidden group">
                 <img 
                    src="https://images.unsplash.com/photo-1508204841652-6c1f4dd57ac1?auto=format&fit=crop&q=80&w=800" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                    alt="Alberta Fields"
                    referrerPolicy="no-referrer"
                 />
                 <div className="relative z-10 flex items-center gap-4">
                    <Map className="w-10 h-10 text-emerald-500" strokeWidth={3} />
                    <p className="font-black uppercase italic text-lg leading-tight">Bees fly for kilometers across our flat, sunny landscapes!</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Nectar Sources */}
        <div className="order-1 lg:order-2">
          <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 italic text-amber-500 underline decoration-black underline-offset-8">What do they eat?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nectarSources.map((source) => (
              <motion.div 
                key={source.name}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className={`p-6 border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${source.color}`}
              >
                <div className="bg-white border-4 border-black w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {source.emoji}
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tighter text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-2 italic">{source.name}</h4>
                <p className="text-xs font-bold text-black opacity-80 leading-tight uppercase tracking-tight">
                  {source.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] transition-all"
        >
           Play Pollen Dash!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
