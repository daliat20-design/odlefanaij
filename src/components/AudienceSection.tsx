import React from 'react';
import { Heart, Compass, Smile } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F9F1EA] border-b border-[#D68B98]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-sm font-semibold tracking-wider text-[#476653]">
          התאמה ושותפות
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#982D49] font-display">
          למי זה מתאים?
        </h2>
        <div className="w-16 h-0.5 bg-[#D68B98] mx-auto mt-4 rounded-full" />

        {/* Narrative */}
        <p className="mt-8 text-lg sm:text-xl text-[#2C2422]/90 leading-relaxed font-normal max-w-2xl mx-auto">
          לנשים מעל גיל 60 שאוהבות ללמוד, סקרניות להכיר דברים חדשים, מחפשות תוכן איכותי ורלוונטי לחייהן ומאמינות שתמיד יש מקום לעוד היכרות, עוד חוויה, עוד מחשבה טובה.
        </p>

        {/* 3 Pillars / Bullet points without clutter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 text-right">
          
          <div className="p-6 rounded-2xl bg-white/80 border border-[#D68B98]/20 shadow-xs flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-[#FAF1F3] text-[#982D49] flex items-center justify-center mb-3">
              <Compass size={20} />
            </div>
            <div>
              <h3 className="font-bold text-[#982D49] text-lg font-display mb-1">
                סקרנות ופתיחות
              </h3>
              <p className="text-sm text-[#2C2422]/80 leading-relaxed">
                רצון לשמוע זוויות חדשות, ללמוד על הגוף, היחסים והזמן.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-[#476653]/20 shadow-xs flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-[#F2F6F3] text-[#476653] flex items-center justify-center mb-3">
              <Heart size={20} />
            </div>
            <div>
              <h3 className="font-bold text-[#476653] text-lg font-display mb-1">
                חיבור וחברותא
              </h3>
              <p className="text-sm text-[#2C2422]/80 leading-relaxed">
                רצון לפגוש נשים נוספות בגילך, לשיחה פתוחה, אמיתית ומכילה.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-[#D68B98]/20 shadow-xs flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-[#FAF1F3] text-[#982D49] flex items-center justify-center mb-3">
              <Smile size={20} />
            </div>
            <div>
              <h3 className="font-bold text-[#982D49] text-lg font-display mb-1">
                הנאה וזמן לעצמך
              </h3>
              <p className="text-sm text-[#2C2422]/80 leading-relaxed">
                פסק זמן מהשגרה השבועית לטובת חוויה מעשירה ומפנקת.
              </p>
            </div>
          </div>

        </div>

        {/* Highlighted Quote Box */}
        <div className="mt-10 p-6 sm:p-8 bg-[#FAF1F3] rounded-3xl border border-[#D68B98]/30 max-w-2xl mx-auto shadow-xs">
          <p className="text-xl sm:text-2xl font-bold text-[#982D49] font-display leading-relaxed">
            "לא צריך להגיע עם שאלה גדולה או עם רצון לשנות את החיים."
          </p>
          <p className="text-base sm:text-lg text-[#476653] font-medium mt-2">
            מספיק לבוא עם קצת סקרנות ועם רצון לפגוש נשים נוספות.
          </p>
        </div>

      </div>
    </section>
  );
};
export default AudienceSection;
