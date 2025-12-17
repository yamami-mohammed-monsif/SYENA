import { motion } from "framer-motion";

const features = [
  { val: "450 GSM", label: "Fabric Weight" },
  { val: "100%", label: "Premium Cotton" },
  { val: "YKK", label: "Metal Hardware" },
  { val: "3D", label: "Puff Print" },
];

export function HomeFeatures() {
  return (
    <section className="py-20 bg-background border-y border-white/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold uppercase">Technical Specs</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-muted/30 border border-white/5 text-center hover:border-accent/50 transition-colors"
            >
              <div className="text-accent font-mono text-xl font-bold mb-2">{item.val}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
