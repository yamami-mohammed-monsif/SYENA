import { Link } from "wouter";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HomeHeaderProps {
  isScrolled: boolean;
  scrollToCTA: () => void;
}

export function HomeHeader({ isScrolled, scrollToCTA }: HomeHeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-background border-r border-white/10 w-[300px]"
          >
            <nav className="flex flex-col gap-6 mt-10 font-display text-2xl uppercase font-bold">
              <a href="#" className="hover:text-accent transition-colors">
                Shop
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Collections
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                About
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        <Link
          href="/"
          className="text-xl font-display font-black tracking-tighter uppercase z-50 text-white mix-blend-difference"
        >
          DRIPT<span className="text-accent">.</span>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent relative text-white"
          onClick={scrollToCTA}
        >
          <ShoppingBag className="h-6 w-6" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full animate-pulse" />
        </Button>
      </div>
    </header>
  );
}
