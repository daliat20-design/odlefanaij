import React from 'react';

interface BeinLeveinLogoProps {
  className?: string;
  size?: number | string;
  showSubtitle?: boolean;
}

export const BeinLeveinLogo: React.FC<BeinLeveinLogoProps> = ({
  className = '',
  size = 200,
}) => {
  return (
    <div
      className={`relative inline-block select-none max-w-full aspect-square transition-transform duration-300 hover:scale-[1.02] ${className}`}
      style={{ width: size, height: size }}
      aria-label="לוגו בין לבין - מרחבים לנשים"
    >
      <img
        src="/bein-levein-logo.png"
        alt="בין לבין - מרחבים לנשים - תוכן • חוויה • מפגש"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain drop-shadow-sm"
        onError={(e) => {
          // Fallback to hosted postimg URL if local static asset fails
          const target = e.currentTarget;
          if (!target.src.includes('postimg.cc')) {
            target.src = "https://i.postimg.cc/3x6PK00k/byn-lbyn-mrhb-ll'-rq'-(1).png";
          }
        }}
      />
    </div>
  );
};

export default BeinLeveinLogo;
