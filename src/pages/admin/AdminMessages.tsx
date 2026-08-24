import { useState } from "react";

type Status = "New" | "Read" | "In Progress" | "Completed" | "Archived";

interface Message {
  id: number; name: string; company: string; email: string; country: string;
  projectType: string; budget: string; status: Status; date: string;
  description: string; source: string;
}

const initialMessages: Message[] = [
  { id: 1, name: "Thomas Eriksson", company: "Nord Capital", email: "t.eriksson@nordcap.se", country: "Sweden", projectType: "Cloud Architecture", budget: "$75,000 – $200,000", status: "New", date: "Aug 24, 2025", description: "We're looking to migrate our legacy financial reporting infrastructure to a modern cloud-native architecture. Current system is a mix of on-premise Java applications and Excel-based reporting that can no longer scale to our needs.", source: "LinkedIn" },
  { id: 2, name: "Yuki Tanaka", company: "Tanaka Systems", email: "yuki@tanakasys.jp", country: "Japan", projectType: "AI & Automation", budget: "$200,000 – $500,000", status: "New", date: "Aug 23, 2025", description: "We're a manufacturing company looking to integrate AI-driven quality control into our production line. We need computer vision and anomaly detection systems.", source: "Google Search" },
  { id: 3, name: "Maria Santos", company: "Vigo Digital", email: "maria@vigodigital.es", country: "Spain", projectType: "Product Engineering", budget: "$25,000 – $75,000", status: "Read", date: "Aug 22, 2025", description: "Building a B2B SaaS platform for the hospitality sector. Need a co-development partner for the core platform build.", source: "Referral" },
  { id: 4, name: "Ibrahim Al-Rashid", company: "Gulf Innovations", email: "ibrahim@gulf-inn.ae", country: "UAE", projectType: "Business Systems", budget: "$500,000+", status: "In Progress", date: "Aug 21, 2025", description: "Looking for a long-term engineering partner to build a comprehensive ERP system for our logistics and warehousing operations across 6 countries.", source: "Conference" },
  { id: 5, name: "Sofia Bergström", company: "Arcta Labs", email: "sofia@arctalabs.se", country: "Sweden", projectType: "Mobile Application", budget: "$75,000 – $200,000", status: "Completed", date: "Aug 18, 2025", description: "We need iOS and Android applications for our patient monitoring platform.", source: "LinkedIn" },
];

const statusColor: Record<Status, string> = {
  New: "bg-[#080808] text-white",
  Read: "bg-[#F5F5F3] text-[#707070] border border-[#E5E5E5]",
  "In Progress": "bg-[#F5F5F3] text-[#080808] border border-[#080808]",
  Completed: "bg-white text-[#707070] border border-[#E5E5E5]",
  Archived: "bg-[#E5E5E5] text-[#707070]",
};

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selected, setSelected] = useState<Message | null>(null);
  const [filter, setFilter] = useState<"All" | Status>("All");

  const updateStatus = (id: number, status: Status) => {
    setMessages(messages.map((m) => (m.id === id ? { ...m, status } : m)));
    if (selected?.id === id) setSelected({ ...selected, status });
  };

  const filtered = filter === "All" ? messages : messages.filter((m) => m.status === filter);

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-6 h-full">
      {/* List */}
      <div>
        <div className="flex items-center gap-0 mb-4">
          {(["All", "New", "Read", "In Progress", "Completed", "Archived"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`mono-label px-3 py-2 border-b-2 transition-all text-[10px] whitespace-nowrap ${filter === f ? "border-[#080808] text-[#080808]" : "border-transparent text-[#707070] hover:text-[#080808]"}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="bg-white border border-[#E5E5E5] divide-y divide-[#E5E5E5]">
          {filtered.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelected(m)}
              className={`px-5 py-4 cursor-pointer transition-colors ${selected?.id === m.id ? "bg-[#F5F5F3]" : "hover:bg-[#F5F5F3]"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[13px] font-semibold text-[#080808] truncate">{m.name}</p>
                    {m.status === "New" && <span className="w-1.5 h-1.5 bg-[#080808] rounded-full shrink-0" />}
                  </div>
                  <p className="mono-label text-[#707070] truncate">{m.company} · {m.projectType}</p>
                  <p className="text-[12px] text-[#707070] mt-1.5 line-clamp-1">{m.description}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="mono-label text-[#707070] whitespace-nowrap">{m.date}</p>
                  <span className={`mono-label px-2 py-0.5 mt-1 inline-block ${statusColor[m.status]}`}>{m.status}</span>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="mono-label text-[#707070]">No messages in this category</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail */}
      <div className="bg-white border border-[#E5E5E5] h-fit">
        {selected ? (
          <div>
            <div className="px-6 py-5 border-b border-[#E5E5E5] flex items-start justify-between">
              <div>
                <p className="text-[16px] font-bold text-[#080808]">{selected.name}</p>
                <p className="mono-label text-[#707070] mt-1">{selected.company}</p>
              </div>
              <span className={`mono-label px-2.5 py-1 ${statusColor[selected.status]}`}>{selected.status}</span>
            </div>

            <div className="px-6 py-5 border-b border-[#E5E5E5] space-y-4">
              {[
                { label: "Email", value: selected.email },
                { label: "Country", value: selected.country },
                { label: "Project Type", value: selected.projectType },
                { label: "Budget", value: selected.budget },
                { label: "Source", value: selected.source },
                { label: "Date", value: selected.date },
              ].map((item) => (
                <div key={item.label} className="grid grid-cols-[120px_1fr]">
                  <p className="mono-label text-[#707070]">{item.label}</p>
                  <p className="text-[13px] text-[#080808]">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 border-b border-[#E5E5E5]">
              <p className="mono-label text-[#707070] mb-3">Message</p>
              <p className="text-[14px] text-[#080808] leading-relaxed">{selected.description}</p>
            </div>

            <div className="px-6 py-5">
              <p className="mono-label text-[#707070] mb-3">Update Status</p>
              <div className="flex flex-wrap gap-2">
                {(["New", "Read", "In Progress", "Completed", "Archived"] as Status[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => updateStatus(selected.id, s)}
                    className={`mono-label px-3 py-1.5 transition-all ${selected.status === s ? "bg-[#080808] text-white" : "border border-[#E5E5E5] text-[#707070] hover:border-[#080808] hover:text-[#080808]"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href={`mailto:${selected.email}`} className="bg-[#080808] text-white text-[11px] tracking-[0.15em] uppercase font-semibold px-5 py-2.5 hover:bg-[#333] transition-colors">
                  Reply →
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center">
            <p className="mono-label text-[#E5E5E5]">Select a message to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
