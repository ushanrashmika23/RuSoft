import { useParams, Link } from "react-router";

const posts: Record<string, {
  category: string; title: string; excerpt: string; date: string; readTime: string;
  img: string; author: string; content: { type: string; text: string }[];
}> = {
  "event-driven-architecture": {
    category: "Engineering", readTime: "9 min", date: "Aug 14, 2025",
    author: "Ruslan Azimov",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=700&fit=crop&auto=format",
    title: "Why Event-Driven Architecture Wins at Scale",
    excerpt: "After deploying event-driven systems for three enterprise clients, we share what no textbook tells you.",
    content: [
      { type: "lead", text: "After deploying event-driven systems for Meridian Capital, a logistics operator in Germany, and a healthcare network in the UAE, we have a very specific opinion about when event-driven architecture is the right choice — and when it isn't." },
      { type: "h2", text: "The Promise (and the Reality)" },
      { type: "p", text: "Every architecture document selling event-driven systems will tell you the same things: loose coupling, independent scaling, resilience, real-time responsiveness. All of this is true. What the documents rarely tell you is how much discipline the approach requires to maintain those properties once the system is in production and multiple teams are touching it." },
      { type: "p", text: "In our experience, the majority of event-driven systems that 'fail' don't fail because the architecture was wrong. They fail because event schemas weren't treated as first-class contracts, because event consumers were written with hidden ordering assumptions, or because no one owned the event catalog." },
      { type: "h2", text: "What We Learned Building Meridian" },
      { type: "p", text: "Meridian Capital's system processes 4 million financial events per second across 12 global market feeds. When we designed the architecture, we made three decisions early that proved to be load-bearing for everything that followed." },
      { type: "p", text: "First: all event schemas are versioned and stored in a central schema registry from day one. Not 'we'll add versioning when we need it.' From day one. This means every consumer knows exactly what they're receiving, and schema evolution follows a strict backwards-compatibility protocol." },
      { type: "p", text: "Second: consumers are written to be idempotent by default. Not 'we'll handle duplicates if they become a problem.' Every handler assumes it might receive the same event more than once and is written accordingly. In a system processing millions of events per second, at-least-once delivery is not an edge case — it's the norm." },
      { type: "h2", text: "The Discipline Tax" },
      { type: "p", text: "There is a real cost to event-driven systems: they are harder to reason about locally. In a traditional request/response system, you can trace a user action through a call stack. In an event-driven system, the same action might trigger fifteen downstream consumers, each of which might publish new events, and understanding the full causal chain requires good tooling and a team culture that values observability." },
      { type: "p", text: "We invest heavily in distributed tracing on every event-driven project we build. Without it, debugging production issues becomes archaeology." },
      { type: "h2", text: "When to Choose It" },
      { type: "p", text: "Event-driven architecture earns its complexity cost when: (1) you have genuinely independent subsystems that need to react to state changes, (2) your volume or latency requirements exceed what synchronous processing can deliver, or (3) you need to support multiple consumers of the same data without coupling them together. If none of these apply, a well-structured monolith will serve you better." },
    ],
  },
  "ai-in-production": {
    category: "AI", readTime: "12 min", date: "Jul 29, 2025",
    author: "Ruslan Azimov",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&h=700&fit=crop&auto=format",
    title: "AI in Production: 18 Months of Enterprise Lessons",
    excerpt: "LLMs in real enterprise environments are a different animal. Here's what actually matters.",
    content: [
      { type: "lead", text: "After 18 months deploying AI-powered features into enterprise software — in healthcare, financial analytics, and productivity — we have a clearer picture of what actually matters versus what the AI hype cycle claims matters." },
      { type: "h2", text: "The Gap Between Demo and Production" },
      { type: "p", text: "Every enterprise AI project we've worked on started with a demo that looked impressive. The demo always worked because it was running against curated examples. Production is different: real users ask unexpected questions, provide incomplete context, and have edge cases that weren't in any training set." },
      { type: "p", text: "The most important architectural decision in any LLM-powered feature isn't which model you use. It's how you structure your context, how you evaluate your outputs, and how you handle graceful degradation when the model fails." },
      { type: "h2", text: "Evaluation is the Engineering Problem" },
      { type: "p", text: "Building an AI feature that works is easy. Building confidence that it works — reliably, across the full distribution of real user inputs — is hard. The teams we've seen succeed treat evaluation as a first-class engineering problem, not an afterthought." },
      { type: "p", text: "We maintain a golden dataset for every AI feature we ship: a curated set of inputs with expected outputs that runs against every deployment. When outputs drift, we know before users tell us." },
      { type: "h2", text: "The Models Are Not the Bottleneck" },
      { type: "p", text: "After 18 months, the most consistent finding is that the model is rarely the limiting factor. Context engineering, retrieval quality, prompt engineering, and output validation are where the real leverage is. We've achieved better results with careful engineering around a smaller model than with a larger model thrown at a poorly structured problem." },
    ],
  },
  "technical-debt-cost": {
    category: "Strategy", readTime: "7 min", date: "Jul 10, 2025",
    author: "Ruslan Azimov",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=700&fit=crop&auto=format",
    title: "The Hidden Cost of Technical Debt in B2B Software",
    excerpt: "How accumulated debt quietly kills product velocity — and the framework we use to quantify it.",
    content: [
      { type: "lead", text: "Technical debt is one of those concepts that engineers understand intuitively and business stakeholders dismiss — until it becomes a crisis. Here's how we help clients see it clearly." },
      { type: "h2", text: "The Velocity Cliff" },
      { type: "p", text: "The insidious thing about technical debt is that its effects are invisible until they're catastrophic. A codebase with high debt doesn't fail. It slows. Features that should take two weeks take five. Simple changes require touching twelve files. New engineers take six months to become productive instead of two." },
      { type: "p", text: "We call this the velocity cliff: the point at which accumulated debt causes a step-change in how fast a team can move. Most companies only notice it in retrospect, because the slowdown is gradual enough that it looks like normal complexity growth." },
      { type: "h2", text: "Quantifying the Cost" },
      { type: "p", text: "The framework we use with clients starts with a simple measurement: how long does it take to ship a medium-complexity feature from requirements to production? Track this over 12 months. If it's increasing, debt is accumulating faster than it's being repaid. The rate of increase tells you how serious the problem is." },
      { type: "p", text: "Beyond velocity, we look at: defect rates by module (high-debt modules have disproportionate bugs), deployment frequency (teams with high debt deploy less often because each deployment is risky), and onboarding time for new engineers (a proxy for codebase comprehensibility)." },
      { type: "h2", text: "The Debt Repayment Strategy" },
      { type: "p", text: "The most effective approach we've seen isn't a 'debt sprint' where everything stops while the team refactors. It's a sustained 20% allocation: 80% of every sprint on product work, 20% on debt reduction in the areas that most constrain velocity. Sustained over 6-12 months, this approach consistently restores team velocity without stalling product delivery." },
    ],
  },
};

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="pt-[68px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mono-label mb-4">404</p>
          <h1 className="text-[40px] font-bold text-[#080808] mb-4">Article not found</h1>
          <Link to="/insights" className="mono-label text-[#080808] underline underline-offset-4">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[68px]">
      {/* Hero image */}
      <div className="h-[50vh] min-h-[320px] overflow-hidden bg-[#F5F5F3]">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Meta */}
        <div className="pt-12 pb-10 border-b border-[#E5E5E5]">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="mono-label text-[#080808]">{post.category}</span>
            <span className="mono-label text-[#E5E5E5]">·</span>
            <span className="mono-label">{post.readTime} read</span>
            <span className="mono-label text-[#E5E5E5]">·</span>
            <span className="mono-label">{post.date}</span>
          </div>
          <h1
            className="display-heading text-[#080808] mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#080808] flex items-center justify-center">
              <span className="text-white text-[11px] font-bold">R</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#080808]">{post.author}</p>
              <p className="mono-label text-[#707070]">Founder & Chief Engineer, RuSoft Technologies</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-12 max-w-[720px]">
          {post.content.map((block, i) => {
            if (block.type === "lead") return (
              <p key={i} className="text-[20px] lg:text-[22px] text-[#080808] leading-relaxed font-light mb-10">
                {block.text}
              </p>
            );
            if (block.type === "h2") return (
              <h2 key={i} className="text-[24px] font-bold tracking-tight text-[#080808] mt-12 mb-5">
                {block.text}
              </h2>
            );
            return (
              <p key={i} className="text-[16px] text-[#707070] leading-relaxed mb-6">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Bottom nav */}
        <div className="border-t border-[#E5E5E5] py-12 flex items-center justify-between">
          <Link to="/insights" className="mono-label text-[#080808] hover:opacity-60 transition-opacity">
            ← All Insights
          </Link>
          <Link to="/contact" className="bg-[#080808] text-white text-[11px] tracking-[0.15em] uppercase font-semibold px-6 py-3 hover:bg-[#333] transition-colors">
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
