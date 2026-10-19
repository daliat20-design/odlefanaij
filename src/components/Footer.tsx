import React, { useState, useEffect } from 'react';
import BeinLeveinLogo from './logos/BeinLeveinLogo.tsx';
import OdLefanayichLogo from './logos/OdLefanayichLogo.tsx';
import { InquiryLead } from '../types/index.ts';
import { Download, Copy, Check, Users, Shield, ArrowUp, ExternalLink } from 'lucide-react';

const LEADS_STORAGE_KEY = 'od_lefanayich_inquiries';
const BEIN_LEVEIN_HOME_URL = 'https://benlben.netlify.app/';

export const Footer: React.FC = () => {
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [leads, setLeads] = useState<InquiryLead[]>([]);
  const [copied, setCopied] = useState(false);

  const loadLeads = () => {
    try {
      const stored = localStorage.getItem(LEADS_STORAGE_KEY);
      if (stored) {
        setLeads(JSON.parse(stored));
      }
    } catch {
      setLeads([]);
    }
  };

  useEffect(() => {
    loadLeads();
    const handleUpdate = () => loadLeads();
    window.addEventListener('leads_updated', handleUpdate);
    return () => window.removeEventListener('leads_updated', handleUpdate);
  }, []);

  const copyToClipboard = () => {
    if (leads.length === 0) return;
    const header = 'שם מלא\tטלפון\tאימייל\tהודעה\tהסכמה לעדכונים\tתאריך רישום\n';
    const rows = leads
      .map(
        (l) =>
          `${l.fullName}\t${l.phone}\t${l.email || '-'}\t${l.message || '-'}\t${l.consentUpdates ? 'כן' : 'לא'}\t${new Date(
            l.createdAt
          ).toLocaleString('he-IL')}`
      )
      .join('\n');
    navigator.clipboard.writeText(header + rows);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCSV = () => {
    if (leads.length === 0) return;
    const header = '\uFEFFשם מלא,מספר טלפון,דוא"ל,הודעה,אישור דיוור,תאריך רישום\n';
    const rows = leads
      .map(
        (l) =>
          `"${l.fullName}","${l.phone}","${l.email || ''}","${(l.message || '').replace(/"/g, '""')}","${l.consentUpdates ? 'כן' : 'לא'}","${new Date(
            l.createdAt
          ).toLocaleString('he-IL')}"`
      )
      .join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `מתעניינות_עוד_לפנייך_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF1F3] text-[#2C2422] pt-16 pb-12 border-t-2 border-[#D68B98]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row: Bein Levein on the right, Program & Brand in center, Od Lefanayich on the left */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center pb-12 border-b border-[#D68B98]/25">
          
          {/* Right Column: Bein Levein Logo (צד ימין ב-RTL) */}
          <div className="md:col-span-3 flex justify-center md:justify-start order-1">
            <div className="p-3 bg-white rounded-3xl border border-[#D68B98]/30 shadow-xs inline-flex items-center justify-center">
              <BeinLeveinLogo size={140} showSubtitle={true} />
            </div>
          </div>

          {/* Center Column: Program & House Brand Copy + Quick Actions (במרכז) */}
          <div className="md:col-span-6 text-center space-y-3.5 order-2">
            <h3 className="text-2xl font-bold font-display text-[#982D49] tracking-wide">
              עוֹד לְפָנַיִךְ | תוכנית לנשים 60+
            </h3>
            <p className="text-base text-[#476653] font-medium">
              מבית <span className="text-[#982D49] font-bold">בין לבין</span> | תוכניות, חוויות וריטריטים לנשים
            </p>
            <p className="text-sm text-[#2C2422]/75 font-normal italic">
              "כי בכל שלב בחיים יש עוד מה לגלות."
            </p>

            {/* Actions Bar: Website link & Scroll Up */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <a
                href={BEIN_LEVEIN_HOME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#982D49] text-[#982D49] hover:text-white rounded-full text-xs font-bold border border-[#982D49]/30 transition-all shadow-2xs"
              >
                <span>לאתר הבית של "בין לבין"</span>
                <ExternalLink size={13} />
              </a>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#F9F1EA] text-xs font-semibold text-[#476653] border border-[#476653]/20 rounded-full transition-colors cursor-pointer shadow-2xs"
              >
                <span>חזרה לראש הדף</span>
                <ArrowUp size={13} />
              </button>
            </div>

            {/* Admin Lead Manager Link */}
            <div className="pt-1">
              <button
                onClick={() => {
                  loadLeads();
                  setShowAdminModal(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-[#982D49] hover:underline transition-colors cursor-pointer"
              >
                <Users size={13} />
                <span>ניהול פניות מתעניינות ({leads.length})</span>
              </button>
            </div>
          </div>

          {/* Left Column: Od Lefanayich Logo (צד שמאל ב-RTL) */}
          <div className="md:col-span-3 flex justify-center md:justify-end order-3">
            <div className="p-3 bg-white rounded-3xl border border-[#D68B98]/30 shadow-xs inline-flex items-center justify-center">
              <OdLefanayichLogo size={140} />
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2C2422]/70 text-center sm:text-right">
          <div>
            © {new Date().getFullYear()} כל הזכויות שמורות לתוכנית "עוד לפנייך" מבית "בין לבין".
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-[#982D49] transition-colors underline cursor-pointer"
            >
              מדיניות פרטיות
            </button>
            <a
              href={BEIN_LEVEIN_HOME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#982D49] transition-colors font-medium"
            >
              אתר "בין לבין"
            </a>
          </div>
        </div>

      </div>

      {/* Admin Leads Management Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-[#FFFCF8] text-[#2C2422] rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#D68B98]/30">
            <div className="flex items-center justify-between border-b border-[#D68B98]/20 pb-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#982D49] font-display">
                  רשימת מתעניינות בתוכנית "עוד לפנייך"
                </h3>
                <p className="text-xs text-[#476653]">
                  נשמרו {leads.length} פניות במערכת המקומית
                </p>
              </div>
              <button
                onClick={() => setShowAdminModal(false)}
                className="text-[#2C2422]/60 hover:text-[#982D49] font-bold text-xl px-2"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-right">
              {leads.length === 0 ? (
                <div className="py-12 text-center text-[#2C2422]/60">
                  טרם התקבלו פניות דרך הטופס.
                </div>
              ) : (
                leads.map((l) => (
                  <div key={l.id} className="p-4 rounded-xl bg-white border border-[#D68B98]/20 text-xs sm:text-sm space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-[#982D49]">
                      <span className="text-base">{l.fullName}</span>
                      <span className="text-xs text-[#2C2422]/50 font-normal">
                        {new Date(l.createdAt).toLocaleDateString('he-IL')} {new Date(l.createdAt).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#2C2422]/85">
                      <span>טלפון: <strong dir="ltr">{l.phone}</strong></span>
                      {l.email && <span>אימייל: <span dir="ltr">{l.email}</span></span>}
                      <span>עדכונים: {l.consentUpdates ? '✓ מאושר' : '✗ לא מאושר'}</span>
                    </div>
                    {l.message && (
                      <div className="mt-2 p-2.5 bg-[#FAF1F3] rounded-lg text-xs text-[#2C2422]/90 border border-[#D68B98]/20">
                        <span className="font-semibold text-[#982D49]">הודעה: </span>
                        {l.message}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-[#D68B98]/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  disabled={leads.length === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#982D49] hover:bg-[#7A2139] text-white text-xs font-semibold rounded-full transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'הועתק ללוח!' : 'העתקה ל-Google Sheets'}</span>
                </button>
                <button
                  onClick={downloadCSV}
                  disabled={leads.length === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#476653] hover:bg-[#385242] text-white text-xs font-semibold rounded-full transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Download size={14} />
                  <span>הורדה כקובץ CSV</span>
                </button>
              </div>

              <button
                onClick={() => setShowAdminModal(false)}
                className="px-4 py-2 text-xs font-medium text-[#2C2422]/70 hover:text-[#982D49]"
              >
                סגירה
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-[#FFFCF8] text-[#2C2422] rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl border border-[#D68B98]/30 text-right">
            <div className="flex items-center justify-between border-b border-[#D68B98]/20 pb-4 mb-4">
              <div className="flex items-center gap-2 text-[#982D49]">
                <Shield size={20} />
                <h3 className="text-xl font-bold font-display">
                  מדיניות פרטיות
                </h3>
              </div>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-[#2C2422]/60 hover:text-[#982D49] font-bold text-xl px-2"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#2C2422]/85 leading-relaxed overflow-y-auto">
              <p>
                אנו ב"בין לבין" ובתוכנית "עוד לפנייך" רואות חשיבות עליונה בשמירה על פרטיותך.
              </p>
              <p>
                הפרטים הנמסרים בטופס (שם מלא, מספר טלפון, כתובת דוא"ל והודעה) ישמשו אך ורק לצורך יצירת קשר עמך בנוגע למחזורי התוכנית "עוד לפנייך" ועדכונים על פעילויות מבית "בין לבין", בהתאם להסכמתך.
              </p>
              <p>
                פרטייך נשמרים בסודיות מוחלטת ולעולם לא יועברו, יימכרו או יימסרו לשום גורם מסחרי או צד שלישי אחר.
              </p>
              <p>
                תוכלי לבקש להסיר את פרטייך מרשימת התפוצה או ממאגר המידע בכל שלב באמצעות פנייה פשוטה אלינו.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D68B98]/20 text-center">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-6 py-2 bg-[#982D49] text-white text-xs font-semibold rounded-full"
              >
                הבנתי, תודה
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
