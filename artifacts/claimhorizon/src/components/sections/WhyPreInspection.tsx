import { motion } from "framer-motion";
import { ShieldAlert, Activity, Clock, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import inspectionImage from "@assets/preinspection-risk.png";

const reasons = [
  {
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    title: "Fraud Prevention",
    description: "Identify pre-existing damages and discrepancies before policy issuance. Stop fraudulent claims at the source with unalterable timestamped visual evidence."
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: "Accurate Risk Assessment",
    description: "Our AI evaluates the precise condition of the vehicle, allowing underwriters to price premiums accurately based on real-world asset health."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Faster Processing",
    description: "Replace days of manual surveying with instant AI-driven reports. Policies can be issued in minutes rather than weeks, dramatically improving customer experience."
  },
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: "Reduced Disputes",
    description: "A clear, annotated, and agreed-upon record of the vehicle's condition at inception eliminates ambiguity and friction during future claim settlements."
  }
];

export default function WhyPreInspection() {
  return (
    <section
      id="why-pre-inspection"
      className="py-24 bg-card/40 border-y border-border/40"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Pre-Inspection Matters</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              In a digital-first insurance landscape, issuing policies without verifiable vehicle condition data is a profound risk. Pre-inspections protect the insurer's bottom line.
            </p>
          </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 overflow-hidden rounded-3xl border border-white/10 shadow-2xl w-full max-w-6xl mx-auto"
        >
          <img
            src={inspectionImage}
            alt="Vehicle inspection in progress"
            className="w-full h-auto block object-contain bg-black/20"
            loading="lazy"
          />
          <figcaption className="bg-black/40 text-white/80 text-sm tracking-wide uppercase px-6 py-3">
            Real-world vehicle inspection capture &mdash; ClaimHorizon visual intelligence
          </figcaption>
        </motion.figure>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-secondary w-16 h-16 rounded-lg flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-xl font-serif">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
