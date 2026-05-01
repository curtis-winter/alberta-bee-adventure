import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { albertaHoneyMath } from '../data/albertaFacts';

interface AlbertaStatsProps {
  onNext: () => void;
}

export default function AlbertaStats({ onNext }: AlbertaStatsProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Alberta Honey Facts</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Fun statistics from our province!</p>
      </div>

      {/* All Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {albertaHoneyMath.map((fact, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="brutalist-card p-6 bg-white"
          >
            <div className="text-5xl mb-4">{fact.emoji}</div>
            <p className="text-xl font-black uppercase tracking-tighter mb-2">{fact.title}</p>
            <p className="font-bold text-stone-600 text-sm">{fact.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_rgba(16,185,129,1)] transition-all"
        >
          Explore Alberta Flowers!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}