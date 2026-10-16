import React from 'react';
import { Calendar, Clock, MapPin, Users, Sparkles, Tag, Bell } from 'lucide-react';
import { PROGRAM_DETAILS } from '../data/content.ts';

interface ScheduleSectionProps {
  onCtaClick: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#FAF0F2] border-b border-[#D68B98]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-wider text-[#476653]">
            לוח זמנים ופרטים טכניים
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#982D49] font-display">
            אז מתי נפגשות?
          </h2>
          <p className="mt-3 text-lg text-[#2C2422]/80">
            אנחנו שוקדות בימים אלה על גיבוש המחזור הבא – הנה כל מה שידוע כבר עכשיו
          </p>
          <div className="w-16 h-0.5 bg-[#D68B98] mx-auto mt-4 rounded-full" />
        </div>

        {/* Central Card with Main Details & Ready Placeholders */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#D68B98]/30 shadow-sm max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Opening Timeframe */}
            <div className="p-5 rounded-2xl bg-[#FAF1F3] border border-[#D68B98]/20 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#982D49]">
                  <Calendar size={18} />
                </div>
                <span className="text-xs font-bold text-[#476653]">פתיחת המחזור</span>
              </div>
              <div>
                <p className="text-xl font-bold text-[#982D49] font-display">
                  {PROGRAM_DETAILS.openingDate}
                </p>
                <p className="text-xs text-[#2C2422]/70 mt-1">
                  תאריך מדויק: <span className="font-medium text-[#476653]">{PROGRAM_DETAILS.specificDate}</span>
                </p>
              </div>
            </div>

            {/* Sessions Structure */}
            <div className="p-5 rounded-2xl bg-[#F2F6F3] border border-[#476653]/20 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#476653]">
                  <Clock size={18} />
                </div>
                <span className="text-xs font-bold text-[#476653]">מבנה ותדירות</span>
              </div>
              <div>
                <p className="text-xl font-bold text-[#476653] font-display">
                  {PROGRAM_DETAILS.totalSessions}
                </p>
                <p className="text-xs text-[#2C2422]/70 mt-1">
                  {PROGRAM_DETAILS.frequency} · {PROGRAM_DETAILS.sessionDuration}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="p-5 rounded-2xl bg-[#FAF4F0] border border-[#D68B98]/20 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#982D49]">
                  <MapPin size={18} />
                </div>
                <span className="text-xs font-bold text-[#476653]">מיקום המפגשים</span>
              </div>
              <div>
                <p className="text-xl font-bold text-[#982D49] font-display">
                  {PROGRAM_DETAILS.location}
                </p>
                <p className="text-xs text-[#2C2422]/70 mt-1">
                  חלל נעים, מרווח, נגיש ומזמין
                </p>
              </div>
            </div>

          </div>

          {/* Placeholders for upcoming finalized details */}
          <div className="mt-8 pt-8 border-t border-[#D68B98]/20 grid grid-cols-1 md:grid-cols-3 gap-5 text-right">
            
            {/* Group size */}
            <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#D68B98]/15">
              <div className="flex items-center gap-2 text-xs font-bold text-[#476653] mb-1">
                <Users size={15} />
                <span>גודל הקבוצה</span>
              </div>
              <p className="text-sm font-semibold text-[#2C2422]">
                {PROGRAM_DETAILS.groupSize}
              </p>
              <p className="text-xs text-[#2C2422]/60 mt-1">
                מרחב שיחה מאפשר וקרוב
              </p>
            </div>

            {/* Pricing */}
            <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#D68B98]/15">
              <div className="flex items-center gap-2 text-xs font-bold text-[#476653] mb-1">
                <Tag size={15} />
                <span>מחיר השתתפות</span>
              </div>
              <p className="text-sm font-semibold text-[#2C2422]">
                {PROGRAM_DETAILS.pricing}
              </p>
              <p className="text-xs text-[#2C2422]/60 mt-1">
                כולל כיבוד קל, תוכן וחוברת ליווי
              </p>
            </div>

            {/* Expert Speakers */}
            <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#D68B98]/15">
              <div className="flex items-center gap-2 text-xs font-bold text-[#476653] mb-1">
                <Sparkles size={15} />
                <span>נשות מקצוע אורחות</span>
              </div>
              <p className="text-sm font-semibold text-[#2C2422]">
                {PROGRAM_DETAILS.expertSpeakers}
              </p>
              <p className="text-xs text-[#2C2422]/60 mt-1">
                מומחיות מובילות מעולמות הבריאות, יחסים והתפתחות
              </p>
            </div>

          </div>

          {/* Notice & CTA */}
          <div className="mt-8 p-5 bg-[#FAF1F3] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-right">
              <Bell className="text-[#982D49] shrink-0" size={22} />
              <p className="text-sm sm:text-base text-[#2C2422]/90">
                רוצה להיות הראשונה שתקבל את המועד המדויק ומיקום המפגשים?
              </p>
            </div>
            <button
              onClick={onCtaClick}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#982D49] hover:bg-[#7A2139] active:scale-[0.98] rounded-full transition-all shrink-0 cursor-pointer shadow-xs"
            >
              שמרו לי מקום לעדכון
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
export default ScheduleSection;
