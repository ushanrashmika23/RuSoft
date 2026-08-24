import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProgressBar() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-[#080808] z-[100] origin-left"
      style={{ animation: "progressBar 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", width: "100%" }}
    />
  );
}

function CursorDot() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dot, setDot] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const posRef = { x: pos.x, y: pos.y };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Lagging ring follows cursor with RAF
  useEffect(() => {
    let raf: number;
    let cx = posRef.x, cy = posRef.y;
    const loop = () => {
      cx += (pos.x - cx) * 0.12;
      cy += (pos.y - cy) * 0.12;
      setDot({ x: cx, y: cy });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [pos.x, pos.y]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Small precise dot */}
      <div
        className="fixed pointer-events-none z-[200] mix-blend-difference"
        style={{
          left: pos.x,
          top: pos.y,
          width: 6,
          height: 6,
          background: "#ffffff",
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease",
          borderRadius: 0,
        }}
      />
      {/* Lagging ring */}
      <div
        className="fixed pointer-events-none z-[199]"
        style={{
          left: dot.x,
          top: dot.y,
          width: 32,
          height: 32,
          border: "1px solid rgba(8,8,8,0.25)",
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
          borderRadius: 0,
        }}
      />
    </>
  );
}

export default function PublicLayout() {
  const location = useLocation();
  const [barKey, setBarKey] = useState(0);

  useEffect(() => {
    setBarKey((k) => k + 1);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar key={barKey} />
      <CursorDot />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
