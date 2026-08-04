import React from 'react';
import { DiamondLogo } from './DiamondLogo';
import { Facebook, MessageSquare, ArrowUp, PhoneCall, Mail, MapPin, Users } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

export const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(HERO_CONTENT.whatsappUrl, '_blank');
  };

  const navLinks = [
    { name: 'ACCUEIL', href: '#accueil' },
    { name: 'PROGRAMME', href: '#programme' },
    { name: 'TICKETS', href: '#tickets' },
    { name: 'INTERVENANT', href: '#intervenants' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030B1A] border-t border-[#2563EB]/20 pt-12 pb-8 text-[#A9B8D4] relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#accueil" onClick={(e) => handleNavClick(e, '#accueil')} className="inline-block">
              <DiamondLogo />
            </a>
            <p className="text-sm text-[#A9B8D4] max-w-md leading-relaxed font-normal">
              Masterclass en ligne sur Google Meet : Le plan pour passer de 0 FCFA à vos premiers 100.000 FCFA en 30 jours avec Prophète Jude-Christ Exaucé.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={HERO_CONTENT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#2563EB]/20 border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-400" />
              </a>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-10 h-10 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-all hover:scale-105 cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-black text-[#60A5FA] uppercase tracking-widest">Navigation Rapide</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-300 hover:text-[#60A5FA] transition-colors inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-black text-[#60A5FA] uppercase tracking-widest">Contact & Lieu</h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>En ligne sur Google Meet</span>
              </div>
              <div className="flex items-start gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p>+229 47 14 60 37</p>
                </div>
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact WhatsApp (+229 47 14 60 37)</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#A9B8D4]/70">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 Jude Christ – L'Architecte Bleu. Tous droits réservés.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p className="text-[#A9B8D4]">
              Développé par{' '}
              <a
                href={HERO_CONTENT.developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#60A5FA] font-bold underline transition-colors"
              >
                {HERO_CONTENT.developerName}
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#60A5FA] transition-colors cursor-pointer"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

