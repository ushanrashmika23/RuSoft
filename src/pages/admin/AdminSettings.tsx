import { useState } from "react";

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    companyName: "RuSoft Technologies",
    tagline: "Software Engineered for What's Next.",
    email: "hello@rusoft.studio",
    linkedin: "https://linkedin.com",
    github: "https://github.com/ushanrashmika23",
    twitter: "https://twitter.com/rusoft_tech",
    footerText: "We design and engineer digital products, intelligent systems, and scalable software for ambitious businesses around the world.",
    statsProjects: "50+",
    statsClients: "30+",
    statsCountries: "15",
    statsTechnologies: "40+",
    metaTitle: "RuSoft Technologies — Software Engineered for What's Next",
    metaDescription: "We design and engineer digital products, intelligent systems, and scalable software for ambitious businesses around the world.",
    ogImage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const inputClass = "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors";
  const labelClass = "mono-label text-[#080808] block mb-2";

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white border border-[#E5E5E5] p-8">
      <p className="mono-label text-[#080808] mb-6 pb-4 border-b border-[#E5E5E5]">{title}</p>
      <div className="space-y-5">{children}</div>
    </div>
  );

  return (
    <form onSubmit={handleSave} className="max-w-[800px] space-y-6">
      <Section title="Company Information">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Company Name</label>
            <input name="companyName" value={form.companyName} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Tagline</label>
            <input name="tagline" value={form.tagline} onChange={handleChange} className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Contact Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Footer Description</label>
          <textarea name="footerText" value={form.footerText} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} />
        </div>
      </Section>

      <Section title="Social Links">
        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className={labelClass}>LinkedIn</label>
            <input name="linkedin" value={form.linkedin} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>GitHub</label>
            <input name="github" value={form.github} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Twitter / X</label>
            <input name="twitter" value={form.twitter} onChange={handleChange} className={inputClass} />
          </div>
        </div>
      </Section>

      <Section title="Homepage Statistics">
        <p className="mono-label text-[#707070] -mt-2">These numbers appear in the About section of the homepage.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { name: "statsProjects", label: "Projects" },
            { name: "statsClients", label: "Clients" },
            { name: "statsCountries", label: "Countries" },
            { name: "statsTechnologies", label: "Technologies" },
          ].map((s) => (
            <div key={s.name}>
              <label className={labelClass}>{s.label}</label>
              <input name={s.name} value={(form as Record<string, string>)[s.name]} onChange={handleChange} className={inputClass} placeholder="50+" />
            </div>
          ))}
        </div>
      </Section>

      <Section title="SEO Settings">
        <div>
          <label className={labelClass}>Default Meta Title</label>
          <input name="metaTitle" value={form.metaTitle} onChange={handleChange} className={inputClass} />
          <p className="mono-label text-[#707070] mt-1">{form.metaTitle.length}/60 characters</p>
        </div>
        <div>
          <label className={labelClass}>Default Meta Description</label>
          <textarea name="metaDescription" value={form.metaDescription} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} />
          <p className="mono-label text-[#707070] mt-1">{form.metaDescription.length}/160 characters</p>
        </div>
        <div>
          <label className={labelClass}>Default OG Image</label>
          <div className="flex gap-3">
            <input name="ogImage" value={form.ogImage} onChange={handleChange} placeholder="https://rusoft.io/og-image.jpg" className={inputClass} />
            <div className="shrink-0 border border-dashed border-[#E5E5E5] px-4 py-3 cursor-pointer hover:border-[#707070] transition-colors">
              <span className="mono-label text-[#707070]">Upload</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Logo">
        <div className="flex items-start gap-8">
          <div className="w-40 h-20 bg-[#F5F5F3] border border-[#E5E5E5] flex items-center justify-center">
            <p className="mono-label text-[#707070]">Current Logo</p>
          </div>
          <div>
            <div className="border border-dashed border-[#E5E5E5] px-6 py-4 cursor-pointer hover:border-[#707070] transition-colors inline-block">
              <p className="mono-label text-[#707070]">Upload New Logo</p>
              <p className="mono-label text-[#E5E5E5] mt-1">SVG or PNG — transparent background</p>
            </div>
          </div>
        </div>
      </Section>

      <div className="flex items-center gap-4">
        <button type="submit" className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-3 hover:bg-[#333] transition-colors">
          Save All Settings
        </button>
        {saved && <span className="mono-label text-[#707070]">✓ Settings saved</span>}
      </div>
    </form>
  );
}
