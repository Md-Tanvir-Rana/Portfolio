import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#168BFF] mb-2 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#168BFF]" />
            <span>Academic Background</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Education
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
            }`}
          >
            Formal diploma education in Computer Science and Technology under the Bangladesh Technical Education Board (BTEB).
          </p>
        </div>

        {/* Education Highlight Card / Timeline */}
        <div
          className={`p-6 sm:p-8 lg:p-10 rounded-2xl border transition-all ${
            theme === 'dark'
              ? 'bg-[#0B1F38] border-[#1E3557] shadow-xl'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Institution & Degree Focus */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#168BFF]/10 text-[#168BFF]">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#36D9FF]">
                    Academic Degree
                  </span>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {EDUCATION_DATA.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#168BFF]" />
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {EDUCATION_DATA.institution}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#36D9FF]" />
                  <span>
                    Current: <strong>{EDUCATION_DATA.status}</strong> · Expected Graduation: <strong>{EDUCATION_DATA.expectedGraduation}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#168BFF]" />
                  <span>Jashore, Bangladesh</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#168BFF]/10 border border-[#168BFF]/25 text-xs text-[#36D9FF] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#168BFF]" />
                <span>Currently Enrolled (Active Student)</span>
              </div>
            </div>

            {/* Academic Highlights & Coursework Focus */}
            <div className="lg:col-span-7 lg:border-l lg:border-slate-200/50 dark:lg:border-slate-800 lg:pl-8 space-y-4">
              <h4
                className={`text-sm sm:text-base font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                Curriculum Focus & Core Learning
              </h4>
              <ul className="space-y-3">
                {EDUCATION_DATA.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#168BFF] mt-1 shrink-0" />
                    <span
                      className={`text-xs sm:text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`p-4 rounded-xl border text-xs leading-relaxed ${
                  theme === 'dark'
                    ? 'bg-[#071426] border-[#1E3557] text-slate-400'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                <strong>Academic Notice:</strong> Official transcripts, semester grade sheets, and institutional certificates will be presented upon formal request for internship or job verification.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
