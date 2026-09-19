import React from 'react';
import { X, Calendar, Sparkles } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

export interface ModalContent {
  title: string;
  subtitle: string;
  details: string;
  statusBadge: string;
  actionText?: string;
}

interface ModalProps {
  isOpen: boolean;
  content: ModalContent | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, content, onClose }) => {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#176BFF]/30 shadow-2xl text-left space-y-5"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#F5F9FF] hover:bg-[#EBF3FF] text-[#1A2B4A]/70 hover:text-[#0B2D6B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#176BFF]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#176BFF]/10 border border-[#176BFF]/20 flex items-center justify-center text-[#176BFF]">
            <Sparkles className="w-6 h-6 text-[#D9A441]" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#FFF9E6] text-[#D9A441] border border-[#D9A441]/30">
              {content.statusBadge}
            </span>
            <h3 className="text-xl font-extrabold text-[#0B2D6B] mt-1">
              {content.title}
            </h3>
          </div>
        </div>

        {/* Subtitle & Message */}
        <div className="space-y-3 pt-2 border-t border-[#176BFF]/10">
          <p className="text-sm font-semibold text-[#174EA6]">
            {content.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#1A2B4A]/80 leading-relaxed">
            {content.details}
          </p>
        </div>

        {/* Conference Dates reminder */}
        <div className="p-3.5 rounded-xl bg-[#F5F9FF] border border-[#176BFF]/15 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#1A2B4A]/70">
            <Calendar className="w-4 h-4 text-[#D9A441]" />
            <span>Event Dates:</span>
          </div>
          <span className="font-bold text-[#0B2D6B]">
            {CONFERENCE_DATA.datesDisplay}
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#176BFF] to-[#00A8E8] text-white shadow-md hover:brightness-105 active:scale-95 transition-all text-center"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
