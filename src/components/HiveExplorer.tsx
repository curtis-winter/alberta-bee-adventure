import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, ChevronRight, X, Layers, Box, Droplets, Thermometer, Heart, Hammer } from 'lucide-react';

interface HiveExplorerProps {
  onNext: () => void;
}

const hiveParts = [
  {
    id: 'lid',
    name: 'OUTER COVER',
    desc: 'The roof! Protects the bees from rain, snow, and the hot Alberta sun.',
    icon: Box,
    color: 'bg-stone-500',
    correctSlot: 0
  },
  {
    id: 'supers',
    name: 'HONEY SUPERS',
    desc: 'The pantry! This is where bees store extra delicious clover honey.',
    icon: Layers,
    color: 'bg-amber-400',
    correctSlot: 1
  },
  {
    id: 'brood',
    name: 'BROOD BOX',
    desc: 'The nursery! The Queen lays her eggs here so babies can grow safe.',
    icon: Heart,
    color: 'bg-rose-400',
    correctSlot: 2
  },
  {
    id: 'entrance',
    name: 'BOTTOM BOARD',
    desc: 'The base! It has the landing board for foraging bees to arrive.',
    icon: ChevronRight,
    color: 'bg-emerald-400',
    correctSlot: 3
  }
];

export default function HiveExplorer({ onNext }: HiveExplorerProps) {
  const [placedParts, setPlacedParts] = useState<(string | null)[]>([null, null, null, null]);
  const [draggedPart, setDraggedPart] = useState<string | null>(null);
  const [showHint, setShowHint] = useState<string | null>(null);

  const handleDrop = (slotIndex: number) => {
    if (!draggedPart) return;
    
    const part = hiveParts.find(p => p.id === draggedPart);
    if (!part) return;

    if (part.correctSlot === slotIndex) {
      const newPlaced = [...placedParts];
      newPlaced[slotIndex] = draggedPart;
      setPlacedParts(newPlaced);
      setShowHint(null);
    } else {
      // Wrong slot
      console.log('Wrong slot!');
    }
    setDraggedPart(null);
  };

  const isComplete = placedParts.every(p => p !== null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4 animate-bounce-subtle">Hive Builder</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Drag the parts to build your Alberta hive!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
        
        {/* Left: Parts Palette */}
        <div className="bg-white border-4 border-black border-dashed rounded-[3rem] p-10 min-h-[500px] flex flex-col items-center gap-6 shadow-inner">
          <h3 className="font-black uppercase italic text-2xl text-stone-400 mb-4 flex items-center gap-2">
            <Hammer className="w-6 h-6" /> Part Bin
          </h3>
          <div className="flex flex-wrap lg:flex-col items-center gap-4 w-full">
            {hiveParts.map((part) => {
              const isPlaced = placedParts.includes(part.id);
              return (
                <motion.div
                  key={part.id}
                  drag
                  dragSnapToOrigin
                  onDragStart={() => setDraggedPart(part.id)}
                  onDragEnd={() => setDraggedPart(null)}
                  whileHover={!isPlaced ? { scale: 1.05, rotate: -2 } : {}}
                  whileDrag={{ scale: 1.1, zIndex: 50 }}
                  className={`w-full max-w-sm h-16 md:h-20 border-4 border-black flex items-center justify-center font-black text-xl uppercase tracking-tighter transition-all cursor-grab active:cursor-grabbing shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                    isPlaced ? 'opacity-20 pointer-events-none scale-90' : `${part.color} text-white`
                  }`}
                  onClick={() => setShowHint(part.id)}
                >
                  <part.icon className="absolute left-6 w-8 h-8 opacity-50" />
                  {part.name}
                </motion.div>
              );
            })}
          </div>
          
          <AnimatePresence>
            {showHint && !placedParts.includes(showHint) && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8 p-6 bg-amber-50 border-4 border-black rounded-3xl italic font-bold text-center text-amber-900"
              >
                "{hiveParts.find(p => p.id === showHint)?.desc}"
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Build Slots */}
        <div className="flex flex-col items-center gap-2">
          {placedParts.map((placedId, idx) => {
            const part = hiveParts.find(p => p.id === placedId);
            const isTargeted = draggedPart && hiveParts.find(p => p.id === draggedPart)?.correctSlot === idx;
            
            return (
              <div
                key={idx}
                onMouseUp={() => handleDrop(idx)}
                className={`w-full max-w-md h-24 border-4 transition-all flex flex-col items-center justify-center relative ${
                  placedId 
                    ? `${part?.color} border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white text-3xl font-black uppercase tracking-tighter` 
                    : isTargeted 
                      ? 'bg-yellow-100 border-dashed border-black border-4 scale-105' 
                      : 'bg-stone-100 border-dashed border-stone-300'
                }`}
              >
                {placedId ? (
                   <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-4"
                   >
                     {part?.name}
                     <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ repeat: Infinity }}
                     >
                       ✨
                     </motion.div>
                   </motion.div>
                ) : (
                  <span className="text-stone-300 font-black uppercase text-sm tracking-widest">
                    SLOT {idx + 1}
                  </span>
                )}
              </div>
            );
          })}
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

