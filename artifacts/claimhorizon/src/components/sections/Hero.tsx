import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, ScanLine } from "lucide-react";
import preInspectionImg from "@assets/image_1775041649343.png";

const floatingParticles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}));

const hexagons = [
  { x: 8, y: 15, size: 70, opacity: 0.06, duration: 14 },
  { x: 85, y: 10, size: 100, opacity: 0.05, duration: 18 },
  { x: 70, y: 75, size: 60, opacity: 0.07, duration: 12 },
  { x: 15, y: 70, size: 90, opacity: 0.04, duration: 20 },
  { x: 50, y: 30, size: 50, opacity: 0.05, duration: 16 },
];

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFeatures = () => {
    const el = document.querySelector("#features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-44 lg:pb-28 overflow-hidden flex items-center min-h-screen"
      style={{ background: "hsl(220, 72%, 10%)" }}
    >
      {/* ── Animated background vectors ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Floating gold particles */}
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: "hsl(43, 85%, 53%)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated hexagons (SVG vectors) */}
        {hexagons.map((h, i) => (
          <motion.svg
            key={i}
            className="absolute"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
            width={h.size}
            height={h.size}
            viewBox="0 0 100 100"
            fill="none"
            animate={{ rotate: [0, 360], opacity: [h.opacity, h.opacity * 1.8, h.opacity] }}
            transition={{ duration: h.duration, repeat: Infinity, ease: "linear" }}
          >
            <polygon
              points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
              stroke="hsl(43, 85%, 53%)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.8"
            />
          </motion.svg>
        ))}

        {/* Sweeping diagonal light beam */}
        <motion.div
          className="absolute -top-20 -left-40 w-[500px] h-[900px] rotate-[30deg] origin-top-left"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.04), transparent)" }}
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />

        {/* Gold glow orbs */}
        <div className="absolute top-[-5%] right-[5%] w-[420px] h-[420px] rounded-full blur-[130px]"
          style={{ background: "rgba(201,162,39,0.08)" }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "rgba(10,22,56,0.6)" }} />

        {/* Moving scan ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
          style={{ width: 600, height: 600 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/8"
          style={{ width: 800, height: 800 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.08, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium text-primary mb-6"
              style={{ background: "rgba(201,162,39,0.08)", borderColor: "rgba(201,162,39,0.25)" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ScanLine size={13} />
              <span>Enterprise-Grade AI for Insurers</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                Shaping the
              </motion.span>
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                Future of
              </motion.span>
              <motion.span
                className="block text-primary italic"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                Insurance Claims
              </motion.span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Automate pre-inspection vehicle surveys with precision AI.
              Eliminate fraud, assess risk accurately, and approve policies faster with our intelligent survey platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Button size="lg" className="h-14 px-8 text-base font-semibold group" onClick={scrollToContact}>
                Request a Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base font-semibold"
                style={{ borderColor: "rgba(201,162,39,0.3)" }}
                onClick={scrollToFeatures}
              >
                Explore Features
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-primary" />
                <span>98% Detection Accuracy</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-primary" />
                <span>Fraud Prevention AI</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <ScanLine size={15} className="text-primary" />
                <span>Instant Report Generation</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Real Pre-Inspection Image with effects */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            {/* Outer glow */}
            <div
              className="absolute -inset-6 rounded-2xl blur-2xl -z-10"
              style={{ background: "radial-gradient(ellipse, rgba(201,162,39,0.18) 0%, transparent 70%)" }}
            />

            {/* Image frame */}
            <div
              className="relative rounded-xl overflow-hidden border"
              style={{ borderColor: "rgba(201,162,39,0.25)", boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,39,0.1)" }}
            >
              <img
                src={preInspectionImg}
                alt="AI Pre-Inspection Vehicle Survey"
                className="w-full h-auto block"
              />

              {/* Animated scan line over image */}
              <motion.div
                className="absolute left-0 right-0 h-0.5 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.9), transparent)" }}
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />

              {/* Corner accent brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-primary rounded-tl-sm" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary rounded-tr-sm" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-primary rounded-bl-sm" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-primary rounded-br-sm" />

              {/* Subtle navy overlay to blend image into page bg at edges */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 60px 20px hsl(220,72%,10%)" }} />
            </div>

            {/* Floating live badge */}
            <motion.div
              className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium"
              style={{
                background: "hsl(220,68%,14%)",
                borderColor: "rgba(201,162,39,0.3)",
                color: "hsl(43,75%,85%)"
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              AI Scanning Live
            </motion.div>

            {/* Floating result card */}
            <motion.div
              className="absolute -bottom-5 -left-4 px-4 py-3 rounded-lg border text-xs"
              style={{
                background: "hsl(220,68%,14%)",
                borderColor: "rgba(201,162,39,0.3)",
                color: "hsl(43,75%,85%)",
                minWidth: 160
              }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="font-semibold mb-1 text-primary">Report Ready</div>
              <div className="text-muted-foreground">3 issues detected &bull; Fraud Risk: Low</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
