import { Button } from "@/components/ui/button";

interface HomeStickyCTAProps {
  isScrolled: boolean;
  scrollToCTA: () => void;
}

export function HomeStickyCTA({ isScrolled, scrollToCTA }: HomeStickyCTAProps) {
  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-white/10 z-40 transition-transform duration-300 ${
        isScrolled ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button
        onClick={scrollToCTA}
        className="w-full h-12 bg-white text-black hover:bg-accent hover:text-white font-display font-bold uppercase tracking-wider rounded-none"
      >
        Secure Your Size
      </Button>
    </div>
  );
}
