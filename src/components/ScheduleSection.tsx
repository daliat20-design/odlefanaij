import React from 'react';
import { Calendar, MapPin, Clock, CreditCard, Sparkles, Gift, Users2, AlertCircle } from 'lucide-react';
import { PROGRAM_DETAILS } from '../data/content.ts';

interface ScheduleSectionProps {
  onCtaClick: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#FAF0F2] border-b border-[#D68B98]/20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-wider text-[#476653]">
            מידע, מועדים והרשמה
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#982D49] font-display">
            כל הפרטים שכדאי לדעת
          </h2>
          <div className="w-16 h-0.5 bg-[#D68B98] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Main Core Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-right mb-10">
          
          {/* 1. מתי מתחילות? */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D68B98]/25 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF1F3] text-[#982D49] flex items-center justify-center shrink-0">
                  <Calendar size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#982D49] font-display">
                  מתי מתחילות?
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[#2C2422]/90 leading-relaxed font-normal">
                {PROGRAM_DETAILS.openingDetails}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D68B98]/15 flex items-center gap-2 text-xs font-semibold text-[#476653]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#476653]" />
              <span>ימי המפגשים והשעות המדויקות יימסרו לנרשמות מראש</span>
            </div>
          </div>

          {/* 2. איפה נפגשות? */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D68B98]/25 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F2F6F3] text-[#476653] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#476653] font-display">
                  איפה נפגשות?
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[#2C2422]/90 leading-relaxed font-normal">
                {PROGRAM_DETAILS.locationDetails}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#476653]/15 flex items-center gap-2 text-xs font-semibold text-[#476653]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#476653]" />
              <span>חלל אינטימי, נעים, נגיש ומזמין</span>
            </div>
          </div>

          {/* 3. כמה מפגשים? */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D68B98]/25 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F2F6F3] text-[#476653] flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#476653] font-display">
                  כמה מפגשים?
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[#2C2422]/90 leading-relaxed font-normal">
                {PROGRAM_DETAILS.sessionsDetails}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#476653]/15 flex items-center gap-2 text-xs font-semibold text-[#476653]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#476653]" />
              <span>משלב תוכן מקצועי, שיח חופשי וכיבוד קל מפנק</span>
            </div>
          </div>

          {/* 4. כמה זה עולה? */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D68B98]/25 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF1F3] text-[#982D49] flex items-center justify-center shrink-0">
                  <CreditCard size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#982D49] font-display">
                  כמה זה עולה?
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-base sm:text-lg text-[#2C2422] font-semibold">
                  150 ₪ למפגש, סה"כ <span className="text-[#982D49] font-bold text-xl sm:text-2xl">750 ₪ לסדרה המלאה</span>.
                </p>
                <p className="text-sm sm:text-base text-[#2C2422]/85 leading-relaxed font-normal">
                  {PROGRAM_DETAILS.registrationNote}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D68B98]/15 flex items-center gap-2 text-xs font-semibold text-[#982D49]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#982D49]" />
              <span>הסדרה כוללת את כל חמשת המפגשים והחומרים</span>
            </div>
          </div>

        </div>

        {/* Special Benefits Section: ויש גם הטבות מיוחדות! */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 md:p-10 border-2 border-[#D68B98]/40 shadow-sm relative overflow-hidden mb-8 text-right">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-[#982D49] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles size={22} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#982D49] font-display">
                ויש גם הטבות מיוחדות!
              </h3>
              <p className="text-xs sm:text-sm text-[#476653] font-medium">
                הזדמנויות בלעדיות לנרשמות מוקדם ולבאות בזוג
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Benefit 1: Happy Hour */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF1F3] border border-[#D68B98]/30 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#982D49] text-white">
                    <Gift size={13} />
                    <span>הטבת Happy Hour</span>
                  </span>
                  <span className="text-xs font-bold text-[#982D49]">עד 30.11.2026</span>
                </div>
                <h4 className="text-lg font-bold text-[#982D49] font-display">
                  לרגל חודש ההוקרה לאזרחים ותיקים
                </h4>
                <p className="text-base text-[#2C2422]/90 leading-relaxed mt-2">
                  לנרשמות עד 30.11.2026 מחכה <strong className="text-[#982D49] font-bold">מפגש בונוס במתנה ללא עלות !</strong>
                </p>
              </div>
            </div>

            {/* Benefit 2: חברה מביאה חברה */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F2F6F3] border border-[#476653]/30 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#476653] text-white">
                    <Users2 size={13} />
                    <span>חברה מביאה חברה</span>
                  </span>
                  <span className="text-xs font-bold text-[#476653]">5% הנחה</span>
                </div>
                <h4 className="text-lg font-bold text-[#476653] font-display">
                  חברה מביאה חברה
                </h4>
                <p className="text-base text-[#2C2422]/90 leading-relaxed mt-2">
                  כי חוויות טובות כיף לחלוק! נרשמות יחד עם חברה? <strong className="text-[#476653] font-bold">שתיכן נהנות מהנחה של 5%</strong> ממחיר הסדרה.
                </p>
              </div>
            </div>

          </div>

          {/* Limited Spots Note */}
          <div className="mt-6 p-4 rounded-2xl bg-[#FAF6F2] border border-[#D68B98]/20 flex items-center gap-3 text-right">
            <AlertCircle className="text-[#982D49] shrink-0" size={20} />
            <p className="text-sm sm:text-base text-[#2C2422]/90 font-medium">
              <strong className="text-[#982D49] font-bold">מספר המקומות מוגבל</strong>, כדי לשמור על האווירה האינטימית והאישית שמאפיינת את המפגשים.
            </p>
          </div>

          {/* Direct CTA inside the card */}
          <div className="mt-6 pt-5 border-t border-[#D68B98]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-[#476653] font-medium text-center sm:text-right">
              רוצה להבטיח את מקומך וליהנות מהטבת ה-Happy Hour?
            </p>
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base font-bold text-white bg-[#982D49] hover:bg-[#7A2139] active:scale-[0.98] rounded-full transition-all shrink-0 cursor-pointer shadow-md min-h-[46px] flex items-center justify-center text-center"
            >
              השאירי פרטים לקבלת ההטבה
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;
