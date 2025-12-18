import { useState, useEffect, lazy, Suspense } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { HomeHeader } from "@/components/ui/home-header";
import { HomeHero } from "@/components/ui/home-hero";

// ✅ OPTIMIZATION: Lazy load below-the-fold components
const HomeExperience = lazy(() =>
  import("@/components/ui/home-experience").then((m) => ({
    default: m.HomeExperience,
  }))
);
const HomeBenefits = lazy(() =>
  import("@/components/ui/home-benefits").then((m) => ({
    default: m.HomeBenefits,
  }))
);
const HomeFeatures = lazy(() =>
  import("@/components/ui/home-features").then((m) => ({
    default: m.HomeFeatures,
  }))
);
const HomeCTA = lazy(() =>
  import("@/components/ui/home-cta").then((m) => ({ default: m.HomeCTA }))
);
const HomeFaq = lazy(() =>
  import("@/components/ui/home-faq").then((m) => ({ default: m.HomeFaq }))
);
const HomeFooter = lazy(() =>
  import("@/components/ui/home-footer").then((m) => ({ default: m.HomeFooter }))
);
const HomeStickyCTA = lazy(() =>
  import("@/components/ui/home-sticky-cta").then((m) => ({
    default: m.HomeStickyCTA,
  }))
);

// ✅ OPTIMIZATION: Removed unused IMAGES object - images are referenced directly in components

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<"black" | "white">(
    "black"
  );
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ OPTIMIZATION: Debounced scroll handler to reduce repaints
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(selectedColor === "black" ? 0 : 2);
  }, [selectedColor, emblaApi]);

  const scrollToCTA = () => {
    document
      .getElementById("buy-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground pb-24 md:pb-0">
      <div className="noise-bg" />
      <Toaster position="top-center" />
      <HomeHeader isScrolled={isScrolled} scrollToCTA={scrollToCTA} />
      <main>
        <HomeHero />

        <Suspense fallback={<div className="h-20" />}>
          <HomeExperience />
        </Suspense>

        <Suspense fallback={<div className="h-96" />}>
          <HomeBenefits />
        </Suspense>

        <Suspense fallback={<div className="h-64" />}>
          <HomeFeatures />
        </Suspense>

        <Suspense fallback={<div className="h-screen" />}>
          <HomeCTA />
        </Suspense>

        <Suspense fallback={<div className="h-96" />}>
          <HomeFaq />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-48" />}>
        <HomeFooter />
      </Suspense>

      <Suspense fallback={null}>
        <HomeStickyCTA isScrolled={isScrolled} scrollToCTA={scrollToCTA} />
      </Suspense>
    </div>
  );
}
