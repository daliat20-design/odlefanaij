/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import SessionsSection from './components/SessionsSection.tsx';
import MagicSection from './components/MagicSection.tsx';
import FoundersSection from './components/FoundersSection.tsx';
import TestimonialsSection from './components/TestimonialsSection.tsx';
import ScheduleSection from './components/ScheduleSection.tsx';
import InquiryFormSection from './components/InquiryFormSection.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F1EA] text-[#2C2422] selection:bg-[#982D49]/15 selection:text-[#982D49]">
      {/* 3-Zone Clean Top Navigation */}
      <Header />

      <main className="flex-1">
        {/* Section 1: פתיחה ומהות התוכנית (עוֹד לְפָנַיִךְ) */}
        <HeroSection onCtaClick={scrollToContact} />

        {/* Section 2: חמישה מפגשים, חמישה עולמות תוכן */}
        <SessionsSection onCtaClick={scrollToContact} />

        {/* Section 4: מה סוד הקסם? (שילוב החברותא, התמונה, הייחודיות ולוגו בין לבין) */}
        <MagicSection />

        {/* Section 4: נעים להכיר, אנחנו דלית ואלסי */}
        <FoundersSection />

        {/* Section 5: המלצות מסדנאות קודמות */}
        <TestimonialsSection />

        {/* Section 6: כל הפרטים שכדאי לדעת (לוח זמנים, מועדים והטבות) */}
        <ScheduleSection onCtaClick={scrollToContact} />

        {/* Section 8: טופס התעניינות וחיבור לווטסאפ */}
        <InquiryFormSection />
      </main>

      {/* Footer with House Brand and Inquiries Management */}
      <Footer />
    </div>
  );
}
