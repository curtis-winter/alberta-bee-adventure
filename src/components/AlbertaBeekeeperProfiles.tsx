import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Quote } from 'lucide-react';

interface AlbertaBeekeeperProfilesProps {
  onNext: () => void;
}

const beekeepers = [
  {
    name: 'Sarah from Red Deer',
    years: '15 years',
    image: '/images/beekeepers/Sarah.png',
    story: 'I started beekeeping when my kids were in grade 3. Now they help me check hives every spring!',
    tip: 'In central Alberta, I always check my hives by May 1st - that\'s when winter bees start dying off and spring bees take over.',
    funFact: 'My hives produced 120lbs of honey last year - enough for 960 jars!',
    color: 'bg-amber-400',
    textColor: 'text-black'
  },
  {
    name: 'Mike from Lethbridge',
    years: '8 years',
    image: '/images/beekeepers/Mike.png',
    story: 'I keep bees in the coulee near the Oldman River. The microclimate there is perfect for early spring buildup!',
    tip: 'Southern Alberta beekeepers can start inspections 2 weeks earlier than Edmonton - we get chinooks!',
    funFact: 'My bees pollinate $50,000 worth of canola and alfalfa seed crops each year!',
    color: 'bg-rose-400',
    textColor: 'text-white'
  },
  {
    name: 'Chen from Edmonton',
    years: '3 years',
    image: '/images/beekeepers/Chen.png',
    story: 'I started with one hive on my garage roof in the city. Now I have 15 hives across 3 community gardens!',
    tip: 'Urban beekeepers need to register with the city and keep hives 3m from property lines.',
    funFact: 'City bees often produce more honey than rural ones - they have 200+ different flowers within 1km!',
    color: 'bg-sky-400',
    textColor: 'text-white'
  },
  {
    name: 'Priya from Peace River',
    years: '22 years',
    image: '/images/beekeepers/Priya.png',
    story: 'Up north, we have the shortest season but the sweetest clover honey. Our days are long in summer!',
    tip: 'Peace River beekeepers wrap hives by September 15th - winter comes fast in the north!',
    funFact: 'Peace River clover honey wins national awards for its mild, floral flavor!',
    color: 'bg-emerald-400',
    textColor: 'text-white'
  }
];

export default function AlbertaBeekeeperProfiles({ onNext }: AlbertaBeekeeperProfilesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextKeeper = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % beekeepers.length);
  };

  const prevKeeper = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + beekeepers.length) % beekeepers.length);
  };

  const keeper = beekeepers[currentIndex];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Meet Alberta Beekeepers</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Real stories from across our province!</p>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ x: direction * 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`brutalist-card rounded-[3rem] overflow-hidden ${keeper.color} ${keeper.textColor || 'text-white'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Beekeeper Image */}
          <div className="bg-white/20 p-8 flex items-center justify-center">
            <div className="w-48 h-48 bg-white/30 border-4 border-black rounded-2xl overflow-hidden">
              <img 
                src={keeper.image} 
                alt={keeper.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback emoji if image fails to load */}
              <div className="w-full h-full hidden items-center justify-center text-8xl">
                🐝
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{keeper.name}</h3>
                <p className="text-lg font-bold">{keeper.years} of experience</p>
              </div>
            </div>

            <p className="text-xl mb-6 italic">"{keeper.story}"</p>

            {/* Always show tips */}
            <div className="space-y-4">
              <div className="bg-black/20 border-2 border-black/30 p-4 rounded-2xl">
                <p className="font-black uppercase text-sm tracking-widest mb-2">💡 Beekeeper's Tip:</p>
                <p className="font-bold">{keeper.tip}</p>
              </div>

              <div className="bg-white/30 border-2 border-black/30 p-4 rounded-2xl">
                <p className="font-black uppercase text-sm tracking-widest mb-2">🎉 Fun Fact:</p>
                <p className="font-bold">{keeper.funFact}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevKeeper}
          className="bg-white border-4 border-black font-black uppercase px-8 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          ← Previous
        </button>
        <div className="flex items-center gap-2">
          {beekeepers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-3 h-3 rounded-full border-2 border-black transition-all ${idx === currentIndex ? 'bg-black' : 'bg-white'}`}
            />
          ))}
        </div>
        <button
          onClick={nextKeeper}
          className="bg-white border-4 border-black font-black uppercase px-8 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          Next →
        </button>
      </div>

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] transition-all"
        >
          Face Winter Challenges!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
