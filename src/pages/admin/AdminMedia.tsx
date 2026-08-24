import { useState } from "react";

interface MediaItem {
  id: number; name: string; url: string; size: string; type: string; date: string;
}

const initialMedia: MediaItem[] = [
  { id: 1, name: "nexus-hero.jpg", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop", size: "1.2 MB", type: "image/jpeg", date: "Aug 12, 2025" },
  { id: 2, name: "stratify-hero.jpg", url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop", size: "0.9 MB", type: "image/jpeg", date: "Aug 1, 2025" },
  { id: 3, name: "meridian-hero.jpg", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop", size: "1.4 MB", type: "image/jpeg", date: "Jul 20, 2025" },
  { id: 4, name: "ruslan-portrait.jpg", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop", size: "0.8 MB", type: "image/jpeg", date: "Jul 10, 2025" },
  { id: 5, name: "event-driven-cover.jpg", url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop", size: "1.1 MB", type: "image/jpeg", date: "Aug 14, 2025" },
  { id: 6, name: "ai-production-cover.jpg", url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&h=200&fit=crop", size: "1.3 MB", type: "image/jpeg", date: "Jul 29, 2025" },
];

export default function AdminMedia() {
  const [media, setMedia] = useState<MediaItem[]>(initialMedia);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const filtered = media.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()));

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const remove = (id: number) => {
    setMedia(media.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search files..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-[#E5E5E5] bg-white px-4 py-2.5 text-[13px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors font-mono w-56"
        />
        <div className="flex items-center gap-3">
          <div className="flex border border-[#E5E5E5]">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 mono-label transition-colors ${viewMode === "grid" ? "bg-[#080808] text-white" : "text-[#707070] hover:text-[#080808]"}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 mono-label transition-colors ${viewMode === "list" ? "bg-[#080808] text-white" : "text-[#707070] hover:text-[#080808]"}`}
            >
              List
            </button>
          </div>
          <button className="bg-[#080808] text-white text-[11px] tracking-[0.15em] uppercase font-semibold px-5 py-2.5 hover:bg-[#333] transition-colors">
            + Upload
          </button>
        </div>
      </div>

      <div className={`flex gap-6 ${selected ? "lg:grid lg:grid-cols-[1fr_280px]" : ""}`}>
        {/* Media area */}
        <div className="flex-1">
          {/* Upload drop zone */}
          <div className="border-2 border-dashed border-[#E5E5E5] bg-white p-10 text-center mb-6 hover:border-[#707070] transition-colors cursor-pointer">
            <p className="mono-label text-[#707070] mb-1">Drop files here to upload</p>
            <p className="mono-label text-[#E5E5E5]">PNG, JPG, WebP, SVG — max 10MB each</p>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelected(selected?.id === item.id ? null : item)}
                  className={`cursor-pointer border transition-all ${selected?.id === item.id ? "border-[#080808]" : "border-[#E5E5E5] hover:border-[#707070]"}`}
                >
                  <div className="aspect-square overflow-hidden bg-[#F5F5F3]">
                    <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 bg-white">
                    <p className="mono-label text-[#080808] truncate">{item.name}</p>
                    <p className="mono-label text-[#707070] mt-0.5">{item.size}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#E5E5E5]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E5E5E5]">
                    <th className="px-5 py-3 text-left mono-label text-[#707070]">File</th>
                    <th className="px-5 py-3 text-left mono-label text-[#707070] hidden md:table-cell">Size</th>
                    <th className="px-5 py-3 text-left mono-label text-[#707070] hidden lg:table-cell">Date</th>
                    <th className="px-5 py-3 text-right mono-label text-[#707070]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E5]">
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover:bg-[#F5F5F3] transition-colors">
                      <td className="px-5 py-3 flex items-center gap-3">
                        <img src={item.url} alt={item.name} className="w-10 h-10 object-cover bg-[#F5F5F3]" />
                        <p className="text-[13px] font-medium text-[#080808]">{item.name}</p>
                      </td>
                      <td className="px-5 py-3 mono-label text-[#707070] hidden md:table-cell">{item.size}</td>
                      <td className="px-5 py-3 mono-label text-[#707070] hidden lg:table-cell">{item.date}</td>
                      <td className="px-5 py-3">
                        <div className="flex items-center justify-end gap-3">
                          <button onClick={() => copyUrl(item.url)} className="mono-label text-[#707070] hover:text-[#080808] transition-colors">Copy URL</button>
                          <button onClick={() => remove(item.id)} className="mono-label text-red-500 hover:text-red-700 transition-colors">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="bg-white border border-[#E5E5E5] h-fit">
            <div className="aspect-video overflow-hidden bg-[#F5F5F3]">
              <img src={selected.url} alt={selected.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 space-y-4">
              <p className="text-[13px] font-semibold text-[#080808] break-all">{selected.name}</p>
              <div className="space-y-2">
                {[
                  { label: "Type", value: selected.type },
                  { label: "Size", value: selected.size },
                  { label: "Uploaded", value: selected.date },
                ].map((i) => (
                  <div key={i.label} className="flex justify-between">
                    <span className="mono-label text-[#707070]">{i.label}</span>
                    <span className="mono-label text-[#080808]">{i.value}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E5E5E5] pt-4 space-y-2">
                <button onClick={() => copyUrl(selected.url)} className="w-full bg-[#080808] text-white text-[11px] tracking-[0.15em] uppercase font-semibold py-2.5 hover:bg-[#333] transition-colors">
                  {copied ? "Copied!" : "Copy URL"}
                </button>
                <button onClick={() => remove(selected.id)} className="w-full border border-red-300 text-red-600 text-[11px] tracking-[0.15em] uppercase font-semibold py-2.5 hover:bg-red-50 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
