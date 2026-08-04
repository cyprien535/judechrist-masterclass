import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Video, 
  ShoppingBag, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Hammer, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AUDIENCE_CONTENT } from '../data/content';

export const AudienceSection: React.FC = () => {
  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-[#60A5FA]" />;
      case 'Video':
        return <Video className="w-6 h-6 sm:w-8 sm:h-8 text-[#60A5FA]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-[#60A5FA]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#60A5FA]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#60A5FA]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#60A5FA]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 sm:w-8 sm:h-8 text-[#60A5FA]" />;
      default:
        return <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#60A5FA]" />;
    }
  };

  return (
    <section id="public-attendu" className="py-16 sm:py-24 bg-[#030B1A] relative border-t border-white/10 overflow-hidden w-full scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header Section */}
        <div 
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border-[#2563EB]/30 mb-4 shadow-lg">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#60A5FA]" />
            <span className="text-[11px] sm:text-xs font-extrabold text-shiny tracking-widest uppercase">
              {AUDIENCE_CONTENT.badge}
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
          </div>

          <h2 className="text-section-title font-black text-white tracking-tight mb-3">
            <span className="text-glow-sweep">{AUDIENCE_CONTENT.title}</span>
          </h2>

          <p className="text-lg sm:text-2xl font-bold text-[#60A5FA] mb-4">
            {AUDIENCE_CONTENT.subtitle}
          </p>

          <p className="text-fluid-p text-[#A9B8D4] leading-relaxed">
            {AUDIENCE_CONTENT.intro}
          </p>
        </div>

        {/* 7 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {AUDIENCE_CONTENT.audiences.map((audience, index) => {
            const isLast = index === AUDIENCE_CONTENT.audiences.length - 1;
            return (
              <div
                key={audience.id}
                className={`glass-panel-interactive p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between relative group hover:border-[#3B82F6] hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)] transition-all duration-300 ${
                  isLast ? 'md:col-span-2 lg:col-span-3 md:max-w-3xl lg:max-w-4xl md:mx-auto w-full' : 'w-full'
                }`}
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#2563EB]/20 border border-[#3B82F6]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2563EB]/30 group-hover:border-[#3B82F6] transition-all duration-300 shadow-inner">
                      {getAudienceIcon(audience.iconName)}
                    </div>
                    
                    {/* Number Badge */}
                    <span className="font-['Sora'] text-3xl sm:text-5xl font-black text-white/20 group-hover:text-shiny transition-colors tracking-tighter">
                      {audience.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-black text-white group-hover:text-[#60A5FA] transition-colors mb-3">
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-[#A9B8D4] leading-relaxed font-normal">
                    {audience.description}
                  </p>
                </div>

                {/* Subtle indicator line on hover */}
                <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#60A5FA] opacity-90 group-hover:opacity-100 group-hover:text-white transition-all">
                  <span>Profil éligible à la Masterclass</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


