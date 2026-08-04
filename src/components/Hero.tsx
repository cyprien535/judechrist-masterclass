import React from 'react';
import { Calendar, MessageSquare, Users, Ticket } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';
import heroPortraitNew from '../assets/images/regenerated_image_1785852588359.png';

interface HeroProps {
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  const handleReserve = () => {
    onReserveClick();
  };

  const handleJoinWhatsApp = () => {
    window.open(HERO_CONTENT.whatsappUrl, '_blank');
  };

  return (
    <section id="accueil" className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#030B1A] w-full scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Immersive radial gradient backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(37,99,235,0.28),rgba(3,11,26,0))] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] sm:w-[750px] lg:w-[900px] h-[450px] sm:h-[750px] lg:h-[900px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />

      {/* Main Wide Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Text & Content (6 cols) - Appears 2nd on mobile, 1st on lg desktop */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full bg-transparent">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 sm:mb-6 w-full leading-[1.1] drop-shadow-2xl">
              <span className="block text-white font-black uppercase tracking-tight">
                {HERO_CONTENT.titlePart1}
              </span>
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#93C5FD] bg-clip-text text-transparent block mt-1 font-black uppercase tracking-tight">
                {HERO_CONTENT.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#A9B8D4] leading-relaxed w-full max-w-2xl mb-6 sm:mb-8 font-medium">
              {HERO_CONTENT.subtitle}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto bg-transparent">
              <button
                type="button"
                onClick={handleReserve}
                className="flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-black text-base sm:text-lg px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-[#2563EB]/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto min-h-[52px] border border-white/20"
              >
                <Ticket className="w-5 h-5 stroke-[2.5]" />
                <span>{HERO_CONTENT.primaryCta}</span>
              </button>

              <button
                type="button"
                onClick={handleJoinWhatsApp}
                className="flex items-center justify-center gap-2.5 bg-[#0B1628] hover:bg-[#081426] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto min-h-[52px]"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <span>Écrire sur WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Portrait Visual - Appears 1st on mobile, 2nd on lg desktop */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative flex flex-col items-center justify-center w-full mb-2 lg:mb-0">
            {/* Radiant Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[450px] sm:max-w-[650px] max-h-[450px] sm:max-h-[650px] bg-gradient-to-tr from-[#2563EB]/30 via-[#3B82F6]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Main Cutout Portrait Container */}
            <div className="relative z-10 w-full max-w-[300px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px] flex flex-col items-center transition-transform duration-500">
              <img
                src={heroPortraitNew}
                alt="Prophète Jude-Christ Exaucé - Orateur Principal"
                width={600}
                height={600}
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto max-h-[340px] sm:max-h-[480px] md:max-h-[540px] lg:max-h-[600px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-105 contrast-105"
                referrerPolicy="no-referrer"
              />

              {/* Integrated Glass Name & Title Badge */}
              <div className="-mt-5 sm:-mt-7 text-center bg-[#0B1628]/95 backdrop-blur-2xl px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-2xl border border-[#3B82F6]/40 shadow-2xl z-20 max-w-[90%]">
                <span className="text-base sm:text-lg md:text-xl font-black text-white tracking-wide block">
                  PROPHÈTE JUDE-CHRIST EXAUCÉ
                </span>
                <span className="block text-[10px] sm:text-xs font-bold tracking-widest text-[#60A5FA] uppercase mt-0.5">
                  L'Architecte Bleu • Orateur Principal
                </span>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 bg-[#081222]/90 border border-white/20 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-2xl flex items-center gap-3 backdrop-blur-xl">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#2563EB]/25 border border-[#3B82F6] flex items-center justify-center text-[#60A5FA] font-black text-sm shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#60A5FA]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-black text-white leading-none">
                  +500
                </p>
                <p className="text-[10px] sm:text-xs text-[#A9B8D4] font-medium mt-0.5">
                  Participants attendus
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};



