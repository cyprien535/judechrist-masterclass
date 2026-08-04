import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Key, 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { SUCCESS_ROADMAP_CONTENT, HERO_CONTENT } from '../data/content';

interface SuccessRoadmapSectionProps {
  onReserveClick?: () => void;
}

export const SuccessRoadmapSection: React.FC<SuccessRoadmapSectionProps> = ({ onReserveClick }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Key':
        return <Key className="w-6 h-6 sm:w-7 sm:h-7 text-[#60A5FA]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-[#60A5FA]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#60A5FA]" />;
      default:
        return <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#60A5FA]" />;
    }
  };

  const handleCtaClick = () => {
    if (onReserveClick) {
      onReserveClick();
    } else {
      window.open(HERO_CONTENT.checkoutUrl, '_blank');
    }
  };

  return (
    <section id="voie-du-succes" className="py-16 sm:py-24 bg-[#030B1A] relative border-t border-white/10 overflow-hidden w-full scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div 
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border-[#2563EB]/30 mb-4 shadow-lg">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#60A5FA]" />
            <span className="text-[11px] sm:text-xs font-extrabold text-shiny tracking-widest uppercase">
              • {SUCCESS_ROADMAP_CONTENT.badge}
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
          </div>

          <h2 className="text-section-title font-black text-white tracking-tight mb-3">
            <span>{SUCCESS_ROADMAP_CONTENT.titlePart1}</span>
            <span className="text-[#60A5FA] text-glow-sweep block sm:inline">
              {SUCCESS_ROADMAP_CONTENT.titleHighlight}
            </span>
          </h2>

          <p className="text-fluid-p text-[#A9B8D4] leading-relaxed max-w-2xl mx-auto font-medium">
            {SUCCESS_ROADMAP_CONTENT.subtitle}
          </p>
        </div>

        {/* 3 Steps Stacked Table-Like Rows */}
        <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          {SUCCESS_ROADMAP_CONTENT.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-[#0B1628]/95 border border-[#2563EB]/30 hover:border-[#3B82F6] backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)] transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                
                {/* Number & Icon Column (md:col-span-3) */}
                <div className="md:col-span-3 flex items-center gap-4">
                  <span className="font-['Sora'] text-2xl sm:text-3xl font-black text-slate-500 group-hover:text-[#60A5FA] transition-colors">
                    {step.number}
                  </span>
                  
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/20 border border-[#3B82F6]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2563EB]/30 transition-transform">
                    {getStepIcon(step.iconName)}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#60A5FA] transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Main Detail Description (md:col-span-5) */}
                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-6">
                  <p className="text-sm sm:text-base text-[#A9B8D4] font-medium leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                {/* Key Benefit / Outcome Badge (md:col-span-4) */}
                <div className="md:col-span-4 flex items-center md:justify-end">
                  <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-white/10 group-hover:border-[#3B82F6]/50 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#93C5FD] group-hover:text-white transition-colors w-full md:w-auto">
                    <CheckCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <span>{step.benefit}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wide"
          >
            <span>Rejoindre la communauté / Réserver</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
