import React from 'react';
import OdLefanayichLogo from './logos/OdLefanayichLogo.tsx';
import ShareButton from './ShareButton.tsx';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#F9F1EA] pt-6 pb-14 sm:pt-10 sm:pb-20 md:pt-14 md:pb-24 border-b border-[#D68B98]/20">
      {/* Delicate decorative background glow */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#D68B98]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#476653]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Logo Showcase Column (On mobile: shows on top for instant brand connection) */}
          <div className="lg:col-span-5 flex justify-center items-center py-2 lg:py-0 order-1 lg:order-2">
            <div className="relative group max-w-[260px] sm:max-w-[340px] lg:max-w-full">
              {/* Soft decorative radial ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D68B98]/20 to-[#476653]/10 blur-xl transform scale-95 group-hover:scale-105 transition-transform duration-500" />
              
              {/* Od Lefanayich Circular Logo */}
              <OdLefanayichLogo
                size="100%"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 mx-auto relative z-10 drop-shadow-md"
              />
            </div>
          </div>

          {/* Main Content Column (7 cols on desktop, right side in RTL) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 text-right order-2 lg:order-1">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 self-start text-[#476653] font-semibold text-xs sm:text-sm md:text-base">
              <span>תוכנית לנשים 60+</span>
              <span className="text-[#D68B98]">·</span>
              <span>מבית בין לבין</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-bold text-[#982D49] font-display leading-[1.25] tracking-tight text-balance">
              את כבר יודעת דבר או שניים על החיים...
              <span className="block mt-1.5 sm:mt-2 text-[#2C2422]">
                סקרנית לגלות מה עוד לפנייך?
              </span>
            </h1>

            {/* Staggered Prose Presentation */}
            <div className="space-y-3.5 sm:space-y-4 text-base sm:text-lg text-[#2C2422]/90 leading-relaxed font-normal">
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
            <div className="p-4 sm:p-6 bg-[#FAF1F3] rounded-2xl border border-[#D68B98]/30 shadow-xs text-center">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#982D49] font-display leading-snug">
                כי יש כל כך הרבה מאחורייך.
                <span className="block mt-1 sm:mt-1.5 text-[#982D49]">
                  אבל יש גם עוד הרבה לפנייך.
                </span>
              </p>
            </div>

            {/* Clear, Prominent CTA Button Group */}
            <div className="pt-2 flex flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#982D49] hover:bg-[#7A2139] active:scale-[0.99] rounded-full shadow-md hover:shadow-lg transition-all text-center cursor-pointer min-h-[48px] flex items-center justify-center"
              >
                מעניין אותי לשמוע עוד
              </button>
              <ShareButton
                variant="outline"
                text="שתפי חברה"
                size="md"
                className="w-full sm:w-auto min-h-[48px] px-6"
              />
              <a
                href="#sessions"
                className="w-full sm:w-auto px-5 py-3 text-sm sm:text-base font-medium text-[#476653] hover:text-[#982D49] hover:bg-white/60 rounded-full transition-all text-center min-h-[44px] flex items-center justify-center"
              >
                לגלות את נושאי המפגשים ↓
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
