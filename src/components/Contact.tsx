import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github, ExternalLink, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Launch mailto fallback with prefilled user content
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#168BFF] mb-2 flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#168BFF]" />
            <span>Direct Communication</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
            }`}
          >
            Feel free to reach out for internship inquiries, entry-level IT support and networking positions, or academic discussions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Social Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-[#0B1F38] border-[#1E3557] hover:border-[#168BFF]/40'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#168BFF]/10 text-[#168BFF] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#36D9FF] block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className={`text-base font-bold mt-0.5 block hover:text-[#168BFF] transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    Available for calls & SMS (Bangladesh)
                  </span>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-[#0B1F38] border-[#1E3557] hover:border-[#168BFF]/40'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#168BFF]/10 text-[#168BFF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#36D9FF] block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className={`text-base font-bold mt-0.5 block truncate hover:text-[#168BFF] transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="inline-flex items-center gap-1 text-xs text-[#168BFF] font-medium hover:underline"
                    >
                      <span>Send Email</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-[#0B1F38] border-[#1E3557]'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#168BFF]/10 text-[#168BFF] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#36D9FF] block">
                    Location
                  </span>
                  <div
                    className={`text-base font-bold mt-0.5 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PERSONAL_INFO.location}
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    Open to local and remote IT opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Status (No fake URLs) */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                theme === 'dark' ? 'bg-[#071426] border-[#1E3557]' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Professional Profiles
              </span>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <Linkedin className="w-4 h-4 text-[#168BFF]" />
                    <span>LinkedIn</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
                    Profile Coming Soon
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <Github className="w-4 h-4 text-[#36D9FF]" />
                    <span>GitHub</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Mailto Fallback */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border transition-all ${
              theme === 'dark'
                ? 'bg-[#0B1F38] border-[#1E3557]'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h3
              className={`text-lg sm:text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Send a Direct Message
            </h3>
            <p
              className={`text-xs sm:text-sm mb-6 ${
                theme === 'dark' ? 'text-[#A9B8CC]' : 'text-slate-600'
              }`}
            >
              Fill out this form to connect. Submitting will prepare your message in your default email client directly to <code>{PERSONAL_INFO.email}</code>.
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="block font-semibold">Message Prepared!</strong>
                  Your default email application was triggered with your message. If it didn't open automatically, you can directly email <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-semibold">{PERSONAL_INFO.email}</a>.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-none ${
                      theme === 'dark'
                        ? 'bg-[#071426] border-[#1E3557] text-white focus:border-[#168BFF]'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#168BFF]'
                    } ${errors.name ? 'border-rose-500' : ''}`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-none ${
                      theme === 'dark'
                        ? 'bg-[#071426] border-[#1E3557] text-white focus:border-[#168BFF]'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#168BFF]'
                    } ${errors.email ? 'border-rose-500' : ''}`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. IT Support Opportunity / Lab Discussion"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-none ${
                    theme === 'dark'
                      ? 'bg-[#071426] border-[#1E3557] text-white focus:border-[#168BFF]'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#168BFF]'
                  } ${errors.subject ? 'border-rose-500' : ''}`}
                />
                {errors.subject && (
                  <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors outline-none resize-y ${
                    theme === 'dark'
                      ? 'bg-[#071426] border-[#1E3557] text-white focus:border-[#168BFF]'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#168BFF]'
                  } ${errors.message ? 'border-rose-500' : ''}`}
                />
                {errors.message && (
                  <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#168BFF] text-white font-semibold text-sm hover:bg-[#0070E0] active:scale-98 transition-all shadow-md shadow-[#168BFF]/25 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
