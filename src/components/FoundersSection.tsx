import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_WHATSAPP } from '../data/content.ts';

export const FoundersSection: React.FC = () => {
  const dalitWhatsAppUrl = `https://wa.me/${CONTACT_WHATSAPP.dalit.cleanNumber}?text=${CONTACT_WHATSAPP.dalit.message}`;
  const elsieWhatsAppUrl = `https://wa.me/${CONTACT_WHATSAPP.elsie.cleanNumber}?text=${CONTACT_WHATSAPP.elsie.message}`;

  return (
    <section id="founders" className="py-16 md:py-24 bg-[#FAF6F2] border-b border-[#D68B98]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-wider text-[#476653]">
            מי עומדות מאחורי התוכנית
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#982D49] font-display">
            נעים להכיר, אנחנו דלית ואלסי
          </h2>
          <p className="mt-3 text-lg text-[#2C2422]/80">
            שותפות לדרך ומייסדות "בין לבין" – מרחבים, תוכניות וחוויות לנשים
          </p>
          <div className="w-16 h-0.5 bg-[#D68B98] mx-auto mt-4 rounded-full" />
        </div>

        {/* Joint Portrait Frame with Real Photo */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white p-5 sm:p-7 rounded-3xl border border-[#D68B98]/30 shadow-sm relative overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-[#D68B98]/25 bg-[#FAF1F3]">
              <img
                src="/dalit-and-elsie.png"
                alt="דלית כורה ואלסי זיסלמן - מייסדות בין לבין"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('postimg.cc')) {
                    target.src = "https://i.postimg.cc/T2VW8BH6/hbrwt-b'wr-hmym-bslwn-mwdrny.png";
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2422]/65 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    דלית כורה & אלסי זיסלמן
                  </h3>
                  <p className="text-sm text-white/90 font-medium mt-0.5">
                    מייסדות ושותפות בבית "בין לבין"
                  </p>
                </div>
              </div>
            </div>

            {/* Joint Introduction Text */}
            <div className="mt-6 text-right space-y-3 text-base sm:text-lg text-[#2C2422]/90 leading-relaxed">
              <p>
                הקמנו את <span className="font-semibold text-[#982D49]">"בין לבין"</span> מתוך תשוקה אמיתית לייצר עבור נשים מרחבי מפגש מעוררי השראה, שמחברים בין ידע מקצועי מעמיק לחום אנושי, הקשבה ושותפות.
              </p>
              <p>
                אנחנו פועלות יחד כצוות מוביל, מתוך כבוד רב לניסיון החיים של כל אישה שמצטרפת אלינו, ומתוך אמונה שבכל גיל ובכל שלב יש עוד רבדים לגלות, להתפתח וליהנות מהם.
              </p>
            </div>
          </div>
        </div>

        {/* Individual Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Dalit Kora Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D68B98]/20 shadow-xs text-right space-y-4 flex flex-col justify-between">
            <div>
              <div className="border-b border-[#D68B98]/15 pb-4 mb-4">
                <h4 className="text-2xl font-bold text-[#982D49] font-display">
                  דלית כורה
                </h4>
                <p className="text-sm text-[#476653] font-semibold mt-1">
                  הוגה ומובילת התוכניות
                </p>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#2C2422]/85 leading-relaxed">
                <p>
                  מתמחה בהובלת פרויקטים, בפיתוח תוכניות ובתרגום רעיונות לתהליכים יישומיים, מדויקים וברורים. לאורך השנים צברה ניסיון בהובלת קהילות נשים, בפיתוח תוכן ובהפקת תוכניות ואירועים, מתוך היכרות עמוקה עם הדרך שבה תוכן, שיח וחוויה מתחברים לתהליך שלם.
                </p>
                <p className="font-medium text-[#476653]">
                  ב"בין לבין" דלית מחזיקה את התמונה הגדולה ואת הפרטים הקטנים, ומובילה את התוכניות משלב הרעיון, דרך הפיתוח והדיוק ועד למימוש.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D68B98]/15">
              <a
                href={dalitWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF1F3] hover:bg-[#982D49] text-[#982D49] hover:text-white rounded-full text-sm font-bold transition-all w-full justify-center border border-[#982D49]/20 shadow-2xs cursor-pointer"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>שיחה עם דלית בווטסאפ</span>
              </a>
            </div>
          </div>

          {/* Elsie Ziselman Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#476653]/20 shadow-xs text-right space-y-4 flex flex-col justify-between">
            <div>
              <div className="border-b border-[#476653]/15 pb-4 mb-4">
                <h4 className="text-2xl font-bold text-[#476653] font-display">
                  אלסי זיסלמן
                </h4>
                <p className="text-sm text-[#982D49] font-semibold mt-1">
                  מנחה ומרצה, טריינרית NLP
                </p>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#2C2422]/85 leading-relaxed">
                <p>
                  מלווה תהליכים אישיים וקבוצתיים של שינוי, התבוננות וקבלת החלטות. בעלת ניסיון בהנחיית קבוצות ובעבודה עם נשים, ומביאה לתוכניות כלים מעולם ה־NLP לצד יכולת להוביל שיח שמאפשר להתבונן, לדייק ולנוע קדימה.
                </p>
                <p className="font-medium text-[#476653]">
                  ב"בין לבין" אלסי מובילה את תהליכי ההתבוננות והשיח, ומסייעת לנשים לתרגם תובנות לבחירות ולצעדים מעשיים.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#476653]/15">
              <a
                href={elsieWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F2F6F3] hover:bg-[#476653] text-[#476653] hover:text-white rounded-full text-sm font-bold transition-all w-full justify-center border border-[#476653]/20 shadow-2xs cursor-pointer"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>שיחה עם אלסי בווטסאפ</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FoundersSection;
