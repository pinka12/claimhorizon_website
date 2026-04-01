import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhyPreInspection from "@/components/sections/WhyPreInspection";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Impact from "@/components/sections/Impact";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const queryClient = new QueryClient();

function App() {
  // Force dark mode logic to ensure our theme takes precedence if there's any system preference stuff
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-[100dvh] w-full bg-background text-foreground selection:bg-primary/30 selection:text-primary">
          <Navbar />
          <main>
            <Hero />
            <WhyPreInspection />
            <HowItWorks />
            <Features />
            <Impact />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
