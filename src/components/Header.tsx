import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ShareButton from './ShareButton.tsx';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F9F1EA]/95 backdrop-blur-md border-b border-[#D68B98]/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Zone 1: Brand Lockup with Bein Levein Logo & Subtitle */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 sm:gap-3 shrink min-w-0 hover:opacity-90 transition-opacity"
          aria-label="עוד לפנייך מבית בין לבין - חזרה לראש הדף"
        >
          {/* Logo of Bein Levein */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white/90 p-0.5 border border-[#476653]/20 shadow-2xs shrink-0 flex items-center justify-center">
            <img
              src="/bein-levein-logo.png"
              alt="לוגו בין לבין"
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('postimg.cc')) {
                  target.src = "https://i.postimg.cc/3x6PK00k/byn-lbyn-mrhb-ll'-rq'-(1).png";
                }
              }}
            />
          </div>

          {/* Typography: עוד לפנייך + מבית בין לבין תוכניות לנשים */}
          <div className="text-right min-w-0">
            <span className="block text-lg sm:text-2xl font-bold tracking-tight text-[#982D49] font-display leading-tight truncate">
              עוֹד לְפָנַיִךְ
            </span>
            <span className="block text-[10px] sm:text-xs text-[#476653] font-medium leading-tight truncate">
              מבית "בין לבין" · תוכניות לנשים
            </span>
          </div>
        </a>

        {/* Zone 2: Clean Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[15px] font-medium text-[#476653]">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#982D49] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            על התוכנית
          </button>
          <button
            onClick={() => scrollToSection('sessions')}
            className="hover:text-[#982D49] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            חמשת המפגשים
          </button>
          <button
            onClick={() => scrollToSection('why-bein-levein')}
            className="hover:text-[#982D49] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            סוד הקסם
          </button>
          <button
            onClick={() => scrollToSection('founders')}
            className="hover:text-[#982D49] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            הצוות המוביל
          </button>
          <button
            onClick={() => scrollToSection('schedule')}
            className="hover:text-[#982D49] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            כל הפרטים
          </button>
        </nav>

        {/* Zone 3: Primary Action + Share Button + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ShareButton
            variant="outline"
            text="שתפי חברה"
            size="sm"
            className="hidden md:inline-flex"
          />

          <button
            onClick={() => scrollToSection('contact')}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#982D49] hover:bg-[#7A2139] active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer min-h-[40px] flex items-center justify-center"
          >
            השאירי פרטים
          </button>

          {/* Mobile hamburger toggle (accessible 44x44 tap target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-[#476653] hover:text-[#982D49] focus:outline-none cursor-pointer rounded-lg hover:bg-black/5 transition-colors"
            aria-label="פתח תפריט ניווט"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Big friendly buttons for thumbs) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F1EA] border-b border-[#D68B98]/20 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 text-base font-medium text-[#476653]">
            <button
              onClick={() => scrollToSection('about')}
              className="text-right py-3 px-2 text-lg hover:text-[#982D49] hover:bg-white/50 rounded-xl transition-colors border-b border-[#D68B98]/10 cursor-pointer"
            >
              על התוכנית
            </button>
            <button
              onClick={() => scrollToSection('sessions')}
              className="text-right py-3 px-2 text-lg hover:text-[#982D49] hover:bg-white/50 rounded-xl transition-colors border-b border-[#D68B98]/10 cursor-pointer"
            >
              חמשת המפגשים
            </button>
            <button
              onClick={() => scrollToSection('why-bein-levein')}
              className="text-right py-3 px-2 text-lg hover:text-[#982D49] hover:bg-white/50 rounded-xl transition-colors border-b border-[#D68B98]/10 cursor-pointer"
            >
              סוד הקסם
            </button>
            <button
              onClick={() => scrollToSection('founders')}
              className="text-right py-3 px-2 text-lg hover:text-[#982D49] hover:bg-white/50 rounded-xl transition-colors border-b border-[#D68B98]/10 cursor-pointer"
            >
              הצוות המוביל
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="text-right py-3 px-2 text-lg hover:text-[#982D49] hover:bg-white/50 rounded-xl transition-colors border-b border-[#D68B98]/10 cursor-pointer"
            >
              פרטי התוכנית
            </button>
            
            <div className="pt-4 mt-2 space-y-2.5">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3.5 bg-[#982D49] text-white rounded-full font-bold text-center shadow-md text-base"
              >
                השאירי פרטים ונחזור אלייך
              </button>

              <ShareButton
                variant="secondary"
                text="שתפי חברה בווטסאפ"
                size="md"
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
