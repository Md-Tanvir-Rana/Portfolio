import React, { useState } from 'react';
import {
  Network,
  Wrench,
  Laptop,
  Sparkles,
  Route,
  Compass,
  Share2,
  GitFork,
  Zap,
  Globe,
  Layers,
  Shuffle,
  ShieldCheck,
  Wifi,
  Cpu,
  Monitor,
  HardDrive,
  Terminal,
  Save,
  Server,
  CheckCircle2,
  Video,
  LucideIcon,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory, SkillItem } from '../types';
import { useTheme } from '../context/ThemeContext';

const iconMap: Record<string, LucideIcon> = {
  Network,
  Route,
  Compass,
  Share2,
  GitFork,
  Zap,
  Globe,
  Layers,
  Shuffle,
  ShieldCheck,
  Wifi,
  Cpu,
  Monitor,
  HardDrive,
  Wrench,
  Terminal,
  Save,
  Laptop,
  Server,
  CheckCircle2,
  Video,
};

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Competencies', icon: Sparkles },
    { id: 'networking', label: 'Networking & Routing', icon: Network },
    { id: 'it-support', label: 'IT Support & Hardware', icon: Wrench },
    { id: 'tools', label: 'Tools & Platforms', icon: Laptop },
    { id: 'additional', label: 'Additional Skills', icon: Video },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#168BFF] mb-2 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#168BFF]" />
              <span>Technical Capabilities</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Technical Skills
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
              }`}
            >
              Practical skills developed through academic laboratory coursework, personal simulations in Cisco Packet Tracer, and hands-on PC maintenance.
            </p>
          </div>

          {/* Category count indicator (clean unboxed text) */}
          <div className="text-xs text-slate-500 shrink-0">
            <span>{filteredSkills.length} Technical Skills Listed</span>
            <span aria-hidden="true" className="mx-1.5">·</span>
            <span>No Artificial Scores</span>
          </div>
        </div>

        {/* Filter Segmented Control (Interactive functional buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border mb-10 max-w-fit transition-colors">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#168BFF] text-white shadow-md shadow-[#168BFF]/25'
                    : theme === 'dark'
                    ? 'text-[#A9B8CC] hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Terminal;
            return (
              <div
                key={index}
                className={`p-5 rounded-2xl border transition-all duration-200 group flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-[#0B1F38] border-[#1E3557] hover:border-[#168BFF]/50 hover:bg-[#0D2545]'
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#168BFF]/10 text-[#168BFF] group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 text-[#168BFF]" />
                    </div>
                    {/* Unboxed subtle category label */}
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 text-right">
                      {skill.categoryLabel}
                    </span>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-bold tracking-tight mb-1.5 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {skill.name}
                  </h3>

                  {skill.description && (
                    <p
                      className={`text-xs leading-relaxed ${
                        theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-500'
                      }`}
                    >
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Status indicator line */}
                <div className="pt-3 mt-3 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Lab Practice</span>
                  <span className="text-[#36D9FF] font-medium">Hands-On</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
