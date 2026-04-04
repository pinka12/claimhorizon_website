import { motion } from "framer-motion";
import { ArrowRight, ScanLine } from "lucide-react";
import preInspectionImg from "@assets/image_1775041649343.png";

const GOLD = "#F5C542";
const BLUE_DARK = "#011830";
const VECTOR_COLOR = "#4fb4ff";

/* Motor-insurance themed SVG icons — drawn as path/shape definitions */
const motorIcons = [
  {
    /* Sedan car outline */
    id: "car",
    x: 5, y: 12, size: 110, opacity: 0.28, duration: 15, rotate: false,
    svg: (
      <svg viewBox="0 0 130 70" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 46 L12 34 L30 20 L88 20 L106 34 L116 34 L116 48 L12 48 Z" />
        <path d="M32 34 L42 22 L85 22 L96 34 Z" />
        <circle cx="33" cy="51" r="10" />
        <circle cx="95" cy="51" r="10" />
        <line x1="12" y1="34" x2="116" y2="34" />
      </svg>
    ),
  },
  {
    /* Shield with check — insurance protection */
    id: "shield",
    x: 83, y: 5, size: 95, opacity: 0.24, duration: 19, rotate: false,
    svg: (
      <svg viewBox="0 0 80 90" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 6 L70 18 L70 46 C70 66 40 82 40 82 C40 82 10 66 10 46 L10 18 Z" />
        <polyline points="24,46 35,57 58,32" />
      </svg>
    ),
  },
  {
    /* Phone scanning a car — pre-inspection tool */
    id: "phone-scan",
    x: 74, y: 74, size: 85, opacity: 0.26, duration: 13, rotate: false,
    svg: (
      <svg viewBox="0 0 75 115" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="5" width="51" height="88" rx="7" />
        <line x1="30" y1="10" x2="45" y2="10" />
        {/* Mini car inside phone */}
        <path d="M20 53 L20 47 L27 40 L48 40 L55 47 L55 53 Z" />
        <path d="M27 47 L30 41 L45 41 L49 47 Z" />
        <circle cx="27" cy="55" r="4" />
        <circle cx="48" cy="55" r="4" />
        {/* Scan corner lines */}
        <path d="M16 18 L16 13 L21 13" />
        <path d="M59 18 L59 13 L54 13" />
        <path d="M16 70 L16 75 L21 75" />
        <path d="M59 70 L59 75 L54 75" />
      </svg>
    ),
  },
  {
    /* Policy / claim document */
    id: "policy",
    x: 8, y: 70, size: 90, opacity: 0.22, duration: 21, rotate: false,
    svg: (
      <svg viewBox="0 0 80 100" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="60" height="80" rx="4" />
        <line x1="20" y1="25" x2="60" y2="25" />
        <line x1="20" y1="35" x2="60" y2="35" />
        <line x1="20" y1="45" x2="45" y2="45" />
        <line x1="20" y1="55" x2="55" y2="55" />
        <line x1="20" y1="65" x2="50" y2="65" />
        {/* CLAIM stamp */}
        <rect x="28" y="16" width="24" height="12" rx="2" />
        <line x1="30" y1="19" x2="50" y2="19" />
        <line x1="30" y1="23" x2="47" y2="23" />
      </svg>
    ),
  },
  {
    /* Car collision / accident */
    id: "collision",
    x: 44, y: 22, size: 120, opacity: 0.20, duration: 17, rotate: false,
    svg: (
      <svg viewBox="0 0 140 70" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Car 1 going right */}
        <path d="M5 46 L5 36 L18 24 L55 24 L65 36 L70 36 L70 47 L5 47 Z" />
        <path d="M18 36 L24 25 L52 25 L60 36 Z" />
        <circle cx="18" cy="50" r="8" />
        <circle cx="58" cy="50" r="8" />
        {/* Impact lines */}
        <line x1="70" y1="30" x2="78" y2="24" />
        <line x1="70" y1="38" x2="80" y2="36" />
        <line x1="70" y1="46" x2="78" y2="52" />
        {/* Car 2 going left */}
        <path d="M135 46 L135 36 L122 24 L85 24 L75 36 L70 36 L70 47 L135 47 Z" />
        <path d="M122 36 L116 25 L88 25 L80 36 Z" />
        <circle cx="122" cy="50" r="8" />
        <circle cx="82" cy="50" r="8" />
      </svg>
    ),
  },
  {
    /* Person inspecting car with clipboard */
    id: "inspection",
    x: 30, y: 82, size: 95, opacity: 0.22, duration: 16, rotate: false,
    svg: (
      <svg viewBox="0 0 120 90" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Person */}
        <circle cx="24" cy="15" r="9" />
        <line x1="24" y1="24" x2="24" y2="55" />
        <line x1="24" y1="34" x2="10" y2="45" />
        {/* Clipboard/tablet */}
        <rect x="28" y="28" width="22" height="28" rx="2" />
        <line x1="32" y1="35" x2="46" y2="35" />
        <line x1="32" y1="41" x2="46" y2="41" />
        <line x1="32" y1="47" x2="40" y2="47" />
        {/* Car being inspected */}
        <path d="M58 52 L58 42 L68 32 L100 32 L110 42 L115 42 L115 53 L58 53 Z" />
        <path d="M68 42 L73 33 L98 33 L106 42 Z" />
        <circle cx="70" cy="56" r="8" />
        <circle cx="103" cy="56" r="8" />
      </svg>
    ),
  },
  {
    id: "car-mini",
    x: 52, y: 6, size: 80, opacity: 0.18, duration: 20, rotate: false,
    svg: (
      <svg viewBox="0 0 130 70" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 46 L12 34 L30 20 L88 20 L106 34 L116 34 L116 48 L12 48 Z" />
        <path d="M32 34 L42 22 L85 22 L96 34 Z" />
        <circle cx="33" cy="51" r="10" />
        <circle cx="95" cy="51" r="10" />
        <line x1="12" y1="34" x2="116" y2="34" />
      </svg>
    ),
  },
  {
    id: "shield-mini",
    x: 12, y: 30, size: 75, opacity: 0.2, duration: 17, rotate: false,
    svg: (
      <svg viewBox="0 0 80 90" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 6 L70 18 L70 46 C70 66 40 82 40 82 C40 82 10 66 10 46 L10 18 Z" />
        <polyline points="24,46 35,57 58,32" />
      </svg>
    ),
  },
  {
    id: "phone-mini",
    x: 62, y: 60, size: 70, opacity: 0.2, duration: 18, rotate: false,
    svg: (
      <svg viewBox="0 0 75 115" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="5" width="51" height="88" rx="7" />
        <line x1="30" y1="10" x2="45" y2="10" />
        <path d="M20 53 L20 47 L27 40 L48 40 L55 47 L55 53 Z" />
        <path d="M27 47 L30 41 L45 41 L49 47 Z" />
        <circle cx="27" cy="55" r="4" />
        <circle cx="48" cy="55" r="4" />
        <path d="M16 18 L16 13 L21 13" />
        <path d="M59 18 L59 13 L54 13" />
        <path d="M16 70 L16 75 L21 75" />
        <path d="M59 70 L59 75 L54 75" />
      </svg>
    ),
  },
  {
    id: "policy-mini",
    x: 85, y: 48, size: 70, opacity: 0.19, duration: 16, rotate: false,
    svg: (
      <svg viewBox="0 0 80 100" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="60" height="80" rx="4" />
        <line x1="20" y1="25" x2="60" y2="25" />
        <line x1="20" y1="35" x2="60" y2="35" />
        <line x1="20" y1="45" x2="45" y2="45" />
        <line x1="20" y1="55" x2="55" y2="55" />
        <line x1="20" y1="65" x2="50" y2="65" />
        <rect x="28" y="16" width="24" height="12" rx="2" />
        <line x1="30" y1="19" x2="50" y2="19" />
        <line x1="30" y1="23" x2="47" y2="23" />
      </svg>
    ),
  },
];

/* Floating gold particles */
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  duration: Math.random() * 8 + 7,
  delay: Math.random() * 5,
}));

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
      {/* ── Animated background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Fine dot grid */}
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(245,197,66,0.13) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Motor-insurance floating SVG icons */}
        {motorIcons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              width: icon.size,
              height: icon.size,
              color: VECTOR_COLOR,
              opacity: icon.opacity,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [icon.opacity, icon.opacity * 1.7, icon.opacity],
            }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            {/* Clone the SVG with correct stroke attributes */}
            <svg
              viewBox={(icon.svg as React.ReactElement).props.viewBox}
              fill="none"
              stroke={VECTOR_COLOR}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="100%"
              height="100%"
            >
              {(icon.svg as React.ReactElement).props.children}
            </svg>
          </motion.div>
        ))}

        {/* Gold particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: VECTOR_COLOR }}
            animate={{ y: [0, -32, 0], opacity: [0, 0.55, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Glossy sweep */}
        <motion.div
          className="absolute -top-20 -left-40 rotate-[30deg] origin-top-left"
          style={{ width: 500, height: 900, background: "linear-gradient(90deg, transparent, rgba(0,210,255,0.07), transparent)" }}
          animate={{ x: ["-100%", "350%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
        />

        {/* Subtle rings */}
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: 700, height: 700, border: "2px solid rgba(245,197,66,0.10)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      {/* ── Content ── */}
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.25fr_1fr] gap-16 lg:gap-24 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[4.75rem] font-bold tracking-tight leading-[1.08] text-white mb-6">
              <motion.span className="block"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}>
                Shaping the
              </motion.span>
              <motion.span className="block"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}>
                Future of
              </motion.span>
              <motion.span className="block italic" style={{ color: GOLD }}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}>
                Insurance Claims
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-white/75 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Automate pre-inspection vehicle surveys with precision AI.
              Eliminate fraud, assess risk accurately, and approve policies faster
              with our intelligent survey platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 text-base"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center gap-2 h-16 px-10 rounded-md text-base font-bold transition-all duration-200 group"
                style={{ background: GOLD, color: BLUE_DARK }}
                onMouseEnter={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = BLUE_DARK;
                  b.style.color = GOLD;
                  b.style.boxShadow = `0 0 0 2px ${GOLD}`;
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = GOLD;
                  b.style.color = BLUE_DARK;
                  b.style.boxShadow = "none";
                }}
              >
                Request a Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("#features")}
                className="inline-flex items-center justify-center h-16 px-10 rounded-md text-base font-semibold transition-all duration-200 border"
                style={{ borderColor: "rgba(245,197,66,0.4)", color: "#fff" }}
                onMouseEnter={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.borderColor = GOLD;
                  b.style.color = GOLD;
                  b.style.background = "rgba(245,197,66,0.08)";
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.borderColor = "rgba(245,197,66,0.4)";
                  b.style.color = "#fff";
                  b.style.background = "transparent";
                }}
              >
                Explore Features
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT — image with overlaid badges */}
          <motion.div
            className="relative mt-8 lg:mt-0 w-full lg:max-w-[1100px] xl:max-w-[1300px]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            {/* "#ClaimHorizon" strip — top right, above "AI Scanning Live" */}
            <motion.div
              className="absolute -top-14 right-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold border z-20"
              style={{ background: "rgba(0,105,148,0.55)", borderColor: "rgba(245,197,66,0.38)", color: GOLD, backdropFilter: "blur(8px)" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <ScanLine size={13} />
              <span>#ClaimHorizon &bull; Pre-Inspection AI Platform</span>
            </motion.div>

            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-2xl blur-2xl -z-10"
              style={{ background: "radial-gradient(ellipse, rgba(0,200,240,0.16) 0%, transparent 70%)" }} />

            {/* Image frame */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: "1.5px solid rgba(245,197,66,0.32)", boxShadow: "0 32px 90px rgba(0,0,0,0.45), 0 0 0 1px rgba(245,197,66,0.08)" }}>

              <img
                src={preInspectionImg}
                alt="AI Pre-Inspection Vehicle Survey"
                className="w-full h-auto block lg:min-h-[580px]"
                style={{ filter: "brightness(1.18) contrast(1.04)" }}
              />

              {/* Animated scan line */}
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

              {/* Lighter vignette — just enough to blend edges */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px 18px rgba(0,50,80,0.35)" }} />
            </div>

            {/* "AI Scanning Live" badge — directly below the strip */}
            <motion.div
              className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-white z-20"
              style={{ background: "rgba(0,70,100,0.92)", border: "1px solid rgba(245,197,66,0.38)", backdropFilter: "blur(8px)" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
              AI Scanning Live
            </motion.div>

            {/* Result card */}
            <motion.div
              className="absolute -bottom-5 -left-4 px-4 py-3 rounded-lg text-xs text-white"
              style={{ background: "rgba(0,70,100,0.92)", border: "1px solid rgba(245,197,66,0.30)", backdropFilter: "blur(8px)", minWidth: 175 }}
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
