import React from 'react';
import psgLogo from '../assets/psg_logo.png';
import { HeroDataVisualization } from './HeroDataVisualization';

export const InstitutionalHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200/80 shadow-xs z-30 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 md:py-4.5 lg:py-5">
        
        {/* Mobile View (< 640px): Clean naturally stacked layout ensuring no crowding */}
        <div className="flex sm:hidden flex-col items-center text-center gap-3">
          {/* Top: PSG Logo */}
          <div className="flex items-center justify-center p-2 rounded-2xl bg-white border border-[#176BFF]/15 shadow-xs">
            <img
              src={psgLogo}
              alt="PSG College of Technology official crest"
              className="h-16 w-auto object-contain"
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
            <div className="text-xs font-extrabold tracking-wider uppercase pt-0.5">
              <span className="text-[#174EA6]">PSG</span>
              <span className="text-[#D9A441] mx-1">•</span>
              <span className="text-[#0B2D6B]">DATAINSIGHT</span>
            </div>
          </div>

          {/* Bottom: DATAINSIGHT Logo with Multimodal Visualization */}
          <div className="pt-0.5">
            <HeroDataVisualization size="sm" />
          </div>
        </div>

        {/* Desktop & Tablet View (>= 640px): 3-column symmetrical grid ensuring equal distance from center anchor */}
        <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center w-full">
          
          {/* LEFT: PSG College of Technology official logo (symmetrically matched with DATAINSIGHT presentation) */}
          <div className="flex items-center justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12">
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#F7FAFF] to-[#EEF5FF]/80 border border-[#176BFF]/20 shadow-md shadow-[#0B2D6B]/6 transition-all duration-300 hover:border-[#176BFF]/50 hover:shadow-lg flex items-center justify-center">
              <img
                src={psgLogo}
                alt="PSG College of Technology official crest"
                className="h-16 sm:h-20 md:h-22 lg:h-24 xl:h-[6.5rem] w-auto max-w-[140px] md:max-w-[165px] lg:max-w-[185px] object-contain transition-transform duration-300 hover:scale-[1.02] drop-shadow-xs"
              />
            </div>
          </div>

          {/* CENTER: Institutional Text - Visual Anchor with Academic Color Palette */}
          <div className="flex flex-col items-center justify-center text-center px-3 sm:px-5 md:px-7 shrink-0">
            <h1 className="text-xl sm:text-2xl md:text-[1.7rem] lg:text-[1.95rem] xl:text-[2.1rem] font-black tracking-tight text-[#0B2D6B] leading-tight whitespace-nowrap">
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-[1.1rem] font-bold text-[#2A4B7C] mt-1 tracking-normal whitespace-nowrap">
              Coimbatore, Tamil Nadu, India – 641004
            </p>
            <div className="mt-1 sm:mt-1.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm md:text-base lg:text-[1.05rem] font-extrabold uppercase tracking-wider whitespace-nowrap">
              <span className="text-[#174EA6]">PSG</span>
              <span className="text-[#D9A441] font-black">•</span>
              <span className="text-[#0B2D6B] tracking-widest">DATAINSIGHT</span>
            </div>
          </div>

          {/* RIGHT: DATAINSIGHT Logo with Interactive Multimodal Data Visualization */}
          <div className="flex items-center justify-start pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12">
            <HeroDataVisualization size="md" />
          </div>

        </div>

      </div>
    </div>
  );
};
