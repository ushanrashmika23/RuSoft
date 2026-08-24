import { Link } from "react-router";

const projects = [
  {
    slug: "nexus-education",
    num: "01",
    label: "Education Platform",
    title: "Nexus Education",
    client: "Nexus Learning Group",
    industry: "EdTech",
    category: "Product Engineering",
    year: "2024",
    desc: "A comprehensive learning management system serving 120,000 students across 14 countries.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=720&fit=crop&auto=format",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    slug: "stratify-life",
    num: "02",
    label: "Life Management Platform",
    title: "Stratify",
    client: "Stratify Inc.",
    industry: "Productivity",
    category: "Mobile Applications",
    year: "2024",
    desc: "Cross-platform productivity application with AI scheduling and habit intelligence.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=720&fit=crop&auto=format",
    tags: ["React Native", "TypeScript", "Redis", "LLMs"],
  },
  {
    slug: "meridian-finance",
    num: "03",
    label: "Financial Analytics",
    title: "Meridian Analytics",
    client: "Meridian Capital",
    industry: "FinTech",
    category: "Cloud Architecture",
    year: "2023",
    desc: "Real-time portfolio analytics processing 4 million financial events per second.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=720&fit=crop&auto=format",
    tags: ["Java", "Spring Boot", "Kafka", "Kubernetes"],
  },
  {
    slug: "velox-logistics",
    num: "04",
    label: "Logistics Platform",
    title: "Velox",
    client: "Velox Logistics GmbH",
    industry: "Logistics",
    category: "Business Management Systems",
    year: "2023",
    desc: "Fleet management and route optimization platform for a pan-European logistics operator.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=720&fit=crop&auto=format",
    tags: ["Go", "PostgreSQL", "Docker", "Maps API"],
  },
  {
    slug: "aria-health",
    num: "05",
    label: "Healthcare Platform",
    title: "Aria Health",
    client: "Aria Health Systems",
    industry: "Healthcare",
    category: "AI & Automation",
    year: "2022",
    desc: "Clinical workflow automation and AI-assisted diagnostics support for hospital networks.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=720&fit=crop&auto=format",
    tags: ["Python", "ML Pipelines", "React", "HIPAA"],
  },
];

export default function Work() {
  return (
    <div className="pt-[68px]">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-16 border-b border-[#E5E5E5]">
        <p className="mono-label mb-4">Portfolio</p>
        <div className="flex items-end justify-between">
          <h1 className="display-heading text-[#080808]" style={{ fontSize: "clamp(52px, 8vw, 112px)" }}>
            Selected<br />Work
          </h1>
          <p className="text-[#707070] text-[14px] hidden md:block max-w-[280px] text-right leading-relaxed">
            A selection of engineering projects across industries and technical disciplines.
          </p>
        </div>
      </div>

      {/* Projects list */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="space-y-0">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="group block border-b border-[#E5E5E5]"
            >
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}>
                <div className="relative overflow-hidden bg-[#F5F5F3] h-[260px] lg:h-[440px]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={`p-8 lg:p-12 flex flex-col justify-between border-[#E5E5E5] ${i % 2 === 0 ? "border-l" : ""}`}>
                  <div>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="mono-label">{project.num}</span>
                      <span className="mono-label text-[#707070]">{project.industry}</span>
                      <span className="mono-label text-[#707070]">{project.year}</span>
                    </div>
                    <h2 className="text-[36px] lg:text-[48px] font-bold tracking-tight text-[#080808] leading-none mb-3">
                      {project.title}
                    </h2>
                    <p className="mono-label text-[#707070] mb-5">{project.client}</p>
                    <p className="text-[#707070] text-[15px] leading-relaxed max-w-[400px] mb-6">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="mono-label bg-[#F5F5F3] border border-[#E5E5E5] px-3 py-1.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[#080808]">
                    <span className="text-[12px] tracking-[0.12em] uppercase font-semibold group-hover:underline underline-offset-4">
                      View Case Study
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#F5F5F3] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="mono-label mb-3">Have a project in mind?</p>
            <h3 className="text-[28px] lg:text-[40px] font-bold tracking-tight text-[#080808]">
              Let's build it together.
            </h3>
          </div>
          <Link
            to="/contact"
            className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-4 hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </div>
  );
}
