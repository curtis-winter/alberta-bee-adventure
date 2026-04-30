import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Bug, ThermometerSnowflake, Wind, Droplets } from 'lucide-react';

interface AlbertaChallengesSolutionsProps {
  onNext: () => void;
}

const challenges = [
  {
    challenge: 'Alberta Long Winters Mean Bees Eat More Honey',
    solution: 'Beekeepers leave 35-45 kg of honey per hive (vs 20-27 kg in warmer climates)',
    icon: '🍯',
    color: 'bg-amber-400',
    why: 'Bees must stay warm for 5-6 months with no fresh nectar',
    albertaFact: 'That like you eating 200 peanut butter sandwiches every day for half the year!'
  },
  {
    challenge: 'Varroa Mites Reproduce Faster in Alberta Long Brood Cycles',
    solution: 'Alberta beekeepers use integrated pest management - screened bottom boards, powdered sugar dusting, and timed treatments',
    icon: '🐛',
    color: 'bg-red-400',
    why: 'Long summers mean more mite generations before winter cluster forms',
    albertaFact: 'Alberta has special "mite washes" - beekeepers count mites in alcohol samples!'
  },
  {
    challenge: 'Short Summers Mean Limited Time to Build Honey Stores',
    solution: 'Alberta beekeepers add supers early and use strong queen genetics for maximum brood production',
    icon: '⏰',
    color: 'bg-blue-400',
    why: 'Only 12-14 weeks from dandelion bloom to first frost',
    albertaFact: 'Alberta beekeepers order "Canadian Winter Bees" - workers that live 6+ months!'
  },
  {
    challenge: 'Chinooks Can Trick Bees Into Flying in Winter',
    solution: 'Experienced beekeepers watch weather closely - may need to re-close hives after warm spells',
    icon: '🌪️',
    color: 'bg-purple-400',
    why: 'Southern Alberta gets warm winds that can melt snow in hours',
    albertaFact: 'A chinook once raised Calgary temperature from -19°C to +15°C in 1 hour!'
  },
  {
    challenge: 'Dry Climate Means Less Natural Nectar Flow',
    solution: 'Alberta beekeepers may supplement with 1:1 syrup during droughts, plant irrigated alfalfa fields nearby',
    icon: '🏜️',
    color: 'bg-orange-400',
    why: 'Southern Alberta gets only 300-400mm rain/year - bees need extra help',
    albertaFact: 'Irrigated alfalfa fields in Alberta produce 90+ kg honey per hive!'
  }
];

export default function AlbertaChallengesSolutions({ onNext }: AlbertaChallengesSolutionsProps) {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const nextChallenge = () => {
    setShowSolution(false);
    setCurrentChallenge((prev) => (prev + 1) % challenges.length);
  };

  const challenge = challenges[currentChallenge];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter mb-4">Alberta Bee Challenges</h2>
        <p className="text-xl text-sky-900 font-bold bg-sky-200 px-6 py-2 rounded-full inline-block uppercase tracking-tight">How beekeepers solve problems!</p>
      </div>

      <motion.div
        key={currentChallenge}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`brutalist-card rounded-[3rem] overflow-hidden ${challenge.color} text-white`}
      >
        <div className="p-8 lg:p-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">{challenge.icon}</div>
            <div className="flex-1">
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4">Challenge #{currentChallenge + 1}</h3>
              <p className="text-xl lg:text-2xl font-bold mb-4">{challenge.challenge}</p>
              <div className="bg-black/20 border-2 border-black/30 p-4 rounded-2xl">
                <p className="font-bold text-sm uppercase tracking-widest mb-2">Why This Happens:</p>
                <p className="text-lg italic">"{challenge.why}"</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="w-full bg-white text-black font-black uppercase tracking-tighter px-8 py-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all mb-4"
          >
            {showSolution ? 'Hide Solution' : 'Show Solution! 💡'}
          </button>

          <AnimatePresence>
            {showSolution && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 overflow-hidden"
              >
                <div className="bg-white/90 border-4 border-black p-6 rounded-2xl text-black">
                  <p className="font-black uppercase text-sm tracking-widest mb-2">✅ Solution:</p>
                  <p className="text-lg font-bold">{challenge.solution}</p>
                </div>

                <div className="bg-yellow-100 border-4 border-black p-6 rounded-2xl">
                  <p className="font-black uppercase text-sm tracking-widest mb-2">🎉 Alberta Fun Fact:</p>
                  <p className="text-lg font-bold italic">"{challenge.albertaFact}"</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Progress dots */}
      <div className="flex justify-center gap-3 mt-8">
        {challenges.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentChallenge(idx);
              setShowSolution(false);
            }}
            className={`w-4 h-4 border-4 border-black transition-all ${idx === currentChallenge ? 'bg-black' : 'bg-white'}`}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => {
            setShowSolution(false);
            setCurrentChallenge((prev) => (prev - 1 + challenges.length) % challenges.length);
          }}
          className="bg-white border-4 border-black font-black uppercase px-8 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          ← Previous
        </button>

        {currentChallenge < challenges.length - 1 ? (
          <button
            onClick={nextChallenge}
            className="bg-black text-white font-black uppercase px-8 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            Next Challenge →
          </button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="bg-black text-white font-black uppercase tracking-tighter px-12 py-5 rounded-2xl inline-flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(251,191,36,1)] transition-all"
          >
            Winter Prep Time!
            <ChevronRight strokeWidth={4} className="w-6 h-6" />
          </motion.button>
        )}
      </div>
    </div>
  );
}