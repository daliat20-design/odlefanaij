import React from 'react';
import BeinLeveinLogo from './logos/BeinLeveinLogo.tsx';

export const WhyBeinLeveinSection: React.FC = () => {
  return (
    <section id="why-bein-levein" className="py-16 md:py-24 bg-[#F9F3F0] border-b border-[#D68B98]/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Brand Logo Presentation (5 cols on desktop) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center order-2 md:order-1">
            <div className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-[#D68B98]/30 shadow-xs max-w-[300px] sm:max-w-[340px] mx-auto flex items-center justify-center">
              <BeinLeveinLogo size={260} className="mx-auto" />
            </div>
          </div>

          {/* Narrative & Philosophy (7 cols on desktop) */}
          <div className="md:col-span-7 space-y-6 text-right order-1 md:order-2">
            
            <div>
              <span className="text-sm font-semibold tracking-wider text-[#476653]">
                הרוח והתפיסה
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-[#982D49] font-display">
                למה דווקא בין לבין?
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#2C2422]/90 leading-relaxed">
              <p className="font-medium text-[#982D49] text-lg sm:text-xl">
                כי אנחנו מאמינות שתוכן טוב הוא רק חלק מהחוויה.
              </p>
              <p>
                בין לבין נולדה מתוך ההבנה שנשים בכל שלב בחיים זקוקות לא רק לידע ולכלים, אלא גם להזדמנויות למפגש משמעותי עם נשים אחרות.
              </p>
              <p>
                לכן התוכניות שלנו משלבות בין עולמות תוכן מגוונים, נשות מקצוע, שיח בגובה העיניים וחברותא נשית.
              </p>
              <p>
                אנחנו לא באות ללמד אותך איך נכון לחיות את חייך. אנחנו מביאות ידע, פותחות שאלות, מזמינות להתבונן מזוויות חדשות ונותנות מקום גם לחוכמת החיים שכל משתתפת מביאה איתה.
              </p>
            </div>

            {/* Central Highlighted Quote */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl border-r-4 border-r-[#982D49] border border-[#D68B98]/30 shadow-xs">
              <p className="text-lg sm:text-xl font-bold text-[#982D49] font-display leading-snug">
                "כי לפעמים הדבר הכי משמעותי שאת לוקחת ממפגש הוא דווקא משהו שלא היה כתוב בתוכנית."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default WhyBeinLeveinSection;
