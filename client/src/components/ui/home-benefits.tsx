import { motion } from "framer-motion";
import { FiEye, FiWind, FiRepeat } from "react-icons/fi";

const benefits = [
  {
    icon: FiEye,
    title: "Stand out Without Trying",
    description:
      "بلا ما تهدر different يخلوك تبان oversized fit التصميم الجرافيكي والـ",
  },
  {
    icon: FiWind,
    title: "Built for Daily Wear",
    description: "قماش تقيل ومريح، يصلح للخروج، القعدة، وحتى التنقل اليومي.",
  },
  {
    icon: FiRepeat,
    title: "One Jacket, Multiple Fits",
    description: "jeans، cargo، sneakers أو boots تقدر تلبسو مع",
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
              Why <br />
              <span className="text-accent">This Jacket</span>
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-lg mb-1">
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
