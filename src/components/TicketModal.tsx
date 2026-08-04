import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Calendar, MapPin, Clock, X, MessageSquare, Download, ShieldCheck, Users } from 'lucide-react';
import { RegistrationFormData } from '../types';
import { DiamondLogo } from './DiamondLogo';
import { HERO_CONTENT } from '../data/content';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: RegistrationFormData | null;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const ticketCode = `ARCH-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleWhatsAppConfirm = () => {
    const text = encodeURIComponent(
      `Bonjour Prophète Jude-Christ Exaucé, je viens de réserver mon Pass à 2000 FCFA pour la Masterclass !\n\n` +
      `Nom : ${data.lastName} ${data.firstName}\n` +
      `Téléphone : ${data.phone}\n` +
      `Email : ${data.email}\n` +
      `Profession : ${data.profession}\n` +
      `Code Pass : ${ticketCode}\n` +
      `Tarif : 2 000 FCFA LE PASS\n\n` +
      `Merci de me transmettre les instructions de paiement.`
    );
    window.open(`https://wa.me/${HERO_CONTENT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030B1A]/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg card-gradient p-5 sm:p-8 border-[#3B82F6]/50 shadow-2xl rounded-2xl sm:rounded-3xl overflow-y-auto max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            className="absolute top-4 right-4 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#081426] border border-[#2563EB]/30 text-[#A9B8D4] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#2563EB]/20 border border-[#3B82F6] text-[#3B82F6] mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Réservation Confirmée !
            </h2>
            <p className="text-base sm:text-lg text-[#A9B8D4] mt-2 font-medium">
              Votre place pour la Masterclass est réservée avec succès.
            </p>
          </div>

          {/* Digital Ticket Card */}
          <div className="bg-[#081426] border border-[#2563EB]/40 rounded-2xl p-6 sm:p-7 mb-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#2563EB]/20 pb-4 mb-5">
              <DiamondLogo size={32} />
              <span className="text-xs sm:text-sm font-mono tracking-widest bg-[#2563EB]/20 text-[#60A5FA] px-3.5 py-1.5 rounded-lg border border-[#2563EB]/40 font-black uppercase">
                {ticketCode}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs sm:text-sm font-black text-[#A9B8D4] uppercase tracking-wider block mb-1">
                  PARTICIPANT
                </span>
                <p className="text-xl sm:text-2xl font-black text-white">
                  {data.firstName} {data.lastName}
                </p>
                <p className="text-sm sm:text-base text-[#3B82F6] font-bold mt-0.5">{data.profession}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2563EB]/10">
                <div>
                  <span className="text-xs sm:text-sm text-[#A9B8D4] flex items-center gap-1.5 font-extrabold uppercase">
                    <Calendar className="w-4 h-4 text-[#3B82F6]" /> DATE
                  </span>
                  <p className="text-sm sm:text-base font-black text-white mt-1">Samedi 29 Août 2026</p>
                </div>
                <div>
                  <span className="text-xs sm:text-sm text-[#A9B8D4] flex items-center gap-1.5 font-extrabold uppercase">
                    <Clock className="w-4 h-4 text-[#3B82F6]" /> HEURE
                  </span>
                  <p className="text-sm sm:text-base font-black text-white mt-1">20H00 (20H)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2563EB]/10">
                <div>
                  <span className="text-xs sm:text-sm text-[#A9B8D4] flex items-center gap-1.5 font-extrabold uppercase">
                    <MapPin className="w-4 h-4 text-[#3B82F6]" /> LIEU
                  </span>
                  <p className="text-sm sm:text-base font-black text-white mt-1">En ligne sur Google Meet</p>
                </div>
                <div>
                  <span className="text-xs sm:text-sm text-[#A9B8D4] flex items-center gap-1.5 font-extrabold uppercase">
                    <ShieldCheck className="w-4 h-4 text-[#3B82F6]" /> TARIF PASS
                  </span>
                  <p className="text-sm sm:text-base font-black text-[#60A5FA] mt-1">2 000 FCFA LE PASS</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2563EB]/10">
                <p className="text-xs text-[#A9B8D4]/90 font-medium">
                  Orateur Principal : <span className="text-white font-bold">Prophète Jude-Christ Exaucé</span>
                </p>
                <p className="text-xs text-[#A9B8D4]/90 font-medium mt-1">
                  Contacts : <span className="text-white font-bold">+229 47 14 60 37</span>
                </p>
              </div>
            </div>

            {/* Simulated Barcode / QR Code strip */}
            <div className="mt-6 pt-4 border-t border-dashed border-[#2563EB]/30 flex items-center justify-between">
              <div className="flex gap-1.5 items-center opacity-75">
                <div className="w-1.5 h-7 bg-[#3B82F6]" />
                <div className="w-2.5 h-7 bg-white" />
                <div className="w-1 h-7 bg-[#3B82F6]" />
                <div className="w-2 h-7 bg-white" />
                <div className="w-1.5 h-7 bg-[#3B82F6]" />
                <div className="w-3 h-7 bg-white" />
                <div className="w-1.5 h-7 bg-[#3B82F6]" />
              </div>
              <span className="text-xs sm:text-sm text-[#60A5FA] font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5" /> Pass Sécurisé
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppConfirm}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#22bf5b] text-white font-black text-base sm:text-lg py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-[#25D366]/30 hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Contacter sur WhatsApp pour payer</span>
            </button>

            <button
              onClick={handleWhatsAppConfirm}
              className="w-full flex items-center justify-center gap-2.5 bg-[#0B1628] hover:bg-[#112240] text-[#25D366] border border-[#25D366]/50 font-bold text-sm sm:text-base py-3 px-5 rounded-xl transition-all cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Envoyer ma confirmation par Message WhatsApp</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-sm text-[#A9B8D4] hover:text-white transition-colors cursor-pointer font-semibold"
            >
              Fermer la fenêtre
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
