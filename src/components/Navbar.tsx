import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { DiamondLogo } from './DiamondLogo';
import { HERO_CONTENT } from '../data/content';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'ACCUEIL', href: '#accueil' },
    { name: 'PROGRAMME', href: '#programme' },
    { name: 'TICKETS', href: '#tickets' },
    { name: 'INTERVENANT', href: '#intervenants' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2.5 sm:py-4 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* FLOATING HEADER BAR */}
      <div 
        className={`w-full bg-[#080B12]/95 border border-white/15 rounded-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3 sm:gap-6 transition-all duration-300 ${
          isScrolled ? 'shadow-black/90 border-amber-500/30 bg-[#05080E]/98' : ''
        }`}
      >
        {/* Left: Brand Logo */}
        <a 
          href="#accueil" 
          className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl transition-transform active:scale-95"
          aria-label="Accueil"
        >
          <DiamondLogo />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-7 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11px] lg:text-xs xl:text-sm font-bold uppercase tracking-widest text-slate-200 hover:text-[#3B82F6] transition-colors cursor-pointer py-1.5 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Social Icon + Blue Reservation Button + Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Facebook Social Icon Button */}
          <a
            href={HERO_CONTENT.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shrink-0"
          >
            <Facebook className="w-4 h-4 text-white" />
          </a>

          {/* Electric Blue RÉSERVER Button */}
          <button
            type="button"
            onClick={onReserveClick || (() => window.open(HERO_CONTENT.checkoutUrl, '_blank'))}
            className="bg-[#2563EB] hover:bg-[#3B82F6] text-white font-black text-xs sm:text-xs md:text-sm px-4 sm:px-7 py-2 sm:py-2.5 rounded-full shadow-lg shadow-[#2563EB]/40 uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 h-9 sm:h-10 flex items-center justify-center border border-white/20"
          >
            RÉSERVER
          </button>

          {/* Mobile Hamburger Trigger (< 768px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center shrink-0 active:scale-95 transition-all focus:outline-none"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#60A5FA]" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Hamburger Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-3 top-16 z-50 md:hidden flex flex-col justify-between bg-[#081222]/98 backdrop-blur-2xl border border-white/20 rounded-2xl px-5 py-6 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 w-full">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 + 0.03, duration: 0.18 }}
                  className="text-sm font-black text-white hover:text-[#60A5FA] py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all flex items-center justify-between border border-white/5 hover:border-white/15 min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#60A5FA]" />
                </motion.a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 mt-4 space-y-3 w-full">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onReserveClick) {
                    onReserveClick();
                  } else {
                    window.open(HERO_CONTENT.checkoutUrl, '_blank');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white text-sm font-black px-5 py-3.5 rounded-full shadow-xl shadow-[#2563EB]/40 transition-all uppercase tracking-wider min-h-[46px] cursor-pointer border border-white/20"
              >
                <span>RÉSERVER MA PLACE</span>
              </button>
              <p className="text-center text-[11px] font-medium text-[#A9B8D4]">
                Masterclass en ligne sur Google Meet
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};




