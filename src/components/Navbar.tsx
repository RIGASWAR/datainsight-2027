import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onActionClick: (actionType: 'submit' | 'register' | 'cfp') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onActionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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

      const scrollPos = window.scrollY + 200;
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const primaryNavItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Themes', href: '#themes', id: 'themes' },
    { name: 'Dates', href: '#dates', id: 'dates' },
    { name: 'Tracks', href: '#tracks', id: 'tracks' },
    { name: 'Speakers', href: '#speakers', id: 'speakers' },
    { name: 'CFP', href: '#cfp', id: 'cfp' },
  ];

  const secondaryNavItems = [
    { name: 'Highlights', href: '#highlights', id: 'highlights' },
    { name: 'Publication', href: '#publication', id: 'publication' },
    { name: 'Committee', href: '#committee', id: 'committee' },
    { name: 'Venue', href: '#venue', id: 'venue' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];
  const isSecondaryActive = secondaryNavItems.some((item) => activeSection === item.id);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#176BFF]/15 shadow-md shadow-[#0B2D6B]/5 py-2'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#176BFF]/10 py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo & PSG Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176BFF] rounded-lg p-0.5"
          >
            {/* Monogram Badge */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F5F9FF] to-[#EBF2FF] border border-[#176BFF]/30 shadow-xs group-hover:border-[#176BFF] transition-colors overflow-hidden">
              <img
                src="/logo-icon.svg"
                alt="DATAINSIGHT 2027 Logo"
                className="w-5.5 h-5.5 sm:w-6 sm:h-6 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#176BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0B2D6B] group-hover:text-[#176BFF] transition-colors leading-tight">
                  DATAINSIGHT <span className="text-[#D9A441]">2027</span>
                </span>
                <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#176BFF]/10 text-[#176BFF] border border-[#176BFF]/25">
                  PSG Tech
                </span>
              </div>
              <span className="text-[11px] text-[#4A5E82] tracking-wider uppercase font-semibold line-clamp-1">
                Dept. of Information Technology
              </span>
            </div>
          </a>

          {/* Desktop Navigation: Primary Links + More Dropdown */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 flex-shrink">
            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-[#176BFF] font-bold'
                      : 'text-[#1A2B4A] hover:text-[#176BFF] hover:bg-[#F5F9FF]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#176BFF] rounded-full shadow-[0_0_6px_rgba(23,107,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* "More" Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onMouseEnter={() => setMoreDropdownOpen(true)}
                className={`relative inline-flex items-center gap-1 px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none ${
                  isSecondaryActive || moreDropdownOpen
                    ? 'text-[#176BFF] font-bold'
                    : 'text-[#1A2B4A] hover:text-[#176BFF] hover:bg-[#F5F9FF]'
                }`}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180 text-[#176BFF]' : 'text-[#4A5E82]'
                  }`}
                />
                {isSecondaryActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#176BFF] rounded-full shadow-[0_0_6px_rgba(23,107,255,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Dropdown Menu Container */}
              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    onMouseLeave={() => setMoreDropdownOpen(false)}
                    className="absolute right-0 mt-1.5 w-44 rounded-xl bg-white/98 backdrop-blur-md border border-[#176BFF]/20 shadow-xl shadow-[#0B2D6B]/10 py-1.5 z-50 text-left"
                  >
                    {secondaryNavItems.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`block px-3.5 py-2 text-xs sm:text-sm transition-colors rounded-lg mx-1 ${
                            isActive
                              ? 'bg-[#176BFF]/10 text-[#176BFF] font-bold'
                              : 'text-[#1A2B4A] hover:bg-[#F5F9FF] hover:text-[#176BFF]'
                          }`}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action CTAs - flex-shrink-0 to guarantee they never clip or wrap */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={() => onActionClick('submit')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold bg-[#176BFF] hover:bg-[#0A55E0] text-white shadow-sm shadow-[#176BFF]/25 hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Submit Paper</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onActionClick('register')}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs xl:text-sm font-bold bg-[#F5F9FF] hover:bg-[#EBF2FF] text-[#174EA6] border border-[#176BFF]/30 hover:border-[#176BFF] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Register</span>
            </button>
          </div>

          {/* Mobile / Tablet Hamburger & Quick Submit Button */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={() => onActionClick('submit')}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#176BFF] text-white shadow-xs"
            >
              <span>Submit</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#1A2B4A] hover:text-[#176BFF] hover:bg-[#F5F9FF] focus:outline-none focus:ring-2 focus:ring-[#176BFF]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#176BFF]" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden mt-2.5 pt-3 pb-4 px-3 border border-[#176BFF]/20 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl"
            >
              <div className="grid grid-cols-2 gap-1.5 mb-4">
                {allNavItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? 'bg-[#176BFF]/10 text-[#176BFF] font-bold border border-[#176BFF]/25'
                          : 'text-[#1A2B4A] hover:bg-[#F5F9FF] hover:text-[#176BFF]'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onActionClick('submit');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl bg-[#176BFF] text-white shadow-md shadow-[#176BFF]/20"
                >
                  Submit Paper
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onActionClick('register');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl bg-[#F5F9FF] text-[#174EA6] border border-[#176BFF]/30"
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
