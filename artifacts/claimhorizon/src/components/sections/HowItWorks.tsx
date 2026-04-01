import { motion } from "framer-motion";
import { FileText, Camera, Video, Cpu, ShieldCheck, FileCheck } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-background" />,
    title: "Document Upload",
    description: "Customer or agent uploads Registration Certificate (RC), prior policy, and chassis number securely."
  },
  {
    icon: <Camera className="w-6 h-6 text-background" />,
    title: "Image Capture",
    description: "Capture guided, high-resolution images from all angles: front, rear, left, right, and top."
  },
  {
    icon: <Video className="w-6 h-6 text-background" />,
    title: "360° Video Walkaround",
    description: "Upload a seamless 360-degree video of the vehicle for comprehensive spatial context."
  },
  {
    icon: <Cpu className="w-6 h-6 text-background" />,
    title: "AI Analysis",
    description: "Our proprietary AI acts as a virtual surveyor—detecting damages, dents, and scratches, categorizing severity (Minor, Moderate, Severe)."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-background" />,
    title: "Document Verification",
    description: "The system cross-checks uploaded documents with the extracted image metadata and number plates for absolute authenticity."
  },
  {
    icon: <FileCheck className="w-6 h-6 text-background" />,
    title: "Instant Report",
    description: "One-click generation of a comprehensive, annotated pre-inspection report ready for underwriter approval."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Inspection Process</h2>
            <p className="text-lg text-muted-foreground">
              A frictionless journey from upload to underwriter. We've digitized the entire physical survey process without compromising on detail.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-border/50 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-secondary border-4 border-background flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center relative z-10">
                    {step.icon}
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center font-bold text-sm font-mono text-primary">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
