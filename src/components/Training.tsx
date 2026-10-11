import React from 'react';
import { Award, Clock, FileCheck, CheckSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Training: React.FC = () => {
  const { theme } = useTheme();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Certificate available':
        return {
          label: 'Certificate Available',
          classes: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
          icon: ShieldCheck,
        };
      case 'Certificate not yet available':
        return {
          label: 'Certificate Pending Issuance',
          classes: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
          icon: Clock,
        };
      default:
        return {
          label: 'Details to be Confirmed',
          classes: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
          icon: AlertCircle,
        };
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'Clock':
        return Clock;
      case 'FileCheck':
        return FileCheck;
      default:
        return CheckSquare;
    }
  };

  return (
    <section
      id="training"
      className={`py-20 lg:py-28 transition-colors ${
        theme === 'dark' ? 'bg-[#0B1F38]/40' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#168BFF] mb-2 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#168BFF]" />
            <span>Vocational & Technical Credentials</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Training & Professional Development
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
            }`}
          >
            Technical training and national vocational skill certifications completed and in progress at accredited institutions.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => {
            const Icon = getIcon(cert.icon);
            const statusBadge = getStatusBadge(cert.status);
            const StatusIcon = statusBadge.icon;

            return (
              <div
                key={cert.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-[#071426] border-[#1E3557] hover:border-[#168BFF]/40'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Status Tag */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#168BFF]/10 text-[#168BFF] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusBadge.classes}`}
                    >
                      <StatusIcon className="w-3.5 h-3.5" />
                      <span>{statusBadge.label}</span>
                    </div>
                  </div>

                  {/* Title & Provider */}
                  <h3
                    className={`text-lg font-bold tracking-tight mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {cert.title}
                  </h3>

                  <div className="text-xs text-slate-400 mb-3 flex items-center gap-2">
                    <span>Provider:</span>
                    <strong className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                      {cert.provider}
                    </strong>
                    {cert.level && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{cert.level}</span>
                      </>
                    )}
                  </div>

                  {/* Verified Candidate Note */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
                    }`}
                  >
                    {cert.note}
                  </p>
                </div>

                {/* Accuracy Disclaimer */}
                <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Accreditation Record</span>
                  <span className="text-[#168BFF]">Jashore Technical Training Center</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
