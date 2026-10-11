import React, { useState } from 'react';
import { ExternalLink, Layers, Clock, FileCode, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectLab } from '../types';
import { ProjectSchematic } from './ProjectSchematics';
import { ProjectModal } from './ProjectModal';
import { useTheme } from '../context/ThemeContext';

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [selectedLab, setSelectedLab] = useState<ProjectLab | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#168BFF] mb-2 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#168BFF]" />
              <span>Simulations & Physical Labs</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Projects & Practical Labs
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
              }`}
            >
              Documented academic and practice labs covering Cisco Packet Tracer topology designs, routing protocol convergence, and desktop hardware maintenance.
            </p>
          </div>

          <div className="text-xs text-slate-500 shrink-0">
            <span>Academic & Personal Practice Labs</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-[#0B1F38] border-[#1E3557] hover:border-[#168BFF]/60 hover:shadow-xl hover:shadow-[#168BFF]/10'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200'
              }`}
            >
              {/* Schematic Blueprint Preview */}
              <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedLab(project)}>
                <ProjectSchematic type={project.topologyType} />
                <div className="absolute inset-0 bg-[#168BFF]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="px-3.5 py-1.5 rounded-lg bg-[#071426]/90 text-white text-xs font-semibold border border-[#36D9FF]/40 shadow-lg flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-[#36D9FF]" />
                    <span>View Lab Details</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                    <span className="text-[#168BFF] font-semibold">{project.category}</span>
                    <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{project.documentationStatus}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base sm:text-lg font-bold tracking-tight mb-2 group-hover:text-[#36D9FF] transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${
                      theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies Tags (Unboxed text with dots) */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-slate-400">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                          theme === 'dark'
                            ? 'bg-[#071426] text-slate-300 border border-[#1E3557]'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedLab(project)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#168BFF] hover:text-[#36D9FF] transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-slate-500">
                    Academic Practice
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedLab && (
        <ProjectModal lab={selectedLab} onClose={() => setSelectedLab(null)} />
      )}
    </section>
  );
};
