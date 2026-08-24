import { useParams, Link } from "react-router";

const caseStudies: Record<string, {
  num: string; title: string; client: string; industry: string;
  category: string; year: string; overview: string; challenge: string;
  approach: string; solution: string; results: string[];
  technologies: string[]; img: string; gallery: string[];
  testimonial: { quote: string; name: string; role: string; company: string };
}> = {
  "nexus-education": {
    num: "01", title: "Nexus Education", client: "Nexus Learning Group",
    industry: "EdTech", category: "Product Engineering", year: "2024",
    overview: "A comprehensive learning management system serving 120,000 students across 14 countries — built from scratch in 14 months.",
    challenge: "Nexus came to us with an aging Moodle installation that was buckling under growth. 120,000 students, 14 country deployments, and 3 different regulatory environments meant off-the-shelf solutions couldn't work. The system needed to be rebuilt from the ground up.",
    approach: "We began with a six-week discovery phase embedded with the Nexus product and pedagogy teams. Rather than mapping features, we mapped learning journeys — understanding how students actually engage, where they drop off, and what educators need to see. Architecture was designed for regional data residency from day one.",
    solution: "A multi-tenant LMS built on React and Node.js, with a PostgreSQL cluster configuration for regional data isolation. The system includes a custom assessment engine, live class tooling integrated with their video provider, and a parent/guardian portal. API-first design allows third-party content providers to integrate directly.",
    results: [
      "120,000 active students at full production scale",
      "3× improvement in student retention vs. previous platform",
      "14 country deployments with full data residency compliance",
      "99.97% uptime across a 12-month period",
      "Deployment time reduced from 2 weeks to 4 hours per new country",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop&auto=format",
    ],
    testimonial: {
      quote: "RuSoft didn't just build the product — they understood our business at a level most agencies never reach. The result speaks for itself: 3× user retention within 90 days of launch.",
      name: "Adriana Müller", role: "CTO", company: "Nexus Learning Group",
    },
  },
  "stratify-life": {
    num: "02", title: "Stratify", client: "Stratify Inc.",
    industry: "Productivity", category: "Mobile Applications", year: "2024",
    overview: "A cross-platform productivity application combining AI scheduling, habit tracking, and deep work sessions. 280,000 active users within 90 days of launch.",
    challenge: "The Stratify team had a bold vision for AI-native productivity but no technical team to execute. They needed a partner who could architect the AI layer, the mobile applications, and the backend simultaneously — and who could move at startup speed without sacrificing production quality.",
    approach: "We built a cross-functional team: mobile engineers for iOS and Android, a backend team for the event-driven data layer, and an AI team for the scheduling intelligence engine. Weekly milestone reviews with the founders kept scope tight and feedback loops short.",
    solution: "React Native apps for iOS and Android with a shared business logic layer. The AI scheduling engine uses a fine-tuned model for personal preference learning, integrated via a streaming API. The backend is event-driven using Kafka and Redis for real-time sync across devices.",
    results: [
      "280,000 active users within 90 days of App Store launch",
      "#4 Productivity on App Store (US) at launch",
      "Average session length 22 minutes — 3× category average",
      "AI scheduling accuracy rated 4.8/5 by users",
      "Sub-200ms sync latency across devices",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Kafka", "Redis", "PostgreSQL", "LLMs", "AWS"],
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b1?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870ca?w=800&h=500&fit=crop&auto=format",
    ],
    testimonial: {
      quote: "Working with RuSoft felt like having a senior engineering team inside our own organization. Their attention to architecture and long-term maintainability was exceptional.",
      name: "James Okafor", role: "VP Engineering", company: "Stratify Inc.",
    },
  },
  "meridian-finance": {
    num: "03", title: "Meridian Analytics", client: "Meridian Capital",
    industry: "FinTech", category: "Cloud Architecture", year: "2023",
    overview: "Real-time portfolio analytics and risk modeling platform processing 4 million financial events per second across global markets.",
    challenge: "Meridian's existing analytics infrastructure was batch-based, delivering insights 4 hours after market close. They needed real-time risk modeling across 12 global markets with sub-second latency — a significantly harder technical problem than their previous vendor had led them to believe.",
    approach: "We spent the first month purely on architecture. The problem required a stream-processing backbone capable of handling the full event volume with deterministic latency guarantees. We evaluated and benchmarked three different architectural patterns before committing.",
    solution: "A Java/Spring Boot event-processing system using Apache Kafka for the streaming backbone, with Flink for stateful stream computations. Risk models run in isolated compute units that can be updated without system downtime. A React dashboard delivers sub-second chart updates via WebSocket connections.",
    results: [
      "4 million financial events processed per second",
      "Sub-300ms end-to-end latency from event to dashboard",
      "12 global market feeds integrated simultaneously",
      "Zero unplanned downtime in 18 months of production",
      "Risk model update cycle reduced from 4 hours to 8 minutes",
    ],
    technologies: ["Java", "Spring Boot", "Apache Kafka", "Apache Flink", "PostgreSQL", "Redis", "Kubernetes", "React", "WebSockets"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop&auto=format",
    ],
    testimonial: {
      quote: "The performance benchmarks they delivered were beyond anything we had scoped. Processing 4M events per second on a system we can actually maintain — remarkable.",
      name: "Sarah Chen", role: "Head of Technology", company: "Meridian Capital",
    },
  },
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? caseStudies[slug] : null;

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
              style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
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
          </div>
          <div>
            <p className="text-[#080808] text-[20px] lg:text-[24px] leading-relaxed font-light">
              {cs.overview}
            </p>
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
          <p className="text-[#707070] text-[16px] lg:text-[18px] leading-relaxed max-w-[720px]">
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
          <p className="mono-label mb-8">Results</p>
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
          <div className="grid md:grid-cols-3 gap-4">
            {cs.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden bg-[#F5F5F3] aspect-[16/10]">
                <img src={img} alt={`${cs.title} screenshot ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-4 hover:bg-[#333] transition-colors"
            >
              Start a Project
            </Link>
            <Link
              to="/work"
              className="text-[12px] tracking-[0.12em] uppercase font-semibold text-[#080808] hover:opacity-60 transition-opacity"
            >
              ← All Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
