import { useState } from "react";
import { Link } from "react-router";

const posts = [
  {
    slug: "event-driven-architecture",
    category: "Engineering",
    title: "Why Event-Driven Architecture Wins at Scale",
    excerpt: "After deploying event-driven systems for three enterprise clients, we share what no textbook tells you about real-world EDA at production scale.",
    date: "Aug 14, 2025",
    readTime: "9 min",
    featured: true,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=540&fit=crop&auto=format",
  },
  {
    slug: "ai-in-production",
    category: "AI",
    title: "AI in Production: 18 Months of Enterprise Lessons",
    excerpt: "LLMs in real enterprise environments are a different animal. Here's what actually matters when you're deploying to production and your business depends on it.",
    date: "Jul 29, 2025",
    readTime: "12 min",
    featured: true,
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=540&fit=crop&auto=format",
  },
  {
    slug: "technical-debt-cost",
    category: "Strategy",
    title: "The Hidden Cost of Technical Debt in B2B Software",
    excerpt: "How accumulated debt quietly kills product velocity — and the framework we use to quantify it for clients who are skeptical of the concept.",
    date: "Jul 10, 2025",
    readTime: "7 min",
    featured: false,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=540&fit=crop&auto=format",
  },
  {
    slug: "typescript-patterns",
    category: "Engineering",
    title: "TypeScript Patterns We Actually Use in Production",
    excerpt: "Skip the textbook examples. These are the TypeScript patterns that have saved our projects repeatedly.",
    date: "Jun 22, 2025",
    readTime: "8 min",
    featured: false,
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870ca?w=900&h=540&fit=crop&auto=format",
  },
  {
    slug: "api-design-principles",
    category: "Engineering",
    title: "API Design Principles for Long-Lived Software",
    excerpt: "Designing an API is easy. Designing one that's still maintainable three years later — and has happy consumers — is a different problem entirely.",
    date: "Jun 4, 2025",
    readTime: "11 min",
    featured: false,
    img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=900&h=540&fit=crop&auto=format",
  },
  {
    slug: "startup-engineering-mistakes",
    category: "Strategy",
    title: "The 5 Engineering Mistakes That Kill Startups at Series B",
    excerpt: "We've seen the same patterns repeat. Here's what goes wrong when startups hit growth and their technical foundations weren't designed for it.",
    date: "May 18, 2025",
    readTime: "10 min",
    featured: false,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=540&fit=crop&auto=format",
  },
];

const categories = ["All", "Engineering", "AI", "Strategy"];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="pt-[68px]">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-16 border-b border-[#E5E5E5]">
        <p className="mono-label mb-4">Thinking & Writing</p>
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <h1 className="display-heading text-[#080808]" style={{ fontSize: "clamp(52px, 8vw, 112px)" }}>
            Insights
          </h1>
          {/* Search */}
          <div className="relative w-full lg:w-[340px]">
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors font-mono text-[12px]"
            />
          </div>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-0 mt-10 border-t border-[#E5E5E5] pt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`mono-label px-5 py-4 border-t-2 transition-all duration-150 ${
                activeCategory === cat
                  ? "border-[#080808] text-[#080808]"
                  : "border-transparent text-[#707070] hover:text-[#080808]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        {/* Featured */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-0 border-b border-[#E5E5E5] mb-0">
            {featured.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group border-b md:border-b-0 md:border-r border-[#E5E5E5] last:border-r-0 last:border-b-0"
              >
                <div className="overflow-hidden bg-[#F5F5F3] aspect-[16/9]">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="mono-label text-[#080808]">{post.category}</span>
                    <span className="mono-label text-[#E5E5E5]">·</span>
                    <span className="mono-label">{post.readTime} read</span>
                  </div>
                  <h2 className="text-[22px] lg:text-[28px] font-bold tracking-tight text-[#080808] leading-tight mb-3 group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="text-[#707070] text-[14px] leading-relaxed mb-5">{post.excerpt}</p>
                  <p className="mono-label text-[#707070]">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-3 gap-0 border-l border-t border-[#E5E5E5]">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="border-r border-b border-[#E5E5E5] p-8 hover:bg-[#F5F5F3] transition-colors group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="mono-label text-[#080808]">{post.category}</span>
                  <span className="mono-label text-[#E5E5E5]">·</span>
                  <span className="mono-label">{post.readTime} read</span>
                </div>
                <h3 className="text-[18px] font-bold tracking-tight text-[#080808] leading-tight mb-3 group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h3>
                <p className="text-[#707070] text-[13px] leading-relaxed mb-5">{post.excerpt}</p>
                <p className="mono-label text-[#707070]">{post.date}</p>
              </Link>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="mono-label text-[#707070] mb-3">No articles found</p>
            <button onClick={() => { setQuery(""); setActiveCategory("All"); }} className="mono-label text-[#080808] underline underline-offset-4">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
