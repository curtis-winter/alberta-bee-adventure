import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface WaggleDanceProps {
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

export default function WaggleDance({ onNext }: WaggleDanceProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">The Waggle Dance</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">How bees talk with dance!</p>
      </div>

      <div className="text-center mb-12">
        <p className="text-lg font-bold text-stone-700 max-w-2xl mx-auto">
          Honey bees have a special way to tell their sisters where to find the best flowers. 
          They do a special dance called the <span className="bg-yellow-400 px-2 py-1 rounded">Waggle Dance</span>!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

      <div className="mb-12">
        <div className="relative w-full max-w-2xl mx-auto border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/12Q8FfyLLso?start=41&end=142&rel=0"
            title="Waggle Dance Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="text-center text-sm font-bold text-stone-600 mt-3">Watch the waggle dance in action (41s - 2:22)</p>
      </div>

      <div className="bg-sky-100 border-4 border-black rounded-3xl p-8 mb-12">
        <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">🎓 Science Connection!</h4>
        <p className="text-lg font-bold text-stone-700">
          The Waggle Dance is an example of <span className="bg-white px-2 py-1 rounded">animal communication</span> - 
          one of the most complex forms of communication in the animal kingdom! 
          Bees use the sun's position as a compass, and they can even adjust their dance if the sun moves!
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] transition-all"
        >
          Bee Or Wasp?
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}