import React from 'react';
import OdLefanayichLogo from './logos/OdLefanayichLogo.tsx';
import ShareButton from './ShareButton.tsx';
import { Sparkles, ArrowDown, HeartHandshake } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const scrollToSessions = () => {
    const sessionsElem = document.getElementById('sessions');
    if (sessionsElem) {
      sessionsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden bg-[#F9F1EA] pt-6 pb-16 sm:pt-10 sm:pb-24 border-b border-[#D68B98]/20">
      {/* Delicate decorative background ambiance */}
      <div className="absolute top-0 right-0 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-[#D68B98]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#476653]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Opening: Logo + Hook Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          
          {/* Logo Showcase Column (On mobile: shows on top for instant brand recognition) */}
          <div className="lg:col-span-5 flex justify-center items-center py-2 lg:py-0 order-1 lg:order-2">
            <div className="relative group max-w-[260px] sm:max-w-[320px] lg:max-w-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D68B98]/25 to-[#476653]/15 blur-xl transform scale-95 group-hover:scale-105 transition-transform duration-500" />
              <OdLefanayichLogo
                size="100%"
                className="w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 mx-auto relative z-10 drop-shadow-md"
              />
            </div>
          </div>

          {/* Opening Hook Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 text-right order-2 lg:order-1">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-white/70 border border-[#D68B98]/30 text-[#476653] font-bold text-xs sm:text-sm shadow-2xs">
              <span>עוֹד לְפָנַיִךְ</span>
              <span className="text-[#D68B98]">·</span>
              <span>תוכנית לנשים 60+ מבית בין לבין</span>
            </div>

            {/* Main H1 Headline - Centered on mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-[#982D49] font-display leading-[1.22] tracking-tight text-balance text-center lg:text-right">
              מי אמר שאחרי גיל 60
              <span className="block mt-1 sm:mt-2 text-[#2C2422]">
                כבר קשה להפתיע אותך?
              </span>
            </h1>

            {/* Bold Sub-hook Callout */}
            <div className="p-4 sm:p-5 bg-white/80 rounded-2xl border-r-4 border-r-[#982D49] border border-[#D68B98]/30 shadow-xs">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#2C2422] font-display leading-snug">
                אנחנו דווקא חושבות שיש לא מעט דברים שתופתעי לגלות –{' '}
                <strong className="font-extrabold text-[#982D49] underline decoration-[#D68B98]/60 underline-offset-4">
                  בעיקר על עצמך
                </strong>
              </p>
            </div>

            {/* Introductory Life Transition Prose */}
            <p className="text-base sm:text-lg md:text-xl text-[#2C2422]/90 leading-relaxed font-normal">
              כי גם כשהחיים כבר לימדו אותך דבר או שניים, הם ממשיכים להשתנות. המשפחה, הגוף, מערכות היחסים, סדרי העדיפויות. יש דברים שאת כבר מכירה היטב, ויש כאלה שפתאום מעוררים שאלות חדשות.
            </p>

          </div>

        </div>

        {/* Narrative Core: בדיוק בשביל זה יצרנו את עוד לפנייך */}
        <div className="space-y-6 sm:space-y-8 text-right max-w-4xl mx-auto">
          
          {/* Program Announcement Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 border-2 border-[#D68B98]/35 shadow-sm space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-2.5 text-[#476653] font-bold text-sm sm:text-base">
              <Sparkles size={18} className="text-[#982D49]" />
              <span>החיבור המדויק לשלב החיים הנוכחי</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#982D49] font-display leading-snug">
              בדיוק בשביל זה יצרנו את <span className="underline decoration-[#D68B98]/50 decoration-wavy">"עוד לפנייך"</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#2C2422]/95 leading-relaxed font-medium">
              תוכנית של חמישה מפגשים המשלבת ידע מקצועי על נושאים שנוגעים לחיים שלך היום, התנסויות חווייתיות, שיחות פתוחות והיכרות עם נשים שנמצאות בשלב דומה בחיים.
            </p>
          </div>

          {/* Differentiating Highlight Card: לא עוד סדרת הרצאות */}
          <div className="p-6 sm:p-8 bg-[#FAF1F3] rounded-3xl border border-[#D68B98]/40 shadow-xs flex flex-col md:flex-row items-center gap-5 text-center md:text-right">
            <div className="w-14 h-14 rounded-2xl bg-[#982D49] text-white flex items-center justify-center shrink-0 shadow-xs">
              <HeartHandshake size={28} />
            </div>
            <div className="flex-1">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#982D49] font-display leading-relaxed">
                לא עוד סדרת הרצאות – אלא הזדמנות לשתף, לשאול, לצחוק, ללמוד מנשים אחרות ולגלות נקודות מבט חדשות.
              </p>
            </div>
          </div>

          {/* Inspiring Punchline: Centered strictly on mobile & desktop */}
          <div className="py-3 text-center w-full max-w-2xl mx-auto px-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#2C2422] font-display leading-relaxed text-center">
              <span className="block text-center">כי עם כל מה שכבר צברת בדרך,</span>
              <strong className="font-bold text-[#982D49] block mt-1.5 text-center">
                תארי לך כמה עוד אפשר לגלות יחד.
              </strong>
            </p>
          </div>

          {/* Engaging Action Row with Direct Scroll Cue to Sessions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-2xl mx-auto">
            
            {/* Primary Arrow Button: לגלות את נושאי המפגשים */}
            <button
              onClick={scrollToSessions}
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#982D49] hover:bg-[#7A2139] active:scale-[0.99] rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer min-h-[50px]"
            >
              <span>לגלות את נושאי המפגשים</span>
              <ArrowDown size={19} className="animate-bounce" />
            </button>

            {/* Interest CTA */}
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-[#476653] bg-white hover:bg-[#FAF1F3] hover:text-[#982D49] border border-[#476653]/30 rounded-full transition-all shadow-2xs min-h-[50px] flex items-center justify-center cursor-pointer"
            >
              השאירי פרטים ונחזור אלייך
            </button>

            {/* Share with a friend */}
            <ShareButton
              variant="pill"
              text="שתפי חברה"
              size="md"
              className="w-full sm:w-auto min-h-[50px] px-6"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
