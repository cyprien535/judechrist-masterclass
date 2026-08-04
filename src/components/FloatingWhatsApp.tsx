import React from 'react';
import { MessageSquare } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(HERO_CONTENT.whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] hover:bg-[#22bf5b] text-white px-5 sm:px-6 py-3.5 sm:py-4 min-w-[52px] min-h-[52px] rounded-full shadow-2xl shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
      aria-label="Discuter sur WhatsApp"
    >
      <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      <span className="text-sm sm:text-base font-extrabold hidden sm:inline">Contact WhatsApp</span>
    </button>
  );
};
