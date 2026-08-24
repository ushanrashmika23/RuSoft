import { createBrowserRouter } from "react-router";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import InsightsPage from "./pages/InsightsPage";
import InsightDetail from "./pages/InsightDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminInsights from "./pages/admin/AdminInsights";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminFounder from "./pages/admin/AdminFounder";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminMedia from "./pages/admin/AdminMedia";
import AdminTestimonials from "./pages/admin/AdminTestimonials";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="mono-label mb-4">404</p>
        <h1 className="text-[48px] font-bold tracking-tight text-[#080808] mb-4">
          Page not found.
        </h1>
        <p className="text-[#707070] text-[16px] mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold px-8 py-3 hover:bg-[#333] transition-colors inline-block">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[400px] bg-white border border-[#E5E5E5] p-10">
        <h1 className="text-[20px] font-bold tracking-tight text-[#080808] mb-2">Reset Password</h1>
        <p className="text-[#707070] text-[13px] mb-8">Enter your email and we'll send you a reset link.</p>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="admin@rusoft.io"
            className="w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors"
          />
          <button className="w-full bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold py-3.5 hover:bg-[#333] transition-colors">
            Send Reset Link →
          </button>
        </div>
        <div className="mt-6 text-center">
          <Link to="/login" className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
            ← Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:slug", Component: CaseStudy },
      { path: "insights", Component: InsightsPage },
      { path: "insights/:slug", Component: InsightDetail },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "projects", Component: AdminProjects },
      { path: "insights", Component: AdminInsights },
      { path: "messages", Component: AdminMessages },
      { path: "founder", Component: AdminFounder },
      { path: "testimonials", Component: AdminTestimonials },
      { path: "media", Component: AdminMedia },
      { path: "settings", Component: AdminSettings },
      { path: "seo", Component: AdminSettings },
      { path: "services", Component: AdminProjects },
    ],
  },
]);
