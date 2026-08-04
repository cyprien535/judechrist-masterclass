import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2
} from 'lucide-react';
import { OBSTACLES_CONTENT, HERO_CONTENT } from '../data/content';
import obstacleSpeakerImg from '../assets/images/regenerated_image_1785853269186.jpg';

interface ObstaclesSectionProps {
  onReserveClick?: () => void;
}

export const ObstaclesSection: React.FC<ObstaclesSectionProps> = ({ onReserveClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);
  
  const touchStartX = useRef<number | null>(null);
  const obstacles = OBSTACLES_CONTENT.obstacles;
  const slideDuration = 6000;

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIdx) => (prevIdx + 1) % obstacles.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [isPaused, obstacles.length]);

  const changeSlide = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? obstacles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % obstacles.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const activeObstacle = obstacles[currentIndex];

  // Motion variants for smooth slide transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.25 }
    })
  };

  return (
    <section 
      id="obstacles" 
      className="py-16 sm:py-24 bg-[#030B1A] relative border-t border-white/10 overflow-hidden w-full select-none scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* LEFT COLUMN: Header + Card + Carousel Navigation */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-[#2563EB]/40 text-[11px] sm:text-xs font-semibold text-[#60A5FA] w-fit shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
              <span>• Le Mur</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Tu veux te lancer. <br />
              <span className="text-[#60A5FA]">Mais un mur te bloque.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#A9B8D4] max-w-lg leading-relaxed font-medium">
              Depuis des mois, tu accumules sans avancer. Tu reconnais sûrement l'un de ces murs.
            </p>

            {/* Obstacle Card */}
            <div className="bg-[#0B1628]/95 border border-[#2563EB]/40 hover:border-[#3B82F6]/70 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-colors">
              {/* Top row inside card */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-full bg-[#2563EB]/20 border border-[#3B82F6]/40 flex items-center justify-center text-[#60A5FA] shadow-inner">
                  <Volume2 className="w-4 h-4" />
                </div>

                <div className="px-3 py-1 rounded-lg bg-[#2563EB]/20 border border-[#3B82F6]/40 text-xs font-bold text-[#60A5FA]">
                  {activeObstacle.number}
                </div>
              </div>

              {/* Animated Body Content */}
              <div className="min-h-[140px] flex flex-col justify-between">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={activeObstacle.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-3"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {activeObstacle.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#A9B8D4] leading-relaxed font-normal">
                      {activeObstacle.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeObstacle.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-xs font-medium px-3 py-1 bg-[#1E293B] text-[#93C5FD] border border-[#3B82F6]/30 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Slider Controls below the card */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <button 
                onClick={handlePrev} 
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#2563EB]/20 transition-colors cursor-pointer active:scale-95"
                aria-label="Obstacle précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1">
                {obstacles.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => changeSlide(idx)}
                    className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                    aria-label={`Obstacle ${idx + 1}`}
                  >
                    <span className={`h-2 rounded-full transition-all duration-300 block ${
                      idx === currentIndex ? 'w-7 bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`} />
                  </button>
                ))}
              </div>

              <button 
                onClick={handleNext} 
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-[#2563EB]/20 transition-colors cursor-pointer active:scale-95"
                aria-label="Obstacle suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Clean Speaker Photo Container */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-lg aspect-[4/5] rounded-[26px] sm:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative bg-[#0B1628] max-h-[550px]">
              <img 
                src={obstacleSpeakerImg} 
                alt="Jude Christ - L'Architecte Bleu" 
                width={750}
                height={935}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030B1A]/80 via-transparent to-transparent opacity-80" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
