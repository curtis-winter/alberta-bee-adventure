import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Snowflake, ThermometerSnowflake, ShieldCheck, Home as HomeIcon, Sun, HeartPulse, RotateCcw, Bug, ChevronRight } from 'lucide-react';
import { albertaWinterTips } from '../data/albertaFacts';

export default function AlbertaWinter({ onNext }: { onNext: () => void }) {
  const [showTips, setShowTips] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: 15 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
          className="inline-block bg-white border-4 border-black p-6 rounded-3xl text-blue-500 mb-8 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]"
        >
          <Snowflake size={64} strokeWidth={3} />
        </motion.div>
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Alberta Winter Prep</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">
          How beekeepers prepare for -30°C!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div className="bg-white border-4 border-black border-b-[12px] border-stone-300 p-8 rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] flex flex-col gap-6">
          <div className="w-20 h-20 bg-blue-100 border-4 border-black rounded-2xl flex items-center justify-center text-blue-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ThermometerSnowflake size={40} strokeWidth={3} />
          </div>
          <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter">The Bee Huddle</h3>
          <p className="text-lg text-stone-800 font-bold leading-tight">
            Bees form a giant ball around the Queen. They vibrate their muscles to stay warm!
          </p>
          <div className="bg-amber-100 p-4 rounded-2xl border-4 border-black font-black uppercase italic text-stone-800 text-sm">
            "MIDDLE OF THE HUDDLE: 35°C - even when it's -40°C outside!"
          </div>
        </div>

        <div className="bg-white border-4 border-black border-b-[12px] border-stone-300 p-8 rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] flex flex-col gap-6">
          <div className="w-20 h-20 bg-emerald-100 border-4 border-black rounded-2xl flex items-center justify-center text-emerald-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ShieldCheck size={40} strokeWidth={3} />
          </div>
          <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter">Alberta Winter Practices</h3>
          
          <button
            onClick={() => setShowTips(!showTips)}
            className="bg-black text-white font-black uppercase tracking-tight px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            {showTips ? 'Hide' : 'Show'} Alberta Tips! 💡
          </button>

          {showTips && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-3 overflow-hidden"
            >
              {albertaWinterTips.map((tip, idx) => (
                <div key={idx} className="bg-emerald-50 border-2 border-black p-3 rounded-xl">
                  <p className="font-black uppercase text-xs tracking-widest text-emerald-800">{tip.practice}</p>
                  <p className="text-sm font-bold">{tip.description}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Recap Section */}
      <div className="bg-yellow-400 border-8 border-black rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative z-10">
          <h3 className="text-5xl lg:text-6xl font-black text-black uppercase tracking-tighter mb-6 italic underline decoration-black underline-offset-8">You're a Bee Expert!</h3>
          <p className="text-xl lg:text-2xl text-black font-black uppercase tracking-tight mb-12">
            You completed the <span className="bg-black text-yellow-400 px-4 py-1">Alberta Bee Adventure</span>
          </p>
           
           <div className="grid grid-cols-1 gap-6 mb-12">
            </div>
           
          <motion.button
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-black text-white font-black uppercase tracking-tight py-5 px-12 rounded-2xl inline-flex items-center gap-3 text-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] transition-all"
          >
            Play Again!
            <RotateCcw strokeWidth={4} className="w-6 h-6" />
          </motion.button>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 text-black/10 rotate-12"><Bug size={120} /></div>
        <div className="absolute bottom-10 right-10 text-black/10 -rotate-12"><Snowflake size={160} /></div>
      </div>
    </div>
  );
}

function LevelBadge({ icon, label }: any) {
  return (
    <div className="bg-white border-4 border-black p-4 rounded-3xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
       {icon}
       <span className="text-xs">{label}</span>
    </div>
  );
}
