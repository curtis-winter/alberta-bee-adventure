import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface BeeTypesProps {
  onNext: () => void;
}

const beeTypes = [
  {
    role: 'THE QUEEN',
    title: 'The Mother of the Hive',
    emoji: '👑',
    color: 'bg-amber-400',
    image: './images/bee-types/queen.jpg',
    facts: [
      'Lays up to 2,000 eggs a day!',
      'Can live up to 5 years.',
      'She is the largest bee in the hive.',
      'Only one Queen lives in each hive.'
    ],
    albertaFact: 'Queen bees lay up to 2,000 eggs per day - more than their own body weight!'
  },
  {
    role: 'THE WORKERS',
    title: 'The Busy Sisters',
    emoji: '💪',
    color: 'bg-rose-400',
    image: './images/bee-types/workers.jpg',
    facts: [
      'All workers are female!',
      'They do ALL the work: cleaning, nursing, and building.',
      'They find the best Alberta flowers for nectar.',
      'A hive can have 50,000 workers!',
      'They have special "pollen baskets" on their back legs!',
      'They do the famous Waggle Dance to communicate!'
    ],
    albertaFact: 'Worker bees change jobs as they age - from nurse to builder to forager in just 6 weeks!'
  },
  {
    role: 'THE DRONES',
    title: 'The Winged Bachelors',
    emoji: '😴',
    color: 'bg-sky-400',
    image: './images/bee-types/drone.jpg',
    facts: [
      'Drones are the male bees.',
      'They have extra-large eyes to see the Queen.',
      'They do not have stingers!',
      'They eat plenty of honey to stay strong.'
    ],
    albertaFact: 'Alberta drones are larger to generate more heat - crucial for keeping hives warm during -30C winters!'
  }
];

const livestockNote = {
  title: '🐝 Honey Bees are NOT Native!',
  content: 'Honey bees are like "tiny flying cows" - they are livestock brought to Alberta by humans! They are not native to North America. Alberta has over 300 species of native bees (like Bumble Bees and Mason Bees) that have lived here for thousands of years.',
  icon: '🌾'
};

export default function BeeTypes({ onNext }: BeeTypesProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Meet the Team</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">Three types of bees, one big family!</p>
      </div>

      {/* Livestock vs Native Callout */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-50 border-4 border-black rounded-3xl p-8 mb-12"
      >
        <div className="flex items-start gap-4">
          <div className="text-5xl">{livestockNote.icon}</div>
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{livestockNote.title}</h3>
            <p className="text-lg font-bold text-stone-700">{livestockNote.content}</p>
          </div>
        </div>
      </motion.div>

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
          Explore Alberta Stats!
          <ChevronRight strokeWidth={4} className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}