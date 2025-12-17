import { motion } from "framer-motion";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    trigger: "How does the sizing run?",
    content: "Our hoodies are designed with an intentional oversized fit. If you prefer a standard fit, we recommend sizing down one size. If you want the signature baggy look, go with your true size.",
  },
  {
    value: "item-2",
    trigger: "How do I wash the puff print?",
    content: "To maintain the puff print quality, wash inside out with cold water. Hang dry is recommended. Do not iron directly on the print.",
  },
  {
    value: "item-3",
    trigger: "What is the return policy?",
    content: "We accept returns within 14 days of delivery for store credit or refund. Items must be in unworn, original condition with tags attached.",
  },
  {
    value: "item-4",
    trigger: "How long does shipping take?",
    content: "Orders are processed within 24-48 hours. Standard domestic shipping takes 3-5 business days. International shipping takes 7-14 business days.",
  },
];

export function HomeFaq() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold uppercase">Common Questions</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border border-white/10 px-4 bg-muted/20">
                <AccordionTrigger className="font-display uppercase tracking-wider hover:text-accent py-6 text-left">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
