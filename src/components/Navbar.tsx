import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onActionClick: (actionType: 'submit' | 'register' | 'cfp') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onActionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrollspy active section detection
      const sections = [
        'home',
        'about',
        'highlights',
        'themes',
        'dates',
        'tracks',
        'speakers',
        'cfp',
        'publication',
        'committee',
        'venue',
        'contact',
      ];

      const scrollPos = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Highlights', href: '#highlights', id: 'highlights' },
    { name: 'Themes', href: '#themes', id: 'themes' },
    { name: 'Dates', href: '#dates', id: 'dates' },
    { name: 'Tracks', href: '#tracks', id: 'tracks' },
    { name: 'Speakers', href: '#speakers', id: 'speakers' },
    { name: 'CFP', href: '#cfp', id: 'cfp' },
    { name: 'Publication', href: '#publication', id: 'publication' },
    { name: 'Committee', href: '#committee', id: 'committee' },
    { name: 'Venue', href: '#venue', id: 'venue' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setMobileMenuOpen(false);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#071A3D]/95 backdrop-blur-md border-b border-[#19C7E8]/20 shadow-lg shadow-black/40 py-2.5'
          : 'bg-gradient-to-b from-[#071A3D]/90 via-[#071A3D]/35 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & PSG Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19C7E8] rounded-lg p-1"
          >
            {/* Monogram Badge with subtle scale on hover */}
            <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0B2859] to-[#071A3D] border border-[#19C7E8]/30 shadow-md group-hover:border-[#19C7E8] transition-colors overflow-hidden">
              <img
                src="/logo-icon.svg"
                alt="DATAINSIGHT 2027 Logo"
                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#19C7E8]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-[#19C7E8] transition-colors">
                  DATAINSIGHT <span className="text-[#E9B949]">2027</span>
                </span>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#176BFF]/20 text-[#19C7E8] border border-[#19C7E8]/30">
                  PSG Tech
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#8EA7CE] tracking-wider uppercase font-medium line-clamp-1">
                Dept. of Information Technology
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Smooth Animated Underline */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-[#19C7E8] font-semibold'
                      : 'text-[#C5D4EE] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#19C7E8] to-[#E9B949] rounded-full shadow-[0_0_6px_#19C7E8]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <button
              onClick={() => onActionClick('submit')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#176BFF] hover:bg-[#1255cc] text-white shadow-md shadow-[#176BFF]/25 border border-[#19C7E8]/30 hover:scale-[1.03] active:scale-95 transition-all duration-200"
            >
              Submit Paper
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onActionClick('register')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-[#E9B949] border border-[#E9B949]/40 hover:border-[#E9B949] hover:scale-[1.03] active:scale-95 transition-all duration-200"
            >
              Register
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onActionClick('submit')}
              className="sm:inline-flex hidden items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#176BFF] text-white border border-[#19C7E8]/30"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#C5D4EE] hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#19C7E8]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#19C7E8]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden mt-3 pt-3 pb-4 px-2 border-t border-[#19C7E8]/20 bg-[#071A3D]/95 backdrop-blur-xl rounded-2xl shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-1.5 mb-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'bg-[#176BFF]/20 text-[#19C7E8] font-semibold border border-[#19C7E8]/30'
                          : 'text-[#C5D4EE] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onActionClick('submit');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-lg bg-[#176BFF] text-white shadow-md shadow-[#176BFF]/30"
                >
                  Submit Paper
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onActionClick('register');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-lg bg-[#E9B949]/10 text-[#E9B949] border border-[#E9B949]/40"
                >
                  Register Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
