import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search,
  Users,
  Palette,
  AlertTriangle,
  Rocket,
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  Zap,
  Check
} from 'lucide-react';
import { PROGRAM_MODULES } from '../data/content';

export const WhyJoinSection: React.FC = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveModuleIndex((prev) => (prev + 1) % PROGRAM_MODULES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeModuleIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setActiveModuleIndex((prev) => (prev + 1) % PROGRAM_MODULES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveModuleIndex((prev) => (prev - 1 + PROGRAM_MODULES.length) % PROGRAM_MODULES.length);
  };

  const getModuleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#60A5FA]" />;
      case 1:
        return <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#60A5FA]" />;
      case 2:
        return <Palette className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#60A5FA]" />;
      case 3:
        return <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#60A5FA]" />;
      case 4:
        return <Rocket className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#60A5FA]" />;
      default:
        return <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#60A5FA]" />;
    }
  };

  const currentModule = PROGRAM_MODULES[activeModuleIndex];

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section id="programme" className="py-16 sm:py-24 bg-[#030B1A] relative overflow-hidden border-t border-white/10 w-full scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Background Glow Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[900px] h-[350px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 text-center">
        
        {/* Section Header Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/20 border border-[#3B82F6]/40 mb-4 shadow-lg">
          <Sparkles className="w-4 h-4 text-[#60A5FA]" />
          <span className="text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase">
            PROGRAMME OFFICIEL DE LA MASTERCLASS
          </span>
        </div>

        {/* Main Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Les 5 Modules Majeurs de la <span className="text-[#60A5FA] text-glow-sweep">Masterclass</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#A9B8D4] max-w-3xl mx-auto leading-relaxed font-medium mb-10">
          Le plan d'action pas à pas pour passer de <strong className="text-white">0 FCFA</strong> à <strong className="text-[#60A5FA]">100.000 FCFA</strong> de vente en ligne en 30 jours.
        </p>

        {/* STEPPER PROGRESS TIMELINE (01 -> 05) */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="relative flex items-center justify-between">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-white/10 rounded-full z-0" />
            
            {/* Animated Active Line */}
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-[#3B82F6] rounded-full transition-all duration-500 z-0 shadow-[0_0_12px_#3B82F6]" 
              style={{ width: `${(activeModuleIndex / (PROGRAM_MODULES.length - 1)) * 100}%` }}
            />

            {/* Stepper Buttons */}
            {PROGRAM_MODULES.map((mod, idx) => {
              const isActive = idx === activeModuleIndex;
              const isPast = idx < activeModuleIndex;

              return (
                <button
                  key={mod.number}
                  onClick={() => {
                    setDirection(idx > activeModuleIndex ? 1 : -1);
                    setActiveModuleIndex(idx);
                  }}
                  className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] min-h-[48px] rounded-2xl flex items-center justify-center font-black text-xs sm:text-base transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#2563EB] text-white border-2 border-white scale-110 shadow-2xl shadow-[#2563EB]/60'
                      : isPast
                      ? 'bg-[#0B1628] text-[#60A5FA] border border-[#3B82F6]/60'
                      : 'bg-[#081426] text-slate-400 border border-white/15 hover:border-white/40'
                  }`}
                  aria-label={`Aller au module ${mod.number}`}
                >
                  {isPast ? <Check className="w-5 h-5 text-[#60A5FA]" /> : mod.number}
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN MODULE SHOWCASE CARD (Animated Module by Module) */}
        <div 
          className="relative max-w-4xl mx-auto my-4 px-1 sm:px-6"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative min-h-[360px] sm:min-h-[340px] flex items-center justify-center overflow-hidden py-2 sm:py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeModuleIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="w-full bg-[#081426]/95 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#3B82F6]/50 shadow-[0_20px_50px_rgba(37,99,235,0.3)] text-left flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Top Glowing Blue Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]" />

                <div>
                  {/* Top Bar: Icon + Badge + Huge Module Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-[#2563EB]/25 border border-[#3B82F6]/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                      {getModuleIcon(activeModuleIndex)}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider text-[#60A5FA] bg-[#2563EB]/20 border border-[#3B82F6]/40 uppercase">
                        MODULE {currentModule.number} / 05
                      </span>
                      <span className="font-['Sora'] text-3xl sm:text-5xl font-black text-white/20 tracking-tight">
                        {currentModule.number}
                      </span>
                    </div>
                  </div>

                  {/* Module Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 leading-snug group-hover:text-[#60A5FA] transition-colors">
                    {currentModule.title}
                  </h3>

                  {/* Module Subtitle */}
                  <p className="text-sm sm:text-base lg:text-lg text-[#A9B8D4] leading-relaxed font-medium mb-6">
                    {currentModule.subtitle}
                  </p>
                </div>

                {/* Bottom Outcome Strip */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-[#60A5FA]">
                  {currentModule.outcome ? (
                    <div className="inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#3B82F6]/30 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm text-[#93C5FD]">
                      <Zap className="w-4 h-4 text-[#3B82F6]" />
                      <span>{currentModule.outcome}</span>
                    </div>
                  ) : <div />}

                  <span className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-extrabold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Inclus dans le Pass (2 000 FCFA)</span>
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Module précédent"
              className="absolute left-1 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] min-h-[48px] rounded-2xl bg-[#0B1628]/95 border border-[#3B82F6]/60 text-white flex items-center justify-center shadow-2xl hover:bg-[#2563EB] hover:border-white transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-xl"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              aria-label="Module suivant"
              className="absolute right-1 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] min-h-[48px] rounded-2xl bg-[#0B1628]/95 border border-[#3B82F6]/60 text-white flex items-center justify-center shadow-2xl hover:bg-[#2563EB] hover:border-white transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-xl"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Auto-play Timer Progress Bar Indicator */}
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-6">
            <motion.div
              key={activeModuleIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className="bg-[#3B82F6] h-full shadow-[0_0_8px_#3B82F6]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

