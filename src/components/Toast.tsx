import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-card border-2 border-[#19C7E8] bg-[#0B2859] shadow-2xl text-white">
        <CheckCircle2 className="w-5 h-5 text-[#19C7E8] flex-shrink-0" />
        <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
          {message}
        </span>
        <button
          onClick={onClose}
          className="ml-2 p-1 rounded-lg hover:bg-white/10 text-[#8EA7CE] hover:text-white transition-colors"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
