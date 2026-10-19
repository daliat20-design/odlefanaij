import React, { useState } from 'react';
import { Share2, MessageCircle, Copy, Check, X, Heart } from 'lucide-react';

interface ShareButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SHARE_URL = 'https://ais-pre-wpmk7rofnwfd2c4u6eegs7-29867443297.europe-west1.run.app';

export const SHARE_MESSAGE =
  'היי! ראיתי את התוכנית "עוֹד לְפָנַיִךְ" לנשים 60+ מבית "בין לבין" וחשבתי עליך. שווה לקרוא ולהירשם יחד (יש גם 5% הנחה לנרשמות בזוג!):\n' +
  SHARE_URL;

export const ShareButton: React.FC<ShareButtonProps> = ({
  className = '',
  variant = 'secondary',
  text = 'שתפי חברה',
  size = 'md',
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(SHARE_MESSAGE)}`;

  const handleShareClick = async () => {
    // If mobile supports native share sheet with WhatsApp
    if (navigator.share && /mobile|android|iphone|ipad/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: 'עוֹד לְפָנַיִךְ | תוכנית לנשים 60+',
          text: 'היי! ראיתי את התוכנית "עוד לפנייך" לנשים 60+ מבית "בין לבין" וחשבתי עליך:',
          url: SHARE_URL,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to modal
        if ((err as Error).name !== 'AbortError') {
          setModalOpen(true);
        }
        return;
      }
    }
    // Desktop or unsupported browser: show intuitive popup
    setModalOpen(true);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  // Variant styling
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-4 sm:px-5 py-2 sm:py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base sm:text-lg gap-2.5 font-bold',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#982D49] hover:bg-[#7A2139] text-white shadow-sm hover:shadow active:scale-[0.98]',
    secondary:
      'bg-[#476653] hover:bg-[#385242] text-white shadow-sm hover:shadow active:scale-[0.98]',
    outline:
      'border-2 border-[#476653] text-[#476653] hover:bg-[#476653] hover:text-white bg-white/80 active:scale-[0.98]',
    pill: 'bg-white hover:bg-[#FAF1F3] text-[#982D49] border border-[#982D49]/30 shadow-2xs hover:shadow-xs active:scale-[0.98]',
  }[variant];

  return (
    <>
      <button
        onClick={handleShareClick}
        className={`inline-flex items-center justify-center rounded-full font-bold transition-all cursor-pointer select-none ${sizeClasses} ${variantClasses} ${className}`}
        aria-label="שתפי חברה בתוכנית עוד לפנייך"
      >
        <Share2 size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        <span>{text}</span>
      </button>

      {/* Share Modal Dialog */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FFFCF8] text-[#2C2422] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#D68B98]/30 text-right space-y-5">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#D68B98]/20 pb-4">
              <div className="flex items-center gap-2 text-[#982D49]">
                <Heart size={20} className="text-[#982D49] fill-[#982D49]" />
                <h3 className="text-xl font-bold font-display">
                  שתפי חברה ב"עוד לפנייך"
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#2C2422]/60 hover:text-[#982D49] hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="סגירה"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#2C2422]/85 leading-relaxed">
              כי חוויות טובות הכי כיף לחלוק יחד! שתפי חברה בווטסאפ או העתיקי את הקישור לדף הנחיתה:
            </p>

            {/* Direct WhatsApp Action */}
            <div className="space-y-3">
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setModalOpen(false)}
                className="w-full py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>שליחה ישירה בווטסאפ</span>
              </a>

              {/* Copy Link Option */}
              <button
                onClick={copyLink}
                className="w-full py-3 px-5 bg-white hover:bg-[#F9F1EA] text-[#476653] border border-[#476653]/30 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                {copied ? <Check size={18} className="text-green-600" /> : <Copy size={16} />}
                <span>{copied ? 'הקישור הועתק בהצלחה!' : 'העתקת קישור לשיתוף'}</span>
              </button>
            </div>

            {/* Reminder of Friend Discount */}
            <div className="p-3 bg-[#F2F6F3] rounded-xl border border-[#476653]/20 text-xs text-[#476653] text-center font-medium">
              💡 <strong>תזכורת:</strong> נרשמות יחד? שתיכן נהנות מ־5% הנחה ממחיר הסדרה!
            </div>

            <div className="text-center pt-1">
              <button
                onClick={() => setModalOpen(false)}
                className="text-xs text-[#2C2422]/60 hover:text-[#982D49] cursor-pointer"
              >
                סגור
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ShareButton;
