import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#training' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className={`border-t transition-colors ${
        theme === 'dark'
          ? 'bg-[#050E1A] border-[#1E3557] text-[#A9B8CC]'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Title */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center font-extrabold text-white text-sm shadow-md">
                TR
              </div>
              <div>
                <h3
                  className={`text-base font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {PERSONAL_INFO.fullName}
                </h3>
                <span className="text-xs text-[#36D9FF] font-medium block">
                  IT Support & Networking Portfolio
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Diploma student in Computer Science and Technology at Jashore Polytechnic Institute. Focused on Cisco Packet Tracer simulations, routing protocols, and hardware diagnostics.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span
              className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#168BFF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct Link & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col items-start md:items-end text-left md:text-right">
            <span
              className={`text-xs font-bold uppercase tracking-wider block ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Get In Touch
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs text-[#168BFF] hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <div className="text-xs text-slate-400">
              {PERSONAL_INFO.location}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`mt-2 p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'border-[#1E3557] bg-[#0B1F38] text-slate-300 hover:text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>

            {/* Direct Project ZIP Download */}
            <a
              href="/tanvir-rana-portfolio.zip"
              download="tanvir-rana-portfolio.zip"
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#168BFF]/40 text-[11px] font-semibold text-[#36D9FF] hover:bg-[#168BFF]/10 transition-colors"
              title="Download entire portfolio source code as a ZIP archive"
            >
              <span>Download Project ZIP</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Closing Message */}
        <div className="mt-12 pt-6 border-t border-slate-200/40 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
          <div className="text-[#36D9FF] font-medium tracking-wider">
            Learn • Build • Troubleshoot
          </div>
        </div>
      </div>
    </footer>
  );
};
