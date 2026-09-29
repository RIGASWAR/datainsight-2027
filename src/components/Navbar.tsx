import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onActionClick: (actionType: 'submit' | 'register' | 'cfp' | 'sponsors') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onActionClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Exact 11 navigation items required
  const navItems = [
    { name: 'Home', href: '#home', targetId: 'home' },
    { name: 'About', href: '#about', targetId: 'about' },
    { name: 'Committee', href: '#committee', targetId: 'committee' },
    { name: 'Speakers', href: '#speakers', targetId: 'speakers' },
    { name: 'Theme', href: '#themes', targetId: 'themes' },
    { name: 'Important Dates', href: '#dates', targetId: 'dates' },
    { name: 'Registration', href: '#dates', targetId: 'registration', isAction: true },
    { name: 'Events', href: '#highlights', targetId: 'highlights' },
    { name: 'Publications', href: '#publication', targetId: 'publication' },
    { name: 'Venue & Contact', href: '#venue', targetId: 'venue' },
    { name: 'Sponsors', href: '#contact', targetId: 'sponsors', isAction: true },
  ];

  // Scrollspy active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;

      // Section ID mapping to nav label
      const sectionMappings = [
        { id: 'contact', label: 'Venue & Contact' },
        { id: 'venue', label: 'Venue & Contact' },
        { id: 'committee', label: 'Committee' },
        { id: 'publication', label: 'Publications' },
        { id: 'cfp', label: 'Registration' },
        { id: 'speakers', label: 'Speakers' },
        { id: 'tracks', label: 'Theme' },
        { id: 'dates', label: 'Important Dates' },
        { id: 'themes', label: 'Theme' },
        { id: 'highlights', label: 'Events' },
        { id: 'about', label: 'About' },
        { id: 'home', label: 'Home' },
      ];

      for (const section of sectionMappings) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section.label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: typeof navItems[0]
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(item.name);

    if (item.name === 'Registration') {
      onActionClick('register');
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    if (item.name === 'Sponsors') {
      onActionClick('sponsors');
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#244A91] border-b border-[#16366B] shadow-md">
      <div className="max-w-[1560px] mx-auto px-3 sm:px-6">
        
        {/* Mobile Header Bar (< 1024px) */}
        <div className="flex lg:hidden items-center justify-between py-2.5">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-white"
          >
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
              DATAINSIGHT 2027
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#16366B] text-[#D9A353] border border-[#D9A353]/30">
              PSG TECH
            </span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onActionClick('submit')}
              className="px-2.5 py-1 text-xs font-bold bg-[#D9A353] text-[#071329] rounded-md shadow-xs"
            >
              Submit Paper
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-white hover:text-[#D9A353] hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D9A353]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation (>= 1024px): Pure horizontal academic navbar */}
        <nav className="hidden lg:flex items-center justify-center space-x-1 lg:space-x-1.5 xl:space-x-2 py-2 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeSection === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-2 lg:px-2.5 xl:px-3 py-1.5 text-xs lg:text-[13px] xl:text-[13.5px] font-semibold tracking-wide rounded-md transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#D9A353] bg-[#16366B]/90 font-bold shadow-xs border-b-2 border-[#D9A353]'
                    : 'text-white hover:text-[#D9A353] hover:bg-white/10'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-[#16366B] bg-[#1F407F] px-2 py-3"
            >
              <div className="grid grid-cols-2 gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.name;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? 'bg-[#16366B] text-[#D9A353] font-bold border border-[#D9A353]/40'
                          : 'text-white hover:bg-white/10 hover:text-[#D9A353]'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <div className="mt-3 pt-3 border-t border-[#16366B] flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onActionClick('submit');
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg bg-[#D9A353] text-[#071329] shadow-xs"
                >
                  Submit Paper
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onActionClick('register');
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg bg-white/10 text-white border border-white/20"
                >
                  Register
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};
