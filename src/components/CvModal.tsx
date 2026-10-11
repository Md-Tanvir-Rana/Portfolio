import React, { useEffect, useState } from 'react';
import { X, Download, Printer, FileText, CheckCircle2, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, CV_CONFIG, SKILLS_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [downloadFailed, setDownloadFailed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Check if real PDF is attached
    if (CV_CONFIG.available) {
      const a = document.createElement('a');
      a.href = CV_CONFIG.pdfUrl;
      a.download = CV_CONFIG.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // If no external PDF is mounted yet, offer browser print-to-PDF or explain configuration
      setDownloadFailed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border shadow-2xl transition-all ${
          theme === 'dark'
            ? 'bg-[#071426] border-[#168BFF]/40 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          className={`sticky top-0 z-20 flex items-center justify-between p-5 border-b backdrop-blur-md ${
            theme === 'dark'
              ? 'bg-[#071426]/90 border-[#1E3557]'
              : 'bg-white/90 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#168BFF]/10 text-[#168BFF]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight">
                Curriculum Vitae (CV)
              </h2>
              <span className="text-xs text-slate-400">
                {PERSONAL_INFO.fullName} · {PERSONAL_INFO.professionalTitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print or save as PDF"
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'border-[#1E3557] bg-[#0B1F38] text-slate-300 hover:text-white hover:bg-[#122B4D]'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status Callout if external PDF not yet supplied */}
        {!CV_CONFIG.available && (
          <div className="mx-6 mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold">PDF Configuration Notice:</span>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-600">
                  You can view and print the complete, formatted resume below right now. To connect your physical PDF file, copy your PDF to <code>/public/tanvir-rana-cv.pdf</code> and set <code>available: true</code> in <code>src/data/portfolioData.ts</code>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Printable Resume Container */}
        <div id="printable-cv" className="p-6 sm:p-8 space-y-8">
          {/* Resume Header */}
          <div className="border-b pb-6 border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-sm font-semibold text-[#168BFF] mt-1">
              {PERSONAL_INFO.professionalTitle}
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500 dark:text-slate-400 mt-3">
              <span>{PERSONAL_INFO.location}</span>
              <span aria-hidden="true">·</span>
              <span>Phone: {PERSONAL_INFO.phone}</span>
              <span aria-hidden="true">·</span>
              <span>Email: {PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-2">
              Career Objective & Profile
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-3">
              Education
            </h3>
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold">
                <span>{EDUCATION_DATA.degree}</span>
                <span className="text-xs font-medium text-slate-400">{EDUCATION_DATA.status} (Graduation: {EDUCATION_DATA.expectedGraduation})</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {EDUCATION_DATA.institution} — Jashore, Bangladesh
              </div>
            </div>
          </div>

          {/* Practical Networking & IT Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-3">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-[#0B1F38] border border-slate-200 dark:border-[#1E3557]">
                <strong className="block text-slate-900 dark:text-white mb-1.5">Networking & Routing</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Cisco Packet Tracer, Static Routing, Default Routing, RIP, RIPv2, OSPF, EIGRP, BGP, VLANs, Inter-VLAN Routing, ACLs, Home Routers.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-100 dark:bg-[#0B1F38] border border-slate-200 dark:border-[#1E3557]">
                <strong className="block text-slate-900 dark:text-white mb-1.5">IT Support & Hardware</strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  PC Assembly, Windows OS Installation, Driver Deployment, Hardware Diagnostics, Software Troubleshooting, Backup & Recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-3">
              Vocational Training & Competencies
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              {CERTIFICATIONS_DATA.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#168BFF] shrink-0 mt-0.5" />
                  <div>
                    <strong>{c.title}</strong> — {c.provider} ({c.status})
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-t ${
            theme === 'dark' ? 'border-[#1E3557] bg-[#0B1F38]/60' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Last Updated: {CV_CONFIG.lastUpdated}</span>
            <span aria-hidden="true" className="mx-1.5">·</span>
            <span>English Proficiency: {PERSONAL_INFO.englishProficiency}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border border-slate-300 dark:border-[#1E3557] text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer"
            >
              Print Resume
            </button>
            <a
              href="/tanvir-rana-portfolio.zip"
              download="tanvir-rana-portfolio.zip"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-[#168BFF]/40 text-[#36D9FF] text-xs font-semibold hover:bg-[#168BFF]/10 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Project .ZIP</span>
            </a>
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-[#168BFF] text-white text-xs font-semibold hover:bg-[#0070E0] shadow-md transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
