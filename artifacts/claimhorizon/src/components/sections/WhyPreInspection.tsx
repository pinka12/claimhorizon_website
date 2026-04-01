import { motion } from "framer-motion";
import { ShieldAlert, Activity, Clock, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="why-pre-inspection" className="py-24 bg-card/50 border-y border-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Pre-Inspection Matters</h2>
            <p className="text-lg text-muted-foreground">
              In a digital-first insurance landscape, issuing policies without verifiable vehicle condition data is a profound risk. Pre-inspections protect the insurer's bottom line.
            </p>
          </motion.div>
        </div>

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
                  <p className="text-muted-foreground leading-relaxed">
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
