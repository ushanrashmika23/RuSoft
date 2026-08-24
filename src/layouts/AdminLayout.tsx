import { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { LogoSymbol } from "../components/Logo";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: "▣" },
  { label: "Projects", href: "/admin/projects", icon: "◈" },
  { label: "Services", href: "/admin/services", icon: "◎" },
  { label: "Insights", href: "/admin/insights", icon: "◉" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "❝" },
  { label: "Founder", href: "/admin/founder", icon: "◐" },
  { label: "Media", href: "/admin/media", icon: "◫" },
  { label: "Messages", href: "/admin/messages", icon: "◻" },
  { label: "SEO", href: "/admin/seo", icon: "◬" },
  { label: "Settings", href: "/admin/settings", icon: "◍" },
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("rusoft-admin-auth");
    if (!auth) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("rusoft-admin-auth");
    navigate("/login");
  };

  const currentPage = sidebarLinks.find(
    (l) => l.href === location.pathname
  )?.label ?? "Dashboard";

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-[240px] bg-[#080808] flex flex-col z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="h-[68px] flex items-center px-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <LogoSymbol color="#FFFFFF" size={26} />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[12px] text-white" style={{ letterSpacing: "0.22em" }}>
                RUSOFT
              </span>
              <span className="text-[6px] text-white/40 font-light mt-[2px]" style={{ letterSpacing: "0.28em" }}>
                ADMIN
              </span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-6 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 text-[12px] tracking-[0.06em] uppercase font-medium transition-all duration-150 ${
                  active
                    ? "text-white bg-white/10"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-[16px] opacity-70">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/10 p-6">
          <button
            onClick={handleLogout}
            className="w-full text-left text-[11px] tracking-[0.12em] uppercase font-medium text-white/40 hover:text-white transition-colors"
          >
            → Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-[240px] flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 h-[68px] bg-white border-b border-[#E5E5E5] flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-1.5 -ml-1.5"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <div className="flex flex-col gap-[4px]">
                <span className="block w-5 h-[1.5px] bg-[#080808]" />
                <span className="block w-5 h-[1.5px] bg-[#080808]" />
                <span className="block w-5 h-[1.5px] bg-[#080808]" />
              </div>
            </button>
            <h1 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#080808]">
              {currentPage}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="text-[11px] tracking-[0.12em] uppercase text-[#707070] hover:text-[#080808] transition-colors font-medium"
            >
              View Site ↗
            </Link>
            <div className="w-8 h-8 bg-[#080808] flex items-center justify-center">
              <span className="text-white text-[11px] font-bold">A</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
