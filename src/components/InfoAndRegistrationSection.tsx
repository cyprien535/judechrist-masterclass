import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  User, 
  Phone, 
  Mail, 
  Send, 
  MessageSquare, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  Lock,
  CheckCircle2
} from 'lucide-react';
import { INFO_CONTENT, HERO_CONTENT } from '../data/content';
import { RegistrationFormData } from '../types';

interface InfoAndRegistrationProps {
  onSuccessSubmit: (data: RegistrationFormData) => void;
}

export const InfoAndRegistrationSection: React.FC<InfoAndRegistrationProps> = ({ onSuccessSubmit }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    profession: 'Entrepreneur'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof RegistrationFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Numéro invalide (min 8 chiffres).';
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse email valide.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessSubmit(formData);
    }, 600);
  };

  return (
    <section id="informations" className="py-12 sm:py-18 bg-[#030B1A] relative border-t border-white/10 overflow-hidden w-full">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-10 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.20),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),rgba(3,11,26,0)_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Main 2-Column Grid */}
        <div id="reservation" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Icon, Description & Seat Counter */}
          <div 
            className="lg:col-span-6 flex flex-col items-start text-left space-y-4 sm:space-y-6"
          >
            {/* Red/Blue Glowing Icon Circle */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white shadow-[0_8px_24px_rgba(37,99,235,0.5)] border border-[#3B82F6]/50">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* Main Headline */}
            <h2 className="text-hero-title font-black text-white leading-[1.1] tracking-tight">
              Réservez votre place <br className="hidden sm:inline" />
              <span className="text-[#3B82F6] block sm:inline">maintenant !</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-fluid-lead text-[#A9B8D4] leading-relaxed font-normal max-w-2xl">
              Cette masterclass en ligne est accessible à tous sur Google Meet : recevez immédiatement votre lien d'accès et votre Pass pour maîtriser le plan d'action de 0 à 100.000 FCFA.
            </p>

            {/* Pass & Tarif Card */}
            <div className="bg-[#0B1628]/95 border border-[#2563EB]/40 p-5 sm:p-6 rounded-2xl w-full max-w-lg shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#2563EB]/25 border border-[#3B82F6]/50 flex items-center justify-center text-[#60A5FA] shrink-0 shadow-inner">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#A9B8D4] uppercase tracking-wider block">
                    TARIF DE L'ÉVÉNEMENT :
                  </span>
                  <p className="text-2xl sm:text-3xl font-black text-[#60A5FA]">
                    2 000 FCFA <span className="text-sm font-bold text-white uppercase">LE PASS</span>
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs sm:text-sm text-[#A9B8D4]">
                <p className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#3B82F6]" />
                  <span>Audience : <strong className="text-white">+500 Participants attendus</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#3B82F6]" />
                  <span>Orateur Principal : <strong className="text-white">Prophète Jude-Christ Exaucé</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>Infoline / WhatsApp : <strong className="text-white">+229 47 14 60 37</strong></span>
                </p>
                <div className="pt-2">
                  <a
                    href={HERO_CONTENT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-2 px-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contacter sur WhatsApp (+229 47 14 60 37)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Key Event Badges */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg pt-1">
              <div className="bg-[#081426]/80 border border-white/10 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#A9B8D4] uppercase block">Date</span>
                  <span className="text-xs sm:text-sm font-black text-white">{INFO_CONTENT.dateValue}</span>
                </div>
              </div>

              <div className="bg-[#081426]/80 border border-white/10 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#3B82F6] shrink-0" />
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#A9B8D4] uppercase block">Heure</span>
                  <span className="text-xs sm:text-sm font-black text-white">{INFO_CONTENT.timeValue}</span>
                </div>
              </div>

              <div className="col-span-2 bg-[#081426]/80 border border-[#2563EB]/30 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#25D366] shrink-0" />
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#A9B8D4] uppercase block">Lieu & Format</span>
                  <span className="text-xs sm:text-sm font-black text-white">{INFO_CONTENT.locationValue}</span>
                </div>
              </div>
            </div>

          </div>


          {/* Right Column: FORM & FLOATING ANNOTATIONS */}
          <div 
            className="lg:col-span-6 relative flex flex-col items-center py-2 sm:py-6 px-1 sm:px-8"
          >
            {/* Top Floating Badge "REJOINDRE LA MASTERCLASS 👇" */}
            <div 
              className="mb-6 sm:mb-8 z-20 cursor-pointer"
            >
              <div className="bg-[#2563EB] hover:bg-[#3B82F6] text-white font-black text-[11px] sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-full uppercase tracking-wider flex items-center gap-2 sm:gap-2.5 shadow-[0_12px_30px_rgba(37,99,235,0.7)] border border-white/30 transition-all duration-300">
                <span>REJOINDRE LA MASTERCLASS</span>
                <span className="text-base sm:text-lg animate-bounce">👇</span>
              </div>
            </div>

            {/* Outer Form Wrapper */}
            <div className="relative w-full max-w-xl my-2 sm:my-4">

              {/* FLOATING ANNOTATION 1: TOP LEFT BADGE */}
              <div 
                className="hidden md:flex absolute -top-12 -left-4 sm:-top-16 sm:-left-16 md:-left-20 z-30 pointer-events-none flex-col"
              >
                <div className="bg-[#0B1628]/95 backdrop-blur-xl border-2 border-[#2563EB] text-white font-black text-xs sm:text-sm px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.4)] flex items-center gap-2 uppercase tracking-wide">
                  <span>REMPLISSEZ ICI !</span>
                  <span className="text-base">✍️</span>
                </div>

                <svg className="w-14 h-14 sm:w-16 sm:h-16 text-[#3B82F6] mt-1 ml-8 transform rotate-12 drop-shadow-[0_4px_10px_rgba(59,130,246,0.6)]" viewBox="0 0 60 60" fill="none">
                  <path d="M10,10 Q30,45 50,50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M38,48 L50,50 L46,38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* FLOATING ANNOTATION 2: BOTTOM RIGHT BADGE */}
              <div 
                className="hidden md:flex absolute -bottom-10 -right-4 sm:-bottom-14 sm:-right-16 md:-right-20 z-30 pointer-events-none flex-col items-end"
              >
                <svg className="w-16 h-14 sm:w-20 sm:h-16 text-[#60A5FA] mb-1 mr-8 transform -rotate-30 drop-shadow-[0_4px_10px_rgba(96,165,250,0.6)]" viewBox="0 0 70 50" fill="none">
                  <path d="M60,40 Q25,30 10,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M22,15 L10,10 L8,22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>

                <div className="bg-[#0B1628]/95 backdrop-blur-xl border-2 border-[#3B82F6] text-white font-black text-xs sm:text-sm px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.4)] flex items-center gap-2 uppercase tracking-wide">
                  <span>PLACES LIMITÉES !</span>
                  <span className="text-base">🔥</span>
                </div>
              </div>


              {/* MAIN CRISP REGISTRATION FORM CARD */}
              <div className="bg-white text-slate-900 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative border border-slate-100">
                
                {/* Form Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1.5 sm:mb-2">
                    Formulaire d'inscription
                  </h3>
                  <p className="text-xs sm:text-base text-slate-500 font-medium">
                    Inscrivez-vous en 30 secondes pour bloquer votre accès
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* PRÉNOM & NOM Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* PRÉNOM */}
                    <div>
                      <label htmlFor="reg-firstName" className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                        PRÉNOM
                      </label>
                      <input
                        id="reg-firstName"
                        type="text"
                        name="firstName"
                        placeholder="Ex: Cyprien"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border ${
                          errors.firstName ? 'border-red-500' : 'border-slate-200 focus:border-[#2563EB]'
                        } rounded-xl px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm sm:text-base text-slate-900 font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500 mt-1 font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* NOM */}
                    <div>
                      <label htmlFor="reg-lastName" className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                        NOM
                      </label>
                      <input
                        id="reg-lastName"
                        type="text"
                        name="lastName"
                        placeholder="Ex: MEVI"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border ${
                          errors.lastName ? 'border-red-500' : 'border-slate-200 focus:border-[#2563EB]'
                        } rounded-xl px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm sm:text-base text-slate-900 font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all`}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500 mt-1 font-bold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ADRESSE EMAIL */}
                  <div>
                    <label htmlFor="reg-email" className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                      ADRESSE EMAIL
                    </label>
                    <input
                      id="reg-email"
                      type="email"
                      name="email"
                      placeholder="Ex: sciencesmcv@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${
                        errors.email ? 'border-red-500' : 'border-slate-200 focus:border-[#2563EB]'
                      } rounded-xl px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm sm:text-base text-slate-900 font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* NUMÉRO WHATSAPP */}
                  <div>
                    <label htmlFor="reg-phone" className="block text-[11px] sm:text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                      NUMÉRO WHATSAPP (AVEC CODE PAYS)
                    </label>
                    <input
                      id="reg-phone"
                      type="tel"
                      name="phone"
                      placeholder="Ex: +229 47 14 60 37"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${
                        errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-[#2563EB]'
                      } rounded-xl px-3.5 py-3 sm:px-4 sm:py-3.5 text-sm sm:text-base text-slate-900 font-semibold placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Animated Callout Prompt above submit button */}
                  <div className="pt-2">
                    <motion.div 
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                      className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-extrabold text-[#2563EB] mb-2 uppercase tracking-wide text-center"
                    >
                      <span className="text-sm sm:text-base text-red-500">↙</span>
                      <span>CLIQUEZ CI-DESSOUS POUR VALIDER</span>
                      <span className="text-sm sm:text-base text-red-500">↘</span>
                    </motion.div>

                    {/* Primary High-Converting Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="light-sweep-container w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-extrabold text-base sm:text-xl py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl shadow-xl shadow-[#2563EB]/30 hover:shadow-2xl hover:shadow-[#2563EB]/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2 relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Traitement...
                        </span>
                      ) : (
                        <>
                          <span>JE SÉCURISE MA PLACE (2 000 FCFA)</span>
                          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy Footnote */}
                  <p className="text-[10px] sm:text-xs text-slate-500 text-center pt-2 leading-relaxed font-medium">
                    En vous inscrivant, vous acceptez de recevoir des emails et des informations concernant la masterclass.
                  </p>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

