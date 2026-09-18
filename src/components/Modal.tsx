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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl glass-card border-2 border-[#19C7E8]/40 shadow-2xl bg-gradient-to-b from-[#0B2859] to-[#071A3D] text-left space-y-5"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#8EA7CE] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#19C7E8]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#176BFF]/20 border border-[#19C7E8]/40 flex items-center justify-center text-[#19C7E8]">
            <Sparkles className="w-6 h-6 text-[#E9B949]" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#E9B949]/20 text-[#E9B949] border border-[#E9B949]/30">
              {content.statusBadge}
            </span>
            <h3 className="text-xl font-extrabold text-white mt-1">
              {content.title}
            </h3>
          </div>
        </div>

        {/* Subtitle & Message */}
        <div className="space-y-3 pt-2 border-t border-white/10">
          <p className="text-sm font-semibold text-[#19C7E8]">
            {content.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#C5D4EE] leading-relaxed">
            {content.details}
          </p>
        </div>

        {/* Conference Dates reminder */}
        <div className="p-3.5 rounded-xl bg-[#071A3D]/80 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#8EA7CE]">
            <Calendar className="w-4 h-4 text-[#E9B949]" />
            <span>Event Dates:</span>
          </div>
          <span className="font-bold text-white">
            {CONFERENCE_DATA.datesDisplay}
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#176BFF] to-[#19C7E8] text-white shadow-lg hover:brightness-110 active:scale-95 transition-all text-center"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
