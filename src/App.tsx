import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy loaded below-the-fold sections
const AudienceSection = lazy(() => import('./components/AudienceSection').then(m => ({ default: m.AudienceSection })));
const ObstaclesSection = lazy(() => import('./components/ObstaclesSection').then(m => ({ default: m.ObstaclesSection })));
const SuccessRoadmapSection = lazy(() => import('./components/SuccessRoadmapSection').then(m => ({ default: m.SuccessRoadmapSection })));
const WhyJoinSection = lazy(() => import('./components/WhyJoinSection').then(m => ({ default: m.WhyJoinSection })));
const SpeakersSection = lazy(() => import('./components/SpeakersSection').then(m => ({ default: m.SpeakersSection })));
const TicketsSection = lazy(() => import('./components/TicketsSection').then(m => ({ default: m.TicketsSection })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const CountdownSection = lazy(() => import('./components/CountdownSection').then(m => ({ default: m.CountdownSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const scrollToTickets = () => {
    const element = document.getElementById('tickets') || document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030B1A] text-white flex flex-col font-['Sora'] selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      {/* Fixed Sticky Header */}
      <Navbar onReserveClick={scrollToTickets} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero (Accueil / Welcome) */}
        <Hero onReserveClick={scrollToTickets} />

        <Suspense fallback={<div className="min-h-[200px] bg-[#030B1A]" />}>
          {/* Section 2: Le Public Attendu */}
          <AudienceSection />

          {/* Section 3: Le Mur & Obstacles */}
          <ObstaclesSection onReserveClick={scrollToTickets} />

          {/* Section 4: La Voie du Succès */}
          <SuccessRoadmapSection onReserveClick={scrollToTickets} />

          {/* Section 5: Pourquoi participer ? */}
          <WhyJoinSection />

          {/* Section 6: Les Intervenants */}
          <SpeakersSection />

          {/* Section 7: Billeterie */}
          <TicketsSection />

          {/* Section 8: FAQ */}
          <FaqSection />

          {/* Section 9: Compte à Rebours */}
          <CountdownSection onReserveClick={scrollToTickets} />

          {/* Section 10: Contact */}
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
