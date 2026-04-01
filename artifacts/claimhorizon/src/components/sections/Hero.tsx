import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[150px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-medium text-primary mb-6">
              <ShieldCheck size={14} />
              <span>Enterprise-Grade AI for Insurers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Shaping the Future of <span className="text-primary italic">Insurance Claims</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Automate pre-inspection vehicle surveys with precision AI. 
              Eliminate fraud, assess risk accurately, and approve policies faster with our intelligent survey platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-semibold group" onClick={scrollToContact}>
                Request a Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-primary/20 hover:bg-primary/10 hover:text-primary">
                Explore Features
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-primary" />
                <span>98% Accuracy</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                <span>Fraud Prevention</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* Mockup Dashboard UI graphic */}
            <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-2xl p-4 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-50" />
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-muted-foreground">AI_ANALYSIS_ENGINE_V2.4</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-background/50 p-3 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center text-primary font-mono text-xs">IMG</div>
                    <div>
                      <div className="text-sm font-medium">Front_Bumper_Scan.jpg</div>
                      <div className="text-xs text-muted-foreground">Processing image...</div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-primary animate-pulse">98%</div>
                </div>

                <div className="relative h-48 bg-background/50 rounded-lg border border-border/50 overflow-hidden flex items-center justify-center">
                  {/* Decorative AI scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_90%,rgba(201,162,39,0.2)_100%)] bg-[length:100%_4px] animate-[scan_2s_linear_infinite]" />
                  <div className="text-muted-foreground/30 font-mono text-sm">[ VEHICLE MESH RENDERING ]</div>
                  
                  {/* Bounding box mock */}
                  <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 border border-destructive bg-destructive/10 rounded flex items-start justify-end p-1">
                     <span className="text-[10px] bg-destructive text-destructive-foreground px-1 py-0.5 rounded font-mono">Scratch: Severity High</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Document Match</div>
                    <div className="text-sm font-semibold text-green-500">Verified</div>
                  </div>
                  <div className="bg-background/50 p-3 rounded-lg border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Fraud Risk</div>
                    <div className="text-sm font-semibold text-primary">Low (1.2%)</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow behind the dashboard */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50" />
          </motion.div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { background-position: 0 -100px; }
          100% { background-position: 0 100%; }
        }
      `}} />
    </section>
  );
}
