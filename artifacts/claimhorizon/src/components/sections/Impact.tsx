import { motion } from "framer-motion";

const reportImage =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1500&q=80";

const stats = [
  {
    value: "99%",
    label: "Accuracy Rate",
    description: "In automated damage detection compared to manual expert surveyors."
  },
  {
    value: "95%",
    label: "Faster Processing",
    description: "Reduction in turnaround time from inspection request to policy issuance."
  },
  {
    value: "90%",
    label: "Fraud Detection",
    description: "Detection confidence for pre-existing damages and suspicious submissions."
  },
  {
    value: "20X",
    label: "Scalability",
    description: "Increase in volume of inspections handled without additional headcount."
  }
];

export default function Impact() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary/5 border-y border-primary/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.1)_0%,transparent_70%)]" />

      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 font-serif">Measurable Impact</h2>
          <p className="text-xl text-muted-foreground">The numbers behind the technology.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-lg">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4 font-mono">
                {stat.value}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{stat.label}</h3>
              <p className="text-base text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
