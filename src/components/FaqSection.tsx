import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Où et quand aura lieu la Masterclass ?',
    answer:
      "La Masterclass se déroulera le Samedi 29 Août 2026 à 20H00 (20H) en ligne sur Google Meet. Le lien d'accès vous sera transmis immédiatement sur WhatsApp et par email dès la réservation de votre Pass.",
    category: 'Logistique',
  },
  {
    id: 'faq-2',
    question: 'Quel est le tarif du Pass et comment réserver sa place ?',
    answer:
      "Le tarif du Pass officiel pour participer à la Masterclass est de 2 000 FCFA. Il existe un seul type de Pass unique à 2 000 FCFA (pas de formules premium) qui donne accès à l'intégralité du programme et des 5 modules en direct.",
    category: 'Accès',
  },
  {
    id: 'faq-3',
    question: 'À qui s’adresse cette Masterclass ?',
    answer:
      "Cette Masterclass s'adresse aux entrepreneurs, e-commerçants, débutants, étudiants, prestataires de services et créateurs désireux de passer de 0 FCFA à leurs premiers 100 000 FCFA de ventes en ligne en 30 jours sans argent de départ.",
    category: 'Public',
  },
  {
    id: 'faq-4',
    question: 'Comment obtenir et confirmer mon Pass d’accès ?',
    answer:
      "Remplissez le formulaire d'inscription sur le site pour réserver votre Pass à 2 000 FCFA. Un code Pass unique vous sera attribué. Cliquez ensuite sur le bouton WhatsApp pour valider votre Pass auprès de notre équipe et recevoir votre lien Google Meet.",
    category: 'Réservation',
  },
  {
    id: 'faq-5',
    question: 'Comment vais-je suivre la session le soir de l’événement ?',
    answer:
      "Assurez-vous d'avoir téléchargé l'application Google Meet sur votre smartphone ou d'utiliser un navigateur web sur ordinateur. Un lien direct vous permettra de rejoindre la salle virtuelle dès 19H45 le Samedi 29 Août 2026.",
    category: 'Organisation',
  },
  {
    id: 'faq-6',
    question: 'Qui anime cette Masterclass ?',
    answer:
      "La Masterclass est animée par Prophète Jude-Christ Exaucé (L'Architecte Bleu), Fondateur et Master Trainer, ainsi que Wilenock Essou, intervenant spécial en stratégie digitale et conversion client.",
    category: 'Infoline',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleWhatsAppClick = () => {
    const cleanNumber = HERO_CONTENT.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=Bonjour%2C%20j%27ai%20une%20question%20concernant%20la%20Masterclass`, '_blank');
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#030B1A] relative overflow-hidden border-t border-[#2563EB]/15 scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#25D366]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div
            className="inline-flex items-center gap-2 bg-[#2563EB]/20 border border-[#3B82F6]/40 px-4 py-2 rounded-full text-xs sm:text-sm font-black text-[#60A5FA] tracking-widest uppercase mb-4 shadow-lg"
          >
            <HelpCircle className="w-4 h-4 text-[#3B82F6]" />
            <span>Questions Fréquentes</span>
          </div>

          <h2
            className="text-section-title font-black text-white tracking-tight mb-4"
          >
            Toutes vos <span className="text-glow-sweep">réponses</span> ici
          </h2>

          <p
            className="text-fluid-lead text-[#A9B8D4] leading-relaxed font-medium"
          >
            Retrouvez tout ce que vous devez savoir avant de rejoindre la Masterclass en ligne sur Google Meet.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 sm:space-y-5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#081426]/95 border-[#3B82F6] shadow-[0_10px_35px_rgba(37,99,235,0.25)]'
                    : 'bg-[#081426]/60 border-white/10 hover:border-white/25 hover:bg-[#081426]/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-button-${item.id}`}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 rounded-2xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-2">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/40'
                          : 'bg-[#2563EB]/15 text-[#60A5FA] border border-[#3B82F6]/30'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <h3 className="text-base sm:text-xl font-black text-white leading-snug inline">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#3B82F6]/20 border-[#3B82F6] text-[#60A5FA] rotate-180'
                        : 'bg-white/5 border-white/10 text-[#A9B8D4]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-button-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-white/10 mt-2">
                        <p className="text-base sm:text-xl text-[#A9B8D4] leading-relaxed font-normal pt-5">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp Support Button Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex items-center justify-center"
        >
          {/* Brilliant Glowing WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            type="button"
            className="relative group/btn inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] via-[#22bf5b] to-[#1da851] hover:from-[#28e06f] hover:to-[#22bf5b] text-white font-black text-base sm:text-lg px-8 py-4.5 sm:px-10 sm:py-5 rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:shadow-[0_0_50px_rgba(37,211,102,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/30 uppercase tracking-wider overflow-hidden z-10"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />

            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce shrink-0" />
            <span className="relative z-10">Poser une question sur WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

