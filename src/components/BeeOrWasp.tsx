import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check, X } from 'lucide-react';

interface BeeOrWaspProps {
  onNext: () => void;
}

const beeVsWasp = [
  { feature: 'Body', bee: 'Hairy and fuzzy', wasp: 'Smooth and shiny', beeIcon: '🧶', waspIcon: '✨' },
  { feature: 'Food', bee: 'Nectar & pollen (vegetarian)', wasp: 'Meat & sugar (predators)', beeIcon: '🌺', waspIcon: '🍖' },
  { feature: 'Stinging', bee: 'Only if threatened, dies after', wasp: 'Can sting multiple times', beeIcon: '⚠️', waspIcon: '💉' },
  { feature: 'Behavior', bee: 'Calm, mind their own business', wasp: 'Bold, flies around your food', beeIcon: '😌', waspIcon: '😠' },
  { feature: 'Nest', bee: 'Made of wax (honeycomb)', wasp: 'Made of paper-like material', beeIcon: '🍯', waspIcon: '📄' }
];

export default function BeeOrWasp({ onNext }: BeeOrWaspProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Bee or Wasp?</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Learn to tell the difference!</p>
      </div>

      <div className="text-center mb-8">
        <p className="text-lg font-bold text-stone-700 max-w-2xl mx-auto">
          Not all buzzing insects are the same! Learn to tell the difference between bees (friendly pollinators) 
          and wasps (bold predators).
        </p>
      </div>

      <div className="overflow-x-auto mb-12">
        <div className="border-4 border-black rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-4 text-left text-xl font-black uppercase">Feature</th>
                <th className="p-4 text-center text-xl font-black uppercase bg-yellow-400 text-black">
                  <img src="./images/bee-or-wasp/Bee.png" alt="Honey Bee" className="w-48 h-32 object-cover rounded-lg mb-2 mx-auto" />
                  <div>Honey Bee</div>
                </th>
                <th className="p-4 text-center text-xl font-black uppercase bg-rose-400 text-white">
                  <img src="./images/bee-or-wasp/wasp.png" alt="Wasp" className="w-48 h-32 object-cover rounded-lg mb-2 mx-auto" />
                  <div>Wasp</div>
                </th>
              </tr>
            </thead>
          <tbody>
            {beeVsWasp.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                <td className="p-4 font-black uppercase border-b-2 border-black">{row.feature}</td>
                <td className="p-4 font-bold border-b-2 border-black bg-yellow-50">
                  <span className="mr-2">{row.beeIcon}</span>{row.bee}
                </td>
                <td className="p-4 font-bold border-b-2 border-black bg-rose-50">
                  <span className="mr-2">{row.waspIcon}</span>{row.wasp}
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-yellow-50 border-4 border-black rounded-2xl p-6">
          <h4 className="text-xl font-black uppercase tracking-tighter mb-4 flex items-center gap-2">
            <Check className="w-6 h-6 text-green-600" /> Bee Safety Rules
          </h4>
          <ul className="space-y-2 font-bold text-stone-700">
            <li>✅ Bees are calm and mind their own business</li>
            <li>✅ They only sting if stepped on or squished</li>
            <li>✅ Move slowly away if one lands on you</li>
            <li>✅ Bees are important pollinators - protect them!</li>
          </ul>
        </div>

        <div className="bg-rose-50 border-4 border-black rounded-2xl p-6">
          <h4 className="text-xl font-black uppercase tracking-tighter mb-4 flex items-center gap-2">
            <X className="w-6 h-6 text-red-600" /> Wasp Safety Rules
          </h4>
          <ul className="space-y-2 font-bold text-stone-700">
            <li>⚠️ Wasps are bold and fly around your food</li>
            <li>⚠️ They can sting multiple times</li>
            <li>⚠️ Keep food and drinks covered outside</li>
            <li>⚠️ Stay calm and walk away slowly</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] transition-all"
        >
          Explore Alberta Stats!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}