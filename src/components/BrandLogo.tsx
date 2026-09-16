import React, { useState } from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  textColor = 'text-[#0D472B]',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeMap = {
    sm: { icon: 44, text: 'text-sm' },
    md: { icon: 58, text: 'text-base' },
    lg: { icon: 76, text: 'text-xl' },
    xl: { icon: 96, text: 'text-2xl' },
    '2xl': { icon: 132, text: 'text-3xl' }
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 1st Authentic Circular Yashoda's Divine Kitchen Logo */}
      <div 
        className="relative flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden transition-transform hover:scale-105 duration-200"
        style={{ width: current.icon, height: current.icon }}
        title="Yashoda’s Divine Kitchen - Flavors of Tradition"
      >
        {!imageError ? (
          <img
            src="/images/yashoda_logo.png"
            alt="Yashoda's Divine Kitchen - Flavors of Tradition"
            className="w-full h-full object-contain select-none"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Auspicious SVG Fallback if image path is unavailable */
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full rounded-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="48" fill="#FAF6EE" stroke="#D4AF37" strokeWidth="3" />
            <circle cx="50" cy="50" r="43" stroke="#0D472B" strokeWidth="1.5" />
            <path
              d="M30,55 C30,40 50,25 50,25 C50,25 70,40 70,55 C70,68 58,75 50,75 C42,75 30,68 30,55 Z"
              fill="#D4AF37"
            />
            <circle cx="50" cy="50" r="6" fill="#0D472B" />
          </svg>
        )}
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-display font-bold tracking-wider uppercase text-[15px] sm:text-[17px] drop-shadow-xs ${textColor}`}>
            Yashoda’s
          </span>
          <span className="font-serif-devotional tracking-widest text-[#B38728] font-semibold text-[11px] sm:text-[13px] uppercase">
            Divine Kitchen
          </span>
          <span className="text-[10px] tracking-wider text-[#991B1B] font-medium hidden sm:inline-block">
            Flavors of Tradition
          </span>
        </div>
      )}
    </div>
  );
};

