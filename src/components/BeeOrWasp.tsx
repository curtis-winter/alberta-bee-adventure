import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check, X } from 'lucide-react';

interface BeeOrWaspProps {
  onNext: () => void;
}

const waggleDanceSteps = [
  { step: 1, title: 'Find Flowers', desc: 'A worker bee finds a great patch of flowers with lots of nectar', icon: '🌸' },
  { step: 2, title: 'Return Home', desc: 'She flies back to the hive to tell her sisters about the discovery', icon: '🏠' },
  { step: 3, title: 'Do The Dance', desc: 'She wiggles her body in a figure-8 pattern - this is the Waggle Dance!', icon: '💃' },
  { step: 4, title: 'Share Direction', desc: 'The angle of her dance shows the direction relative to the sun', icon: '☀️' },
  { step: 5, title: 'Share Distance', desc: 'How long she waggles shows how far away the flowers are', icon: '📏' },
  { step: 6, title: 'Teamwork!', desc: 'Other bees watch the dance and fly to find the exact same flowers!', icon: '🐝🐝🐝' }
];

const beeVsWasp = [
  { feature: 'Body', bee: 'Hairy and fuzzy', wasp: 'Smooth and shiny', beeIcon: '🧶', waspIcon: '✨' },
  { feature: 'Food', bee: 'Nectar & pollen (vegetarian)', wasp: 'Meat & sugar (predators)', beeIcon: '🌺', waspIcon: '🍖' },
  { feature: 'Stinging', bee: 'Only if threatened, dies after', wasp: 'Can sting multiple times', beeIcon: '⚠️', waspIcon: '💉' },
  { feature: 'Behavior', bee: 'Calm, mind their own business', wasp: 'Bold, flies around your food', beeIcon: '😌', waspIcon: '😠' },
  { feature: 'Nest', bee: 'Made of wax (honeycomb)', wasp: 'Made of paper-like material', beeIcon: '🍯', waspIcon: '📄' }
];

export default function BeeOrWasp({ onNext }: BeeOrWaspProps) {
  const [activeTab, setActiveTab] = useState<'waggle' | 'compare'>('waggle');

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Bee Secrets & Safety</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Amazing bee behaviors and how to tell bees from wasps!</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab('waggle')}
          className={`px-8 py-4 rounded-2xl font-black uppercase tracking-tight border-4 transition-all ${
            activeTab === 'waggle' 
              ? 'bg-yellow-400 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
              : 'bg-white border-black hover:bg-stone-50'
          }`}
        >
          💃 The Waggle Dance
        </button>
        <button
          onClick={() => setActiveTab('compare')}
          className={`px-8 py-4 rounded-2xl font-black uppercase tracking-tight border-4 transition-all ${
            activeTab === 'compare' 
              ? 'bg-rose-400 text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
              : 'bg-white border-black hover:bg-stone-50'
          }`}
        >
          🆚 Bee vs Wasp
        </button>
      </div>

      {activeTab === 'waggle' && (
        <motion.div
          key="waggle"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">How Bees Talk With Dance!</h3>
            <p className="text-lg font-bold text-stone-700 max-w-2xl mx-auto">
              Honey bees have a special way to tell their sisters where to find the best flowers. 
              They do a special dance called the <span className="bg-yellow-400 px-2 py-1 rounded">Waggle Dance</span>!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waggleDanceSteps.map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.step * 0.1 }}
                className="brutalist-card p-6 bg-white"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-5xl font-black text-yellow-400 mb-2">Step {item.step}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h4>
                <p className="font-bold text-stone-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-sky-100 border-4 border-black rounded-3xl p-8 mt-12">
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">🎓 Science Connection!</h4>
            <p className="text-lg font-bold text-stone-700">
              The Waggle Dance is an example of <span className="bg-white px-2 py-1 rounded">animal communication</span> - 
              one of the most complex forms of communication in the animal kingdom! 
              Bees use the sun's position as a compass, and they can even adjust their dance if the sun moves!
            </p>
          </div>
        </motion.div>
      )}

      {activeTab === 'compare' && (
        <motion.div
          key="compare"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Is It a Bee or a Wasp?</h3>
            <p className="text-lg font-bold text-stone-700 max-w-2xl mx-auto">
              Not all buzzing insects are the same! Learn to tell the difference between bees (friendly pollinators) 
              and wasps (bold predators).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black rounded-2xl overflow-hidden">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left text-xl font-black uppercase">Feature</th>
                  <th className="p-4 text-left text-xl font-black uppercase bg-yellow-400 text-black">🐝 Honey Bee</th>
                  <th className="p-4 text-left text-xl font-black uppercase bg-rose-400 text-white">🪐 Wasp</th>
                </tr>
              </thead>
              <tbody>
                {beeVsWasp.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    <td className="p-4 font-black uppercase border-b-4 border-black">{row.feature}</td>
                    <td className="p-4 font-bold border-b-4 border-black bg-yellow-50">
                      <span className="mr-2">{row.beeIcon}</span>{row.bee}
                    </td>
                    <td className="p-4 font-bold border-b-4 border-black bg-rose-50">
                      <span className="mr-2">{row.waspIcon}</span>{row.wasp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
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
        </motion.div>
      )}

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] transition-all"
        >
          Learn About Alberta Flowers!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}