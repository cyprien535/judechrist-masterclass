import React from 'react';

interface DiamondLogoProps {
  className?: string;
  size?: number;
}

export const DiamondLogo: React.FC<DiamondLogoProps> = ({ className = '', size = 32 }) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center p-1">
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]"
        >
          {/* Outer Diamond Path */}
          <path 
            d="M16 2L28 10L16 30L4 10L16 2Z" 
            fill="url(#diamond-grad)" 
            stroke="#60A5FA" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
          {/* Inner Facet Lines */}
          <path d="M4 10H28" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.8"/>
          <path d="M11 10L16 2L21 10" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.8"/>
          <path d="M11 10L16 30L21 10" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.8"/>
          
          <defs>
            <linearGradient id="diamond-grad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="0.5" stopColor="#2563EB" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col text-left leading-tight min-w-0">
        <span className="font-extrabold tracking-wider text-shiny text-xs xs:text-sm sm:text-base uppercase font-['Sora'] whitespace-nowrap">
          JUDE CHRIST
        </span>
        <span className="text-[8px] xs:text-[10px] sm:text-xs font-semibold tracking-widest text-[#60A5FA] uppercase whitespace-nowrap hidden xs:block">
          L'ARCHITECTE BLEU
        </span>
      </div>
    </div>
  );
};
