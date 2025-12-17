import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMdCheckmark } from "react-icons/io";

interface HomeHeroProps {
  backgroundImage: string;
  scrollToCTA: () => void;
}

export function HomeHero({ backgroundImage, scrollToCTA }: HomeHeroProps) {
  return (
    <section className="relative md:h-screen w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left Column - Content */}
        <div className="relative z-10 flex flex-col px-4 md:px-8 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-accent text-accent-foreground px-2 py-1 text-xs font-bold uppercase tracking-widest">
                New Drop - Limited Stock
              </span>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
            <h1 className="text-2xl md:text-5xl font-arabic font-black leading-8 md:leading-18 tracking-tight uppercase mb-6 text-white">
              سترة{" "}
              <span className="font-display text-3xl md:text-6xl">
                Oversized
              </span>{" "}
              تعطيك ستايل قوي بدون ما تفكر وش تلبس
            </h1>
            <p className="max-w-md text-gray-300 text-base md:text-xl leading-relaxed mb-6 font-arabic">
              <span className="block"> Syena سترة</span> مصممة للرجال اللي يحبوا
              يبانوا مختلفين، مريحة، ثقيلة، وتناسب الخروج اليومي.
            </p>
            <ul className="text-gray-300 flex flex-col gap-2 mb-6 ">
              <li className="flex items-center gap-2">
                <IoMdCheckmark className="inline text-white" />
                <p>
                  oversized fit -{" "}
                  <span className="font-arabic text-xs md:text-sm">
                    ستايل عصري
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <IoMdCheckmark className="inline text-white" />
                <p className="font-arabic text-xs md:text-sm">
                  قماش ثقيل و مريح للخريف والشتاء
                </p>
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark className="inline text-white" />
                <p className="font-arabic text-xs md:text-sm">
                  متوفر بالأسود والأبيض
                </p>
              </li>
            </ul>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <Button
                onClick={scrollToCTA}
                className="w-full md:w-auto font-arabic h-14 px-10 bg-white text-black hover:bg-accent cursor-pointer hover:text-white text-base font-bold uppercase tracking-wider rounded-none transition-all"
              >
                اطلب الآن وادفع عند الاستلام
              </Button>
              <div className="flex items-center gap-2">
                <span className="opacity-70 line-through text-base">
                  6000 DA
                </span>
                <span className="text-lg">5800 DA</span>
              </div>
            </div>
            <ul className="text-gray-300 text-xs mt-2 font-arabic pl-10 md:pl-4">
              <li> توصيل مجاني • الدفع عند الاستلام • تأكيد بالهاتف</li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="relative -mt-10 md:-mt-20">
          <img
            src="/hero-img.png"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-background" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20">
        <ChevronDown className="w-8 h-8" />
      </div>
      <img
        src="limited-stock.png"
        alt="limited stock"
        className="hidden md:block absolute left-1/3 top-3/4 w-28 h-28"
      />
    </section>
  );
}
