import React from 'react';
import { MapPin, School, GraduationCap, Calendar, CheckCircle, Terminal, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const learningAreas = [
    { title: 'Computer Networking', desc: 'Understanding IP subnets, switches, and structured LAN cabling.' },
    { title: 'Cisco Packet Tracer Labs', desc: 'Simulating multi-node topologies, router interfaces, and connectivity testing.' },
    { title: 'Routing & Switching', desc: 'Hands-on practice with Static, RIP, OSPF, and VLAN segmentation.' },
    { title: 'IT Support & Diagnostics', desc: 'Hardware fault isolation, power delivery checks, and software issue resolution.' },
    { title: 'PC Assembly & Windows OS', desc: 'Component integration, clean UEFI Windows deployment, and driver setup.' },
    { title: 'Continuous Technical Learning', desc: 'Documenting practice labs and preparing for professional certification pathways.' },
  ];

  const infoCards = [
    {
      label: 'Location',
      value: PERSONAL_INFO.location,
      icon: MapPin,
      subtext: 'Khulna Division, Bangladesh',
    },
    {
      label: 'Institution',
      value: PERSONAL_INFO.institution,
      icon: School,
      subtext: 'Government Technical Institute',
    },
    {
      label: 'Education',
      value: PERSONAL_INFO.program,
      icon: GraduationCap,
      subtext: 'Current Status: 7th Semester',
    },
    {
      label: 'Expected Graduation',
      value: PERSONAL_INFO.expectedGraduation,
      icon: Calendar,
      subtext: 'Diploma Completion Target',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 lg:py-28 transition-colors ${
        theme === 'dark' ? 'bg-[#0B1F38]/60' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#168BFF] mb-2 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#168BFF]" />
            <span>Profile Overview</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            About Me
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
            }`}
          >
            A dedicated Computer Science and Technology student preparing for entry-level IT Support, Systems Maintenance, and Network Administration roles.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Academic Background & Practical Learning Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-[#071426] border-[#1E3557]'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3
                className={`text-lg sm:text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Academic Journey & Aspirations
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
                }`}
              >
                I am currently enrolled in the <strong>7th semester</strong> of the Diploma in Computer Science and Technology program at <strong>Jashore Polytechnic Institute</strong>, with expected completion in 2027. My academic studies are paired with self-directed lab exercises to master real-world networking fundamentals and hardware maintenance.
              </p>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
                }`}
              >
                I am actively seeking practical internship and entry-level IT support opportunities where I can apply my skills in troubleshooting desktop environments, configuring routers and switches in Cisco Packet Tracer, and contributing to technical operations.
              </p>
            </div>

            {/* Practical Learning Focus Areas */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-[#071426] border-[#1E3557]'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3
                className={`text-base sm:text-lg font-bold mb-4 flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                <Terminal className="w-5 h-5 text-[#36D9FF]" />
                <span>Core Practical Learning Areas</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {learningAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#168BFF] mt-0.5 shrink-0" />
                    <div>
                      <h4
                        className={`text-xs sm:text-sm font-semibold ${
                          theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {area.title}
                      </h4>
                      <p
                        className={`text-[12px] leading-snug mt-0.5 ${
                          theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-500'
                        }`}
                      >
                        {area.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Compact Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    theme === 'dark'
                      ? 'bg-[#071426] border-[#1E3557] hover:border-[#168BFF]/40'
                      : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#168BFF]/10 text-[#168BFF] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#36D9FF] block">
                        {card.label}
                      </span>
                      <h4
                        className={`text-sm sm:text-base font-bold mt-0.5 leading-snug break-words ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {card.value}
                      </h4>
                      <span
                        className={`text-xs mt-1 block ${
                          theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-500'
                        }`}
                      >
                        {card.subtext}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
