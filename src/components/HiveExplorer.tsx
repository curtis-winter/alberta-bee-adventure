import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Hammer } from 'lucide-react';

const shuffleArray = <T,>(arr: T[]): T[] => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

interface HiveExplorerProps {
  onNext: () => void;
}

const hiveParts = [
  {
    id: 'lid',
    name: 'OUTER COVER',
    desc: 'The roof! Protects the bees from Alberta rain, snow, and hot sun.',
    color: 'bg-stone-600',
    correctSlot: 0,
    image: '/images/hive-parts/outer-cover.jpg'
  },
  {
    id: 'inner-cover',
    name: 'INNER COVER',
    desc: 'Provides insulation and gives bees space to move above the honey.',
    color: 'bg-stone-400',
    correctSlot: 1,
    image: '/images/hive-parts/inner-cover.jpg'
  },
  {
    id: 'supers',
    name: 'HONEY SUPERS',
    desc: 'The pantry! Bees store sweet Alberta clover honey here.',
    color: 'bg-amber-400',
    correctSlot: 2,
    image: '/images/hive-parts/honey-super.jpg'
  },
  {
    id: 'brood',
    name: 'BROOD CHAMBER',
    desc: 'The nursery! The Queen lays eggs here and worker bees care for babies.',
    color: 'bg-rose-400',
    correctSlot: 3,
    image: '/images/hive-parts/brood-chamber.jpg'
  },
  {
    id: 'entrance',
    name: 'BOTTOM BOARD',
    desc: 'The foundation! Has an entrance for bees to fly in and out.',
    color: 'bg-emerald-600',
    correctSlot: 4,
    image: '/images/hive-parts/bottom-board.jpg'
  }
];

export default function HiveExplorer({ onNext }: HiveExplorerProps) {
  const [placedParts, setPlacedParts] = useState<(string | null)[]>([null, null, null, null, null]);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [shuffledParts, setShuffledParts] = useState(() => shuffleArray([...hiveParts]));

  const handleReset = () => {
    setPlacedParts([null, null, null, null, null]);
    setSelectedPartId(null);
    setShuffledParts(shuffleArray([...hiveParts]));
  };

  const handleSlotClick = (slotIndex: number) => {
    if (!selectedPartId) return;
    
    const part = hiveParts.find(p => p.id === selectedPartId);
    if (!part) return;

    if (part.correctSlot === slotIndex) {
      const newPlaced = [...placedParts];
      newPlaced[slotIndex] = selectedPartId;
      setPlacedParts(newPlaced);
      setSelectedPartId(null);
    } else {
      // Wrong slot - deselect
      setSelectedPartId(null);
    }
  };

  const isComplete = placedParts.every(p => p !== null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Build a Hive</h2>
          <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Click a part, then click a slot to build!</p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-start">
        
        {/* Left: Build Slots - Visual Hive */}
        <div className="bg-amber-50 border-4 border-black border-dashed rounded-[3rem] p-8 flex flex-col items-center shadow-inner min-h-[600px]">
          <div className="w-full max-w-sm">
            {placedParts.map((placedId, idx) => {
              const part = hiveParts.find(p => p.id === placedId);
               
              return (
                <div
                  key={idx}
                  onClick={() => handleSlotClick(idx)}
                  className={`w-full border-4 transition-all flex items-center justify-center relative h-20 cursor-pointer ${
                    placedId 
                      ? `${part?.color} border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white font-black uppercase tracking-tighter text-lg` 
                      : selectedPartId && hiveParts.find(p => p.id === selectedPartId)?.correctSlot === idx
                        ? 'bg-yellow-100 border-dashed border-black scale-105' 
                        : 'bg-white border-dashed border-stone-300'
                  }`}
                >
                  {placedId ? (
                    <motion.div 
                      initial={{ scale: 1.2, opacity: 0 }} 
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      {part?.name}
                    </motion.div>
                  ) : (
                    <span className="text-stone-400 font-black uppercase text-xs tracking-widest">
                      slot {idx + 1}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-sm font-bold text-stone-500 mt-4 uppercase tracking-tight">↑ Your Hive ↑</p>
        </div>

        {/* Right: Parts Palette */}
        <div className="bg-white border-4 border-black border-dashed rounded-[3rem] p-8 flex flex-col items-center gap-4 min-h-[600px]">
          <h3 className="font-black uppercase italic text-2xl text-stone-400 mb-4 flex items-center gap-2">
            <Hammer className="w-6 h-6" /> Part Bin
          </h3>
          <div className="flex flex-col gap-3 w-full flex-1">
            {shuffledParts.map((part) => {
              const isPlaced = placedParts.includes(part.id);
              const isSelected = selectedPartId === part.id;
              return (
                <motion.div
                  key={part.id}
                  whileHover={!isPlaced ? { scale: 1.05 } : {}}
                  className={`w-full border-4 border-black flex items-center justify-center font-black text-lg uppercase tracking-tighter transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    isPlaced ? 'opacity-20 pointer-events-none' : isSelected ? 'ring-4 ring-yellow-400 ' + part.color + ' text-white' : `${part.color} text-white`
                  } h-20`}
                  onClick={() => {
                    if (isPlaced) return;
                    setSelectedPartId(part.id);
                  }}
                >
                  {part.name}
                </motion.div>
              );
            })}
          </div>
          
          {/* Selected Part Details */}
          {selectedPartId && (() => {
            const part = hiveParts.find(p => p.id === selectedPartId);
            return part ? (
              <div className="w-full mt-4 p-4 bg-amber-50 border-4 border-black rounded-2xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black uppercase text-lg">{part.name}</h4>
                  <button
                    onClick={() => setSelectedPartId(null)}
                    className="text-xl font-black hover:text-stone-500"
                  >
                    ×
                  </button>
                </div>
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-32 object-cover border-2 border-black rounded-xl mb-2"
                />
                <p className="font-bold text-stone-800 text-sm italic">"{part.desc}"</p>
              </div>
            ) : null;
          })()}
          
          <button
            onClick={handleReset}
            className="w-full bg-black text-white font-black uppercase tracking-tighter py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all mt-4"
          >
            Reset Hive
          </button>
        </div>
         </div>
          
          {isComplete && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-emerald-50 border-4 border-black p-8 rounded-[3rem] mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
               <p className="text-4xl font-black uppercase text-emerald-600 mb-2 italic">Master Builder!</p>
               <p className="text-xl font-bold text-stone-600 uppercase">You built a perfect Langstroth hive!</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] transition-all"
            >
              Explore Alberta Map!
              <ChevronRight strokeWidth={4} className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}

    </div>
  );
}

