import React from 'react';
import OdLefanayichLogo from './logos/OdLefanayichLogo.tsx';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#F9F1EA] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#D68B98]/20">
      {/* Delicate decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D68B98]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#476653]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Content Column (7 cols on desktop, right side in RTL) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-right">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 self-start text-[#476653] font-medium text-sm md:text-base">
              <span>תוכנית לנשים 60+</span>
              <span className="text-[#D68B98]">·</span>
              <span>מבית בין לבין</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#982D49] font-display leading-[1.2] tracking-tight text-balance">
              עברת לא מעט בחיים
              <span className="block mt-2 text-[#2C2422]">
                ומה עוד לפנייך?
              </span>
            </h1>

            {/* Staggered Prose Presentation */}
            <div className="space-y-4 text-base sm:text-lg text-[#2C2422]/90 leading-relaxed font-normal">
              <p>
                יש גיל שבו את כבר יודעת דבר או שניים על החיים.
              </p>
              <p>
                צברת ניסיון, התמודדת, גידלת, בנית, שינית, בחרת. יש דברים שאת כבר מכירה היטב, ויש כאלה שדווקא עכשיו מעוררים שאלות חדשות.
              </p>
              <p className="text-[#476653] font-medium">
                המשפחה משנה צורה, הגוף מבקש תשומת לב אחרת, מערכות היחסים מתפתחות, לפעמים גם סדרי העדיפויות משתנים.
              </p>
              <p>
                ובתוך כל אלה, יש גם אותך. עם מה שחשוב לך היום, עם הסקרנות שעוד קיימת, עם הרצון להרגיש חיונית, שייכת, מעורבת ובעיקר להמשיך ליהנות ממה שיש לחיים להציע.
              </p>
            </div>

            {/* Highlighted Closing Sentence */}
            <div className="p-5 sm:p-6 bg-[#FAF1F3] rounded-2xl border border-[#D68B98]/30 shadow-xs">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#982D49] font-display leading-snug">
                כי יש כל כך הרבה מאחורייך. אבל יש גם עוד הרבה לפנייך.
              </p>
            </div>

            {/* Clear, Prominent CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onCtaClick}
                className="px-8 py-4 text-base sm:text-lg font-semibold text-white bg-[#982D49] hover:bg-[#7A2139] active:scale-[0.99] rounded-full shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
              >
                מעניין אותי לשמוע עוד
              </button>
              <a
                href="#sessions"
                className="px-6 py-3.5 text-sm sm:text-base font-medium text-[#476653] hover:text-[#982D49] hover:bg-white/60 rounded-full transition-all text-center"
              >
                לגלות את נושאי המפגשים ↓
              </a>
            </div>

          </div>

          {/* Logo Showcase Column (5 cols on desktop, left side in RTL) */}
          <div className="lg:col-span-5 flex justify-center items-center py-4 lg:py-0">
            <div className="relative group max-w-[340px] sm:max-w-[400px] lg:max-w-full">
              {/* Soft decorative radial ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D68B98]/20 to-[#476653]/10 blur-xl transform scale-95 group-hover:scale-105 transition-transform duration-500" />
              
              {/* Od Lefanayich Circular Logo */}
              <OdLefanayichLogo
                size="100%"
                className="w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 relative z-10 mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;
