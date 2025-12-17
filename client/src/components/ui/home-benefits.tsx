import { motion } from "framer-motion";
import { FiEye, FiWind, FiRepeat } from "react-icons/fi";

const benefits = [
  {
    icon: FiEye,
    title: "ستايل يبان بدون مجهود",
    description: "Outfit يعطيك حضور قوي حتى مع أبسط Oversized fit",
  },
  {
    icon: FiWind,
    title: "مصممة للاستعمال اليومي",
    description: "قماش ثقيل ومريح، ما يتفسخش مع اللبس المتكرر",
  },
  {
    icon: FiRepeat,
    title: "تناسب جو الجزائر",
    description: "Hoodie مثالية للخروج اليومي تلبسها وحدها أو مع",
  },
];

interface HomeBenefitsProps {
  image: string;
}

export function HomeBenefits({ image }: HomeBenefitsProps) {
  return (
    <section className="py-20 bg-muted/20 border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src="/benefits-img.jpg"
                alt="Lifestyle Detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8">
              <span className="font-arabic">لماذا</span> <br />
              <span className="text-accent">Syena Jacket</span>
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold font-arabic uppercase mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm font-arabic">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
