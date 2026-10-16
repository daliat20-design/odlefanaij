import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Lock } from 'lucide-react';
import { InquiryLead } from '../types/index.ts';
import { CONTACT_WHATSAPP } from '../data/content.ts';

const LEADS_STORAGE_KEY = 'od_lefanayich_inquiries';

export const InquiryFormSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consentUpdates, setConsentUpdates] = useState(true);

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedLead, setSavedLead] = useState<InquiryLead | null>(null);

  const validatePhone = (val: string) => {
    const cleaned = val.replace(/[\s-]/g, '');
    return /^(05\d{8}|0[23489]\d{7})$/.test(cleaned);
  };

  const validateEmail = (val: string) => {
    if (!val) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { fullName?: string; phone?: string; email?: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'השם קצר מדי';
    }

    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
    } else if (!validatePhone(phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון ישראלי תקין (לדוגמה: 050-1234567)';
    }

    if (email.trim() && !validateEmail(email.trim())) {
      newErrors.email = 'כתובת הדוא"ל אינה תקינה';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const newLead: InquiryLead = {
        id: 'lead_' + Date.now(),
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        message: message.trim() || undefined,
        consentUpdates,
        createdAt: new Date().toISOString(),
      };

      const existing: InquiryLead[] = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
      existing.unshift(newLead);
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existing));

      window.dispatchEvent(new Event('leads_updated'));

      setSavedLead(newLead);
      setSubmitted(true);
      setIsSubmitting(false);
    } catch {
      setIsSubmitting(false);
      setErrors({ phone: 'אירעה שגיאה בשמירת הנתונים. אנא נסי שוב או פני ישירות בווטסאפ.' });
    }
  };

  const resetForm = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setSavedLead(null);
  };

  const dalitWhatsAppUrl = `https://wa.me/${CONTACT_WHATSAPP.dalit.cleanNumber}?text=${CONTACT_WHATSAPP.dalit.message}`;
  const elsieWhatsAppUrl = `https://wa.me/${CONTACT_WHATSAPP.elsie.cleanNumber}?text=${CONTACT_WHATSAPP.elsie.message}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#982D49] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#476653]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold tracking-wider text-[#F4E2E5]">
            יצירת קשר והרשמה מוקדמת
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
            מסקרן אותך? נשמח להכיר.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
            אנחנו מתכננות את פתיחת המחזור הבא של "עוד לפנייך".
            <br />
            התאריך והמיקום יפורסמו בהמשך, אבל כבר עכשיו אפשר להשאיר פרטים, לשמוע עוד על התוכנית ולהיות בין הראשונות שיקבלו עדכון.
          </p>
        </div>

        {/* Lead Capture Form Card */}
        <div className="bg-[#FFFCF8] text-[#2C2422] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-white/20 max-w-xl mx-auto">
          
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#EBF1ED] text-[#476653] mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#982D49] font-display">
                תודה רבה, {savedLead?.fullName}!
              </h3>
              <p className="text-base text-[#2C2422]/85 leading-relaxed max-w-md mx-auto">
                פרטייך נשמרו בהצלחה במערכת. נחזור אלייך בהקדם באהבה עם כל הפרטים לקראת פתיחת המחזור הבא של "עוד לפנייך".
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={dalitWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#476653] hover:bg-[#385242] text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>שיחה עם דלית בווטסאפ</span>
                </a>
                <a
                  href={elsieWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#476653] hover:bg-[#385242] text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>שיחה עם אלסי בווטסאפ</span>
                </a>
              </div>

              <div className="pt-3">
                <button
                  onClick={resetForm}
                  className="text-xs text-[#2C2422]/60 hover:text-[#982D49] underline cursor-pointer"
                >
                  השארת פרטים למשתתפת נוספת
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-right" noValidate>
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#2C2422] mb-1">
                  שם מלא <span className="text-[#982D49]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="לדוגמה: שרה ישראלי"
                  className={`w-full px-4 py-2.5 rounded-xl border text-base bg-white focus:outline-none transition-all ${
                    errors.fullName
                      ? 'border-red-400 ring-2 ring-red-100'
                      : 'border-[#D68B98]/40 focus:border-[#982D49] focus:ring-2 focus:ring-[#982D49]/10'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={13} />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#2C2422] mb-1">
                  מספר טלפון <span className="text-[#982D49]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="050-1234567"
                  className={`w-full px-4 py-2.5 rounded-xl border text-base bg-white text-right focus:outline-none transition-all ${
                    errors.phone
                      ? 'border-red-400 ring-2 ring-red-100'
                      : 'border-[#D68B98]/40 focus:border-[#982D49] focus:ring-2 focus:ring-[#982D49]/10'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={13} />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email (Optional) */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#2C2422] mb-1">
                  כתובת דוא"ל <span className="text-xs font-normal text-[#2C2422]/60">(שדה רשות)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  dir="ltr"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl border text-base bg-white text-right focus:outline-none transition-all ${
                    errors.email
                      ? 'border-red-400 ring-2 ring-red-100'
                      : 'border-[#D68B98]/40 focus:border-[#982D49] focus:ring-2 focus:ring-[#982D49]/10'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={13} />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message / A few words (New requested field) */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#2C2422] mb-1">
                  כמה מילים / שאלות <span className="text-xs font-normal text-[#2C2422]/60">(שדה רשות)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="נשמח לשמוע מה מעניין אותך, שאלות או כל דבר שתרצי לשתף..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D68B98]/40 text-base bg-white focus:outline-none focus:border-[#982D49] focus:ring-2 focus:ring-[#982D49]/10 transition-all resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1 flex items-start gap-2.5">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consentUpdates}
                  onChange={(e) => setConsentUpdates(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[#982D49] focus:ring-[#982D49] border-gray-300 accent-[#982D49] cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-[#2C2422]/80 leading-normal cursor-pointer select-none">
                  אשמח לקבל עדכונים, מועדים ותכנים על תוכניות וריטריטים מבית "בין לבין" (ניתן להסיר בכל עת).
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-base font-bold text-white bg-[#982D49] hover:bg-[#7A2139] active:scale-[0.99] rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send size={18} className="rotate-180" />
                  <span>{isSubmitting ? 'שומרת פרטים...' : 'אני רוצה לשמוע עוד'}</span>
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#2C2422]/60 pt-1">
                <Lock size={12} />
                <span>הפרטים שלך נשמרים אצלנו בפרטיות מוחלטת ולא יועברו לאיש</span>
              </div>

            </form>
          )}

        </div>

        {/* WhatsApp Channels for Dalit and Elsie (No phone number displayed on the button) */}
        <div className="mt-10 text-center space-y-4">
          <p className="text-base text-white/95 font-medium">
            מעדיפה שיחה אישית? נשמח לשוחח, לספר לך על התוכנית ולענות על כל שאלה:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={dalitWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-[#476653] hover:text-[#982D49] hover:bg-[#F9F1EA] text-sm sm:text-base font-bold rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer w-full sm:w-auto justify-center"
            >
              <MessageCircle size={19} className="text-[#25D366]" />
              <span>שיחה עם דלית בווטסאפ</span>
            </a>
            <a
              href={elsieWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-[#476653] hover:text-[#982D49] hover:bg-[#F9F1EA] text-sm sm:text-base font-bold rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer w-full sm:w-auto justify-center"
            >
              <MessageCircle size={19} className="text-[#25D366]" />
              <span>שיחה עם אלסי בווטסאפ</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InquiryFormSection;
