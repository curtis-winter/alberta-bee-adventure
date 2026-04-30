import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface BeeLifecycleProps {
  onNext: () => void;
}

const stages = [
  {
    id: 'egg',
    title: 'THE TINY EGG',
    desc: 'A tiny white egg is laid in a wax cell. It looks like a small speck of dust but it holds a whole life!',
    color: 'bg-stone-100',
    image: '/images/bee-lifecycle/egg.jpg',
    funFact: 'A Queen lives up to 5 years and spends her whole life laying eggs!'
  },
  {
    id: 'larva',
    title: 'HUNGRY LARVA',
    desc: 'The egg hatches into a hungry larva. Nurse bees feed worker larvae bee-bread (pollen and nectar). Only queen larvae get Royal Jelly!',
    color: 'bg-emerald-100',
    image: '/images/bee-lifecycle/larva.jpg',
    funFact: 'Worker larvae grow 1,500 times bigger in just 5 days!'
  },
  {
    id: 'pupa',
    title: 'THE BIG CHANGE',
    desc: 'Inside a wax-capped cell, the bee grows eyes, legs, and wings. This is Metamorphosis.',
    color: 'bg-indigo-100',
    image: '/images/bee-lifecycle/pupa.jpg',
    funFact: 'Pupae breathe through tiny tubes called spiracles on their bodies.'
  },
  {
    id: 'adult',
    title: 'THE WORKER',
    desc: 'A fluffy honeybee chews its way out! It starts working instantly by cleaning its own cell.',
    color: 'bg-amber-100',
    image: '/images/bee-lifecycle/new-worker.jpg',
    funFact: 'Bees fly at 24 kilometers per hour. That is fast for a little bug!'
  }
];

export default function BeeLifecycle({ onNext }: BeeLifecycleProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Bee Life Story</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight italic">From dust to wings!</p>
      </div>

      <div className="relative bg-white border-4 border-black border-b-[12px] border-stone-300 rounded-[3rem] overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
             <img 
              src={stages[index].image} 
              className="w-full h-full object-cover transition-all duration-500" 
              alt={stages[index].title}
              referrerPolicy="no-referrer"
             />
              {/* Removed mix-blend-multiply tint for accuracy */}
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="flex gap-4 mb-10">
              {stages.map((_, i) => (
                <div key={i} className={`h-4 border-2 border-black rounded-full transition-all duration-500 ${i === index ? 'w-16 bg-yellow-400' : 'w-4 bg-stone-100'}`} />
              ))}
            </div>

            <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 flex items-center gap-4 italic text-stone-900 underline decoration-yellow-400 underline-offset-8">
              {stages[index].title}
            </h3>
            
            <p className="text-xl text-stone-700 font-bold leading-tight mb-10 uppercase">
              {stages[index].desc}
            </p>

            <div className="bg-rose-50 p-8 rounded-[2rem] border-4 border-black italic font-black text-rose-900 relative shadow-[6px_6px_0px_0px_rgba(251,113,133,0.3)]">
              <span className="absolute -top-4 left-6 bg-black text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest not-italic">Nerd Fact</span>
              "{stages[index].funFact}"
            </div>

             <div className="flex justify-between items-center mt-12 pt-8 border-t-4 border-stone-100">
                <button
                   onClick={() => setIndex(Math.max(0, index - 1))}
                   disabled={index === 0}
                   className="p-5 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-stone-50 disabled:opacity-20 transition-all active:shadow-none translate-x-[-2px]"
                 >
                  <ChevronLeft strokeWidth={4} />
                </button>
                
                {index === stages.length - 1 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="bg-yellow-400 border-4 border-black text-black font-black uppercase tracking-tighter px-10 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    MEET THE TEAM
                    <ChevronRight strokeWidth={4} className="w-6 h-6" />
                  </motion.button>
                ) : (
                  <button
                    onClick={() => setIndex(Math.min(stages.length - 1, index + 1))}
                    className="p-5 bg-black text-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] hover:bg-stone-800 transition-all"
                  >
                    <ChevronRight strokeWidth={4} />
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleCard({ emoji, title, desc, color }: any) {
  return (
    <div className={`${color} p-6 border-4 border-black border-b-8 border-stone-800 rounded-3xl`}>
      <div className="bg-white border-4 border-black w-12 h-12 flex items-center justify-center rounded-2xl text-2xl mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {emoji}
      </div>
      <h4 className="font-black uppercase tracking-tighter text-2xl mb-2 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{title}</h4>
      <p className="text-black font-bold text-sm leading-tight opacity-90">{desc}</p>
    </div>
  );
}
