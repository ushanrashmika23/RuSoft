import { Link } from "react-router";
import { LogoSymbol } from "./Logo";

const footerLinks = {
  Navigation: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
    { label: "Approach", href: "/#approach" },
    { label: "About", href: "/#about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Product Engineering", href: "/#services" },
    { label: "Web & Mobile", href: "/#services" },
    { label: "Cloud Architecture", href: "/#services" },
    { label: "AI & Automation", href: "/#services" },
    { label: "Business Systems", href: "/#services" },
    { label: "Digital Transformation", href: "/#services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <LogoSymbol color="#FFFFFF" size={32} />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[14px] text-white" style={{ letterSpacing: "0.22em" }}>
                  RUSOFT
                </span>
                <span className="font-light text-[7.5px] text-white/60 mt-[3px]" style={{ letterSpacing: "0.28em" }}>
                  TECHNOLOGIES
                </span>
              </div>
            </div>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-[280px] mb-8">
              We design and engineer digital products, intelligent systems, and scalable software for ambitious businesses around the world.
            </p>
            <div className="flex items-center gap-5">
              {[
                { label: "LI", href: "https://linkedin.com" },
                { label: "GH", href: "https://github.com" },
                { label: "TW", href: "https://twitter.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mono-label text-white/40 mb-5">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[13px] text-white/60 hover:text-white transition-colors leading-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 gap-4">
          <p className="mono-label text-white/30">
            © 2025 RuSoft Technologies. All rights reserved.
          </p>
          <p className="mono-label text-white/30">
            Engineered for what's next.
          </p>
        </div>
      </div>
    </footer>
  );
}
