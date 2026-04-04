import logoPath from "@assets/claimhorizon_1775038224104.jpeg";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <img
              src={logoPath}
              alt="ClaimHorizon"
              className="h-16 w-auto mb-4 rounded shadow-xl sm:h-20"
              style={{ filter: "drop-shadow(0 6px 22px rgba(5,18,112,0.45))" }}
            />
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              Empowering insurance companies with enterprise-grade AI to automate pre-inspection vehicle surveys, eliminate fraud, and accelerate claims.
            </p>
          </div>
          
          <div className="flex flex-col md:text-right">
            <h4 className="font-semibold text-foreground mb-4 text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-base">
              <a href="#why-pre-inspection" className="text-muted-foreground hover:text-primary transition-colors">Why Pre-Inspection</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-muted-foreground">
          <p>© {new Date().getFullYear()} ClaimHorizon Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
