import React, { useEffect } from 'react';
import { X, CheckCircle2, Terminal, Info, Image, Clock, FileCode2, ShieldAlert } from 'lucide-react';
import { ProjectLab } from '../types';
import { ProjectSchematic } from './ProjectSchematics';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  lab: ProjectLab | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ lab, onClose }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!lab) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog Container */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all ${
          theme === 'dark'
            ? 'bg-[#071426] border-[#168BFF]/40 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`sticky top-0 z-10 flex items-start justify-between p-6 border-b backdrop-blur-md ${
            theme === 'dark'
              ? 'bg-[#071426]/90 border-[#1E3557]'
              : 'bg-white/90 border-slate-200'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-[#168BFF]">
              <span>{lab.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Academic Lab Work</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {lab.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">{lab.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8">
          {/* Schematic Diagram Area */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] flex items-center gap-1.5">
                <FileCode2 className="w-4 h-4" />
                <span>Lab Architecture Schematic</span>
              </span>
              <span className="text-[11px] text-slate-400">Simulated Lab Topology</span>
            </div>
            <ProjectSchematic type={lab.topologyType} className="h-64 sm:h-72" />
          </div>

          {/* Technology Badges (clean unboxed text list) */}
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Technologies & Protocols
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {lab.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg border font-medium ${
                    theme === 'dark'
                      ? 'bg-[#0B1F38] border-[#1E3557] text-[#36D9FF]'
                      : 'bg-slate-100 border-slate-200 text-[#0284C7]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview & Description */}
          <div
            className={`p-4 sm:p-5 rounded-xl border ${
              theme === 'dark'
                ? 'bg-[#0B1F38]/60 border-[#1E3557]'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#168BFF] mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              <span>Project Overview</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
              {lab.description}
            </p>
          </div>

          {/* Objectives & Configuration Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Objectives */}
            <div
              className={`p-5 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-[#0B1F38]/40 border-[#1E3557]'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-[#36D9FF]">
                <CheckCircle2 className="w-4 h-4 text-[#168BFF]" />
                <span>Lab Objectives</span>
              </h3>
              <ul className="space-y-2.5 text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                {lab.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#168BFF] font-bold">›</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Configuration Summary */}
            <div
              className={`p-5 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-[#0B1F38]/40 border-[#1E3557]'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-[#168BFF]">
                <Terminal className="w-4 h-4 text-[#36D9FF]" />
                <span>Configuration Summary</span>
              </h3>
              <ul className="space-y-2.5 text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                {lab.configurationSummary.map((cfg, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#36D9FF] font-bold">›</span>
                    <code>{cfg}</code>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testing and Troubleshooting Notes */}
          <div
            className={`p-5 rounded-xl border ${
              theme === 'dark'
                ? 'bg-[#0B1F38]/40 border-[#1E3557]'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-slate-200 dark:text-slate-200 light:text-slate-800">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <span>Testing & Troubleshooting Notes</span>
            </h3>
            <ul className="space-y-2 text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
              {lab.testingNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Space for Screenshots & Documentation Status */}
          <div
            className={`p-6 rounded-xl border border-dashed text-center flex flex-col items-center justify-center ${
              theme === 'dark'
                ? 'border-[#1E3557] bg-[#071426]'
                : 'border-slate-300 bg-slate-50'
            }`}
          >
            <Image className="w-8 h-8 text-slate-500 mb-2" />
            <h4 className="text-sm font-bold">Lab Screenshots & Packet Capture</h4>
            <p className="text-xs text-slate-400 max-w-md mt-1">
              Space reserved for Cisco Packet Tracer CLI terminal outputs, Wireshark packet captures, and workbench photos.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Clock className="w-3.5 h-3.5" />
              <span>Documentation Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className={`flex items-center justify-between p-5 border-t ${
            theme === 'dark' ? 'border-[#1E3557] bg-[#0B1F38]/60' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <span className="text-xs text-slate-500">
            MD. Tanvir Rana · Practical Academic Lab
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#168BFF] text-white text-xs font-semibold hover:bg-[#0070E0] transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
