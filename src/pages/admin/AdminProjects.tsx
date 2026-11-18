import { useState } from "react";

type Status = "Published" | "Draft";

interface Project {
  id: number; title: string; client: string; industry: string;
  category: string; status: Status; date: string; featured: boolean;
}

const initialProjects: Project[] = [
  { id: 1, title: "Master Ink Tattoo Portfolio", client: "Master Ink Tattoo Studio", industry: "Creative & Lifestyle", category: "Web & Mobile Applications", status: "Published", date: "Oct 20, 2026", featured: true },
  { id: 2, title: "Leafy IoT: AI Agriculture Monitoring", client: "Leafy Agritech", industry: "AgriTech & IoT", category: "Product Engineering", status: "Published", date: "Oct 24, 2026", featured: true },
  { id: 3, title: "Bitcoin Trend Prediction", client: "Quantitative Research Lab", industry: "FinTech & AI", category: "AI & Automation", status: "Published", date: "Oct 24, 2026", featured: true },
  { id: 4, title: "Beyond Craft Tattoo", client: "Beyond Craft Studio", industry: "Creative & Lifestyle", category: "Web & Mobile Applications", status: "Published", date: "Oct 28, 2026", featured: false },
  { id: 5, title: "Kiri Kopi Caffee", client: "Kiri Kopi Caffee", industry: "Hospitality & F&B", category: "Web & Mobile Applications", status: "Published", date: "Oct 28, 2026", featured: false },
];

type View = "list" | "edit" | "new";

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [view, setView] = useState<View>("list");
  const [editId, setEditId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<Project>>({});
  const [filter, setFilter] = useState<"All" | Status>("All");

  const openEdit = (p: Project) => {
    setForm(p);
    setEditId(p.id);
    setView("edit");
  };

  const openNew = () => {
    setForm({ title: "", client: "", industry: "", category: "", status: "Draft", featured: false });
    setView("new");
  };

  const saveProject = () => {
    if (view === "new") {
      setProjects([...projects, { ...form as Project, id: Date.now(), date: "Aug 24, 2025" }]);
    } else {
      setProjects(projects.map((p) => (p.id === editId ? { ...p, ...form } : p)));
    }
    setView("list");
  };

  const confirmDelete = () => {
    setProjects(projects.filter((p) => p.id !== deleteId));
    setDeleteId(null);
  };

  const filtered = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  const inputClass = "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors";
  const selectClass = "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] focus:outline-none focus:border-[#080808] transition-colors appearance-none";
  const labelClass = "mono-label text-[#080808] block mb-2";

  if (view === "edit" || view === "new") {
    return (
      <div>
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setView("list")} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
            ← Projects
          </button>
          <span className="mono-label text-[#E5E5E5]">/</span>
          <span className="mono-label text-[#080808]">{view === "new" ? "New Project" : form.title}</span>
        </div>

        <div className="bg-white border border-[#E5E5E5] p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Project Title *</label>
              <input value={form.title ?? ""} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Nexus Education" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Client</label>
              <input value={form.client ?? ""} onChange={(e) => setForm({ ...form, client: e.target.value })} placeholder="Nexus Learning Group" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Industry</label>
              <input value={form.industry ?? ""} onChange={(e) => setForm({ ...form, industry: e.target.value })} placeholder="EdTech" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Category</label>
              <select value={form.category ?? ""} onChange={(e) => setForm({ ...form, category: e.target.value })} className={selectClass}>
                <option value="">Select category</option>
                {["Product Engineering", "Web & Mobile Applications", "Cloud & Software Architecture", "AI & Automation", "Business Management Systems", "Digital Transformation"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className={labelClass}>Status</label>
              <select value={form.status ?? "Draft"} onChange={(e) => setForm({ ...form, status: e.target.value as Status })} className={selectClass}>
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
            <div className="flex items-center gap-3 pt-8">
              <input
                type="checkbox"
                id="featured"
                checked={form.featured ?? false}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                className="w-4 h-4 accent-[#080808]"
              />
              <label htmlFor="featured" className="mono-label text-[#080808] cursor-pointer">
                Featured project (shown prominently on homepage)
              </label>
            </div>
          </div>

          {/* Image upload placeholder */}
          <div className="mt-6">
            <label className={labelClass}>Hero Image</label>
            <div className="border-2 border-dashed border-[#E5E5E5] bg-[#F5F5F3] p-12 text-center hover:border-[#707070] transition-colors cursor-pointer">
              <p className="mono-label text-[#707070] mb-2">Drag & drop an image, or click to browse</p>
              <p className="mono-label text-[#E5E5E5]">PNG, JPG, WebP — max 10MB</p>
            </div>
          </div>

          <div className="mt-6">
            <label className={labelClass}>Project Description</label>
            <textarea rows={4} className={`${inputClass} resize-none`} placeholder="A brief description of the project and its impact..." />
          </div>

          <div className="flex items-center gap-4 mt-8 border-t border-[#E5E5E5] pt-6">
            <button onClick={saveProject} className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-3 hover:bg-[#333] transition-colors">
              {view === "new" ? "Create Project" : "Save Changes"}
            </button>
            <button onClick={() => setView("list")} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-0">
          {(["All", "Published", "Draft"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`mono-label px-4 py-2 border-b-2 transition-all ${
                filter === f ? "border-[#080808] text-[#080808]" : "border-transparent text-[#707070] hover:text-[#080808]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button onClick={openNew} className="bg-[#080808] text-white text-[11px] tracking-[0.15em] uppercase font-semibold px-5 py-2.5 hover:bg-[#333] transition-colors">
          + New Project
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#E5E5E5]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E5E5]">
              <th className="px-6 py-4 text-left mono-label text-[#707070]">Project</th>
              <th className="px-6 py-4 text-left mono-label text-[#707070] hidden md:table-cell">Client</th>
              <th className="px-6 py-4 text-left mono-label text-[#707070] hidden lg:table-cell">Category</th>
              <th className="px-6 py-4 text-left mono-label text-[#707070]">Status</th>
              <th className="px-6 py-4 text-left mono-label text-[#707070] hidden lg:table-cell">Date</th>
              <th className="px-6 py-4 text-right mono-label text-[#707070]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5]">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-[#F5F5F3] transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-[13px] font-semibold text-[#080808]">{p.title}</p>
                    {p.featured && <span className="mono-label text-[#707070] mt-0.5 block">Featured</span>}
                  </div>
                </td>
                <td className="px-6 py-4 text-[13px] text-[#707070] hidden md:table-cell">{p.client}</td>
                <td className="px-6 py-4 mono-label text-[#707070] hidden lg:table-cell">{p.category}</td>
                <td className="px-6 py-4">
                  <span className={`mono-label px-2.5 py-1 ${p.status === "Published" ? "bg-[#080808] text-white" : "bg-[#E5E5E5] text-[#707070]"}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 mono-label text-[#707070] hidden lg:table-cell">{p.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-4">
                    <button onClick={() => openEdit(p)} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
                      Edit
                    </button>
                    <button onClick={() => setDeleteId(p.id)} className="mono-label text-red-500 hover:text-red-700 transition-colors">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete confirm modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-[#E5E5E5] p-8 max-w-[400px] w-full">
            <p className="text-[18px] font-bold text-[#080808] mb-3">Delete project?</p>
            <p className="text-[#707070] text-[14px] mb-8">
              This action cannot be undone. The project will be permanently removed.
            </p>
            <div className="flex items-center gap-4">
              <button onClick={confirmDelete} className="bg-red-600 text-white text-[12px] tracking-[0.12em] uppercase font-semibold px-6 py-3 hover:bg-red-700 transition-colors">
                Delete
              </button>
              <button onClick={() => setDeleteId(null)} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
