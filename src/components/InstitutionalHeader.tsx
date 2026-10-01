import React from 'react';
import psgLogo from '../assets/psg_logo.png';
import datainsightLogo from '../assets/datainsight_logo.png';

export const InstitutionalHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200/80 shadow-xs z-30 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 md:py-4.5 lg:py-5">
        
        {/* Mobile View (< 640px): Clean naturally stacked layout ensuring no crowding */}
        <div className="flex sm:hidden flex-col items-center text-center gap-3">
          {/* Top: PSG Logo - Clean display without border boxes */}
          <div className="flex items-center justify-center">
            <img
              src={psgLogo}
              alt="PSG College of Technology official crest"
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </div>
          
          {/* Middle: Centered Institutional Text with Refined Color Hierarchy */}
          <div className="space-y-0.5">
            <h1 className="text-lg font-black text-[#0B2D6B] tracking-tight leading-snug">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-xs font-bold text-[#2A4B7C]">
              Coimbatore, Tamil Nadu, India – 641004
            </p>
            <div className="text-xs font-bold text-[#174EA6] pt-0.5">
              Department of Information Technology
            </div>
          </div>

          {/* Bottom: DATAINSIGHT Logo - Clean display without border boxes or decorative icons */}
          <div className="flex items-center justify-center pt-0.5">
            <img
              src={datainsightLogo}
              alt="DATAINSIGHT 2027 Conference Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop & Tablet View (>= 640px): 3-column symmetrical grid ensuring equal distance from center anchor */}
        <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center w-full">
          
          {/* LEFT: PSG College of Technology official logo */}
          <div className="flex items-center justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12">
            <img
              src={psgLogo}
              alt="PSG College of Technology official crest"
              className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>

          {/* CENTER: Institutional Text - Visual Anchor with Academic Color Palette */}
          <div className="flex flex-col items-center justify-center text-center px-3 sm:px-5 md:px-7 shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-[1.7rem] lg:text-[1.95rem] xl:text-[2.1rem] font-black tracking-tight text-[#0B2D6B] leading-tight whitespace-nowrap">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-[1.1rem] font-bold text-[#2A4B7C] mt-1 tracking-normal whitespace-nowrap">
              Coimbatore, Tamil Nadu, India – 641004
            </p>
            <div className="mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base lg:text-[1.05rem] font-bold text-[#174EA6] tracking-normal whitespace-nowrap">
              Department of Information Technology
            </div>
          </div>

          {/* RIGHT: DATAINSIGHT Logo - Clean display without border boxes or decorative icons */}
          <div className="flex items-center justify-start pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12">
            <img
              src={datainsightLogo}
              alt="DATAINSIGHT 2027 Conference Logo"
              className="h-14 sm:h-[4.25rem] md:h-20 lg:h-24 xl:h-[6.5rem] w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>

        </div>

      </div>
    </div>
  );
};
