import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPath from "@assets/claimhorizon_logo_nobg.png";
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
        isScrolled ? "border-white/10 shadow-lg" : "border-transparent"
      }`}
      style={isScrolled ? { background: "rgba(13,50,140,0.88)", backdropFilter: "blur(16px)" } : { background: "transparent" }}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-24">

          {/* Logo only — name is already embedded in the logo image */}
          <div
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            onClick={() => scrollTo("#home")}
          >
            <img
              src={logoPath}
              alt="ClaimHorizon Pvt Ltd."
              className="h-20 w-auto sm:h-24 lg:h-28"
              style={{ filter: "drop-shadow(0 4px 18px rgba(245,197,66,0.35))" }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-lg font-semibold text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-2.5 rounded-md text-sm font-bold transition-all duration-200"
              style={{ background: "#F5C542", color: "#051870" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#051870";
                (e.currentTarget as HTMLButtonElement).style.color = "#F5C542";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 2px #F5C542";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#F5C542";
                (e.currentTarget as HTMLButtonElement).style.color = "#051870";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
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
            style={{ background: "rgba(13,50,140,0.97)", borderTop: "1px solid rgba(245,197,66,0.2)" }}
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-lg font-semibold text-white/90 hover:text-white py-2 border-b border-white/10"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full mt-2 py-3 rounded-md text-sm font-bold"
                style={{ background: "#F5C542", color: "#051870" }}
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
