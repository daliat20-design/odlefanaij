import React from 'react';
import { Quote, Heart } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  tag?: string;
  accent: 'burgundy' | 'sage';
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'לקחתי איתי את האהבה, מאור הפנים, החברויות החדשות, התכנים והידע, ובעיקר את הרצון להמשיך ולממש את היכולות שלי וליהנות מהדרך.',
    author: 'ענבל ס׳',
    tag: 'חברויות וצמיחה',
    accent: 'burgundy',
  },
  {
    quote: 'סדנה מושקעת, חווייתית ומוצלחת שהשאירה טעם של עוד. חברותא מעולה וצוות מדהים.',
    author: 'איילת',
    tag: 'חברותא וצוות',
    accent: 'sage',
  },
  {
    quote: 'למדתי שאני לא לבד בתהליך. פגשתי נשים מקסימות וחמות, חיכיתי בכל פעם למפגש הבא.',
    author: 'ענת י׳',
    tag: 'שייכות וחיבור',
    accent: 'sage',
  },
  {
    quote: 'תודה על האווירה המאפשרת, הנתינה האינסופית, המחשבה על הפרטים הקטנים, החיוך, החיבוק והתכנים המעניינים.',
    author: 'לימור ג׳',
    tag: 'אווירה ונתינה',
    accent: 'burgundy',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FAF4F0] border-b border-[#D68B98]/20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D68B98]/30 text-xs sm:text-sm font-bold text-[#476653] shadow-2xs mb-3">
            <Heart size={14} className="text-[#982D49] fill-[#982D49]" />
            <span>סדנאות "בין לבין"</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#982D49] font-display">
            משתתפות ממליצות מהלב
          </h2>
          <div className="w-16 h-0.5 bg-[#D68B98] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-right">
          {TESTIMONIALS.map((t, index) => {
            const isBurgundy = t.accent === 'burgundy';
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D68B98]/25 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Decorative Quote Icon */}
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${
                    isBurgundy ? 'bg-[#FAF1F3] text-[#982D49]' : 'bg-[#F2F6F3] text-[#476653]'
                  }`}
                >
                  <Quote size={20} className="rotate-180" />
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg md:text-xl text-[#2C2422]/90 font-medium leading-relaxed mb-6 font-display">
                  "{t.quote}"
                </p>

                {/* Author row */}
                <div className="pt-4 border-t border-[#D68B98]/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Monogram circle */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-xs ${
                        isBurgundy ? 'bg-[#982D49]' : 'bg-[#476653]'
                      }`}
                    >
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#2C2422] font-display">
                        {t.author}
                      </h4>
                      <p className="text-xs text-[#2C2422]/60 font-medium">
                        משתתפת בסדנאות "בין לבין"
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  {t.tag && (
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold hidden sm:inline-block ${
                        isBurgundy
                          ? 'bg-[#FAF1F3] text-[#982D49]'
                          : 'bg-[#F2F6F3] text-[#476653]'
                      }`}
                    >
                      {t.tag}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Banner */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-7 bg-[#FAF1F3] rounded-3xl border border-[#D68B98]/30 shadow-xs text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg font-bold text-[#982D49] font-display">
            מרחב שבו כל אישה מרגישה רצויה, שייכת, ומוקפת בהקשבה אמיתית
          </p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
