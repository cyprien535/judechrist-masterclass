import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Ticket, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  X, 
  CheckCircle2,
  Zap,
  Lock,
  Video,
  Award,
  MousePointerClick,
  Hand
} from 'lucide-react';
import { RegistrationFormData } from '../types';
import { HERO_CONTENT } from '../data/content';

export interface PassOption {
  id: string;
  name: string;
  badge: string;
  oldPrice: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export const TICKET_PASSES: PassOption[] = [
  {
    id: 'pass-unique',
    name: 'PASS MASTERCLASS UNIQUE',
    badge: 'ACCÈS EN LIGNE SUR GOOGLE MEET',
    oldPrice: '10 000 FCFA',
    price: '2 000 FCFA',
    description: "L'accès direct et complet pour suivre l'intégralité de la Masterclass en direct le Samedi 29 Août 2026 à 20H.",
    popular: true,
    features: [
      "Accès 100% en ligne sur Google Meet (Samedi 29 Août 2026 à 20H)",
      "Les 5 Modules Majeurs complets du programme Masterclass",
      "Le plan d'action chrono 30 jours de 0 FCFA à 100.000 FCFA",
      "Session interactive de Questions/Réponses en direct avec Prophète Jude-Christ Exaucé",
      "Accès direct & support personnalisé sur WhatsApp"
    ]
  }
];

export const SINGLE_PASS_FEATURES = TICKET_PASSES[0].features;

interface TicketsSectionProps {
  onPassSelect?: (pass: PassOption) => void;
}

export const TicketsSection: React.FC<TicketsSectionProps> = ({ onPassSelect }) => {
  const mainPass = TICKET_PASSES[0];

  const handleOpenBooking = (pass?: PassOption) => {
    window.open(HERO_CONTENT.checkoutUrl, '_blank');
    if (onPassSelect && pass) {
      onPassSelect(pass);
    }
  };

  return (
    <section id="tickets" className="py-16 sm:py-24 bg-[#030B1A] relative border-t border-white/10 overflow-hidden w-full scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Anchor for scroll navigation targeting #reservation */}
      <div id="reservation" className="absolute -top-24 left-0 w-0 h-0 pointer-events-none" />

      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/20 border border-[#3B82F6]/40 px-4 py-2 rounded-full text-xs sm:text-sm font-black text-[#60A5FA] tracking-widest uppercase mb-4 shadow-inner">
            <Ticket className="w-4 h-4 text-[#3B82F6]" />
            <span>BILLETTERIE OFFICIELLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Tarif & Pass Unique <span className="text-[#3B82F6]">Masterclass</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#A9B8D4] leading-relaxed font-medium max-w-2xl mx-auto">
            Un tarif unique et accessible pour participer à la session 100% en ligne sur Google Meet le Samedi 29 Août 2026 à 20H.
          </p>
        </div>

        {/* SINGLE RESERVATION CTA BUTTON BLOCK WITH ANIMATED GESTURES */}
        <div className="max-w-2xl mx-auto mb-16 text-center relative px-2 sm:px-6">
          
          {/* Animated Hand Gesture & Text Heading Above Button */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ y: [0, 6, 0], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
              className="text-amber-400 font-bold text-xl sm:text-2xl"
            >
              👇
            </motion.div>

            <span className="text-xs sm:text-sm font-black text-[#60A5FA] uppercase tracking-wider text-center bg-[#2563EB]/20 border border-[#3B82F6]/40 px-4 py-1.5 rounded-full shadow-inner flex items-center gap-2">
              <MousePointerClick className="w-4 h-4 text-amber-300 animate-bounce" />
              <span>CLIQUEZ ICI POUR SÉCURISER VOTRE PLACE (2 000 FCFA)</span>
            </span>

            <motion.div
              animate={{ y: [0, 6, 0], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut", delay: 0.15 }}
              className="text-amber-400 font-bold text-xl sm:text-2xl"
            >
              👇
            </motion.div>
          </div>

          {/* BUTTON CONTAINER WITH SIDE POINTING HAND GESTURES */}
          <div className="relative flex items-center justify-center gap-2 sm:gap-4">

            {/* Left Hand Pointing Gesture (Points Right 👉) */}
            <motion.div
              animate={{ x: [0, 8, 0], scale: [0.95, 1.2, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
              className="hidden sm:flex text-3xl md:text-4xl filter drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] select-none pointer-events-none"
            >
              👉
            </motion.div>

            {/* THE MAIN RESERVATION BUTTON */}
            <div className="relative w-full max-w-md">
              {/* Pulsing Ripple Background Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] via-amber-400 to-[#3B82F6] rounded-2xl blur-md opacity-70 group-hover:opacity-100 animate-pulse pointer-events-none" />

              <button
                type="button"
                onClick={() => handleOpenBooking(mainPass)}
                className="w-full py-5 px-6 sm:px-8 rounded-2xl font-black text-base sm:text-xl bg-[#2563EB] hover:bg-[#3B82F6] text-white shadow-2xl shadow-[#2563EB]/60 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group relative overflow-hidden border-2 border-white/30"
              >
                <Ticket className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300 group-hover:rotate-12 transition-transform shrink-0" />
                <span className="tracking-tight">SÉCURISER MA PLACE (2 000 FCFA)</span>
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
              </button>
            </div>

            {/* Right Hand Pointing Gesture (Points Left 👈) */}
            <motion.div
              animate={{ x: [0, -8, 0], scale: [0.95, 1.2, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
              className="hidden sm:flex text-3xl md:text-4xl filter drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] select-none pointer-events-none"
            >
              👈
            </motion.div>

          </div>

          {/* Bottom Finger Gesture for Mobile */}
          <div className="flex sm:hidden items-center justify-center gap-2 mt-2">
            <motion.div
              animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
              className="text-2xl text-amber-400"
            >
              👆
            </motion.div>
            <span className="text-xs font-black text-amber-300">Appuyez sur le bouton ci-dessus</span>
            <motion.div
              animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut", delay: 0.15 }}
              className="text-2xl text-amber-400"
            >
              👆
            </motion.div>
          </div>

          {/* Explanatory Text Below Button */}
          <div className="mt-5 text-center space-y-2">
            <p className="text-xs sm:text-sm text-slate-200 font-medium flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Accès direct à la page de paiement sécurisée pour réserver votre Pass (2 000 FCFA).</span>
            </p>
            <p className="text-xs text-[#A9B8D4] flex items-center justify-center gap-1.5 flex-wrap">
              <span>Besoin d'assistance ?</span>
              <a
                href={HERO_CONTENT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-bold inline-flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Contactez-nous sur WhatsApp (+229 47 14 60 37)</span>
              </a>
            </p>
          </div>
        </div>

        {/* TRUST BADGES BAR */}
        <div className="bg-[#081426]/90 border border-white/10 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left shadow-2xl backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/20 border border-[#3B82F6]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
              <Lock className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white mb-1">Paiement Simple & Sécurisé</h4>
              <p className="text-xs text-[#A9B8D4] leading-relaxed">
                Règlement rapide par Mobile Money (MoMo / Flooz) ou confirmation directe sur WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/20 border border-[#3B82F6]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
              <Video className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white mb-1">100% En Ligne sur Google Meet</h4>
              <p className="text-xs text-[#A9B8D4] leading-relaxed">
                Suivez la formation où que vous soyez depuis votre smartphone ou votre ordinateur.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/20 border border-[#3B82F6]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white mb-1">Accompagnement Garanti</h4>
              <p className="text-xs text-[#A9B8D4] leading-relaxed">
                Suivi et réponses personnalisées en direct avec Prophète Jude-Christ Exaucé.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
