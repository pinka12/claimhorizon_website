import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPath from "@assets/claimhorizon_1775038224104.jpeg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Why Pre-Inspection", href: "#why-pre-inspection" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "border-white/10 shadow-lg"
          : "border-transparent"
      }`}
      style={
        isScrolled
          ? { background: "rgba(11, 42, 91, 0.92)", backdropFilter: "blur(14px)" }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo + Company name */}
          <div
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            onClick={() => scrollTo("#home")}
          >
            <img
              src={logoPath}
              alt="ClaimHorizon"
              className="h-16 w-auto rounded-md"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span
                className="text-lg font-bold font-serif leading-none"
                style={{ color: "#F5C542" }}
              >
                ClaimHorizon
              </span>
              <span className="text-[11px] text-white/70 font-sans tracking-wide mt-0.5">
                Pvt Ltd.
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-200"
              style={{
                background: "#F5C542",
                color: "#0B2A5B",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#0B2A5B";
                (e.currentTarget as HTMLButtonElement).style.color = "#F5C542";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 2px #F5C542";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#F5C542";
                (e.currentTarget as HTMLButtonElement).style.color = "#0B2A5B";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(11, 42, 91, 0.97)", borderTop: "1px solid rgba(245,197,66,0.2)" }}
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-base font-medium text-white/90 hover:text-white py-2 border-b border-white/10"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full mt-2 py-3 rounded-md text-sm font-bold"
                style={{ background: "#F5C542", color: "#0B2A5B" }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
