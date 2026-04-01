import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, ScanLine, TrendingUp } from "lucide-react";
import preInspectionImg from "@assets/image_1775041649343.png";

const floatingParticles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

const hexagons = [
  { x: 6,  y: 10, size: 90,  opacity: 0.22, duration: 14 },
  { x: 87, y: 6,  size: 120, opacity: 0.18, duration: 18 },
  { x: 72, y: 76, size: 75,  opacity: 0.20, duration: 12 },
  { x: 10, y: 68, size: 105, opacity: 0.16, duration: 20 },
  { x: 48, y: 26, size: 65,  opacity: 0.18, duration: 16 },
  { x: 33, y: 86, size: 80,  opacity: 0.15, duration: 22 },
];

const GOLD = "#F5C542";
const BLUE_DARK = "#051870";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 lg:pt-48 lg:pb-28 overflow-hidden flex items-center min-h-screen"
    >
      {/* ── Animated background layer ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Fine dot grid */}
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(245,197,66,0.15) 1px, transparent 1px)", backgroundSize: "38px 38px" }} />

        {/* Gold particles */}
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: GOLD }}
            animate={{ y: [0, -38, 0], opacity: [0, 0.6, 0], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Rotating hexagon vectors — thick borders, clearly visible */}
        {hexagons.map((h, i) => (
          <motion.svg
            key={i}
            className="absolute"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
            width={h.size}
            height={h.size}
            viewBox="0 0 100 100"
            fill="none"
            animate={{ rotate: [0, 360], opacity: [h.opacity, h.opacity * 1.9, h.opacity] }}
            transition={{ duration: h.duration, repeat: Infinity, ease: "linear" }}
          >
            <polygon
              points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
              stroke={GOLD}
              strokeWidth="3.5"
              fill="none"
            />
          </motion.svg>
        ))}

        {/* Sweeping light beam */}
        <motion.div
          className="absolute -top-20 -left-40 rotate-[30deg] origin-top-left"
          style={{ width: 500, height: 900, background: "linear-gradient(90deg, transparent, rgba(245,197,66,0.06), transparent)" }}
          animate={{ x: ["-100%", "350%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />

        {/* Pulsing scan rings */}
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 650, height: 650, border: `2px solid rgba(245,197,66,0.12)` }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 900, height: 900, border: `2px solid rgba(245,197,66,0.08)` }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Company display name — biggest element on the page */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-4"
            >
              <h1
                className="font-serif font-bold leading-none tracking-tight"
                style={{ color: GOLD, fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
              >
                ClaimHorizon
              </h1>
              <p className="text-white/55 text-sm font-sans tracking-widest uppercase mt-1">
                Pvt Ltd.
              </p>
            </motion.div>

            {/* Tagline heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6">
                Shaping the Future of{" "}
                <span className="italic" style={{ color: GOLD }}>Insurance Claims</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Automate pre-inspection vehicle surveys with precision AI.
              Eliminate fraud, assess risk accurately, and approve policies faster
              with our intelligent survey platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center gap-2 h-14 px-9 rounded-md text-base font-bold transition-all duration-200 group"
                style={{ background: GOLD, color: BLUE_DARK }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = BLUE_DARK;
                  (e.currentTarget as HTMLButtonElement).style.color = GOLD;
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 0 0 2px ${GOLD}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = GOLD;
                  (e.currentTarget as HTMLButtonElement).style.color = BLUE_DARK;
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                Request a Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("#features")}
                className="inline-flex items-center justify-center h-14 px-9 rounded-md text-base font-semibold transition-all duration-200 border"
                style={{ borderColor: "rgba(245,197,66,0.4)", color: "#fff" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = GOLD;
                  (e.currentTarget as HTMLButtonElement).style.color = GOLD;
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(245,197,66,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,197,66,0.4)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                Explore Features
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {[
                { icon: <Zap size={15} />, value: "99%", label: "Detection Accuracy" },
                { icon: <TrendingUp size={15} />, value: "95%", label: "Faster Processing" },
                { icon: <ShieldCheck size={15} />, value: "90%", label: "Fraud Reduction" },
                { icon: <ScanLine size={15} />, value: "20×", label: "Scalability" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-start p-3 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,197,66,0.18)" }}>
                  <span style={{ color: GOLD }} className="mb-1">{stat.icon}</span>
                  <span className="text-2xl font-bold text-white font-serif">{stat.value}</span>
                  <span className="text-xs text-white/55 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Pre-inspection image + badge */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            {/* #ClaimHorizon strip — top of right column */}
            <motion.div
              className="flex justify-end mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold border"
                style={{ background: "rgba(245,197,66,0.10)", borderColor: "rgba(245,197,66,0.35)", color: GOLD }}
              >
                <ScanLine size={13} />
                <span>#ClaimHorizon &bull; Pre-Inspection AI Platform</span>
              </div>
            </motion.div>

            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-2xl blur-2xl -z-10"
              style={{ background: "radial-gradient(ellipse, rgba(245,197,66,0.14) 0%, transparent 70%)" }} />

            {/* Image frame */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: `1.5px solid rgba(245,197,66,0.32)`, boxShadow: "0 32px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(245,197,66,0.08)" }}>

              <img src={preInspectionImg} alt="AI Pre-Inspection Vehicle Survey" className="w-full h-auto block" />

              {/* Animated gold scan line */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, opacity: 0.75 }}
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              />

              {/* Corner brackets */}
              {[
                "top-3 left-3 border-t-2 border-l-2 rounded-tl",
                "top-3 right-3 border-t-2 border-r-2 rounded-tr",
                "bottom-3 left-3 border-b-2 border-l-2 rounded-bl",
                "bottom-3 right-3 border-b-2 border-r-2 rounded-br",
              ].map((cls, i) => (
                <div key={i} className={`absolute w-5 h-5 ${cls}`} style={{ borderColor: GOLD }} />
              ))}

              {/* Edge vignette */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 80px 30px rgba(5,24,112,0.55)" }} />
            </div>

            {/* Floating "AI Scanning Live" badge */}
            <motion.div
              className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white"
              style={{ background: "rgba(13,45,140,0.92)", border: `1px solid rgba(245,197,66,0.38)`, backdropFilter: "blur(8px)" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
              AI Scanning Live
            </motion.div>

            {/* Floating result card */}
            <motion.div
              className="absolute -bottom-5 -left-4 px-4 py-3 rounded-lg text-xs text-white"
              style={{ background: "rgba(13,45,140,0.92)", border: `1px solid rgba(245,197,66,0.3)`, backdropFilter: "blur(8px)", minWidth: 175 }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="font-semibold mb-1" style={{ color: GOLD }}>Report Ready</div>
              <div className="text-white/60">3 issues detected &bull; Fraud Risk: Low</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
