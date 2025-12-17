import { motion } from "framer-motion";
import { Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface HomeCTAProps {
  images: string[];
  emblaRef: any;
  emblaApi: any;
  selectedColor: "black" | "white";
  setSelectedColor: (color: "black" | "white") => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  handleAddToCart: () => void;
}

export function HomeCTA({
  images,
  emblaRef,
  emblaApi,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  handleAddToCart,
}: HomeCTAProps) {
  return (
    <section id="buy-section" className="py-20 bg-muted/10">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden bg-background border border-white/5 w-full p-2"
          >
            <div className="" ref={emblaRef}>
              <div className="flex h-full">
                {images.map((src, index) => (
                  <div className="flex-[0_0_100%] h-full min-w-0" key={index}>
                    <img
                      src={src}
                      alt={`Product View ${index + 1}`}
                      className="w-full h-full aspect-5/6 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
              {images.map((src, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="w-20 h-20 shrink-0 border border-white/10 hover:border-accent transition-colors"
                >
                  <img src={src} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-display font-bold uppercase mb-2">
              Signature Hoodie
            </h2>
            <div className="text-3xl font-mono text-accent mb-6">$85.00</div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The ultimate statement piece. Designed for those who don't
              compromise on fit or quality. Limited stock available for this
              drop.
            </p>

            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-3 block">
                Select Colorway
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedColor("black")}
                  className={`group relative w-16 h-16 flex items-center justify-center transition-all ${
                    selectedColor === "black"
                      ? "scale-110"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-black border-2 transition-colors ${
                      selectedColor === "black"
                        ? "border-accent"
                        : "border-white/20"
                    }`}
                  />
                  <span className="absolute -bottom-6 text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Black
                  </span>
                </button>
                <button
                  onClick={() => setSelectedColor("white")}
                  className={`group relative w-16 h-16 flex items-center justify-center transition-all ${
                    selectedColor === "white"
                      ? "scale-110"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-[#f0f0f0] border-2 transition-colors ${
                      selectedColor === "white"
                        ? "border-accent"
                        : "border-white/20"
                    }`}
                  />
                  <span className="absolute -bottom-6 text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    White
                  </span>
                </button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Select Size
                </label>
                <button className="text-xs underline decoration-accent underline-offset-4 flex items-center gap-1 hover:text-accent">
                  <Ruler className="w-3 h-3" /> Size Guide
                </button>
              </div>
              <ToggleGroup
                type="single"
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="justify-start gap-3 flex-wrap"
              >
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <ToggleGroupItem
                    key={size}
                    value={size}
                    className="h-12 w-12 rounded-none border border-white/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground data-[state=on]:border-accent hover:bg-white/5 transition-all font-mono"
                  >
                    {size}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            {/* <Button
              onClick={handleAddToCart}
              className="w-full h-16 bg-white text-black hover:bg-accent hover:text-white font-display font-black text-xl uppercase tracking-wider rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              Add To Order — $85.00
            </Button> */}
            <p className="text-center text-xs text-muted-foreground mt-4 uppercase tracking-widest">
              Free Shipping on Orders Over $150
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
