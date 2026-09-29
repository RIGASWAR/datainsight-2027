import React from 'react';
import psgLogo from '../assets/psg_logo.png';
import datainsightLogo from '../assets/datainsight_logo.png';

export const InstitutionalHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200/80 shadow-xs z-30 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        
        {/* Mobile View (< 640px): Clean balanced presentation */}
        <div className="flex sm:hidden flex-col items-center text-center gap-2">
          {/* Top row: Logos flanking or balanced */}
          <div className="flex items-center justify-between w-full px-2">
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
          <div className="mt-1">
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

        {/* Desktop & Tablet View (>= 640px): Classic 3-column institutional header */}
        <div className="hidden sm:flex items-center justify-between gap-4 md:gap-8">
          
          {/* LEFT: PSG College of Technology official logo */}
          <div className="flex-shrink-0 flex items-center justify-start min-w-[120px] md:min-w-[160px]">
            <img
              src={psgLogo}
              alt="PSG College of Technology official logo"
              className="h-20 md:h-24 lg:h-26 w-auto object-contain"
            />
          </div>

          {/* CENTER: Institutional Text - Visually Dominant */}
          <div className="flex-1 text-center px-2">
            <h1 className="text-xl md:text-2xl lg:text-[1.85rem] xl:text-3xl font-extrabold text-[#244A91] tracking-tight leading-tight">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-xs md:text-sm lg:text-base font-semibold text-[#16366B] mt-1 tracking-normal">
              Coimbatore, Tamil Nadu, India - 641004
            </p>
            <p className="text-sm md:text-base lg:text-lg font-bold text-[#D9A353] mt-1 tracking-wider uppercase">
              PSG - DATAINSIGHT
            </p>
          </div>

          {/* RIGHT: Finalized DATAINSIGHT 2027 logo */}
          <div className="flex-shrink-0 flex items-center justify-end min-w-[120px] md:min-w-[160px]">
            <img
              src={datainsightLogo}
              alt="DATAINSIGHT 2027 finalized official logo"
              className="h-16 md:h-20 lg:h-22 w-auto object-contain"
            />
          </div>

        </div>

      </div>
    </div>
  );
};
