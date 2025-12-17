import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const IMAGES = {
  represent1: "/represent1.jpg",
  represent2: "/represent2.jpg",
  represent3: "/represent3.jpg",
  represent4: "/represent4.jpg",
  represent5: "/represent5.jpg",
  represent6: "/represent6.jpg",
  black1: "/product-img-black1.jpg",
  black2: "/product-img-black2.jpg",
  white1: "/product-img-white1.jpg",
  white2: "/product-img-white2.jpg",
};

export function HomeCTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    size: "",
    color: "",
    wilayah: "",
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "black", hex: "#000000", label: "Black" },
    { name: "white", hex: "#f0f0f0", label: "White" },
  ];

  const currentImages =
    formData.color === "white"
      ? [
          IMAGES.white1,
          IMAGES.white2,
          IMAGES.represent1,
          IMAGES.represent2,
          IMAGES.represent3,
          IMAGES.represent4,
          IMAGES.represent5,
          IMAGES.represent6,
        ]
      : [
          IMAGES.black1,
          IMAGES.black2,
          IMAGES.represent1,
          IMAGES.represent2,
          IMAGES.represent3,
          IMAGES.represent4,
          IMAGES.represent5,
          IMAGES.represent6,
        ];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [formData.color, emblaApi]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (
        !formData.fullName ||
        !formData.phoneNumber ||
        !formData.size ||
        !formData.color ||
        !formData.wilayah
      ) {
        toast.error("Missing Information", {
          description: "Please fill in all fields to complete your order.",
          className: "bg-destructive text-destructive-foreground border-none",
        });
        return;
      }

      const formDataToSubmit = new FormData();
      formDataToSubmit.append("fullName", formData.fullName);
      formDataToSubmit.append("phoneNumber", formData.phoneNumber);
      formDataToSubmit.append("size", formData.size);
      formDataToSubmit.append("color", formData.color);
      formDataToSubmit.append("wilayah", formData.wilayah);
      formDataToSubmit.append(
        "access_key",
        import.meta.env.VITE_WEB3FORMS_KEY || ""
      );

      // send data to web3forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const result = await response.json();

      if (result.success !== true) {
        toast.error("Submission Failed", {
          description:
            "There was an issue submitting your order. Please try again.",
          className: "bg-destructive text-destructive-foreground border-none",
        });
        return;
      }
      if (result.success === true) {
        toast.success("Order Received!", {
          description: `We'll contact you at ${formData.phoneNumber} to confirm your order.`,
          className: "bg-white text-black border-none",
        });
        setFormData({
          fullName: "",
          phoneNumber: "",
          size: "",
          color: "",
          wilayah: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission Error", {
        description:
          "An unexpected error occurred while submitting your order. Please try again later.",
        className: "bg-destructive text-destructive-foreground border-none",
      });
      return;
    }

    // Reset form
    setFormData({
      fullName: "",
      phoneNumber: "",
      size: "",
      color: "",
      wilayah: "",
    });
  };

  return (
    <section id="order" className="py-20 bg-muted/10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">
            Ready to Upgrade Your Look?
          </h2>
          <p className="text-muted-foreground text-lg font-arabic">
            الكمية محدودة، والتوصيل متوفر لكل الولايات. اطلب الآن وادفع عند
            الاستلام.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden bg-background border border-white/5 max-w-137.5 p-2"
          >
            <div className="" ref={emblaRef}>
              <div className="flex h-full">
                {currentImages.map((src, index) => (
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
              {currentImages.map((src, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="w-20 h-20 shrink-0 border border-white/10 hover:border-accent transition-colors"
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Order Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-background border border-white/10 p-6 md:p-8 rounded-none h-fit"
          >
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-sm uppercase tracking-widest text-muted-foreground"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="h-12 bg-transparent border-white/20 rounded-none focus:border-accent transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label
                htmlFor="phoneNumber"
                className="text-sm uppercase tracking-widest text-muted-foreground"
              >
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="+213 555 123 456"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                className="h-12 bg-transparent border-white/20 rounded-none focus:border-accent transition-colors"
              />
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <Label className="text-sm uppercase tracking-widest text-muted-foreground">
                Select Color
              </Label>
              <div className="flex gap-6">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, color: color.name })
                    }
                    className={`group relative w-16 h-16 flex items-center justify-center cursor-pointer transition-all ${
                      formData.color === color.name
                        ? "scale-110"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div
                      style={{ backgroundColor: color.hex }}
                      className={`w-16 h-16 rounded-full border-2 transition-all ${
                        formData.color === color.name
                          ? "border-accent shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                          : "border-white/20"
                      }`}
                    />
                    <span className="absolute -bottom-8 text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      {color.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <Label className="text-sm uppercase tracking-widest text-muted-foreground">
                Select Size
              </Label>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFormData({ ...formData, size })}
                    className={`w-14 h-14 flex items-center justify-center font-mono text-lg font-bold border-2 cursor-pointer transition-all ${
                      formData.size === size
                        ? "bg-accent text-accent-foreground border-accent scale-105"
                        : "bg-transparent border-white/20 hover:border-white/40 hover:bg-white/5"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Wilaya Input */}
            <div>
              <Label
                htmlFor="wilayah"
                className="text-sm uppercase tracking-widest text-muted-foreground"
              >
                Wilaya
              </Label>
              <Input
                id="wilayah"
                type="text"
                placeholder="e.g. Algiers"
                value={formData.wilayah}
                onChange={(e) =>
                  setFormData({ ...formData, wilayah: e.target.value })
                }
                className="h-12 bg-transparent border-white/20 rounded-none focus:border-accent transition-colors"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-14 bg-white text-black hover:bg-accent hover:text-white font-display font-bold text-lg uppercase tracking-wider rounded-none cursor-pointer transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <span className="font-arabic"> اطلب الآن وادفع عند الاستلام</span>
            </Button>

            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-arabic">
              معلوماتك محمية • لا يتم الدفع إلا عند الاستلام
            </p>
            <div className="text-center font-arabic text-s text-muted-foreground">
              {" "}
              الكمية محدودة – الطلبات تعالج حسب الأسبقية
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
