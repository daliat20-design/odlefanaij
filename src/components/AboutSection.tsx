import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF1F3] border-b border-[#D68B98]/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-wider text-[#476653]">
            מהות התוכנית
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#982D49] font-display">
            אז מה מיוחד ב'עוֹד לְפָנַיִךְ'?
          </h2>
          <div className="w-16 h-0.5 bg-[#D68B98] mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative layout - spacious, elegant and pleasant to read */}
        <div className="space-y-6 text-right max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#2C2422] leading-relaxed">
            יצרנו תוכנית מותאמת לנשים מעל גיל 60, שמשלבת בין ידע מקצועי בנושאים רלוונטים לשלב חיים זה, שיחות פתוחות בגובה העיניים, ניסיון החיים שכל אחת מביאה איתה והזדמנות להכיר נשים שנמצאות בשלב דומה בחיים.
          </p>
          
          <div className="p-6 sm:p-8 bg-white/70 rounded-2xl border border-[#D68B98]/25 shadow-xs">
            <p className="text-base sm:text-lg text-[#476653] font-medium leading-relaxed">
              יש כאן מקום ללמוד דברים חדשים, לשמוע נקודות מבט אחרות, לשתף, להתייעץ, לפעמים גם פשוט לצחוק יחד.
            </p>
          </div>
        </div>

        {/* Highlighted Closing Principle */}
        <div className="mt-10 bg-white rounded-3xl p-7 sm:p-9 border border-[#D68B98]/30 shadow-xs text-center max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl font-bold text-[#982D49] font-display leading-snug">
            "כי בעינינו, החיבור בין תוכן טוב, שיחה מעניינת וחברותא נשית הוא זה שהופך את המפגשים למשהו הרבה יותר משמעותי מעוד הרצאה."
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
