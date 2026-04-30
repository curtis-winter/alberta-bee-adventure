import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap, ChevronRight } from 'lucide-react';

interface BeeTypesProps {
  onNext: () => void;
}

const beeTypes = [
  {
    role: 'THE QUEEN',
    title: 'The Mother of the Hive',
    emoji: '👑',
    color: 'bg-amber-400',
    image: '/images/bee-types/queen.jpg',
    facts: [
      'Lays up to 2,000 eggs a day!',
      'Can live up to 5 years.',
      'She is the largest bee in the hive.',
      'Only one Queen lives in each hive.'
    ]
  },
  {
    role: 'THE WORKERS',
    title: 'The Busy Sisters',
    emoji: '💪',
    color: 'bg-rose-400',
    image: '/images/bee-types/workers.jpg',
    facts: [
      'All workers are female!',
      'They do ALL the work: cleaning, nursing, and building.',
      'They find the best Alberta flowers for nectar.',
      'A hive can have 50,000 workers!'
    ]
  },
  {
    role: 'THE DRONES',
    title: 'The Helpful Brothers',
    emoji: '😴',
    color: 'bg-sky-400',
    image: '/images/bee-types/drone.jpg',
    facts: [
      'Drones are the male bees.',
      'They have extra-large eyes to see the Queen.',
      'They do not have stingers!',
      'They eat plenty of honey to stay strong.'
    ]
  }
];

export default function BeeTypes({ onNext }: BeeTypesProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Meet the Team</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Three types of bees, one big family!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {beeTypes.map((bee) => (
          <motion.div 
            key={bee.role}
            whileHover={{ y: -10 }}
            className={`brutalist-card rounded-[2.5rem] overflow-hidden flex flex-col`}
          >
            <div className="h-64 relative group">
              <img 
                src={bee.image} 
                className="w-full h-full object-cover transition-all duration-500" 
                alt={bee.role}
              />
              {/* Removed grayscale and mix-blend-multiply for accuracy */}
              <div className="absolute top-6 left-6 bg-white border-4 border-black px-4 py-2 rounded-2xl font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {bee.emoji}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-2 italic text-black">
                {bee.role}
              </h3>
              <p className="text-lg font-bold text-stone-500 mb-6 uppercase tracking-tight">
                {bee.title}
              </p>

              <div className="space-y-4 flex-1">
                {bee.facts.map((fact, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2.5 h-2.5 bg-black rounded-full shrink-0" />
                    <p className="font-bold text-stone-800 leading-tight">{fact}</p>
                  </div>
                ))}
              </div>

              <div className={`mt-8 p-4 rounded-2xl border-4 border-black ${bee.color} text-white font-black uppercase tracking-tighter text-center italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                TEAM {bee.role.split(' ')[1]}!
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] transition-all"
        >
          Build the Hive!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
