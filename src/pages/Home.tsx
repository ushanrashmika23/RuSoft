import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { LogoSymbol } from "../components/Logo";

// ---------- Scroll reveal hook ----------
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ---------- Data ----------
const technologies = [
  "React", "Next.js", "Node.js", "TypeScript", "Java", "Spring Boot",
  "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "AI / ML",
  "GraphQL", "Tailwind", "Python", "Go",
];

const services = [
  {
    num: "01",
    title: "Product Engineering",
    desc: "End-to-end digital product development, from idea to production-grade software. We architect, build, and ship products that scale.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    num: "02",
    title: "Web & Mobile Applications",
    desc: "High-performance web and native mobile applications built with modern frameworks and engineering excellence.",
    tags: ["React Native", "iOS", "Android", "PWA"],
  },
  {
    num: "03",
    title: "Cloud & Software Architecture",
    desc: "Scalable, resilient infrastructure design. Microservices, event-driven systems, and cloud-native architecture at any scale.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    num: "04",
    title: "AI & Automation",
    desc: "Practical AI integrations and intelligent automation systems that create measurable business value—not prototypes.",
    tags: ["LLMs", "ML Pipelines", "Python", "Vector DBs"],
  },
  {
    num: "05",
    title: "Business Management Systems",
    desc: "Custom ERP, CRM, and operations platforms designed for the specific complexity of your business model.",
    tags: ["Custom ERP", "CRM", "Reporting", "Integrations"],
  },
  {
    num: "06",
    title: "Digital Transformation",
    desc: "Strategic technical leadership to guide organizations through platform modernization, migration, and capability building.",
    tags: ["Strategy", "Migrations", "API Design", "Teams"],
  },
];

const caseStudies = [
  {
    slug: "nexus-education",
    num: "01",
    label: "Education Platform",
    title: "Nexus Education",
    client: "Nexus Learning Group",
    industry: "EdTech",
    desc: "A comprehensive learning management system serving 120,000 students across 14 countries. Built for performance, accessibility, and pedagogical depth.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=900&fit=crop&auto=format",
  },
  {
    slug: "stratify-life",
    num: "02",
    label: "Life Management Platform",
    title: "Stratify",
    client: "Stratify Inc.",
    industry: "Productivity",
    desc: "A cross-platform productivity application combining AI scheduling, habit tracking, and deep work sessions. 280,000 active users at launch.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=900&fit=crop&auto=format",
  },
  {
    slug: "meridian-finance",
    num: "03",
    label: "Financial Analytics",
    title: "Meridian Analytics",
    client: "Meridian Capital",
    industry: "FinTech",
    desc: "Real-time portfolio analytics and risk modeling platform processing 4 million financial events per second across global markets.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&auto=format",
  },
];

const approach = [
  { num: "01", title: "Discover", desc: "Deep research into your business model, users, technical landscape, and competitive context." },
  { num: "02", title: "Define", desc: "Clear specifications, architecture decisions, and a realistic project roadmap with measurable milestones." },
  { num: "03", title: "Design", desc: "Thoughtful UI/UX that balances user needs, technical feasibility, and business goals." },
  { num: "04", title: "Engineer", desc: "Rigorous, test-driven development with production standards from the very first line of code." },
  { num: "05", title: "Launch", desc: "Careful deployment, monitoring setup, stakeholder communication, and rollout orchestration." },
  { num: "06", title: "Evolve", desc: "Long-term technical partnership: continuous improvement, iteration, and capability growth." },
];

const testimonials = [
  {
    quote: "RuSoft didn't just build the product — they understood our business at a level most agencies never reach. The result speaks for itself: 3× user retention within 90 days of launch.",
    name: "Adriana Müller",
    role: "CTO",
    company: "Nexus Learning Group",
  },
  {
    quote: "Working with RuSoft felt like having a senior engineering team inside our own organization. Their attention to architecture and long-term maintainability was exceptional.",
    name: "James Okafor",
    role: "VP Engineering",
    company: "Stratify Inc.",
  },
  {
    quote: "The performance benchmarks they delivered were beyond anything we had scoped. Processing 4M events per second on a system we can actually maintain — remarkable.",
    name: "Sarah Chen",
    role: "Head of Technology",
    company: "Meridian Capital",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Global Clients" },
  { value: "15", label: "Countries" },
  { value: "40+", label: "Technologies" },
];

const insights = [
  {
    slug: "event-driven-architecture",
    category: "Engineering",
    title: "Why Event-Driven Architecture Wins at Scale",
    excerpt: "After deploying event-driven systems for three enterprise clients, we share what no textbook tells you.",
    date: "Aug 14, 2025",
    readTime: "9 min",
  },
  {
    slug: "ai-in-production",
    category: "AI",
    title: "AI in Production: 18 Months of Enterprise Lessons",
    excerpt: "LLMs in real enterprise environments are a different animal. Here's what actually matters.",
    date: "Jul 29, 2025",
    readTime: "12 min",
  },
  {
    slug: "technical-debt-cost",
    category: "Strategy",
    title: "The Hidden Cost of Technical Debt in B2B Software",
    excerpt: "How accumulated debt quietly kills product velocity — and the framework we use to quantify it.",
    date: "Jul 10, 2025",
    readTime: "7 min",
  },
];

// ---------- Stat counter hook ----------
function useCounter(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = 0;
    const step = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCard({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(num);
  return (
    <div className="border-r border-b border-[#E5E5E5] p-8 lg:p-10">
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="display-heading text-[#080808] mb-2"
        style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
      >
        {count}{suffix}
      </p>
      <p className="mono-label">{label}</p>
    </div>
  );
}

// ---------- Section components ----------

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; opacity: number }> = [];
    const pointer = { x: 0, y: 0, influence: 0, clickPulse: 0 };

    const setup = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = rect.width * rect.height;
      const count = area > 1400000
        ? 50
        : area > 900000
          ? 40
          : area > 450000
            ? 30
            : area > 220000
              ? 20
              : 15;

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        radius: Math.random() * 2.3 + 1.1,
        opacity: Math.random() * 0.5 + 0.3,
      }));

      pointer.x = rect.width * 0.5;
      pointer.y = rect.height * 0.5;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.influence = 1;
    };

    const handlePointerDown = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.clickPulse = 1.8;
    };

    const handlePointerLeave = () => {
      pointer.influence = 0;
    };

    const draw = () => {
      const rect = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      pointer.influence *= 0.97;
      pointer.clickPulse *= 0.94;

      particles.forEach((particle, index) => {
        particle.vx += (Math.random() - 0.5) * 0.08;
        particle.vy += (Math.random() - 0.5) * 0.08;

        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy) || 1;

        if (distance < 180) {
          const interaction = (1 - distance / 180) * (pointer.influence * 0.8 + pointer.clickPulse * 1.1);
          particle.vx += (dx / distance) * interaction * 0.18;
          particle.vy += (dy / distance) * interaction * 0.18;

          if (pointer.clickPulse > 0.15) {
            const burst = (1 - distance / 150) * pointer.clickPulse;
            particle.vx -= (dx / distance) * burst * 0.22;
            particle.vy -= (dy / distance) * burst * 0.22;
          }
        }

        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= rect.width) particle.vx *= -0.9;
        if (particle.y <= 0 || particle.y >= rect.height) particle.vy *= -0.9;

        particle.x = Math.min(Math.max(particle.x, 0), rect.width);
        particle.y = Math.min(Math.max(particle.y, 0), rect.height);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const nodeDx = particle.x - next.x;
          const nodeDy = particle.y - next.y;
          const nodeDistance = Math.sqrt(nodeDx * nodeDx + nodeDy * nodeDy);

          if (nodeDistance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${(1 - nodeDistance / 120) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = window.requestAnimationFrame(draw);
    };

    setup();
    draw();

    const handleResize = () => setup();
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="h-full w-full opacity-60" />
    </div>
  );
}

function Hero() {
  const lines = ["SOFTWARE", "ENGINEERED", "FOR WHAT'S", "NEXT."];

  return (
    <section className="relative min-h-screen bg-[#080808] flex flex-col justify-end overflow-hidden isolate">
      <div className="absolute inset-0 " />
      <ParticleNetwork />

      {/* Background logo — animated entrance */}
      <div
        className="absolute top-1/2 right-[-5%] pointer-events-none select-none z-0"
        style={{ animation: "heroSymbolIn 2.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
      >
        <LogoSymbol color="#FFFFFF" size={680} />
      </div>

      {/* Technical label */}
      <div
        className="absolute top-[68px] left-0 right-0 pt-10"
        style={{ animation: "fadeIn 0.8s ease 1.2s both" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <span className="mono-label text-white/30">RUSOFT TECHNOLOGIES / SOFTWARE ENGINEERING</span>
          <span className="mono-label text-white/30 hidden sm:block">EST. 2018</span>
        </div>
      </div>

      {/* Heading — line-by-line slide-up reveal */}
      <div className="relative z-10 pb-16 pt-[200px] lg:pt-0">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h1
            className="display-heading text-white mb-6"
            style={{ fontSize: "clamp(64px, 9vw, 128px)" }}
          >
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <span
                  className="block"
                  style={{
                    animation: `slideUpLine 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${i * 110}ms both`,
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </h1>

          <p
            className="text-white/55 text-[16px] lg:text-[18px] leading-relaxed max-w-[520px] mb-10 font-light"
            style={{ animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 560ms both" }}
          >
            We design and engineer digital products, intelligent systems, and scalable software for ambitious businesses around the world.
          </p>

          <div
            className="flex flex-wrap items-center gap-4"
            style={{ animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 720ms both" }}
          >
            <Link
              to="/contact"
              className="bg-white text-[#080808] text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-4 hover:bg-[#F5F5F3] transition-colors"
            >
              Start a Project
            </Link>
            <Link
              to="/work"
              className="text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-4 border border-white/30 hover:border-white transition-colors"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Animated bottom line */}
      <div
        className="absolute bottom-0 left-0 h-px bg-white/20 origin-left"
        style={{ animation: "lineGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1s both", width: "100%" }}
      />
    </section>
  );
}

function TechStrip() {
  return (
    <section
      className="border-b border-[#E5E5E5] py-6 overflow-hidden"
      style={{ animation: "fadeIn 0.6s ease 0.3s both" }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 30s linear infinite",
        }}
      >
        {[...technologies, ...technologies].map((tech, i) => (
          <span key={i} className="flex items-center gap-0 whitespace-nowrap">
            <span className="mono-label px-8">{tech}</span>
            <span className="text-[#E5E5E5] text-[10px]">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section id="services" className="bg-[#F5F5F3] py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal flex items-end justify-between mb-16 border-b border-[#E5E5E5] pb-8">
          <div>
            <p className="mono-label mb-3">Our Capabilities</p>
            <h2 className="display-heading text-[48px] lg:text-[64px] text-[#080808]">Services</h2>
          </div>
          <Link
            to="/contact"
            className="hidden md:block text-[11px] tracking-[0.15em] uppercase font-semibold text-[#080808] border border-[#080808] px-6 py-3 hover:bg-[#080808] hover:text-white transition-colors"
          >
            Start a Project
          </Link>
        </div>

        <div className="divide-y divide-[#E5E5E5]">
          {services.map((service, i) => (
            <div key={service.num}>
              <button
                className="w-full text-left py-8 group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="grid grid-cols-[60px_1fr_auto] lg:grid-cols-[80px_1fr_300px_60px] gap-4 items-start">
                  <span className="mono-label text-[#707070] pt-1">{service.num}</span>
                  <div>
                    <h3 className="text-[22px] lg:text-[28px] font-semibold tracking-tight text-[#080808] group-hover:opacity-70 transition-opacity">
                      {service.title}
                    </h3>
                    {openIndex === i && (
                      <p className="text-[#707070] text-[15px] leading-relaxed mt-3 max-w-[540px]">
                        {service.desc}
                      </p>
                    )}
                    {openIndex === i && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.tags.map((tag) => (
                          <span key={tag} className="mono-label bg-[#E5E5E5] text-[#080808] px-3 py-1.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="hidden lg:block" />
                  <span className="mono-label text-[#707070] mt-1">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const ref = useReveal();
  return (
    <section className="py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal flex items-end justify-between mb-16 border-b border-[#E5E5E5] pb-8">
          <div>
            <p className="mono-label mb-3">Case Studies</p>
            <h2 className="display-heading text-[48px] lg:text-[64px] text-[#080808]">Selected Work</h2>
          </div>
          <Link
            to="/work"
            className="hidden md:block text-[11px] tracking-[0.15em] uppercase font-semibold text-[#080808] hover:opacity-60 transition-opacity"
          >
            All Projects →
          </Link>
        </div>

        <div className="space-y-0">
          {caseStudies.map((cs, i) => (
            <Link key={cs.slug} to={`/work/${cs.slug}`} className="group block">
              <div
                className={`grid lg:grid-cols-2 gap-0 border-b border-[#E5E5E5] ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-[#F5F5F3] h-[280px] lg:h-[480px] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#080808]/10 group-hover:bg-[#080808]/0 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-between p-8 lg:p-12 border-[#E5E5E5] ${
                    i % 2 === 1 ? "lg:order-1 lg:border-r" : "lg:border-l"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="mono-label">{cs.num} / {cs.label.toUpperCase()}</span>
                      <span className="mono-label text-[#E5E5E5]">·</span>
                      <span className="mono-label">{cs.industry}</span>
                    </div>
                    <h3 className="text-[36px] lg:text-[52px] font-bold tracking-tight leading-none text-[#080808] mb-4">
                      {cs.title}
                    </h3>
                    <p className="text-[#707070] text-[15px] leading-relaxed max-w-[400px]">
                      {cs.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-3 text-[#080808]">
                    <span className="text-[12px] tracking-[0.12em] uppercase font-semibold group-hover:underline underline-offset-4">
                      View Case Study
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringPhilosophy() {
  const ref = useReveal();
  const pillars = ["Architecture", "Scalability", "Security", "Performance", "Maintainability"];

  return (
    <section className="bg-[#080808] py-24 lg:py-36 overflow-hidden relative">
      {/* Subtle geometry */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <LogoSymbol color="#FFFFFF" size={600} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="reveal max-w-[860px]">
          <p className="mono-label text-white/40 mb-8">Engineering Philosophy</p>
          <h2
            className="display-heading text-white mb-12"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
          >
            GOOD SOFTWARE ISN'T JUST BUILT.<br />
            IT IS ENGINEERED.
          </h2>
          <p className="text-white/50 text-[16px] lg:text-[18px] leading-relaxed max-w-[560px] mb-16 font-light">
            Every system we deliver is designed to grow, adapt, and remain understandable to the engineers who maintain it — not just to impress on day one.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-white/10">
          {pillars.map((pillar, i) => (
            <div key={pillar} className={`py-10 ${i < pillars.length - 1 ? "border-r border-white/10" : ""} pr-8`}>
              <div className="w-8 h-px bg-white/30 mb-5" />
              <p className="text-white font-medium text-[16px] tracking-tight">{pillar}</p>
              <p className="text-white/35 text-[13px] leading-relaxed mt-2">
                {["Thoughtful system design for the long term.", "Built to handle tomorrow's load, today.", "Security-first, not security-last.", "Optimized without premature complexity.", "Code that humans can read and maintain."][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const ref = useReveal();

  return (
    <section id="approach" className="py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal mb-16 border-b border-[#E5E5E5] pb-8">
          <p className="mono-label mb-3">How We Work</p>
          <h2 className="display-heading text-[48px] lg:text-[64px] text-[#080808]">Our Approach</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[#E5E5E5]">
          {approach.map((step) => (
            <div key={step.num} className="border-r border-b border-[#E5E5E5] p-8 lg:p-10 hover:bg-[#F5F5F3] transition-colors group">
              <span className="mono-label text-[#080808] mb-5 block">{step.num}</span>
              <h3 className="text-[24px] font-bold tracking-tight text-[#080808] mb-3">
                {step.title}
              </h3>
              <p className="text-[#707070] text-[14px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const ref = useReveal();
  return (
    <section className="bg-[#F5F5F3] py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Portrait */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=960&fit=crop&auto=format"
              alt="Ruslan Azimov, Founder & Chief Engineer"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E5E5E5]" />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="mono-label mb-6">Built by Engineers.</p>
              <h2
                className="display-heading text-[#080808] mb-6"
                style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
              >
                Ruslan Azimov
              </h2>
              <p className="mono-label text-[#707070] mb-8">Founder & Chief Engineer</p>

              <p className="text-[#707070] text-[16px] leading-relaxed mb-5">
                Over 15 years building software systems for companies across Europe, the Middle East, and Asia. Started RuSoft with a single conviction: that engineering discipline — not just execution speed — is what separates software that lasts from software that breaks.
              </p>
              <p className="text-[#707070] text-[16px] leading-relaxed mb-10">
                Before founding RuSoft, Ruslan led engineering teams at two fintech companies and contributed to open-source infrastructure used by millions of developers worldwide. Every client engagement is personally reviewed.
              </p>

              <div className="mb-10">
                <p className="mono-label text-[#080808] mb-4">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {["System Architecture", "Cloud Infrastructure", "Team Leadership", "AI Engineering", "Product Strategy"].map((e) => (
                    <span key={e} className="mono-label bg-[#E5E5E5] text-[#080808] px-3 py-1.5">{e}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 border-t border-[#E5E5E5] pt-8">
              {[
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "GitHub", href: "https://github.com" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="mono-label text-[#080808] hover:opacity-50 transition-opacity"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section id="about" className="py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start border-b border-[#E5E5E5] pb-24 mb-24">
          <div ref={ref} className="reveal">
            <p className="mono-label mb-3">About the Company</p>
            <h2 className="display-heading text-[48px] lg:text-[64px] text-[#080808]">
              Who We Are
            </h2>
          </div>
          <div>
            <p className="text-[#707070] text-[16px] lg:text-[18px] leading-relaxed mb-6">
              RuSoft Technologies is a global software engineering company founded on the belief that the most valuable technology companies are built on engineering discipline — not just speed or aesthetics.
            </p>
            <p className="text-[#707070] text-[16px] leading-relaxed mb-6">
              We work with scale-ups, enterprise teams, and ambitious founders who require software that performs under pressure, grows without collapsing, and can be maintained by the humans who inherit it.
            </p>
            <p className="text-[#707070] text-[16px] leading-relaxed">
              Our clients include companies in EdTech, FinTech, SaaS, logistics, and government. We operate across time zones and build teams that integrate with yours.
            </p>
          </div>
        </div>

        {/* Stats — animated counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#E5E5E5]">
          {stats.map((stat) => {
            const num = parseInt(stat.value.replace(/\D/g, ""), 10);
            const suffix = stat.value.replace(/[0-9]/g, "");
            return <StatCard key={stat.label} num={num} suffix={suffix} label={stat.label} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#080808] py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="mono-label text-white/40 mb-12">Client Testimonials</p>

        <div className="max-w-[860px]">
          <blockquote
            className="text-white font-light leading-relaxed mb-10 transition-all duration-300"
            style={{ fontSize: "clamp(20px, 2.8vw, 32px)" }}
          >
            "{testimonials[active].quote}"
          </blockquote>

          <div className="flex items-center gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-white text-[14px] font-semibold">{testimonials[active].name}</p>
              <p className="mono-label text-white/40 mt-1">
                {testimonials[active].role}, {testimonials[active].company}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-px transition-all duration-300 ${
                i === active ? "w-10 bg-white" : "w-4 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsPreview() {
  const ref = useReveal();
  return (
    <section className="bg-[#F5F5F3] py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal flex items-end justify-between mb-16 border-b border-[#E5E5E5] pb-8">
          <div>
            <p className="mono-label mb-3">Thinking</p>
            <h2 className="display-heading text-[48px] lg:text-[64px] text-[#080808]">Insights</h2>
          </div>
          <Link
            to="/insights"
            className="hidden md:block text-[11px] tracking-[0.15em] uppercase font-semibold text-[#080808] hover:opacity-60 transition-opacity"
          >
            All Articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-l border-t border-[#E5E5E5]">
          {insights.map((post) => (
            <Link
              key={post.slug}
              to={`/insights/${post.slug}`}
              className="border-r border-b border-[#E5E5E5] p-8 hover:bg-white transition-colors group"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="mono-label text-[#080808]">{post.category}</span>
                <span className="mono-label text-[#E5E5E5]">·</span>
                <span className="mono-label">{post.readTime} read</span>
              </div>
              <h3 className="text-[20px] font-bold tracking-tight text-[#080808] leading-tight mb-3 group-hover:opacity-70 transition-opacity">
                {post.title}
              </h3>
              <p className="text-[#707070] text-[14px] leading-relaxed mb-6">{post.excerpt}</p>
              <p className="mono-label text-[#707070]">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-24 lg:py-36 border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
        <div className="max-w-[600px]">
          <p className="mono-label mb-4">Start a Project</p>
          <h2
            className="display-heading text-[#080808]"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            READY TO BUILD SOMETHING THAT LASTS?
          </h2>
        </div>
        <Link
          to="/contact"
          className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-10 py-5 hover:bg-[#333] transition-colors whitespace-nowrap"
        >
          Start a Project →
        </Link>
      </div>
    </section>
  );
}

// ---------- Page ----------
export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Services />
      <SelectedWork />
      <EngineeringPhilosophy />
      <Approach />
      <Founder />
      <About />
      <Testimonials />
      <InsightsPreview />
      <ContactCTA />
    </>
  );
}
