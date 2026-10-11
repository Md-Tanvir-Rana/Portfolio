import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'training', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#071426]/90 backdrop-blur-md border-b border-[#168BFF]/20 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center font-extrabold text-white text-base shadow-md shadow-[#168BFF]/25 group-hover:scale-105 transition-transform">
              TR
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base font-bold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Tanvir Rana
              </span>
              <span className="text-[11px] font-medium text-[#36D9FF] tracking-wider uppercase">
                IT & Networking
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-[#36D9FF] bg-[#168BFF]/10 font-semibold'
                        : 'text-[#168BFF] bg-blue-50 font-semibold'
                      : theme === 'dark'
                      ? 'text-[#A9B8CC] hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Theme Toggle & Download CV) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-lg transition-colors cursor-pointer border ${
                theme === 'dark'
                  ? 'border-[#1E3557] bg-[#0B1F38] text-[#36D9FF] hover:bg-[#122B4D]'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Download CV Button */}
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#168BFF] text-white hover:bg-[#0070E0] active:scale-95 transition-all shadow-md shadow-[#168BFF]/25 whitespace-nowrap cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`lg:hidden p-2 rounded-lg border transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'border-[#1E3557] bg-[#0B1F38] text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-900'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 transition-all ${
            theme === 'dark'
              ? 'bg-[#0B1F38] border-[#1E3557] text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col gap-1.5 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-[#36D9FF] bg-[#168BFF]/15'
                        : 'text-[#168BFF] bg-blue-50'
                      : theme === 'dark'
                      ? 'text-[#A9B8CC] hover:bg-white/5'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCvModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-lg bg-[#168BFF] text-white hover:bg-[#0070E0]"
          >
            <FileText className="w-4 h-4" />
            <span>Open & Download CV</span>
          </button>
        </div>
      )}
    </header>
  );
};
