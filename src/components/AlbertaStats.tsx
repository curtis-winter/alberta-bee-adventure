import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Map, Flower, Users, Droplets, ChevronRight } from 'lucide-react';
import { albertaNectarSources, albertaHoneyMath } from '../data/albertaFacts';

interface AlbertaStatsProps {
  onNext: () => void;
}

const nectarSources = albertaNectarSources.map(s => ({
  ...s,
  emoji: s.emoji
}));

export default function AlbertaStats({ onNext }: AlbertaStatsProps) {
  const [showMath, setShowMath] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Alberta Honey Facts</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Fun statistics from our province!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Left: Key Statistics */}
        <div className="space-y-6">
          <div className="brutalist-card p-8 bg-amber-50">
            <div className="flex items-center gap-6">
              <div className="text-6xl">🏙️</div>
              <div>
                <p className="text-4xl font-black uppercase tracking-tighter">300,000+ HIVES</p>
                <p className="font-bold text-stone-600">Across Alberta prairies</p>
              </div>
            </div>
          </div>

          <div className="brutalist-card p-8 bg-emerald-50">
            <div className="flex items-center gap-6">
              <div className="text-6xl">🍯</div>
              <div>
                <p className="text-4xl font-black uppercase tracking-tighter">40 MILLION LBS</p>
                <p className="font-bold text-stone-600">Honey produced yearly</p>
              </div>
            </div>
          </div>

          <div className="brutalist-card p-8 bg-blue-50">
            <div className="flex items-center gap-6">
              <div className="text-6xl">🏭</div>
              <div>
                <p className="text-4xl font-black uppercase tracking-tighter">40% OF CANADA'S</p>
                <p className="font-bold text-stone-600">Honey comes from Alberta!</p>
              </div>
            </div>
          </div>

          <div className="brutalist-card p-8 bg-purple-50">
            <div className="flex items-center gap-6">
              <div className="text-6xl">💰</div>
              <div>
                <p className="text-4xl font-black uppercase tracking-tighter">$2.6 BILLION</p>
                <p className="font-bold text-stone-600">Pollination services value</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Nectar Sources */}
        <div>
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 italic text-amber-500">What do they eat?</h3>
          <div className="space-y-4">
            {nectarSources.map((source, idx) => (
              <motion.div 
                key={source.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 border-4 border-black rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,1)] ${source.color} ${source.textColor || 'text-white'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{source.emoji}</div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter">{source.name}</h4>
                    <p className="font-bold text-sm opacity-80">{source.bloomPeriod} • {source.honeyColor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Honey Math Facts */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowMath(!showMath)}
          className="bg-white border-4 border-black font-black uppercase px-8 py-3 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          {showMath ? 'Hide' : 'Show'} Honey Math! 🧮
        </button>
      </div>

      {showMath && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {albertaHoneyMath.map((item, idx) => (
            <div key={idx} className="bg-yellow-50 border-4 border-black p-4 rounded-2xl">
              <p className="font-bold text-sm">{item.fact}</p>
            </div>
          ))}
        </motion.div>
      )}

      <div className="mt-12 text-center">
        <div className="bg-white border-4 border-black p-6 rounded-[3rem] inline-block shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <p className="font-black uppercase text-2xl mb-4">Did You Know?</p>
          <p className="text-lg font-bold">One Alberta honeybee visits <span className="text-amber-500 font-black">5,000+ flowers daily</span> during canola bloom!</p>
          <p className="text-lg font-bold mt-2">That's like visiting <span className="text-rose-500 font-black">every store in West Edmonton Mall</span> in one day!</p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_rgba(16,185,129,1)] transition-all"
        >
          Meet Alberta Beekeeper's Year!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
