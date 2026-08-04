import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Video, 
  Ticket,
  Zap,
  CheckCircle2,
  Lock
} from 'lucide-react';

import { HERO_CONTENT } from '../data/content';

interface CountdownSectionProps {
  onReserveClick?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ onReserveClick }) => {
  // Target date: August 29, 2026, 8:00:00 PM West Africa Time (20H / Benin time)
  const TARGET_DATE = new Date('2026-08-29T20:00:00+01:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const timeUnits = [
    { label: 'JOURS', value: formatNumber(timeLeft.days), hint: 'Temps restant' },
    { label: 'HEURES', value: formatNumber(timeLeft.hours), hint: 'Heures' },
    { label: 'MINUTES', value: formatNumber(timeLeft.minutes), hint: 'Minutes' },
    { label: 'SECONDES', value: formatNumber(timeLeft.seconds), hint: 'Secondes' },
  ];

  return (
    <section id="urgence" className="py-20 sm:py-28 bg-[#030B1A] relative overflow-hidden border-t border-white/10 scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1832] border border-[#3B82F6]/40 text-xs sm:text-sm font-extrabold text-[#60A5FA] mb-6 shadow-xl shadow-[#2563EB]/15">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="uppercase tracking-widest text-[11px] sm:text-xs">EN DIRECT SUR GOOGLE MEET • SAMEDI 29 AOÛT 2026 À 20H00</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          Le Compte à Rebours <span className="text-[#3B82F6]">Est Lancé</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#A9B8D4] max-w-2xl mx-auto font-medium mb-10 sm:mb-14 leading-relaxed">
          Sécurisez votre Pass Unique (2 000 FCFA) avant la fermeture des inscriptions pour garantir votre place dans la salle virtuelle.
        </p>

        {/* HIGH-END DIGITAL FLIP COUNTDOWN DISPLAY */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 items-center">
            {timeUnits.map((unit, index) => (
              <React.Fragment key={unit.label}>
                <div className="relative group bg-gradient-to-b from-[#0D1E3A] via-[#09152B] to-[#040D1C] border border-[#3B82F6]/35 hover:border-[#3B82F6] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_15px_35px_rgba(37,99,235,0.2)] transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Top Metallic Glass Accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-80" />
                  
                  {/* Digital Split Line Detail across Middle */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/60 shadow-[0_1px_0_rgba(255,255,255,0.08)] pointer-events-none z-10" />

                  {/* Number Display */}
                  <div className="relative py-2 sm:py-3">
                    <span className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight tabular-nums font-mono drop-shadow-[0_4px_16px_rgba(37,99,235,0.5)]">
                      {unit.value}
                    </span>
                  </div>

                  {/* Unit Label */}
                  <div className="mt-1 sm:mt-2 px-3 py-1 rounded-md bg-[#030B1A]/80 border border-white/10 w-full text-center">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#60A5FA] block">
                      {unit.label}
                    </span>
                  </div>

                  {/* Subtle Corner Glow */}
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#2563EB]/20 rounded-full blur-xl pointer-events-none" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>



        {/* CALL TO ACTION BUTTON WITH FINGER GESTURES */}
        <div className="relative max-w-xl mx-auto">
          
          {/* Top Hand Gestures */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
              className="text-amber-400 text-xl font-bold"
            >
              👇
            </motion.div>
            <span className="text-xs font-black text-[#60A5FA] uppercase tracking-wider">
              RÉSERVEZ VOTRE PASS AVANT LA FERMETURE DES PLACES
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut", delay: 0.15 }}
              className="text-amber-400 text-xl font-bold"
            >
              👇
            </motion.div>
          </div>

          {/* Button Container */}
          <div className="relative flex items-center justify-center gap-3">
            
            {/* Left Finger Pointing */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
              className="hidden sm:flex text-3xl select-none"
            >
              👉
            </motion.div>

            <button
              onClick={() => window.open(HERO_CONTENT.checkoutUrl, '_blank')}
              type="button"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-black text-base sm:text-xl px-8 py-5 rounded-2xl shadow-2xl shadow-[#2563EB]/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer border border-white/20 uppercase tracking-wider group"
            >
              <Ticket className="w-6 h-6 text-amber-300 group-hover:rotate-12 transition-transform shrink-0" />
              <span>SÉCURISER MA PLACE (2 000 FCFA)</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <ArrowRight className="w-6 h-6 shrink-0" />
              </motion.div>
            </button>

              {/* Right Finger Pointing */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
                className="hidden sm:flex text-3xl select-none"
              >
                👈
              </motion.div>
            </div>

            {/* Bottom Subtext */}
            <p className="text-xs text-[#A9B8D4] mt-3 font-medium flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Validation immédiate • Lien Google Meet transmis par SMS & WhatsApp</span>
            </p>
          </div>

      </div>
    </section>
  );
};
