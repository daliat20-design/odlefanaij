import React from 'react';
import { SESSIONS_DATA } from '../data/content.ts';

interface SessionsSectionProps {
  onCtaClick: () => void;
}

export const SessionsSection: React.FC<SessionsSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="sessions" className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#D68B98]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold tracking-wider text-[#476653]">
            עולמות התוכן של התוכנית
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#982D49] font-display leading-tight text-balance">
            חמישה מפגשים. על מה שמשתנה, על מה שחשוב ועל מה שעוד אפשר
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2C2422]/80">
            נושאים הנוגעים בחיים עצמם
          </p>
          <div className="w-16 h-0.5 bg-[#D68B98] mx-auto mt-4 rounded-full" />
        </div>

        {/* 5 Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SESSIONS_DATA.map((session, index) => {
            const isLast = index === 4;
            return (
              <div
                key={session.tag}
                className={`relative rounded-2xl p-6 sm:p-7 border border-[#D68B98]/25 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${session.bgTint} ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Thematic Value Tag without sequential numbers */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-bold tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: session.accentColor }}
                    >
                      {session.tag}
                    </span>
                    <span className="text-xs text-[#476653] font-medium">
                      עוֹד לְפָנַיִךְ
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#982D49] font-display mb-3 leading-snug">
                    {session.title}
                  </h3>

                  {/* Topic Description */}
                  <p className="text-base text-[#2C2422]/90 leading-relaxed">
                    {session.description}
                  </p>
                </div>

                {/* Subtle bottom decorative accent */}
                <div className="pt-6 mt-6 border-t border-[#D68B98]/20 flex items-center justify-between text-xs font-medium text-[#476653]">
                  <span>ידע מקצועי · שיח פתוח</span>
                  <span className="text-[#982D49]">לפרטים נוספים ↓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA after the 5 sessions */}
        <div className="mt-12 sm:mt-14 text-center max-w-md mx-auto">
          <p className="text-base sm:text-lg text-[#476653] font-medium mb-4">
            רוצה לדעת מתי נפתח המחזור הקרוב?
          </p>
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-9 py-4 text-base sm:text-lg font-semibold text-white bg-[#982D49] hover:bg-[#7A2139] active:scale-[0.99] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[48px] flex items-center justify-center mx-auto"
          >
            לחצי כאן ונשוחח
          </button>
        </div>

      </div>
    </section>
  );
};

export default SessionsSection;
