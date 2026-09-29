import React from 'react';
import psgLogo from '../assets/psg_logo.png';
import datainsightLogo from '../assets/datainsight_logo.png';

export const InstitutionalHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200/80 shadow-xs z-30 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 md:py-7 lg:py-7.5">
        
        {/* Mobile View (< 640px): Clean balanced presentation with ample vertical breathing room */}
        <div className="flex sm:hidden flex-col items-center text-center gap-2.5">
          {/* Top row: Logos balanced and centered */}
          <div className="flex items-center justify-around w-full max-w-[280px] px-2">
            <img
              src={psgLogo}
              alt="PSG College of Technology official logo"
              className="h-14 w-auto object-contain flex-shrink-0"
            />
            <img
              src={datainsightLogo}
              alt="DATAINSIGHT 2027 finalized official logo"
              className="h-12 w-auto object-contain flex-shrink-0"
            />
          </div>
          
          {/* Centered Institutional Text */}
          <div className="mt-0.5">
            <h1 className="text-base font-extrabold text-[#244A91] tracking-tight leading-snug">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-[11px] font-semibold text-[#16366B] mt-0.5">
              Coimbatore, Tamil Nadu, India - 641004
            </p>
            <p className="text-xs font-bold text-[#D9A353] mt-0.5 tracking-wider uppercase">
              PSG - DATAINSIGHT
            </p>
          </div>
        </div>

        {/* Desktop & Tablet View (>= 640px): Classic centered academic layout with generous, balanced breathing room */}
        <div className="hidden sm:flex items-center justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          
          {/* LEFT: PSG College of Technology official logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={psgLogo}
              alt="PSG College of Technology official logo"
              className="h-20 sm:h-22 md:h-24 lg:h-26 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* CENTER: Institutional Text - Visual Anchor */}
          <div className="flex flex-col items-center justify-center text-center px-2 md:px-4">
            <h1 className="text-xl sm:text-2xl md:text-[1.75rem] lg:text-[1.95rem] xl:text-3xl font-extrabold text-[#244A91] tracking-tight leading-tight whitespace-nowrap">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#16366B] mt-1 tracking-normal whitespace-nowrap">
              Coimbatore, Tamil Nadu, India - 641004
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-[17px] font-bold text-[#D9A353] mt-1 tracking-wider uppercase whitespace-nowrap">
              PSG - DATAINSIGHT
            </p>
          </div>

          {/* RIGHT: Finalized DATAINSIGHT 2027 logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={datainsightLogo}
              alt="DATAINSIGHT 2027 finalized official logo"
              className="h-16 sm:h-18 md:h-20 lg:h-22 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>

      </div>
    </div>
  );
};
