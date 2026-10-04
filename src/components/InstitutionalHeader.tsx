import React from 'react';
import psgLogo from '../assets/psg_logo.png';
import datainsightLogo from '../assets/datainsight_logo.png';

export const InstitutionalHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200/80 shadow-xs z-30 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 md:py-4.5 lg:py-5">
        
        {/* Mobile View (< 640px): Clean naturally stacked layout ensuring no crowding */}
        <div className="flex sm:hidden flex-col items-center text-center gap-3">
          {/* Top: PSG Logo - Visually enlarged and balanced */}
          <div className="flex items-center justify-center">
            <img
              src={psgLogo}
              alt="PSG College of Technology official crest"
              className="h-24 sm:h-28 w-auto object-contain"
            />
          </div>
          
          {/* Middle: Centered Institutional Text with Exact Requested Hierarchy */}
          <div className="space-y-1">
            <h1 className="text-xl font-black text-[#0B2D6B] tracking-tight leading-snug">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-[11px] font-semibold text-[#3B5B8C]">
              Coimbatore, Tamil Nadu, India – 641004
            </p>
            <div className="text-xs font-black text-[#174EA6] uppercase tracking-wider pt-0.5">
              DEPARTMENT OF INFORMATION TECHNOLOGY
            </div>
          </div>

          {/* Bottom: DATAINSIGHT Logo - Visually enlarged to equal weight with PSG crest */}
          <div className="flex items-center justify-center pt-0.5">
            <img
              src={datainsightLogo}
              alt="DATAINSIGHT 2027 Conference Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop & Tablet View (>= 640px): 3-column symmetrical grid ensuring equal distance from center anchor */}
        <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center w-full">
          
          {/* LEFT: PSG College of Technology official logo - visibly larger */}
          <div className="flex items-center justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12">
            <img
              src={psgLogo}
              alt="PSG College of Technology official crest"
              className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* CENTER: Institutional Text - Exact Requested Typography Hierarchy */}
          <div className="flex flex-col items-center justify-center text-center px-3 sm:px-5 md:px-7 shrink-0">
            {/* Line 1: PSG COLLEGE OF TECHNOLOGY (Largest) */}
            <h1 className="text-xl sm:text-2xl md:text-[1.8rem] lg:text-[2.1rem] xl:text-[2.35rem] font-black tracking-tight text-[#0B2D6B] leading-tight whitespace-nowrap">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            {/* Line 2: Coimbatore, Tamil Nadu, India – 641004 (Smaller than Department of Information Technology) */}
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-[0.95rem] font-medium text-[#4A648C] mt-1 tracking-normal whitespace-nowrap">
              Coimbatore, Tamil Nadu, India – 641004
            </p>
            {/* Line 3: DEPARTMENT OF INFORMATION TECHNOLOGY (ALL CAPS, clearly larger than the location line) */}
            <div className="mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base lg:text-[1.2rem] font-extrabold text-[#174EA6] uppercase tracking-wide whitespace-nowrap">
              DEPARTMENT OF INFORMATION TECHNOLOGY
            </div>
          </div>

          {/* RIGHT: DATAINSIGHT Logo - Visibly larger, equal visual weight to PSG logo */}
          <div className="flex items-center justify-start pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12">
            <img
              src={datainsightLogo}
              alt="DATAINSIGHT 2027 Conference Logo"
              className="h-16 sm:h-[4.75rem] md:h-[5.5rem] lg:h-[6.5rem] xl:h-[7.25rem] w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

        </div>

      </div>
    </div>
  );
};
