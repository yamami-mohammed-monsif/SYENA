import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    trigger: "هل الدفع عند الاستلام؟",
    content: "بعد ما توصلك الطلبية وتشوفها Cash on Delivery نعم، الدفع يتم .",
  },
  {
    value: "item-2",
    trigger: "كم مدة التوصيل؟",
    content:
      "التوصيل يتم خلال 2 إلى 5 أيام عمل حسب الولاية. نعيّطولك لتأكيد الطلب قبل الإرسال.",
  },
  {
    value: "item-3",
    trigger: "إذا المقاس ما طلعش مناسب؟",
    content: "تقدر ترفض الطلب عند الاستلام",
  },
  {
    value: "item-4",
    trigger: "كيف نأكد الطلب؟",
    content:
      "بعد ما تدير الطلب، فريقنا يتصل بك هاتفيًا باش نأكدوا المقاس، اللون، والعنوان.",
  },
];

export function HomeFaq() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold uppercase">
            Common Questions
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border border-white/10 px-4 bg-muted/20"
              >
                <AccordionTrigger className="font-arabic uppercase tracking-wider hover:text-accent py-6 text-left">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className="font-arabic text-muted-foreground leading-relaxed pb-6">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
