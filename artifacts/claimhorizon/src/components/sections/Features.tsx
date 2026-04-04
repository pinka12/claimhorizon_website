import { motion } from "framer-motion";
import { Sparkles, BarChart, Eye, Search, Zap, Cloud, Server } from "lucide-react";
import coreCapabilitiesImage from "@assets/core-capabilities.png";

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "AI Damage Detection & Annotation",
    description: "Computer vision algorithms automatically highlight areas of interest, drawing precise bounding boxes around anomalies."
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Severity Classification",
    description: "Not all damage is equal. Our models classify findings into Minor, Moderate, or Severe to aid automated decision engines."
  },
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    title: "SaaS Deployment Model",
    description: "Launch ClaimHorizon as a managed SaaS platform with automated updates, usage-based billing, and enterprise-grade SLAs."
  },
  {
    icon: <Eye className="w-6 h-6 text-primary" />,
    title: "Fraud Detection & Prevention",
    description: "Detects manipulated images, deepfakes, and recycled photos from previous claims using metadata and pixel-level analysis."
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "Document-to-Image Verification",
    description: "Optical Character Recognition (OCR) ensures the chassis and license plates in the images match the submitted documents."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Fast Report Generation",
    description: "Convert raw unstructured uploads into structured, highly-readable PDF and JSON reports in seconds."
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "Cloud-based & Scalable",
    description: "Built on enterprise-grade cloud architecture, capable of handling thousands of concurrent inspections during peak renewal seasons."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-card/20 border-y border-border/40">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              Our platform is engineered for the rigors of modern insurtech—combining deep learning with strict compliance protocols.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mb-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/30 p-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={coreCapabilitiesImage}
            alt="Core capabilities overview"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 text-lg">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border/50 p-9 rounded-xl hover:border-primary/30 hover:bg-secondary/20 transition-all duration-300 group w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] max-w-lg"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
