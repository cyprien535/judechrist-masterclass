import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Facebook, 
  HeartHandshake,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Copy,
  Check
} from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(HERO_CONTENT.whatsappFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#030B1A] relative overflow-hidden border-t border-white/10 scroll-mt-24 sm:scroll-mt-28">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#3B82F6]/25 text-[#60A5FA] font-bold text-xs uppercase tracking-widest mb-4">
            <HeartHandshake className="w-4 h-4 text-amber-300 shrink-0" />
            <span>Assistance & Contact Direct</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Une question ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-white">Contactez-nous</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9B8D4] font-medium leading-relaxed">
            Échangez directement avec le Prophète Jude-Christ Exaucé et son équipe. Nous sommes disponibles pour vous accompagner et répondre à toutes vos préoccupations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* WhatsApp Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#081426]/90 border border-emerald-500/30 hover:border-emerald-500/60 backdrop-blur-xl transition-all duration-300 shadow-2xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>En ligne</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                WhatsApp Officiel
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B8D4] leading-relaxed mb-6">
                Posez vos questions ou effectuez directement votre paiement de 2 000 FCFA avec assistance immédiate.
              </p>

              {/* Number Display with Copy */}
              <div className="p-3.5 rounded-2xl bg-[#030B1A] border border-white/10 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-[#A9B8D4] font-medium">N° :</span>
                  <span className="text-sm font-bold text-white tracking-wide">{HERO_CONTENT.whatsappFormatted}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A9B8D4] hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
                  title="Copier le numéro"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px] font-medium">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copier</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={HERO_CONTENT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 cursor-pointer group/btn"
            >
              <MessageSquare className="w-4 h-4 fill-current shrink-0" />
              <span>Démarrer une discussion</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>

          {/* Facebook Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#081426]/90 border border-blue-500/30 hover:border-blue-500/60 backdrop-blur-xl transition-all duration-300 shadow-2xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                  <span>Page Officielle</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Page Facebook
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B8D4] leading-relaxed mb-6">
                Suivez nos enseignements, actualités et contenus exclusifs publiés régulièrement par le Prophète.
              </p>

              {/* Page Handle Display */}
              <div className="p-3.5 rounded-2xl bg-[#030B1A] border border-white/10 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-[#A9B8D4] font-medium">Page :</span>
                  <span className="text-sm font-bold text-white tracking-wide truncate">Prophète Jude-Christ Exaucé</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={HERO_CONTENT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-extrabold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 cursor-pointer group/btn"
            >
              <Facebook className="w-4 h-4 fill-current shrink-0" />
              <span>Visiter la page Facebook</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>

        </div>

        {/* Footer Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#A9B8D4] font-medium bg-[#081426]/80 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md">
            <Clock className="w-4 h-4 text-[#60A5FA] shrink-0" />
            <span>Réponse rapide & accueil bienveillant garanti pour chaque message.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

