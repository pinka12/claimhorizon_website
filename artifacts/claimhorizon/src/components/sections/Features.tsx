import { motion } from "framer-motion";
import { Sparkles, BarChart, Eye, Search, Zap, Cloud } from "lucide-react";

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
    <section id="features" className="py-24 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our platform is engineered for the rigors of modern insurtech—combining deep learning with strict compliance protocols.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border/50 p-8 rounded-xl hover:border-primary/30 hover:bg-secondary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
