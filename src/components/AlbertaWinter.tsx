import React from 'react';
import { motion } from 'motion/react';
import { Snowflake, ThermometerSnowflake, ShieldCheck, Home as HomeIcon, Sun, HeartPulse, RotateCcw, Bug } from 'lucide-react';

export default function AlbertaWinter() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ rotate: -15 }}
          animate={{ rotate: 15 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
          className="inline-block bg-white border-4 border-black p-6 rounded-3xl text-blue-500 mb-8 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]"
        >
          <Snowflake size={64} strokeWidth={3} />
        </motion.div>
        <h2 className="text-6xl font-black text-black uppercase tracking-tighter mb-6 leading-none">The Cold Winter</h2>
        <p className="text-xl text-sky-900 font-bold max-w-2xl mx-auto bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">
          Alberta gets VERY cold (-30°C!)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-white border-4 border-black border-b-[12px] border-stone-300 p-10 rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] flex flex-col gap-6">
          <div className="w-20 h-20 bg-blue-100 border-4 border-black rounded-2xl flex items-center justify-center text-blue-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ThermometerSnowflake size={40} strokeWidth={3} />
          </div>
          <h3 className="text-4xl font-black uppercase tracking-tighter">The Bee Huddle</h3>
          <p className="text-xl text-stone-800 font-bold leading-tight">
            Bees form a giant ball around the Queen. They vibrate their muscles to stay warm!
          </p>
          <div className="bg-amber-100 p-6 rounded-3xl border-4 border-black font-black uppercase italic text-stone-800 text-sm">
            "MIDDLE OF THE HUDDLE: 35°C!"
          </div>
        </div>

        <div className="bg-white border-4 border-black border-b-[12px] border-stone-300 p-10 rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] flex flex-col gap-6">
          <div className="w-20 h-20 bg-emerald-100 border-4 border-black rounded-2xl flex items-center justify-center text-emerald-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ShieldCheck size={40} strokeWidth={3} />
          </div>
          <h3 className="text-4xl font-black uppercase tracking-tighter">Winter Wraps</h3>
          <p className="text-xl text-stone-800 font-bold leading-tight">
            Beekeepers wrap the hives in black insulation to keep the cold wind out.
          </p>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-4 w-full bg-stone-100 border-2 border-black rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-black"
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 1, delay: i * 0.1 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recap Section */}
      <div className="bg-yellow-400 border-8 border-black rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative z-10">
          <h3 className="text-6xl font-black text-black uppercase tracking-tighter mb-6 italic underline decoration-black underline-offset-8">You graduated!</h3>
          <p className="text-2xl text-black font-black uppercase tracking-tight mb-12">
            You are now an <span className="bg-black text-yellow-400 px-4 py-1">Official Bee Scout</span>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
             <LevelBadge icon={<Sun />} label="ENERGY SCOUT" />
             <LevelBadge icon={<HeartPulse />} label="HEALTH EXPERT" />
             <LevelBadge icon={<HomeIcon />} label="PROTECTOR" />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-black text-white font-black uppercase tracking-tight py-6 px-12 rounded-3xl inline-flex items-center gap-3 text-2xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] transition-all"
          >
            Play Again!
            <RotateCcw strokeWidth={4} className="w-8 h-8" />
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
