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

        {/* Desktop & Tablet View (>= 640px): 3-column grid ensuring mathematically equal logo distance from center anchor */}
        <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center w-full">
          
          {/* LEFT: PSG College of Technology official logo (aligned toward center with equal gap) */}
          <div className="flex items-center justify-end pr-6 md:pr-10 lg:pr-14 xl:pr-16">
            <img
              src={psgLogo}
              alt="PSG College of Technology official logo"
              className="h-20 sm:h-22 md:h-24 lg:h-26 w-auto max-w-[130px] md:max-w-[150px] lg:max-w-[170px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* CENTER: Institutional Text - Visual Anchor */}
          <div className="flex flex-col items-center justify-center text-center px-2 md:px-4">
            <h1 className="text-xl sm:text-2xl md:text-[1.75rem] lg:text-[1.95rem] xl:text-3xl font-extrabold text-[#244A91] tracking-tight leading-tight whitespace-nowrap">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-sm sm:text-base md:text-[1.125rem] lg:text-[1.22rem] font-bold text-[#16366B] mt-1 sm:mt-1.5 tracking-normal whitespace-nowrap">
              Coimbatore, Tamil Nadu, India - 641004
            </p>
            <p className="text-sm sm:text-base md:text-[1.2rem] lg:text-[1.35rem] xl:text-[1.45rem] font-extrabold text-[#D9A353] mt-1 sm:mt-1.5 tracking-wider uppercase whitespace-nowrap">
              PSG - DATAINSIGHT
            </p>
          </div>

          {/* RIGHT: Finalized DATAINSIGHT 2027 logo (aligned toward center with equal gap) */}
          <div className="flex items-center justify-start pl-6 md:pl-10 lg:pl-14 xl:pl-16">
            <img
              src={datainsightLogo}
              alt="DATAINSIGHT 2027 finalized official logo"
              className="h-16 sm:h-18 md:h-20 lg:h-22 w-auto max-w-[130px] md:max-w-[150px] lg:max-w-[170px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>

      </div>
    </div>
  );
};
