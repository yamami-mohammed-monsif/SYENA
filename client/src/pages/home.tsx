import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { HomeHeader } from "@/components/ui/home-header";
import { HomeHero } from "@/components/ui/home-hero";
import { HomeExperience } from "@/components/ui/home-experience";
import { HomeBenefits } from "@/components/ui/home-benefits";
import { HomeFeatures } from "@/components/ui/home-features";
import { HomeCTA } from "@/components/ui/home-cta";
import { HomeFaq } from "@/components/ui/home-faq";
import { HomeFooter } from "@/components/ui/home-footer";
import { HomeStickyCTA } from "@/components/ui/home-sticky-cta";

// --- Assets ---
const IMAGES = {
  image1: "/represent1.jpg",
  image2: "/represent2.jpg",
  image3: "/represent3.jpg",
  image4: "/represent4.jpg",
  image5: "/product-img-black1.jpg",
  image6: "/product-img-black2.jpg",
  image7: "/product-img-white1.jpg",
  image8: "/product-img-white2.jpg",
};

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<"black" | "white">(
    "black"
  );
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(selectedColor === "black" ? 0 : 2);
  }, [selectedColor, emblaApi]);

  const scrollToCTA = () => {
    document
      .getElementById("buy-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Size Required", {
        description: "Please select your size to continue.",
        className:
          "bg-destructive text-destructive-foreground border-none font-sans",
      });
      scrollToCTA();
      return;
    }
    toast.success("Added to Bag", {
      description: `Syena World Hoodie (${selectedColor.toUpperCase()} / ${selectedSize})`,
      className: "bg-white text-black border-none font-sans",
    });
  };

  const currentImages = [
    IMAGES.image1,
    IMAGES.image2,
    IMAGES.image3,
    IMAGES.image4,
    IMAGES.image5,
    IMAGES.image6,
    IMAGES.image7,
    IMAGES.image8,
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground pb-24 md:pb-0">
      <div className="noise-bg" />
      <Toaster position="top-center" />
      <HomeHeader isScrolled={isScrolled} scrollToCTA={scrollToCTA} />
      <main>
        <HomeHero backgroundImage={IMAGES.image2} scrollToCTA={scrollToCTA} />
        <HomeExperience />
        <HomeBenefits image={IMAGES.image3} />
        <HomeFeatures />
        <HomeCTA
          images={currentImages}
          emblaRef={emblaRef}
          emblaApi={emblaApi}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          handleAddToCart={handleAddToCart}
        />
        <HomeFaq />
      </main>
      <HomeFooter />
      {/* <HomeStickyCTA isScrolled={isScrolled} scrollToCTA={scrollToCTA} /> */}
    </div>
  );
}
