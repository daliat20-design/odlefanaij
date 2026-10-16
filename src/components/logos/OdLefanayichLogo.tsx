import React from 'react';

interface OdLefanayichLogoProps {
  className?: string;
  size?: number | string;
}

export const OdLefanayichLogo: React.FC<OdLefanayichLogoProps> = ({
  className = '',
  size = 360,
}) => {
  return (
    <div
      className={`relative inline-block select-none transition-transform duration-300 hover:scale-[1.01] ${className}`}
      style={{ width: size, height: size }}
      aria-label="לוגו תוכנית עוד לפנייך (60+) מבית בין לבין"
    >
      <img
        src="/od-lefanayich-logo.png"
        alt="תוכנית עוד לפנייך (60+) - עוד לגלות"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain drop-shadow-md"
        onError={(e) => {
          // Fallback to hosted postimg URL if local static asset fails
          const target = e.currentTarget;
          if (!target.src.includes('postimg.cc')) {
            target.src = "https://i.postimg.cc/W38YCdMM/twknyt-'wd-lpnyyk-lwgw-ll'-rq'.png";
          }
        }}
      />
    </div>
  );
};

export default OdLefanayichLogo;
