import { motion } from "framer-motion";

const stats = [
  {
    value: "98%",
    label: "Accuracy Rate",
    description: "In automated damage detection compared to manual expert surveyors."
  },
  {
    value: "75%",
    label: "Faster Processing",
    description: "Reduction in turnaround time from inspection request to policy issuance."
  },
  {
    value: "40%",
    label: "Fraud Reduction",
    description: "Decrease in fraudulent claims tied to pre-existing damages."
  },
  {
    value: "10x",
    label: "Scalability",
    description: "Increase in volume of inspections handled without additional headcount."
  }
];

export default function Impact() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary/5 border-y border-primary/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.1)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Measurable Impact</h2>
          <p className="text-lg text-muted-foreground">The numbers behind the technology.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4 font-mono">
                {stat.value}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
