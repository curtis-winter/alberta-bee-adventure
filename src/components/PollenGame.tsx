import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flower2, Bug, Trophy, RotateCcw, ChevronRight } from 'lucide-react';

interface PollenGameProps {
  onNext: () => void;
}

const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;

export default function PollenGame({ onNext }: PollenGameProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [flowers, setFlowers] = useState<{ id: number; x: number; y: number }[]>([]);
  const [beePos, setBeePos] = useState({ x: 50, y: 50 });
  const gameRef = useRef<HTMLDivElement>(null);

  // Start game
  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(10);
    setFlowers(generateFlowers());
  };

  const generateFlowers = () => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: Math.random() + i,
      x: Math.random() * (GAME_WIDTH - 60) + 30,
      y: Math.random() * (GAME_HEIGHT - 60) + 30
    }));
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPlaying || !gameRef.current) return;
    const rect = gameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Constrain to bounds
    const newX = Math.max(20, Math.min(x, GAME_WIDTH - 20));
    const newY = Math.max(20, Math.min(y, GAME_HEIGHT - 20));
    
    setBeePos({ x: newX, y: newY });

    // Check collisions
    const hitIndex = flowers.findIndex(f => {
      const dist = Math.sqrt((f.x - newX) ** 2 + (f.y - newY) ** 2);
      return dist < 35;
    });

    if (hitIndex !== -1) {
      setScore(s => s + 1);
      const newFlowers = [...flowers];
      newFlowers[hitIndex] = {
        id: Math.random(),
        x: Math.random() * (GAME_WIDTH - 60) + 30,
        y: Math.random() * (GAME_HEIGHT - 60) + 30
      };
      setFlowers(newFlowers);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-black text-black uppercase tracking-tighter mb-4">Pollen Dash</h2>
        <p className="text-sky-900 font-bold bg-sky-200 px-4 py-1 rounded-full inline-block">Use your mouse to guide the bee!</p>
      </div>

      <div className="relative w-full max-w-[600px] aspect-[3/2] bg-emerald-50 rounded-[2.5rem] border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden cursor-none"
           ref={gameRef}
           onMouseMove={handleMouseMove}>
           
        {/* Game Stats Overlay */}
        <div className="absolute top-6 left-6 z-20 flex gap-4">
          <div className="bg-white border-4 border-black px-4 py-2 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase flex items-center gap-2">
            <Trophy className="text-yellow-500 w-5 h-5" />
            <span>Score: {score}</span>
          </div>
          <div className="bg-white border-4 border-black px-4 py-2 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black uppercase flex items-center gap-2">
            <RotateCcw className="text-blue-500 w-5 h-5" />
            <span>Time: {timeLeft}s</span>
          </div>
        </div>

        {/* Start / Game Over Screen */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 bg-stone-900/60 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="bg-white border-4 border-black border-b-[12px] border-stone-200 p-10 rounded-[3rem] shadow-2xl max-w-sm w-full">
                {timeLeft === 0 ? (
                  <>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-2 italic text-emerald-500">BOOM!</h3>
                    <p className="text-stone-600 font-bold mb-8">You collected {score} loads of sweet pollen!</p>
                    <div className="flex flex-col gap-4">
                      <button onClick={startGame} className="bg-white border-4 border-black text-black font-black py-4 px-8 rounded-2xl flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none translate-x-[-2px] uppercase tracking-tight">
                        <RotateCcw strokeWidth={3} className="w-5 h-5" /> Re-Dash
                      </button>
                      <button onClick={onNext} className="bg-yellow-400 border-4 border-black text-black font-black py-4 px-8 rounded-2xl flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none translate-x-[-2px] uppercase tracking-tight">
                        Next Mission <ChevronRight strokeWidth={4} className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-24 h-24 bg-yellow-100 border-4 border-black rounded-3xl flex items-center justify-center mx-auto mb-6 text-5xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">🌻</div>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">You Ready?</h3>
                    <p className="text-stone-600 font-bold mb-8">Move the bee to touch as many flowers as you can!</p>
                    <button onClick={startGame} className="w-full bg-yellow-400 border-4 border-black hover:bg-yellow-500 text-stone-900 font-black py-5 px-8 rounded-2xl text-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-tight active:shadow-none">
                      Let's Fly!
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Game Elements */}
        {isPlaying && (
          <>
            {flowers.map(f => (
              <motion.div
                key={f.id}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                style={{ left: f.x, top: f.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-4xl"
              >
                <div className="relative group">
                   <Flower2 className="w-16 h-16 text-rose-500 fill-rose-100 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" strokeWidth={3} />
                </div>
              </motion.div>
            ))}

            <motion.div
              animate={{ x: beePos.x, y: beePos.y }}
              transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
            >
              <div className="bg-yellow-400 p-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
                <Bug className="w-10 h-10 text-stone-900" strokeWidth={3} />
              </div>
            </motion.div>
          </>
        )}
      </div>

      <div className="mt-12 brutalist-card p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 max-w-3xl">
        <div className="bg-yellow-100 border-4 border-black p-6 rounded-3xl text-5xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">🍯</div>
        <div>
          <h4 className="font-black uppercase tracking-tighter text-3xl mb-4 italic text-amber-500">Pollen Fact!</h4>
          <p className="text-stone-800 font-bold text-lg leading-tight uppercase">To make 500 grams of honey, Alberta bees visit 2 million flowers and fly 88,500 kilometers!</p>
        </div>
      </div>
    </div>
  );
}
