import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import Logo from "./Logo";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHeroPage = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const inverted = isHeroPage && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          menuOpen
            ? "bg-[#080808]"
            : scrolled
            ? "bg-white border-b border-[#E5E5E5]"
            : isHeroPage
            ? "bg-transparent"
            : "bg-white border-b border-[#E5E5E5]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[68px]">
          <Logo inverted={inverted || menuOpen} size="md" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[12px] tracking-[0.12em] uppercase font-medium transition-opacity duration-200 hover:opacity-60 ${
                  inverted ? "text-white" : "text-[#080808]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className={`text-[11px] tracking-[0.15em] uppercase font-semibold px-6 py-2.5 transition-all duration-200 ${
                inverted
                  ? "bg-white text-[#080808] hover:bg-[#F5F5F3]"
                  : "bg-[#080808] text-white hover:bg-[#333]"
              }`}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] transition-all duration-200 ${
                inverted || menuOpen ? "bg-white" : "bg-[#080808]"
              } ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-200 ${
                inverted || menuOpen ? "bg-white" : "bg-[#080808]"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-200 ${
                inverted || menuOpen ? "bg-white" : "bg-[#080808]"
              } ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] flex flex-col transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-[68px]" />
        <nav className="flex-1 flex flex-col justify-center px-8 gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-white text-[32px] font-bold tracking-tight hover:opacity-60 transition-opacity"
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 text-[13px] tracking-[0.15em] uppercase font-semibold text-white border border-white px-6 py-3 self-start hover:bg-white hover:text-[#080808] transition-colors"
          >
            Start a Project
          </Link>
        </nav>
        <div className="px-8 pb-10">
          <p className="mono-label text-[#707070]">© 2025 RuSoft Technologies</p>
        </div>
      </div>
    </>
  );
}
