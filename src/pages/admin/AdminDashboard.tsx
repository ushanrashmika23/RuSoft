import { Link } from "react-router";

const stats = [
  { label: "Total Projects", value: "12", sub: "3 drafts", href: "/admin/projects" },
  { label: "Published Articles", value: "28", sub: "4 drafts", href: "/admin/insights" },
  { label: "New Messages", value: "7", sub: "this week", href: "/admin/messages" },
  { label: "Active Clients", value: "5", sub: "engagements", href: "/admin/settings" },
];

const recentProjects = [
  { title: "Nexus Education", status: "Published", date: "Aug 12, 2025", industry: "EdTech" },
  { title: "Stratify", status: "Published", date: "Aug 1, 2025", industry: "Productivity" },
  { title: "Meridian Analytics", status: "Published", date: "Jul 20, 2025", industry: "FinTech" },
  { title: "Velox Logistics", status: "Draft", date: "Jul 10, 2025", industry: "Logistics" },
  { title: "Aria Health", status: "Published", date: "Jun 28, 2025", industry: "Healthcare" },
];

const recentMessages = [
  { name: "Thomas Eriksson", company: "Nord Capital", email: "t.eriksson@nordcap.se", type: "Cloud Architecture", date: "Aug 24", status: "New" },
  { name: "Yuki Tanaka", company: "Tanaka Systems", email: "yuki@tanakasys.jp", type: "AI & Automation", date: "Aug 23", status: "New" },
  { name: "Maria Santos", company: "Vigo Digital", email: "maria@vigodigital.es", type: "Product Engineering", date: "Aug 22", status: "Read" },
  { name: "Ibrahim Al-Rashid", company: "Gulf Innovations", email: "ibrahim@gulf-inn.ae", type: "Business Systems", date: "Aug 21", status: "In Progress" },
];

const activity = [
  { action: "Project published", item: "Nexus Education", time: "2 hours ago" },
  { action: "Article drafted", item: "TypeScript Patterns", time: "5 hours ago" },
  { action: "Message received", item: "Thomas Eriksson", time: "8 hours ago" },
  { action: "Founder profile updated", item: "Ruslan Azimov", time: "1 day ago" },
  { action: "Article published", item: "AI in Production", time: "2 days ago" },
];

const statusColor: Record<string, string> = {
  Published: "bg-[#080808] text-white",
  Draft: "bg-[#E5E5E5] text-[#707070]",
  New: "bg-[#080808] text-white",
  Read: "bg-[#F5F5F3] text-[#707070] border border-[#E5E5E5]",
  "In Progress": "bg-[#F5F5F3] text-[#080808] border border-[#080808]",
  Completed: "bg-white text-[#707070] border border-[#E5E5E5]",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#E5E5E5] bg-white">
        {stats.map((s) => (
          <Link
            key={s.label}
            to={s.href}
            className="border-r border-b border-[#E5E5E5] p-6 hover:bg-[#F5F5F3] transition-colors"
          >
            <p className="mono-label text-[#707070] mb-2">{s.label}</p>
            <p className="text-[40px] font-bold tracking-tight text-[#080808] leading-none mb-1">{s.value}</p>
            <p className="mono-label text-[#707070]">{s.sub}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Recent Projects */}
        <div className="bg-white border border-[#E5E5E5]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
            <p className="mono-label text-[#080808]">Recent Projects</p>
            <Link to="/admin/projects" className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
              View all →
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E5E5]">
                <th className="px-6 py-3 text-left mono-label text-[#707070]">Project</th>
                <th className="px-6 py-3 text-left mono-label text-[#707070] hidden md:table-cell">Industry</th>
                <th className="px-6 py-3 text-left mono-label text-[#707070]">Status</th>
                <th className="px-6 py-3 text-left mono-label text-[#707070] hidden lg:table-cell">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {recentProjects.map((p) => (
                <tr key={p.title} className="hover:bg-[#F5F5F3] transition-colors">
                  <td className="px-6 py-4 text-[13px] font-medium text-[#080808]">{p.title}</td>
                  <td className="px-6 py-4 mono-label text-[#707070] hidden md:table-cell">{p.industry}</td>
                  <td className="px-6 py-4">
                    <span className={`mono-label px-2.5 py-1 ${statusColor[p.status]}`}>{p.status}</span>
                  </td>
                  <td className="px-6 py-4 mono-label text-[#707070] hidden lg:table-cell">{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity */}
        <div className="bg-white border border-[#E5E5E5]">
          <div className="px-6 py-4 border-b border-[#E5E5E5]">
            <p className="mono-label text-[#080808]">Recent Activity</p>
          </div>
          <div className="divide-y divide-[#E5E5E5]">
            {activity.map((a, i) => (
              <div key={i} className="px-6 py-4">
                <p className="text-[12px] text-[#080808] font-medium">{a.action}</p>
                <p className="mono-label text-[#707070] mt-0.5">{a.item}</p>
                <p className="mono-label text-[#E5E5E5] mt-1">{a.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Messages */}
      <div className="bg-white border border-[#E5E5E5]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
          <p className="mono-label text-[#080808]">Recent Messages</p>
          <Link to="/admin/messages" className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
            View all →
          </Link>
        </div>
        <div className="divide-y divide-[#E5E5E5]">
          {recentMessages.map((m) => (
            <div key={m.name} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-[#F5F5F3] transition-colors">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-8 h-8 bg-[#F5F5F3] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                  <span className="text-[12px] font-bold text-[#080808]">{m.name[0]}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-[#080808] truncate">{m.name}</p>
                  <p className="mono-label text-[#707070] truncate">{m.company}</p>
                </div>
              </div>
              <div className="hidden md:block mono-label text-[#707070] shrink-0">{m.type}</div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="mono-label text-[#707070] hidden lg:block">{m.date}</span>
                <span className={`mono-label px-2.5 py-1 ${statusColor[m.status]}`}>{m.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
