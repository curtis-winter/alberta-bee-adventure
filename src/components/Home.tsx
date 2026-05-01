import React from 'react';
import { motion } from 'motion/react';
import { Play, MapPin } from 'lucide-react';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="relative isolate min-h-screen bg-gradient-to-br from-sky-100 to-amber-50">
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

          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="bg-black text-white font-black text-2xl px-12 py-6 rounded-3xl shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] inline-flex items-center gap-4 transition-all uppercase tracking-tight"
          >
            Start Adventure
            <Play className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}