import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { CONFERENCE_DATA } from '../data/conference';

interface FooterProps {
  onActionClick: (actionType: 'submit' | 'register' | 'cfp') => void;
  onLegalClick: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onActionClick, onLegalClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#071A3D] border-t border-[#176BFF]/20 pt-16 pb-12 text-[#C5D4EE] relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#00A8E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Conference Identity & PSG Host */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B2D6B] border border-[#176BFF]/40 flex items-center justify-center">
                <img
                  src="/logo-icon.svg"
                  alt="DATAINSIGHT 2027 Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  DATAINSIGHT <span className="text-[#D9A441]">2027</span>
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#00A8E8] leading-relaxed">
              {CONFERENCE_DATA.fullTitle}
            </p>

            <p className="text-sm text-[#C5D4EE] italic">
              {CONFERENCE_DATA.tagline}
            </p>

            <div className="pt-2 text-sm space-y-1.5 text-[#8EA7CE]">
              <div className="font-semibold text-white">
                {CONFERENCE_DATA.institution.department}
              </div>
              <div>{CONFERENCE_DATA.institution.name}</div>
              <div className="text-xs text-[#D9A441] font-medium">
                {CONFERENCE_DATA.institution.accreditation}
              </div>
              <div className="flex items-center gap-1.5 pt-1 text-xs">
                <MapPin className="w-4 h-4 text-[#00A8E8]" />
                <span>{CONFERENCE_DATA.institution.location}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {CONFERENCE_DATA.footer.quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[#C5D4EE] hover:text-[#00A8E8] transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Conference Action Links & Status */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white mb-4">
              Delegate Portal
            </h4>
            
            <div className="space-y-2.5">
              <button
                onClick={() => onActionClick('submit')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0B2D6B]/80 hover:bg-[#0B2D6B] border border-[#176BFF]/40 text-sm font-bold text-white transition-colors"
              >
                <span>Submit Paper</span>
                <ArrowUpRight className="w-4 h-4 text-[#00A8E8]" />
              </button>

              <button
                onClick={() => onActionClick('register')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0B2D6B]/80 hover:bg-[#0B2D6B] border border-[#D9A441]/40 text-sm font-bold text-[#D9A441] transition-colors"
              >
                <span>Register for Conference</span>
                <ArrowUpRight className="w-4 h-4 text-[#D9A441]" />
              </button>

              <button
                onClick={() => onActionClick('cfp')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0B2D6B]/80 hover:bg-[#0B2D6B] border border-white/10 text-sm font-bold text-[#C5D4EE] transition-colors"
              >
                <span>Download Call for Papers</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-xs text-[#8EA7CE]">
              <span>Official Contact: </span>
              <span className="text-[#D9A441] font-mono font-semibold">TO BE INCLUDED</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#8EA7CE]">
          <div>
            {CONFERENCE_DATA.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onLegalClick('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy (TO BE INCLUDED)
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onLegalClick('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service (TO BE INCLUDED)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
