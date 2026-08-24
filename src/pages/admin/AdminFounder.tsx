import { useState } from "react";

export default function AdminFounder() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Ruslan Azimov",
    role: "Founder & Chief Engineer",
    shortBio: "Over 15 years building software systems for companies across Europe, the Middle East, and Asia.",
    fullBio: "Ruslan Azimov founded RuSoft Technologies with a single conviction: that engineering discipline — not just execution speed — is what separates software that lasts from software that breaks.\n\nBefore founding RuSoft, Ruslan led engineering teams at two fintech companies and contributed to open-source infrastructure used by millions of developers worldwide. He has spoken at engineering conferences across Europe and Asia, and writes on topics ranging from distributed systems to engineering management.\n\nEvery client engagement at RuSoft is personally reviewed by Ruslan before the company commits.",
    expertise: "System Architecture, Cloud Infrastructure, Team Leadership, AI Engineering, Product Strategy",
    linkedin: "https://linkedin.com/in/ruslan-azimov",
    github: "https://github.com/ruslan-azimov",
    email: "ruslan@rusoft.io",
    display: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
    setSaved(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const inputClass = "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors";
  const labelClass = "mono-label text-[#080808] block mb-2";

  return (
    <form onSubmit={handleSave} className="max-w-[900px] space-y-8">
      <div className="grid lg:grid-cols-[200px_1fr] gap-8 bg-white border border-[#E5E5E5] p-8">
        {/* Photo */}
        <div>
          <p className={labelClass}>Profile Photo</p>
          <div className="aspect-[3/4] bg-[#F5F5F3] border border-[#E5E5E5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&auto=format"
              alt="Founder"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-3 border border-dashed border-[#E5E5E5] p-4 text-center cursor-pointer hover:border-[#707070] transition-colors">
            <p className="mono-label text-[#707070]">Replace photo</p>
          </div>
        </div>

        {/* Fields */}
        <div className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Title / Role</label>
              <input name="role" value={form.role} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Short Bio (shown in hero section)</label>
            <textarea name="shortBio" value={form.shortBio} onChange={handleChange} rows={2} className={`${inputClass} resize-none`} />
          </div>

          <div>
            <label className={labelClass}>Full Biography</label>
            <textarea name="fullBio" value={form.fullBio} onChange={handleChange} rows={7} className={`${inputClass} resize-none leading-relaxed`} />
          </div>

          <div>
            <label className={labelClass}>Areas of Expertise (comma-separated)</label>
            <input name="expertise" value={form.expertise} onChange={handleChange} className={inputClass} placeholder="System Architecture, Cloud, Leadership..." />
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="bg-white border border-[#E5E5E5] p-8 space-y-5">
        <p className="mono-label text-[#080808] mb-2">Social & Contact Links</p>
        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className={labelClass}>LinkedIn URL</label>
            <input name="linkedin" value={form.linkedin} onChange={handleChange} className={inputClass} placeholder="https://linkedin.com/in/..." />
          </div>
          <div>
            <label className={labelClass}>GitHub URL</label>
            <input name="github" value={form.github} onChange={handleChange} className={inputClass} placeholder="https://github.com/..." />
          </div>
          <div>
            <label className={labelClass}>Contact Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="founder@company.io" />
          </div>
        </div>
      </div>

      {/* Visibility */}
      <div className="bg-white border border-[#E5E5E5] p-6 flex items-center justify-between">
        <div>
          <p className="text-[14px] font-medium text-[#080808]">Show Founder Section on Website</p>
          <p className="mono-label text-[#707070] mt-1">Toggle whether the founder section appears on the homepage.</p>
        </div>
        <label className="relative inline-flex cursor-pointer">
          <input
            type="checkbox"
            name="display"
            checked={form.display}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div className="w-10 h-6 bg-[#E5E5E5] peer-checked:bg-[#080808] transition-colors relative">
            <span className={`absolute top-1 h-4 w-4 bg-white transition-all ${form.display ? "left-5" : "left-1"}`} />
          </div>
        </label>
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-3 hover:bg-[#333] transition-colors">
          Save Changes
        </button>
        {saved && <span className="mono-label text-[#707070]">✓ Saved successfully</span>}
      </div>
    </form>
  );
}
