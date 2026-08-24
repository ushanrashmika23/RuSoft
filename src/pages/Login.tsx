import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { LogoSymbol } from "../components/Logo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (email === "admin@rusoft.io" && password === "rusoft2025") {
        localStorage.setItem("rusoft-admin-auth", "true");
        navigate("/admin");
      } else {
        setError("Invalid credentials. Use admin@rusoft.io / rusoft2025");
        setLoading(false);
      }
    }, 1000);
  };

  const inputClass =
    "w-full border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#080808] placeholder:text-[#707070] focus:outline-none focus:border-[#080808] transition-colors";

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="flex flex-col items-center mb-12">
        <LogoSymbol color="#080808" size={44} />
        <div className="mt-4 text-center">
          <p className="font-bold text-[14px]" style={{ letterSpacing: "0.22em" }}>RUSOFT</p>
          <p className="text-[7px] font-light text-[#707070] mt-1" style={{ letterSpacing: "0.28em" }}>
            ADMIN PORTAL
          </p>
        </div>
      </div>

      <div className="w-full max-w-[400px] bg-white border border-[#E5E5E5] p-10">
        <h1 className="text-[20px] font-bold tracking-tight text-[#080808] mb-2">Sign In</h1>
        <p className="text-[#707070] text-[13px] mb-8">Access the RuSoft admin dashboard.</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-[12px] px-4 py-3 mb-6 font-mono">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mono-label text-[#080808] block mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@rusoft.io"
              className={inputClass}
            />
          </div>
          <div>
            <label className="mono-label text-[#080808] block mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={inputClass}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-[#080808]"
              />
              <span className="mono-label text-[#707070]">Remember me</span>
            </label>
            <Link to="/forgot-password" className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#080808] text-white text-[12px] tracking-[0.15em] uppercase font-semibold py-3.5 hover:bg-[#333] transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="mono-label text-[#707070] hover:text-[#080808] transition-colors">
          ← Back to website
        </Link>
      </div>

      <p className="mono-label text-[#E5E5E5] mt-12">
        © 2025 RuSoft Technologies
      </p>
    </div>
  );
}
