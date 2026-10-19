import React from 'react';
import BeinLeveinLogo from './logos/BeinLeveinLogo.tsx';

export const MagicSection: React.FC = () => {
  return (
    <section id="why-bein-levein" className="py-16 md:py-24 bg-[#EDF3EF] border-b border-[#476653]/15 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold tracking-wider text-[#476653]">
            הייחודיות והחוויה
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#982D49] font-display">
            מה סוד הקסם?
          </h2>
          <div className="w-16 h-0.5 bg-[#476653] mx-auto mt-4 rounded-full opacity-60" />
        </div>

        {/* Narrative Flow */}
        <div className="space-y-8 text-right">
          
          {/* First Text Block */}
          <div className="bg-white/90 rounded-3xl p-6 sm:p-8 md:p-10 border border-[#476653]/20 shadow-xs">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#2C2422] leading-relaxed">
              אנחנו מאמינות שתוכן טוב הוא רק חלק מהחוויה. הקסם האמיתי נוצר במפגש שבין הידע והכלים שאנחנו מביאות, לבין הניסיון, הסיפורים וחוכמת החיים שכל אישה מביאה איתה.
            </p>
          </div>

          {/* Women Circle Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-sm border-2 border-white/90 bg-white group max-w-3xl mx-auto">
            <img
              src="/sisterhood-circle.png"
              alt="מעגל נשים חם ומחבק בסלון"
              referrerPolicy="no-referrer"
              className="w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover group-hover:scale-[1.01] transition-transform duration-500"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('postimg.cc')) {
                  target.src = "https://i.postimg.cc/prf0zkZS/m'gl-nsym-hm-wmhbq-bslwn.png";
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2422]/50 via-transparent to-transparent flex items-end p-5 sm:p-6">
              <p className="text-white text-sm sm:text-base font-medium">
                מרחב נשי של הקשבה, שיתוף וצחוק משותף
              </p>
            </div>
          </div>

          {/* Second Text Block: How the conversations open up */}
          <div className="bg-white/90 rounded-3xl p-6 sm:p-8 md:p-10 border border-[#476653]/20 shadow-xs space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-[#2C2422]/90 leading-relaxed font-normal">
              בהתחלה מגיעות נשים שלא בהכרח מכירות זו את זו. כל אחת עם הסיפור שלה, הניסיון שצברה והדברים שמעסיקים אותה. לאט לאט השיחות נפתחות. מישהי משתפת במשהו שנוגע באחרות, מישהי מביאה זווית שלא חשבנו עליה. לפעמים נולדת תובנה, לפעמים פשוט צוחקות יחד.
            </p>

            <div className="pt-4 border-t border-[#476653]/15 space-y-3">
              <p className="text-xl sm:text-2xl font-bold text-[#982D49] font-display">
                וזו בדיוק הייחודיות של בין לבין.
              </p>
              <p className="text-base sm:text-lg text-[#2C2422]/90 leading-relaxed">
                אנחנו לא באות ללמד אותך איך נכון לחיות את חייך.
              </p>
              <p className="text-base sm:text-lg text-[#2C2422]/90 leading-relaxed">
                אנחנו מביאות ידע, פותחות שאלות ומזמינות להתבונן מזוויות חדשות, אבל לא פחות חשוב לנו לתת מקום לחוכמת החיים שכל אחת מביאה איתה.
              </p>
              <p className="text-base sm:text-lg text-[#476653] font-medium leading-relaxed">
                כך, לצד התוכן המקצועי, מתפתחת גם חברותא נשית. מרחב שבו אפשר להקשיב, לשתף, ללמוד זו מזו ולהרגיש חלק.
              </p>
              <p className="text-base sm:text-lg font-semibold text-[#982D49] pt-1">
                ומי יודע? אולי גם להרוויח חברות חדשות להמשך הדרך.
              </p>
            </div>
          </div>

          {/* Bein Levein Logo Representation */}
          <div className="flex flex-col items-center justify-center py-2 text-center">
            <div className="bg-white/90 p-5 sm:p-7 rounded-3xl border border-[#D68B98]/30 shadow-xs max-w-[260px] sm:max-w-[300px] mx-auto flex items-center justify-center">
              <BeinLeveinLogo size={220} className="mx-auto" />
            </div>
          </div>

          {/* Central Highlighted Quote */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border-r-4 border-r-[#982D49] border border-[#D68B98]/35 shadow-xs text-center max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#982D49] font-display leading-snug">
              "כי לפעמים הדבר הכי משמעותי שאת לוקחת ממפגש הוא דווקא משהו שלא היה כתוב בתוכנית."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MagicSection;
