import React from 'react';
import { motion } from 'motion/react';

interface AlbertaSeasonsProps {
  onNext: () => void;
}

const albertaMonths = [
  {
    month: 'January',
    temp: '-15°C / 5°F',
    description: 'Stay cozy! Bees cluster tightly, vibrating wings to stay warm',
    activity: 'Beekeepers: Check hives from outside - clear snow from entrances',
    albertaFact: 'Alberta bees can survive -30°C by eating honey and shivering',
    icon: '❄️',
    color: 'bg-blue-500'
  },
  {
    month: 'February',
    temp: '-12°C / 10°F',
    description: 'Check hive weight - if light, beekeepers feed emergency sugar cakes',
    activity: 'Beekeepers: Lift hive heft to estimate food stores',
    albertaFact: 'Strong Alberta colonies need 80-100lbs honey to survive winter',
    icon: '🍰',
    color: 'bg-blue-600'
  },
  {
    month: 'March',
    temp: '-5°C / 23°F',
    description: 'First cleansing flights! Bees take short flights when temp >10°C',
    activity: 'Look for: Yellow streaks on snow (bee waste)',
    albertaFact: 'Alberta beekeepers call this the "poop flight" - bees hold it all winter!',
    icon: '🚽',
    color: 'bg-blue-700'
  },
  {
    month: 'April',
    temp: '4°C / 39°F',
    description: 'Spring inspection - beekeepers check for disease, add pollen patties',
    activity: 'Beekeepers: Reverse boxes so brood is on bottom',
    albertaFact: 'Pollen patties help raise brood when natural pollen is scarce',
    icon: '🩺',
    color: 'bg-green-500'
  },
  {
    month: 'May',
    temp: '12°C / 54°F',
    description: 'Swarm season! Beekeepers add supers to give bees more space',
    activity: 'Watch for: Swarms hanging from tree branches',
    albertaFact: 'One strong Alberta hive can produce 2-3 lb of bees PER DAY in May!',
    icon: '🐝💨',
    color: 'bg-yellow-400'
  },
  {
    month: 'June',
    temp: '18°C / 64°F',
    description: 'Canola arrives! Bees work 20-hour days during peak bloom',
    activity: 'See: Fields turn bright yellow across central Alberta',
    albertaFact: 'Alberta grows 22% of world\'s canola - honeybees are essential pollinators!',
    icon: '🌼',
    color: 'bg-amber-400'
  },
  {
    month: 'July',
    temp: '22°C / 72°F',
    description: 'Honey harvest time! Beekeepers use bee blowers to clear supers',
    activity: 'Listen for: The roar of bee blowers in Alberta apiaries',
    albertaFact: 'A strong Alberta hive can produce 60-80lbs of honey in a good year',
    icon: '🍯',
    color: 'bg-amber-500'
  },
  {
    month: 'August',
    temp: '20°C / 68°F',
    description: 'Prepare for winter - reduce hive entrances, add mouse guards',
    activity: 'Beekeepers: Treat for varroa mites before winter bees emerge',
    albertaFact: 'Winter bees born in August/September must live 6+ months!',
    icon: '🐭🚫',
    color: 'bg-orange-500'
  },
  {
    month: 'September',
    temp: '14°C / 57°F',
    description: 'Fall feeding - 2:1 sugar syrup to build winter stores',
    activity: 'Beekeepers: Feed heavy syrup so bees can cure and cap it',
    albertaFact: 'Alberta bees prefer syrup over honey for winter storage in cold climates',
    icon: '🍯➕',
    color: 'bg-red-500'
  },
  {
    month: 'October',
    temp: '6°C / 43°F',
    description: 'Wrap hives in insulation - Alberta beekeepers use special wraps',
    activity: 'See: Black tarpaper wraps absorbing sunshine heat',
    albertaFact: 'Black wraps can raise hive temperature by 10-15°F on sunny winter days',
    icon: '🧣',
    color: 'bg-brown-500'
  },
  {
    month: 'November',
    temp: '-3°C / 27°F',
    description: 'Bees stay clustered until spring - lowest activity of year',
    activity: 'Listen for: Soft humming from clustered bees inside hive',
    albertaFact: 'The winter cluster stays 92°F at the core - even when outside is -40°F!',
    icon: '😴',
    color: 'bg-gray-600'
  },
  {
    month: 'December',
    temp: '-10°C / 14°F',
    description: 'Winter solstice - days start getting longer!',
    activity: 'Beekeepers: Repair equipment, read bee journals, plan next year',
    albertaFact: 'As days lengthen, queen starts laying slightly more eggs',
    icon: '☀️',
    color: 'bg-gray-700'
  }
];

export default function AlbertaSeasons({ onNext }: AlbertaSeasonsProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Alberta Beekeeper's Year</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Follow the seasons with Alberta bees!</p>
      </div>

      <div className="space-y-8">
        {albertaMonths.map((month, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`brutalist-card border-[8px] ${month.color} text-white`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
              <div className="text-center">
                <div className="text-8xl mb-4">{month.icon}</div>
                <h3 className="text-3xl font-black uppercase mb-2">{month.month}</h3>
                <p className="text-xl font-bold">{month.temp}</p>
              </div>
              
              <div className="space-y-4">
                <p className="font-bold text-lg mb-2">What's Happening:</p>
                <p className="text-lg">{month.description}</p>
                
                <p className="font-bold text-lg mb-2">Beekeeper's Task:</p>
                <p className="text-lg">{month.activity}</p>
                
                <p className="font-bold text-lg mb-2">Alberta Fact:</p>
                <p className="text-lg italic">{month.albertaFact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] transition-all"
        >
          Explore Alberta Flowers!
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🌸
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}