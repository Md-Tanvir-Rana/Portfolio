import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Network, ShieldCheck, MapPin, GraduationCap, Cpu, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { theme } = useTheme();
  const [profileImage, setProfileImage] = useState<string | null>(() => {
    return localStorage.getItem('tr_portfolio_avatar') || null;
  });
  const [imageError, setImageError] = useState(false);

  // Allow user to upload or replace photo directly from local disk (persisted in localStorage)
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setProfileImage(result);
        localStorage.setItem('tr_portfolio_avatar', result);
        setImageError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Decorative Network Grid & Circuit Ambient Light */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke={theme === 'dark' ? '#168BFF' : '#94A3B8'} strokeWidth="0.5" strokeOpacity="0.4" />
              <circle cx="48" cy="48" r="1.5" fill={theme === 'dark' ? '#36D9FF' : '#0284C7'} fillOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider uppercase text-[#36D9FF]">
              <span className="w-2 h-2 rounded-full bg-[#168BFF]" />
              <span>{PERSONAL_INFO.tagline}</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-400 dark:text-slate-400">Jashore, Bangladesh</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
              style={{ textWrap: 'balance' }}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#36D9FF]">{PERSONAL_INFO.fullName}</span>
            </h1>

            {/* Professional Headline */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-1.5 rounded-md bg-[#168BFF]/10 text-[#36D9FF]">
                <Network className="w-5 h-5 text-[#168BFF]" />
              </div>
              <h2
                className={`text-lg sm:text-xl font-bold tracking-tight ${
                  theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                {PERSONAL_INFO.professionalTitle}
              </h2>
            </div>

            {/* Supporting Text */}
            <p
              className={`text-sm sm:text-base leading-relaxed mb-8 max-w-2xl ${
                theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
              }`}
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#168BFF] text-white font-semibold text-sm hover:bg-[#0070E0] active:scale-98 transition-all shadow-lg shadow-[#168BFF]/25 whitespace-nowrap cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all border whitespace-nowrap cursor-pointer ${
                  theme === 'dark'
                    ? 'border-[#1E3557] bg-[#0B1F38] text-white hover:bg-[#122B4D] hover:border-[#168BFF]/50'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-[#168BFF]" />
                <span>Download My CV</span>
              </button>

              <a
                href="/tanvir-rana-portfolio.zip"
                download="tanvir-rana-portfolio.zip"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all border whitespace-nowrap cursor-pointer ${
                  theme === 'dark'
                    ? 'border-[#36D9FF]/40 bg-[#0B1F38] text-[#36D9FF] hover:bg-[#168BFF]/10'
                    : 'border-blue-300 bg-blue-50 text-[#0284C7] hover:bg-blue-100 shadow-sm'
                }`}
                title="Download full project source code as a ZIP archive"
              >
                <Download className="w-4 h-4 text-[#36D9FF]" />
                <span>Download Project ZIP</span>
              </a>
            </div>

            {/* Academic & Focus Metadata Strip (Clean unboxed text) */}
            <div
              className={`pt-6 border-t w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs ${
                theme === 'dark'
                  ? 'border-[#1E3557]/60 text-[#A9B8CC]'
                  : 'border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#168BFF]" />
                <span>Jashore Polytechnic Institute</span>
              </div>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#36D9FF]" />
                <span>Diploma in CST (7th Sem)</span>
              </div>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#168BFF]" />
                <span>Jashore, BD</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Area with Circuit Halo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle Glowing Aura */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#168BFF]/20 via-[#36D9FF]/20 to-transparent blur-2xl" />

              {/* Decorative Tech Orbit Rings */}
              <div
                className={`relative w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-full p-2 border transition-all ${
                  theme === 'dark'
                    ? 'border-[#168BFF]/40 bg-[#0B1F38]/80 shadow-2xl shadow-[#168BFF]/10'
                    : 'border-blue-200 bg-white shadow-xl shadow-slate-200'
                }`}
              >
                {/* Inner Ring with Circuit Accents */}
                <div className="relative w-full h-full rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#168BFF] via-[#0B1F38] to-[#36D9FF]">
                  <div
                    className={`w-full h-full rounded-full overflow-hidden relative flex items-center justify-center ${
                      theme === 'dark' ? 'bg-[#071426]' : 'bg-slate-100'
                    }`}
                  >
                    {/* Check for active uploaded/stored avatar or fallback to tanvir-photo.png */}
                    {profileImage && !imageError ? (
                      <img
                        src={profileImage}
                        alt="MD. Tanvir Rana"
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full relative flex flex-col items-center justify-center text-center p-4">
                        {/* SVG Tech Portrait with Networking Nodes */}
                        <svg
                          viewBox="0 0 200 200"
                          className="w-full h-full text-[#168BFF]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Background Grid Pattern */}
                          <circle cx="100" cy="100" r="92" fill={theme === 'dark' ? '#091B33' : '#E2E8F0'} stroke={theme === 'dark' ? '#168BFF' : '#0284C7'} strokeWidth="2" strokeDasharray="6,4" />
                          <circle cx="100" cy="100" r="76" fill="none" stroke={theme === 'dark' ? '#1E3557' : '#CBD5E1'} strokeWidth="1" />
                          {/* Stylized Silhouette */}
                          <circle cx="100" cy="72" r="32" fill={theme === 'dark' ? '#168BFF' : '#0284C7'} fillOpacity="0.25" stroke={theme === 'dark' ? '#36D9FF' : '#0284C7'} strokeWidth="2" />
                          <path
                            d="M 50 160 C 50 125, 75 116, 100 116 C 125 116, 150 125, 150 160"
                            fill={theme === 'dark' ? '#168BFF' : '#0284C7'}
                            fillOpacity="0.2"
                            stroke={theme === 'dark' ? '#36D9FF' : '#0284C7'}
                            strokeWidth="2"
                          />
                          {/* Monogram inside silhouette */}
                          <text
                            x="100"
                            y="79"
                            fontFamily="sans-serif"
                            fontSize="22"
                            fontWeight="800"
                            fill={theme === 'dark' ? '#FFFFFF' : '#0F172A'}
                            textAnchor="middle"
                          >
                            TR
                          </text>
                          {/* Technical Network Circuit Nodes */}
                          <line x1="100" y1="40" x2="100" y2="24" stroke="#36D9FF" strokeWidth="2" />
                          <circle cx="100" cy="22" r="4" fill="#36D9FF" />
                          <line x1="68" y1="72" x2="48" y2="72" stroke="#168BFF" strokeWidth="2" />
                          <circle cx="46" cy="72" r="3" fill="#168BFF" />
                          <line x1="132" y1="72" x2="152" y2="72" stroke="#168BFF" strokeWidth="2" />
                          <circle cx="154" cy="72" r="3" fill="#168BFF" />
                        </svg>

                        {/* Hint for uploading real photo */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <label
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium rounded-full bg-[#168BFF] text-white hover:bg-[#0070E0] cursor-pointer shadow-md transition-all active:scale-95"
                            title="Upload Tanvir's portrait photo (TANVIR PHOTO.png)"
                          >
                            <Camera className="w-3 h-3" />
                            <span>Add Photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handlePhotoUpload}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating Node Badge */}
                <div
                  className={`absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg border text-[11px] font-semibold flex items-center gap-2 shadow-lg ${
                    theme === 'dark'
                      ? 'bg-[#0B1F38] border-[#168BFF]/40 text-[#36D9FF]'
                      : 'bg-white border-slate-200 text-[#0284C7]'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#168BFF]" />
                  <span>IT Support & Net</span>
                </div>

                {/* Replace/Reset photo control button if photo loaded */}
                {profileImage && (
                  <label
                    className="absolute -top-1 -right-1 p-2 rounded-full bg-[#0B1F38] border border-[#168BFF]/40 text-[#36D9FF] hover:bg-[#122B4D] cursor-pointer shadow-md text-[10px]"
                    title="Change profile photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
