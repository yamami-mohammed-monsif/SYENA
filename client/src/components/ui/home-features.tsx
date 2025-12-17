import { motion } from "framer-motion";

const features = [
  {
    title: "Heavy Cotton Blend",
    description: "قماش ثقيل يعطيك دفء وثبات في الشكل",
  },
  {
    title: "Full Zip Closure",
    description: "تلبسها مفتوحة أو مغلوقة حسب الستايل",
  },
  {
    title: "Graphic Street Design",
    description: "تصميم ستريت واضح يعطي شخصية للقطعة",
  },
  {
    title: "Everyday Street Fit",
    description: "مريحة، واسعة، ومناسبة للخروج اليومي",
  },
];

export function HomeFeatures() {
  return (
    <section
      id="features"
      className="py-20 bg-background border-y border-white/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold uppercase">
            Designed for Everyday Streetwear
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-muted/30 border border-white/5 text-center hover:border-accent/50 transition-colors"
            >
              <div className="text-accent font-mono text-xl font-bold mb-2">
                {item.title}
              </div>
              <div className="text-sm font-arabic uppercase tracking-widest text-muted-foreground">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
