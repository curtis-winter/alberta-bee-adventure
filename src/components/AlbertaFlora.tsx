import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';

interface AlbertaFloraProps {
  onNext: () => void;
}

const albertaPlants = [
  {
    name: 'CANOLA',
    color: 'bg-yellow-400',
    textColor: 'text-stone-900',
    bloomPeriod: 'June-July',
    honeyColor: 'Light amber',
    albertaFact: 'Primary honey crop - worth $1.2B in pollination services',
    tip: 'Bright yellow fields across central Alberta!',
    emoji: '🌼'
  },
  {
    name: 'ALFALFA',
    color: 'bg-purple-400',
    textColor: 'text-white',
    bloomPeriod: 'June-August',
    honeyColor: 'White to extra light amber',
    albertaFact: 'Critical for seed production - purple fields everywhere!',
    tip: 'Purple flowers that smell amazing to bees',
    emoji: '🌸'
  },
  {
    name: 'SWEET CLOVER',
    color: 'bg-pink-400',
    textColor: 'text-white',
    bloomPeriod: 'May-September',
    honeyColor: 'White (prized by chefs!)',
    albertaFact: 'Major honey source - white/pink flowers along roadsides',
    tip: 'Bees LOVE this - produces the famous Alberta white honey',
    emoji: '🌺'
  },
  {
    name: 'WILD ROSE',
    color: 'bg-rose-400',
    textColor: 'text-white',
    bloomPeriod: 'June-July',
    honeyColor: 'Light amber with floral notes',
    albertaFact: 'Alberta\'s provincial flower! Pink wild roses everywhere',
    tip: 'Our provincial flower - bees love the pink blossoms',
    emoji: '🌹'
  },
  {
    name: 'FIREWEED',
    color: 'bg-pink-500',
    textColor: 'text-white',
    bloomPeriod: 'July-August',
    honeyColor: 'Amber with distinctive flavor',
    albertaFact: 'First to grow after forest fires - pink towers of flowers',
    tip: 'Tall pink flower spikes that grow after fires',
    emoji: '🌿'
  },
  {
    name: 'GOLDENROD',
    color: 'bg-yellow-500',
    textColor: 'text-stone-900',
    bloomPeriod: 'August-September',
    honeyColor: 'Dark amber, strong flavor',
    albertaFact: 'Late summer nectar source - golden fields in August',
    tip: 'Late summer super-food for bees preparing for winter',
    emoji: '🌾'
  },
  {
    name: 'DANDELION',
    color: 'bg-yellow-300',
    textColor: 'text-stone-900',
    bloomPeriod: 'April-May',
    honeyColor: 'Extra light amber',
    albertaFact: 'Critical early spring food - first feast after long winter!',
    tip: 'The FIRST flowers bees visit in spring - bright yellow lawns',
    emoji: '🌼'
  },
  {
    name: 'WILLOW',
    color: 'bg-green-400',
    textColor: 'text-white',
    bloomPeriod: 'April-May',
    honeyColor: 'Light with minty notes',
    albertaFact: 'Essential early pollen source - fuzzy catkins along rivers',
    tip: 'Fuzzy catkins that bloom before leaves appear',
    emoji: '🌳'
  }
];

export default function AlbertaFlora({ onNext }: AlbertaFloraProps) {
  const [selectedPlant, setSelectedPlant] = useState<string | null>(null);
  const [shuffledPlants, setShuffledPlants] = useState(() => {
    const arr = [...albertaPlants];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  const selectedPlantData = albertaPlants.find(p => p.name === selectedPlant);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Alberta Bee Plants</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Meet the flowers that feed Alberta bees!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {shuffledPlants.map((plant, index) => {
          const isSelected = selectedPlant === plant.name;
          return (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`brutalist-card rounded-[2.5rem] overflow-hidden cursor-pointer ${isSelected ? 'ring-4 ring-yellow-400' : ''}`}
              onClick={() => setSelectedPlant(isSelected ? null : plant.name)}
            >
              <div className={`${plant.color} p-8 text-center ${plant.textColor || 'text-white'}`}>
                <div className="text-6xl mb-4">{plant.emoji}</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">{plant.name}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Plant Details Modal */}
      <AnimatePresence>
        {selectedPlantData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPlant(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white border-4 border-black rounded-[3rem] p-8 max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black uppercase tracking-tighter">{selectedPlantData.name}</h3>
                <button
                  onClick={() => setSelectedPlant(null)}
                  className="text-2xl font-black hover:text-stone-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className={`${selectedPlantData.color} p-8 rounded-2xl text-center mb-6`}>
                <div className="text-8xl mb-4">{selectedPlantData.emoji}</div>
                <div className="space-y-3 text-white">
                  <p className="font-black uppercase text-sm tracking-widest">Bloom Period: <span className="font-bold normal-case">{selectedPlantData.bloomPeriod}</span></p>
                  <p className="font-black uppercase text-sm tracking-widest">Honey Color: <span className="font-bold normal-case">{selectedPlantData.honeyColor}</span></p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-amber-50 border-4 border-black p-4 rounded-2xl">
                  <p className="font-bold text-amber-900 italic">"{selectedPlantData.albertaFact}"</p>
                </div>
                <div className="bg-green-50 border-4 border-black p-4 rounded-2xl">
                  <p className="font-bold text-green-900">💡 {selectedPlantData.tip}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-12 text-center">
        <div className="bg-white border-4 border-black p-6 rounded-[3rem] inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] transition-all"
        >
          Meet Alberta Beekeepers!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}