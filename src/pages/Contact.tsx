import { useState } from "react";

const projectTypes = [
  "Product Engineering",
  "Web Application",
  "Mobile Application",
  "Cloud Architecture",
  "AI & Automation",
  "Business Management System",
  "Digital Transformation",
  "Other",
];

const budgets = [
  "Under $25,000",
  "$25,000 – $75,000",
  "$75,000 – $200,000",
  "$200,000 – $500,000",
  "$500,000+",
  "Let's discuss",
];

const timelines = [
  "Under 3 months",
  "3–6 months",
  "6–12 months",
  "12+ months",
  "Ongoing partnership",
];

const sources = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "GitHub",
  "Twitter / X",
  "Conference / Event",
  "Other",
];

type Status = "idle" | "submitting" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", company: "", email: "", country: "",
    projectType: "", budget: "", timeline: "",
    description: "", source: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1800);
  };

  if (status === "success") {
    return (
      <div className="pt-[68px] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-[480px] text-center">
          <div className="w-12 h-12 bg-[#080808] flex items-center justify-center mx-auto mb-8">
            <span className="text-white text-[20px]">✓</span>
          </div>
          <h2 className="text-[32px] font-bold tracking-tight text-[#080808] mb-4">
            Message received.
          </h2>
          <p className="text-[#707070] text-[16px] leading-relaxed mb-8">
            Thank you for reaching out. We review every inquiry personally and will respond within 2 business days.
          </p>
          <a href="/" className="mono-label text-[#080808] underline underline-offset-4">
            Return to homepage
          </a>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors";
  const selectClass =
    "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] focus:outline-none focus:border-[#080808] transition-colors appearance-none cursor-pointer";
  const labelClass = "mono-label text-[#080808] block mb-2";

  return (
    <div className="pt-[68px]">
      {/* Header */}
      <div className="bg-[#080808] py-24 lg:py-36 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <p className="mono-label text-white/40 mb-6">Get in Touch</p>
          <h1
            className="display-heading text-white mb-6"
            style={{ fontSize: "clamp(48px, 8vw, 112px)" }}
          >
            START THE<br />CONVERSATION.
          </h1>
          <p className="text-white/50 text-[16px] lg:text-[18px] leading-relaxed max-w-[520px] font-light">
            Tell us about your project. We'll review your inquiry personally and respond within 2 business days.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-24">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name + Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="Adriana Müller" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Company</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Nexus Learning Group" className={inputClass} />
              </div>
            </div>

            {/* Email + Country */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Email Address *</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="adriana@nexus.io" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Country</label>
                <input name="country" value={form.country} onChange={handleChange} placeholder="Germany" className={inputClass} />
              </div>
            </div>

            {/* Project type + Budget */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Project Type *</label>
                <div className="relative">
                  <select name="projectType" required value={form.projectType} onChange={handleChange} className={selectClass}>
                    <option value="">Select type</option>
                    {projectTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#707070] text-[11px]">▼</span>
                </div>
              </div>
              <div>
                <label className={labelClass}>Estimated Budget</label>
                <div className="relative">
                  <select name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
                    <option value="">Select range</option>
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#707070] text-[11px]">▼</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Timeline</label>
                <div className="relative">
                  <select name="timeline" value={form.timeline} onChange={handleChange} className={selectClass}>
                    <option value="">Select timeline</option>
                    {timelines.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#707070] text-[11px]">▼</span>
                </div>
              </div>
              <div>
                <label className={labelClass}>How did you find us?</label>
                <div className="relative">
                  <select name="source" value={form.source} onChange={handleChange} className={selectClass}>
                    <option value="">Select source</option>
                    {sources.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#707070] text-[11px]">▼</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>Project Description *</label>
              <textarea
                name="description"
                required
                rows={6}
                value={form.description}
                onChange={handleChange}
                placeholder="Describe what you're building, where you are in the process, and what kind of partnership you're looking for..."
                className={`${inputClass} resize-none leading-relaxed`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-10 py-4 hover:bg-[#333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Start the Conversation →"}
            </button>
          </form>

          {/* Sidebar info */}
          <div className="space-y-12">
            <div>
              <p className="mono-label text-[#080808] mb-4">Direct Contact</p>
              <a href="mailto:hello@rusoft.io" className="text-[16px] font-medium text-[#080808] hover:opacity-60 transition-opacity block mb-2">
                hello@rusoft.io
              </a>
              <p className="text-[#707070] text-[13px] leading-relaxed">
                Response time: within 2 business days.
              </p>
            </div>

            <div className="border-t border-[#E5E5E5] pt-10">
              <p className="mono-label text-[#080808] mb-4">Social</p>
              <div className="space-y-3">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com" },
                  { label: "GitHub", href: "https://github.com" },
                  { label: "Twitter / X", href: "https://twitter.com" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 mono-label text-[#707070] hover:text-[#080808] transition-colors"
                  >
                    {s.label} →
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-[#E5E5E5] pt-10">
              <p className="mono-label text-[#080808] mb-4">What to Expect</p>
              <ol className="space-y-4">
                {[
                  "We review every inquiry personally.",
                  "If it's a fit, we'll schedule a 45-minute discovery call.",
                  "After the call, we provide a project assessment and proposed scope.",
                  "We typically onboard 2–3 new clients per quarter.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mono-label text-[#E5E5E5] shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-[#707070] text-[13px] leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
