import React from 'react';
import { Wrench, Network, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { CAREER_GOALS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const CareerGoals: React.FC = () => {
  const { theme } = useTheme();

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Wrench':
        return Wrench;
      case 'Network':
        return Network;
      default:
        return GraduationCap;
    }
  };

  return (
    <section
      id="career-focus"
      className={`py-20 lg:py-28 transition-colors ${
        theme === 'dark' ? 'bg-[#0B1F38]/40' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#168BFF] mb-2 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#168BFF]" />
            <span>Target Professional Trajectory</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Career Focus
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
            }`}
          >
            Targeted entry-level career directions, core technical objectives, and ongoing learning milestones.
          </p>
        </div>

        {/* 3 Career Goals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAREER_GOALS.map((goal, idx) => {
            const Icon = getIcon(goal.icon);

            return (
              <div
                key={idx}
                className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  theme === 'dark'
                    ? 'bg-[#071426] border-[#1E3557] hover:border-[#168BFF]/50 hover:shadow-xl hover:shadow-[#168BFF]/10'
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-[#168BFF]/10 text-[#168BFF] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#36D9FF] uppercase tracking-wider">
                      Goal 0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold tracking-tight mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {goal.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#168BFF] mb-3">
                    {goal.focus}
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
                    }`}
                  >
                    {goal.description}
                  </p>

                  {/* Key Areas List */}
                  <div className="space-y-2 pt-4 border-t border-slate-200/50 dark:border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Competency Targets:
                    </span>
                    {goal.keyAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-[#36D9FF] shrink-0" />
                        <span
                          className={`${
                            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                          }`}
                        >
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Entry-Level Path</span>
                  <span className="text-[#168BFF] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    <span>Active Preparation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
