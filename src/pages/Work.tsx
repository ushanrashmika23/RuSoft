import { Link } from "react-router";
import { projectsData } from "../data/projects";

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
          {projectsData.map((project, i) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="group block border-b border-[#E5E5E5]"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative overflow-hidden bg-[#F5F5F3] flex items-center justify-center min-h-[260px] lg:min-h-[440px]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={`p-8 lg:p-12 flex flex-col justify-between border-[#E5E5E5] ${i % 2 === 0 ? "border-l" : ""}`}>
                  <div>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="mono-label">{project.num}</span>
                      <span className="mono-label text-[#707070]">{project.industry}</span>
                      <span className="mono-label text-[#707070]">{project.year}</span>
                    </div>
                    <h2 className="text-[30px] lg:text-[42px] font-bold tracking-tight text-[#080808] leading-tight mb-3">
                      {project.title}
                    </h2>
                    <p className="mono-label text-[#707070] mb-5">{project.client}</p>
                    <p className="text-[#707070] text-[15px] leading-relaxed max-w-[480px] mb-6">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tag) => (
                        <span key={tag} className="mono-label bg-[#F5F5F3] border border-[#E5E5E5] px-3 py-1.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#080808]">
                      <span className="text-[12px] tracking-[0.12em] uppercase font-semibold group-hover:underline underline-offset-4">
                        View Case Study
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                    {project.demoUrl ? (
                      <span className="mono-label text-[11px] text-[#707070]">Live Demo ↗</span>
                    ) : project.githubUrl ? (
                      <span className="mono-label text-[11px] text-[#707070]">GitHub ↗</span>
                    ) : null}
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
