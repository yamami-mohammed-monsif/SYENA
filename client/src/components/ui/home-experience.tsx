import { motion } from "framer-motion";
import { Layers, Zap, Sparkles } from "lucide-react";
import { BsCart4 } from "react-icons/bs";
import { FaTruckFast, FaRegFaceSmileBeam } from "react-icons/fa6";

const experienceSteps = [
  {
    icon: <BsCart4 className="w-8 h-8 text-accent" />,
    title: "Order in seconds",
    description:
      "اختار المقاس واللون، دخّل رقمك وولايتك، واحنا نتكفلوا بالباقي.",
  },
  {
    icon: <FaTruckFast className="w-8 h-8 text-accent" />,
    title: "Delivery",
    description:
      "نعيّطولك لتأكيد الطلب ومن بعدها الجاكت يخرج مباشرة للتوصيل يوصل حتى لعندك خلال أيام",
  },
  {
    icon: <FaRegFaceSmileBeam className="w-8 h-8 text-accent" />,
    title: "Wear the look",
    description: "البس الجاكت وخرج اللوك تاعك",
  },
];

export function HomeExperience() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase">
            From Order to Outfit{" "}
            <span className="block font-arabic text-3xl md:text-4xl">
              في 3 خطوات بسيطة
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {experienceSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="mb-6 relative">
                <div className="absolute -inset-4 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors" />
                <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center relative z-10">
                  {step.icon}
                </div>
                <div className="absolute top-0 -right-4 text-6xl font-display font-black text-white/5 -z-10">
                  0{index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold uppercase mb-3">{step.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-left font-arabic text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
