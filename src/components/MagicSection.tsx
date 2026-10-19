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
        <div className="space-y-8 text-right max-w-3xl mx-auto">
          
          {/* First Text Block */}
          <div className="bg-white/95 rounded-3xl p-6 sm:p-8 md:p-10 border border-[#476653]/20 shadow-xs">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#982D49] font-display leading-relaxed">
              בבין לבין אנחנו מאמינות שתוכן טוב הוא רק חלק מהחוויה. הקסם נוצר במפגש בין הידע והכלים שאנחנו מביאות לבין הניסיון וחוכמת החיים של כל משתתפת.
            </p>
          </div>

          {/* Women Circle Image */}
          <div className="space-y-3">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2422]/60 via-transparent to-transparent flex items-end p-5 sm:p-6">
                <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                  מרחב נשי של הקשבה, שיתוף וצחוק משותף
                </p>
              </div>
            </div>
            <p className="text-center text-sm font-semibold text-[#476653]">
              מרחב נשי של הקשבה, שיתוף וצחוק משותף
            </p>
          </div>

          {/* Second Text Block: Authentic Connections & Principles */}
          <div className="bg-white/95 rounded-3xl p-6 sm:p-8 md:p-10 border border-[#476653]/20 shadow-xs space-y-5">
            <p className="text-base sm:text-lg md:text-xl text-[#2C2422]/90 leading-relaxed font-normal">
              נשים שלא בהכרח מכירות זו את זו נפגשות, השיחות נפתחות, הסיפורים מתחברים. לפעמים נולדת תובנה, לפעמים פשוט צוחקות יחד.
            </p>

            <div className="pt-4 border-t border-[#476653]/15 space-y-4">
              <p className="text-base sm:text-lg text-[#2C2422]/90 leading-relaxed">
                <strong className="text-xl sm:text-2xl font-bold text-[#982D49] font-display block mb-1">
                  וזו הייחודיות של בין לבין.
                </strong>
                אנחנו לא באות ללמד אותך איך לחיות את חייך, אלא להביא ידע, לפתוח שאלות, להציע נקודות מבט חדשות ולתת מקום לחוכמה שכל אחת מביאה איתה.
              </p>

              <div className="p-4 sm:p-5 bg-[#FAF1F3] rounded-2xl border border-[#D68B98]/30">
                <p className="text-base sm:text-lg text-[#982D49] font-bold leading-relaxed">
                  כך, לצד התוכן המקצועי, נרקמת חברותא נשית. מרחב להקשיב, לשתף, ללמוד זו מזו ולהרגיש חלק.
                </p>
              </div>

              <p className="text-base sm:text-lg font-bold text-[#476653] pt-1">
                ומי יודע? אולי גם להרוויח חברות חדשות להמשך הדרך.
              </p>
            </div>
          </div>

          {/* Bein Levein Logo Representation */}
          <div className="flex flex-col items-center justify-center py-2 text-center">
            <div className="bg-white/95 p-5 sm:p-7 rounded-3xl border border-[#D68B98]/30 shadow-xs max-w-[260px] sm:max-w-[300px] mx-auto flex items-center justify-center">
              <BeinLeveinLogo size={220} className="mx-auto" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MagicSection;
