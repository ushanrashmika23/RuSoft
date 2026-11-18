import { useParams, Link } from "react-router";
import { projectsData, legacyCaseStudies } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();

  const currentProject = projectsData.find((p) => p.slug === slug);
  const cs = currentProject || (slug ? legacyCaseStudies[slug] : null);

  if (!cs) {
    return (
      <div className="pt-[68px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mono-label mb-4">404</p>
          <h1 className="text-[40px] font-bold text-[#080808] mb-4">Project not found</h1>
          <Link to="/work" className="mono-label text-[#080808] underline underline-offset-4">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#080808] h-[60vh] min-h-[400px]">
        <img src={cs.img} alt={cs.title} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
          <div className="max-w-[1440px] mx-auto w-full px-0 lg:px-0">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="mono-label text-white/60">{cs.num}</span>
              <span className="mono-label text-white/60">{cs.industry}</span>
              <span className="mono-label text-white/60">{cs.category}</span>
              <span className="mono-label text-white/60">{cs.year}</span>
            </div>
            <h1
              className="display-heading text-white"
              style={{ fontSize: "clamp(36px, 6.5vw, 88px)" }}
            >
              {cs.title}
            </h1>
            <p className="mono-label text-white/50 mt-3">{cs.client}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Overview */}
        <div className="py-16 lg:py-24 border-b border-[#E5E5E5] grid lg:grid-cols-[280px_1fr] gap-12">
          <div>
            <p className="mono-label mb-6">Project Overview</p>
            <div className="space-y-4">
              {[
                { label: "Client", value: cs.client },
                { label: "Industry", value: cs.industry },
                { label: "Category", value: cs.category },
                { label: "Year", value: cs.year },
              ].map((item) => (
                <div key={item.label}>
                  <p className="mono-label text-[#707070] mb-1">{item.label}</p>
                  <p className="text-[#080808] text-[14px] font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {(cs.demoUrl || cs.githubUrl) && (
              <div className="mt-8 pt-8 border-t border-[#E5E5E5] space-y-3">
                <p className="mono-label text-[#707070] mb-3">Links</p>
                {cs.demoUrl && (
                  <a
                    href={cs.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[13px] font-semibold text-[#080808] hover:opacity-70 transition-opacity"
                  >
                    <span>Visit Live Site</span>
                    <span>↗</span>
                  </a>
                )}
                {cs.githubUrl && (
                  <a
                    href={cs.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[13px] font-semibold text-[#080808] hover:opacity-70 transition-opacity"
                  >
                    <span>GitHub Repository</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
          <div>
            <p className="text-[#080808] text-[20px] lg:text-[24px] leading-relaxed font-light mb-8">
              {cs.overview}
            </p>
            {(cs.demoUrl || cs.githubUrl) && (
              <div className="flex flex-wrap gap-4">
                {cs.demoUrl && (
                  <a
                    href={cs.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#080808] text-white text-[12px] tracking-[0.12em] uppercase font-semibold px-6 py-3.5 hover:bg-[#333] transition-colors"
                  >
                    <span>Visit Live Demo</span>
                    <span>↗</span>
                  </a>
                )}
                {cs.githubUrl && (
                  <a
                    href={cs.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#080808] text-[#080808] text-[12px] tracking-[0.12em] uppercase font-semibold px-6 py-3.5 hover:bg-[#080808] hover:text-white transition-colors"
                  >
                    <span>View on GitHub</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Challenge + Approach */}
        <div className="py-16 lg:py-24 border-b border-[#E5E5E5] grid md:grid-cols-2 gap-12">
          <div>
            <p className="mono-label mb-5">The Challenge</p>
            <p className="text-[#707070] text-[16px] leading-relaxed">{cs.challenge}</p>
          </div>
          <div className="border-l border-[#E5E5E5] pl-12">
            <p className="mono-label mb-5">Our Approach</p>
            <p className="text-[#707070] text-[16px] leading-relaxed">{cs.approach}</p>
          </div>
        </div>

        {/* Solution */}
        <div className="py-16 lg:py-24 border-b border-[#E5E5E5]">
          <p className="mono-label mb-5">The Solution</p>
          <p className="text-[#707070] text-[16px] lg:text-[18px] leading-relaxed max-w-[760px]">
            {cs.solution}
          </p>
        </div>

        {/* Tech stack */}
        <div className="py-16 border-b border-[#E5E5E5]">
          <p className="mono-label mb-6">Technology Stack</p>
          <div className="flex flex-wrap gap-2">
            {cs.technologies.map((tech) => (
              <span key={tech} className="mono-label bg-[#F5F5F3] border border-[#E5E5E5] px-4 py-2">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="py-16 lg:py-24 border-b border-[#E5E5E5]">
          <p className="mono-label mb-8">Results & Achievements</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[#E5E5E5]">
            {cs.results.map((result, i) => (
              <div key={i} className="border-r border-b border-[#E5E5E5] p-8">
                <span className="mono-label text-[#707070] mb-3 block">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[#080808] text-[16px] font-medium leading-snug">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="py-16 border-b border-[#E5E5E5]">
          <p className="mono-label mb-8">Project Gallery</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cs.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden bg-[#F5F5F3] aspect-[16/10] border border-[#E5E5E5] flex items-center justify-center">
                <img
                  src={img}
                  alt={`${cs.title} showcase ${i + 1}`}
                  className="w-full h-auto max-h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#F5F5F3] -mx-6 lg:-mx-12 px-6 lg:px-12 my-0">
          <p className="mono-label mb-8">Client Testimonial</p>
          <blockquote className="text-[#080808] text-[20px] lg:text-[26px] font-light leading-relaxed max-w-[720px] mb-8">
            "{cs.testimonial.quote}"
          </blockquote>
          <div className="border-t border-[#E5E5E5] pt-6">
            <p className="text-[#080808] font-semibold text-[14px]">{cs.testimonial.name}</p>
            <p className="mono-label text-[#707070] mt-1">{cs.testimonial.role}, {cs.testimonial.company}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="mono-label mb-3">Next Steps</p>
            <h3 className="text-[28px] lg:text-[40px] font-bold tracking-tight text-[#080808]">
              Let's build yours next.
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {cs.demoUrl && (
              <a
                href={cs.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-4 hover:bg-[#333] transition-colors"
              >
                Launch Demo ↗
              </a>
            )}
            <Link
              to="/contact"
              className="border border-[#080808] text-[#080808] text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-4 hover:bg-[#080808] hover:text-white transition-colors"
            >
              Start a Project
            </Link>
            <Link
              to="/work"
              className="text-[12px] tracking-[0.12em] uppercase font-semibold text-[#080808] hover:opacity-60 transition-opacity ml-2"
            >
              ← All Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
