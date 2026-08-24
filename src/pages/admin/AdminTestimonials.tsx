import { useState } from "react";

interface Testimonial {
  id: number; quote: string; name: string; role: string; company: string;
  project: string; active: boolean;
}

const initialTestimonials: Testimonial[] = [
  { id: 1, quote: "RuSoft didn't just build the product — they understood our business at a level most agencies never reach. The result speaks for itself: 3× user retention within 90 days of launch.", name: "Adriana Müller", role: "CTO", company: "Nexus Learning Group", project: "Nexus Education", active: true },
  { id: 2, quote: "Working with RuSoft felt like having a senior engineering team inside our own organization. Their attention to architecture and long-term maintainability was exceptional.", name: "James Okafor", role: "VP Engineering", company: "Stratify Inc.", project: "Stratify", active: true },
  { id: 3, quote: "The performance benchmarks they delivered were beyond anything we had scoped. Processing 4M events per second on a system we can actually maintain — remarkable.", name: "Sarah Chen", role: "Head of Technology", company: "Meridian Capital", project: "Meridian Analytics", active: true },
];

type View = "list" | "edit" | "new";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [view, setView] = useState<View>("list");
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<Testimonial>>({});

  const openEdit = (t: Testimonial) => { setForm(t); setEditId(t.id); setView("edit"); };
  const openNew = () => { setForm({ quote: "", name: "", role: "", company: "", project: "", active: true }); setView("new"); };

  const save = () => {
    if (view === "new") setTestimonials([...testimonials, { ...form as Testimonial, id: Date.now() }]);
    else setTestimonials(testimonials.map((t) => (t.id === editId ? { ...t, ...form } : t)));
    setView("list");
  };

  const remove = (id: number) => setTestimonials(testimonials.filter((t) => t.id !== id));
  const toggleActive = (id: number) => setTestimonials(testimonials.map((t) => t.id === id ? { ...t, active: !t.active } : t));

  const inputClass = "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors";
  const labelClass = "mono-label text-[#080808] block mb-2";

  if (view !== "list") {
    return (
      <div>
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setView("list")} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">← Testimonials</button>
          <span className="mono-label text-[#E5E5E5]">/</span>
          <span className="mono-label text-[#080808]">{view === "new" ? "New Testimonial" : form.name}</span>
        </div>

        <div className="bg-white border border-[#E5E5E5] p-8 max-w-[720px] space-y-5">
          <div>
            <label className={labelClass}>Quote *</label>
            <textarea value={form.quote ?? ""} onChange={(e) => setForm({ ...form, quote: e.target.value })} rows={5} className={`${inputClass} resize-none leading-relaxed`} placeholder="Client's testimonial quote..." />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Client Name</label>
              <input value={form.name ?? ""} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Adriana Müller" />
            </div>
            <div>
              <label className={labelClass}>Role / Title</label>
              <input value={form.role ?? ""} onChange={(e) => setForm({ ...form, role: e.target.value })} className={inputClass} placeholder="CTO" />
            </div>
            <div>
              <label className={labelClass}>Company</label>
              <input value={form.company ?? ""} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} placeholder="Nexus Learning Group" />
            </div>
            <div>
              <label className={labelClass}>Project Reference</label>
              <input value={form.project ?? ""} onChange={(e) => setForm({ ...form, project: e.target.value })} className={inputClass} placeholder="Nexus Education" />
            </div>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active ?? true} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="w-4 h-4 accent-[#080808]" />
            <span className="mono-label text-[#080808]">Active (shown on website)</span>
          </label>
          <div className="flex items-center gap-4 border-t border-[#E5E5E5] pt-5">
            <button onClick={save} className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-3 hover:bg-[#333] transition-colors">
              {view === "new" ? "Add Testimonial" : "Save Changes"}
            </button>
            <button onClick={() => setView("list")} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="mono-label text-[#707070]">{testimonials.filter((t) => t.active).length} active testimonials</p>
        <button onClick={openNew} className="bg-[#080808] text-white text-[11px] tracking-[0.15em] uppercase font-semibold px-5 py-2.5 hover:bg-[#333] transition-colors">
          + Add Testimonial
        </button>
      </div>

      <div className="space-y-4">
        {testimonials.map((t) => (
          <div key={t.id} className={`bg-white border transition-colors ${t.active ? "border-[#E5E5E5]" : "border-[#E5E5E5] opacity-50"}`}>
            <div className="p-6">
              <blockquote className="text-[15px] text-[#080808] leading-relaxed italic mb-5">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-[13px] font-semibold text-[#080808]">{t.name}</p>
                  <p className="mono-label text-[#707070] mt-0.5">{t.role}, {t.company}</p>
                  <p className="mono-label text-[#E5E5E5] mt-0.5">Project: {t.project}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => toggleActive(t.id)} className={`mono-label px-3 py-1.5 transition-colors ${t.active ? "bg-[#080808] text-white" : "border border-[#E5E5E5] text-[#707070] hover:border-[#080808]"}`}>
                    {t.active ? "Active" : "Inactive"}
                  </button>
                  <button onClick={() => openEdit(t)} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">Edit</button>
                  <button onClick={() => remove(t.id)} className="mono-label text-red-500 hover:text-red-700 transition-colors">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
