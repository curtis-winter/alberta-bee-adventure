import React from 'react';
import { motion } from 'motion/react';

interface AlbertaSeasonsProps {
  onNext: () => void;
}

const albertaMonths = [
  {
    month: 'January',
    temp: '-15°C',
    description: 'Stay cozy! Bees cluster tightly, vibrating wings to stay warm',
    activity: 'Beekeepers: Check hives from outside - clear snow from entrances',
    albertaFact: 'Alberta bees can survive -30°C by eating honey and shivering',
    icon: '❄️',
    color: 'bg-blue-500',
    textColor: 'text-white'
  },
  {
    month: 'February',
    temp: '-12°C',
    description: 'Check hive weight - if light, beekeepers feed emergency sugar cakes',
    activity: 'Beekeepers: Lift hive heft to estimate food stores',
    albertaFact: 'Strong Alberta colonies need 30-40kg honey to survive winter',
    icon: '🍰',
    color: 'bg-blue-600',
    textColor: 'text-white'
  },
  {
    month: 'March',
    temp: '-5°C',
    description: 'First cleansing flights! Bees take short flights when temp >10°C',
    activity: 'Look for: Yellow streaks on snow (bee waste)',
    albertaFact: 'Alberta beekeepers call this the "poop flight" - bees hold it all winter!',
    icon: '🚽',
    color: 'bg-blue-700',
    textColor: 'text-white'
  },
  {
    month: 'April',
    temp: '4°C',
    description: 'Spring inspection - beekeepers check for disease, add pollen patties',
    activity: 'Beekeepers: Reverse boxes so brood is on bottom',
    albertaFact: 'Pollen patties help raise brood when natural pollen is scarce',
    icon: '🍺',
    color: 'bg-green-500',
    textColor: 'text-black'
  },
  {
    month: 'May',
    temp: '12°C',
    description: 'Swarm season! Beekeepers add supers to give bees more space',
    activity: 'Watch for: Swarms hanging from tree branches',
    albertaFact: 'One strong Alberta hive can produce 1kg of bees PER DAY in May!',
    icon: '🐝💨',
    color: 'bg-yellow-400',
    textColor: 'text-black'
  },
  {
    month: 'June',
    temp: '18°C',
    description: 'Canola arrives! Bees work 20-hour days during peak bloom',
    activity: 'See: Fields turn bright yellow across central Alberta',
    albertaFact: 'Alberta grows 22% of world\'s canola - honeybees are essential pollinators!',
    icon: '🌼',
    color: 'bg-amber-400',
    textColor: 'text-black'
  },
  {
    month: 'July',
    temp: '22°C',
    description: 'Honey harvest time! Beekeepers use bee blowers to clear supers',
    activity: 'Listen for: The roar of bee blowers in Alberta apiaries',
    albertaFact: 'A strong Alberta hive can store 50kg+ of surplus honey for harvest!',
    icon: '🍯',
    color: 'bg-amber-500',
    textColor: 'text-black'
  },
  {
    month: 'August',
    temp: '20°C',
    description: 'Prepare for winter - reduce hive entrances, add mouse guards',
    activity: 'Beekeepers: Treat for varroa mites before winter bees emerge',
    albertaFact: 'Winter bees born in August/September must live 6+ months!',
    icon: '🐭🚫',
    color: 'bg-orange-500',
    textColor: 'text-white'
  },
  {
    month: 'September',
    temp: '14°C',
    description: 'Fall feeding - 2:1 sugar syrup to build winter stores',
    activity: 'Beekeepers: Feed heavy syrup so bees can cure and cap it',
    albertaFact: 'Alberta bees prefer syrup over honey for winter storage in cold climates',
    icon: '🍯➕',
    color: 'bg-red-500',
    textColor: 'text-white'
  },
    {
      month: 'October',
      temp: '6°C',
      description: 'Wrap hives in insulation - Alberta beekeepers use special wraps',
      activity: 'Wrap: Black insulation wraps capture solar heat',
      albertaFact: 'Black wraps can raise hive temperature by 5-10°C on sunny winter days',
      icon: '🎁',
      color: 'bg-stone-600',
      textColor: 'text-white'
    },
  {
    month: 'November',
      temp: '-3°C',
      description: 'Hive checks - beekeepers ensure ventilation is correct',
      activity: 'Listen at: Hives should be quiet (cluster = good)',
      albertaFact: 'The winter cluster stays 30°C at the core - even when outside is -40°C!',
      icon: '👂',
      color: 'bg-blue-800',
      textColor: 'text-white'
  },
  {
    month: 'December',
      temp: '-10°C',
    description: 'Rest! Beekeepers repair equipment, order supplies',
    activity: 'Order: New frames, foundations, and protective gear',
    albertaFact: 'As days lengthen, queen starts laying slightly more eggs',
    icon: '📦',
    color: 'bg-stone-700',
    textColor: 'text-white'
  }
];

export default function AlbertaSeasons({ onNext }: AlbertaSeasonsProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Alberta Beekeeper's Year</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Follow the seasons with Alberta bees!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albertaMonths.map((month, index) => (
          <motion.div
            key={month.month}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`${month.color} ${month.textColor} border-4 border-black border-b-8 border-black/30 rounded-3xl p-6`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-black text-2xl tracking-tighter">{month.month}</h3>
              <span className="text-3xl">{month.icon}</span>
            </div>
            <div className="bg-white/30 backdrop-blur px-3 py-1 rounded-full inline-block mb-3 border-2 border-black/20">
              <span className="font-black text-lg">{month.temp}</span>
            </div>
            <p className="font-bold text-sm mb-2 leading-tight">{month.description}</p>
            <div className="border-t-2 border-black/20 pt-2 mt-2">
              <p className="font-bold text-xs uppercase mb-1">{month.activity}</p>
            </div>
            <div className="mt-3 bg-black/10 rounded-xl p-3">
              <p className="font-bold text-xs mb-1">Alberta Fact:</p>
              <p className="text-sm italic">{month.albertaFact}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black text-xl px-10 py-5 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(251,191,36,1)] inline-flex items-center gap-3"
        >
          Meet Alberta Beekeepers!
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}