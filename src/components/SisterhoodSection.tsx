import React from 'react';

export const SisterhoodSection: React.FC = () => {
  return (
    <section id="sisterhood" className="py-16 md:py-24 bg-[#EDF3EF] border-b border-[#476653]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-wider text-[#476653]">
            הקשר האנושי
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#982D49] font-display">
            ויש עוד משהו שקורה בין המפגשים...
          </h2>
          <div className="w-16 h-0.5 bg-[#476653] mx-auto mt-4 rounded-full opacity-60" />
        </div>

        {/* 2-Column Responsive Layout: Photo & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Authentic Circle Photo Card (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-sm border-2 border-white/90 bg-white group">
              <img
                src="/sisterhood-circle.png"
                alt="מעגל נשים חם ומחבק בסלון"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] md:h-[480px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('postimg.cc')) {
                    target.src = "https://i.postimg.cc/prf0zkZS/m'gl-nsym-hm-wmhbq-bslwn.png";
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2422]/50 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-sm sm:text-base font-medium">
                  מרחב שבו אפשר להקשיב, לשתף, לצחוק ולהרגיש שייכת
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Flow (6 cols) */}
          <div className="lg:col-span-6 bg-white/85 rounded-3xl p-6 sm:p-9 md:p-10 border border-[#476653]/20 shadow-xs space-y-5 text-right order-1 lg:order-2">
            
            <p className="text-lg sm:text-xl text-[#2C2422]/95 leading-relaxed font-normal">
              בהתחלה מגיעות נשים שלא בהכרח מכירות זו את זו.
            </p>

            <p className="text-base sm:text-lg text-[#2C2422]/85 leading-relaxed font-normal">
              כל אחת עם הסיפור שלה, עם הניסיון שצברה, עם הדברים שמעסיקים אותה.
            </p>

            <p className="text-base sm:text-lg text-[#2C2422]/85 leading-relaxed font-normal">
              לאט לאט השיחות נפתחות. מישהי משתפת במשהו שנוגע באחרות, מישהי מביאה זווית שלא חשבנו עליה. לפעמים נולדת תובנה, לפעמים פשוט צוחקות יחד.
            </p>

            <div className="p-5 sm:p-6 bg-[#FAF2F4] rounded-2xl border border-[#D68B98]/30 my-3">
              <p className="text-lg sm:text-xl font-bold text-[#982D49] font-display leading-snug">
                כך, לצד התוכן המקצועי, מתפתחת גם חברותא נשית.
              </p>
              <p className="text-sm sm:text-base text-[#476653] font-medium mt-1">
                מרחב שבו אפשר להקשיב, לשתף, ללמוד זו מזו ולהרגיש חלק.
              </p>
            </div>

            <p className="text-lg sm:text-xl font-semibold text-[#982D49] font-display pt-1">
              ומי יודע? אולי גם להרוויח חברות חדשות להמשך הדרך.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SisterhoodSection;
