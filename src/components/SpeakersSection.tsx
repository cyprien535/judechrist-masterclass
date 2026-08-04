import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Mic2, Star, Award, ShieldCheck } from 'lucide-react';
import { SPEAKERS_CONTENT } from '../data/content';

export const SpeakersSection: React.FC = () => {
  return (
    <section id="intervenants" className="py-16 sm:py-24 bg-[#030B1A] relative overflow-hidden border-t border-white/10 w-full scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Background radial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[900px] h-[300px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-72 sm:w-96 h-72 sm:h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div 
            className="inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#3B82F6]/30 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-5"
          >
            <Mic2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#60A5FA]" />
            <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#60A5FA] uppercase">
              {SPEAKERS_CONTENT.sectionLabel}
            </span>
          </div>

          <h2 
            className="text-section-title font-extrabold text-white tracking-tight mb-4 leading-[1.15]"
          >
            <span className="text-glow-sweep">{SPEAKERS_CONTENT.title}</span>
          </h2>

          <p 
            className="text-fluid-lead text-[#A9B8D4] leading-relaxed max-w-3xl mx-auto font-normal px-2"
          >
            {SPEAKERS_CONTENT.subtitle}
          </p>
        </div>

        {/* 3 Speakers Alternating Layout (Zig-Zag) */}
        <div className="space-y-10 sm:space-y-16 lg:space-y-20">
          {SPEAKERS_CONTENT.speakers.map((speaker, index) => {
            const isLeft = speaker.alignment === 'left';

            return (
              <div
                key={speaker.id}
                className="glass-panel border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-9 shadow-[0_20px_45px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-[#3B82F6]/60 transition-all duration-500"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB]/20 via-[#3B82F6] to-[#2563EB]/20" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* SPEAKER IMAGE */}
                  <div className={`lg:col-span-5 relative flex justify-center ${isLeft ? '' : 'lg:order-2'}`}>
                    {/* Background glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[280px] max-h-[280px] bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl group/img">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        width={550}
                        height={680}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/5] object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover/img:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Floating Badge Tag */}
                      <div className="absolute top-3 left-3 bg-[#030B1A]/85 backdrop-blur-md border border-[#3B82F6]/50 px-3 py-1 rounded-full text-[10px] font-black text-[#60A5FA] tracking-wider uppercase shadow-md">
                        {speaker.badge || "FORMATEUR PRINCIPAL"}
                      </div>
                    </div>
                  </div>

                  {/* SPEAKER DETAILS & TEXT */}
                  <div className={`lg:col-span-7 flex flex-col items-start text-left space-y-3.5 sm:space-y-4 ${isLeft ? '' : 'lg:order-1'}`}>
                    
                    {/* Speaker Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#2563EB]/20 border border-[#3B82F6]/40 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black text-[#60A5FA] tracking-widest uppercase">
                      <Star className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>{speaker.specialty}</span>
                    </div>

                    {/* Speaker Title */}
                    <div>
                      <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-sm sm:text-lg font-black text-[#3B82F6]">
                        {speaker.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-fluid-lead text-[#A9B8D4] leading-relaxed font-normal">
                      {speaker.bio}
                    </p>

                    {/* Topics Covered / Masterclass Intervention */}
                    <div className="w-full bg-[#081426]/80 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3 backdrop-blur-md">
                      <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-[#60A5FA] shrink-0" />
                        <span>Ce qu'il va partager durant la masterclass :</span>
                      </h4>

                      <div className="space-y-2.5">
                        {speaker.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-base text-white font-medium leading-snug">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trust indicator */}
                    <div className="flex items-center gap-2.5 text-xs sm:text-base font-bold text-[#60A5FA] pt-1">
                      <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0" />
                      <span>Session interactive en direct & réponses à vos questions</span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

