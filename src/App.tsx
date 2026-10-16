/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import SessionsSection from './components/SessionsSection.tsx';
import SisterhoodSection from './components/SisterhoodSection.tsx';
import WhyBeinLeveinSection from './components/WhyBeinLeveinSection.tsx';
import FoundersSection from './components/FoundersSection.tsx';
import ScheduleSection from './components/ScheduleSection.tsx';
import AudienceSection from './components/AudienceSection.tsx';
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
        {/* Section 1: Hero / פתיחה */}
        <HeroSection onCtaClick={scrollToContact} />

        {/* Section 2: אז מהי בעצם "עוד לפנייך"? */}
        <AboutSection />

        {/* Section 3: חמישה מפגשים, חמישה עולמות תוכן */}
        <SessionsSection onCtaClick={scrollToContact} />

        {/* Section 4: החברותא הנשית (ויז'ואל אותנטי של נשים בשיחה חמה) */}
        <SisterhoodSection />

        {/* Section 5: למה דווקא בין לבין? (לוגו הבית ופילוסופיה) */}
        <WhyBeinLeveinSection />

        {/* Section 6: נעים להכיר, אנחנו דלית ואלסי */}
        <FoundersSection />

        {/* Section 7: אז מתי נפגשות? (לוח זמנים ומועדים) */}
        <ScheduleSection onCtaClick={scrollToContact} />

        {/* Section 8: למי זה מתאים? */}
        <AudienceSection />

        {/* Section 9: טופס התעניינות וחיבור לווטסאפ */}
        <InquiryFormSection />
      </main>

      {/* Footer with House Brand and Inquiries Management */}
      <Footer />
    </div>
  );
}
