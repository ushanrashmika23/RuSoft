import { useState } from "react";

type Status = "Published" | "Draft" | "Scheduled";

interface Post {
  id: number; title: string; category: string; author: string;
  status: Status; date: string; readTime: string; slug: string;
}

const initialPosts: Post[] = [
  { id: 1, title: "Why Event-Driven Architecture Wins at Scale", category: "Engineering", author: "Ruslan Azimov", status: "Published", date: "Aug 14, 2025", readTime: "9 min", slug: "event-driven-architecture" },
  { id: 2, title: "AI in Production: 18 Months of Enterprise Lessons", category: "AI", author: "Ruslan Azimov", status: "Published", date: "Jul 29, 2025", readTime: "12 min", slug: "ai-in-production" },
  { id: 3, title: "The Hidden Cost of Technical Debt in B2B Software", category: "Strategy", author: "Ruslan Azimov", status: "Published", date: "Jul 10, 2025", readTime: "7 min", slug: "technical-debt-cost" },
  { id: 4, title: "TypeScript Patterns We Actually Use in Production", category: "Engineering", author: "Ruslan Azimov", status: "Published", date: "Jun 22, 2025", readTime: "8 min", slug: "typescript-patterns" },
  { id: 5, title: "API Design Principles for Long-Lived Software", category: "Engineering", author: "Ruslan Azimov", status: "Published", date: "Jun 4, 2025", readTime: "11 min", slug: "api-design" },
  { id: 6, title: "Microservices vs. Modular Monoliths in 2025", category: "Engineering", author: "Ruslan Azimov", status: "Draft", date: "Aug 20, 2025", readTime: "—", slug: "microservices-vs-monolith" },
  { id: 7, title: "Building AI-Ready Databases", category: "AI", author: "Ruslan Azimov", status: "Scheduled", date: "Sep 1, 2025", readTime: "10 min", slug: "ai-ready-databases" },
];

const statusColor: Record<string, string> = {
  Published: "bg-[#080808] text-white",
  Draft: "bg-[#E5E5E5] text-[#707070]",
  Scheduled: "bg-[#F5F5F3] text-[#080808] border border-[#080808]",
};

type View = "list" | "edit" | "new";
const categories = ["Engineering", "AI", "Strategy", "Company"];

export default function AdminInsights() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [view, setView] = useState<View>("list");
  const [editId, setEditId] = useState<number | null>(null);
  const [filter, setFilter] = useState<"All" | Status>("All");
  const [form, setForm] = useState<Partial<Post & { content: string }>>({});

  const openEdit = (p: Post) => {
    setForm({ ...p, content: "Article content goes here. This would be a rich text editor in production." });
    setEditId(p.id);
    setView("edit");
  };

  const openNew = () => {
    setForm({ title: "", category: "Engineering", status: "Draft", content: "" });
    setView("new");
  };

  const save = () => {
    if (view === "new") {
      setPosts([{ ...form as Post, id: Date.now(), author: "Ruslan Azimov", date: "Aug 24, 2025", readTime: "—", slug: (form.title ?? "").toLowerCase().replace(/\s+/g, "-") }]);
    } else {
      setPosts(posts.map((p) => (p.id === editId ? { ...p, ...form } : p)));
    }
    setView("list");
  };

  const remove = (id: number) => setPosts(posts.filter((p) => p.id !== id));

  const filtered = filter === "All" ? posts : posts.filter((p) => p.status === filter);

  const inputClass = "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors";
  const selectClass = "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] focus:outline-none focus:border-[#080808] transition-colors appearance-none";
  const labelClass = "mono-label text-[#080808] block mb-2";

  if (view === "edit" || view === "new") {
    return (
      <div>
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setView("list")} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">← Insights</button>
          <span className="mono-label text-[#E5E5E5]">/</span>
          <span className="mono-label text-[#080808]">{view === "new" ? "New Article" : form.title}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          <div className="space-y-5">
            <div className="bg-white border border-[#E5E5E5] p-6">
              <label className={labelClass}>Article Title</label>
              <input value={form.title ?? ""} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title..." className={`${inputClass} text-[18px] font-medium`} />
            </div>

            {/* Rich text editor placeholder */}
            <div className="bg-white border border-[#E5E5E5]">
              <div className="flex items-center gap-1 px-4 py-3 border-b border-[#E5E5E5] flex-wrap">
                {["B", "I", "H2", "H3", "Link", "Image", "Code", "Quote", "List", "Table"].map((btn) => (
                  <button key={btn} className="mono-label px-2.5 py-1.5 hover:bg-[#F5F5F3] transition-colors text-[#707070] hover:text-[#080808]">
                    {btn}
                  </button>
                ))}
              </div>
              <textarea
                value={form.content ?? ""}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={18}
                className="w-full p-6 text-[15px] text-[#080808] leading-relaxed resize-none focus:outline-none placeholder:text-[#707070]"
                placeholder="Start writing your article..."
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white border border-[#E5E5E5] p-5">
              <label className={labelClass}>Status</label>
              <select value={form.status ?? "Draft"} onChange={(e) => setForm({ ...form, status: e.target.value as Status })} className={selectClass}>
                <option>Draft</option>
                <option>Published</option>
                <option>Scheduled</option>
              </select>
            </div>
            <div className="bg-white border border-[#E5E5E5] p-5">
              <label className={labelClass}>Category</label>
              <select value={form.category ?? "Engineering"} onChange={(e) => setForm({ ...form, category: e.target.value })} className={selectClass}>
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="bg-white border border-[#E5E5E5] p-5">
              <label className={labelClass}>Cover Image</label>
              <div className="border border-dashed border-[#E5E5E5] bg-[#F5F5F3] p-8 text-center cursor-pointer hover:border-[#707070] transition-colors">
                <p className="mono-label text-[#707070]">Drop or click to upload</p>
              </div>
            </div>
            <div className="bg-white border border-[#E5E5E5] p-5">
              <label className={labelClass}>SEO Title</label>
              <input className={inputClass} placeholder="Title for search engines..." />
              <label className={`${labelClass} mt-4`}>Meta Description</label>
              <textarea rows={3} className={`${inputClass} resize-none`} placeholder="Short summary for search results..." />
            </div>

            <div className="flex flex-col gap-3">
              <button onClick={save} className="w-full bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold py-3 hover:bg-[#333] transition-colors">
                {view === "new" ? "Publish Article" : "Save Changes"}
              </button>
              <button onClick={() => setView("list")} className="w-full mono-label text-[#707070] hover:text-[#080808] transition-colors py-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-0">
          {(["All", "Published", "Draft", "Scheduled"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`mono-label px-4 py-2 border-b-2 transition-all ${filter === f ? "border-[#080808] text-[#080808]" : "border-transparent text-[#707070] hover:text-[#080808]"}`}>
              {f}
            </button>
          ))}
        </div>
        <button onClick={openNew} className="bg-[#080808] text-white text-[11px] tracking-[0.15em] uppercase font-semibold px-5 py-2.5 hover:bg-[#333] transition-colors">
          + New Article
        </button>
      </div>

      <div className="bg-white border border-[#E5E5E5]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E5E5]">
              <th className="px-6 py-4 text-left mono-label text-[#707070]">Title</th>
              <th className="px-6 py-4 text-left mono-label text-[#707070] hidden md:table-cell">Category</th>
              <th className="px-6 py-4 text-left mono-label text-[#707070]">Status</th>
              <th className="px-6 py-4 text-left mono-label text-[#707070] hidden lg:table-cell">Date</th>
              <th className="px-6 py-4 text-right mono-label text-[#707070]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5]">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-[#F5F5F3] transition-colors">
                <td className="px-6 py-4">
                  <p className="text-[13px] font-medium text-[#080808] line-clamp-1">{p.title}</p>
                  <p className="mono-label text-[#707070] mt-0.5">{p.readTime} read</p>
                </td>
                <td className="px-6 py-4 mono-label text-[#707070] hidden md:table-cell">{p.category}</td>
                <td className="px-6 py-4"><span className={`mono-label px-2.5 py-1 ${statusColor[p.status]}`}>{p.status}</span></td>
                <td className="px-6 py-4 mono-label text-[#707070] hidden lg:table-cell">{p.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-4">
                    <button onClick={() => openEdit(p)} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">Edit</button>
                    <button onClick={() => remove(p.id)} className="mono-label text-red-500 hover:text-red-700 transition-colors">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
