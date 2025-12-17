import { motion } from "framer-motion";
import { Link } from "wouter";

const footerLinks = {
  Help: [
    { href: "#", text: "Shipping" },
    { href: "#", text: "Returns" },
    { href: "#", text: "Size Guide" },
    { href: "#", text: "Contact Us" },
  ],
  Social: [
    { href: "#", text: "Instagram" },
    { href: "#", text: "TikTok" },
    { href: "#", text: "Twitter / X" },
  ],
};

export function HomeFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-black border-t border-white/10 text-center md:text-left"
    >
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-display font-black tracking-tighter uppercase text-white mb-4 block">
              DRIPT<span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground max-w-xs mx-auto md:mx-0">
              Redefining streetwear essentials for the modern era. Quality, fit, and attitude in every stitch.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold uppercase mb-4 text-white">{title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:text-accent transition-colors">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} DRIPT WORLDWIDE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </motion.footer>
  );
}
