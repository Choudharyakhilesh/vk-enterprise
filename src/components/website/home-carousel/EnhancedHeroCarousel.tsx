// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, EffectFade } from "swiper/modules";
// import { motion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// import { ShoppingBag, Sparkles } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { useHomeStore } from "@/store/home-store";

// const heroSlides = [
//   {
//     id: 1,
//     subtitle: "The Best Exports",
//     description: "Designing, Manufacturing, Wholesaling & Shipping Women's Fashion From India.",
//     image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop",
//   },
//   {
//     id: 2,
//     subtitle: "Since 1997 | Jaipur",
//     description: "OEM and ODM services for women's clothing brands worldwide.",
//     image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop",
//   },
// ];

// export default function EnhancedHeroCarousel() {
//   const { homePageData } = useHomeStore();
//   return (
//     <div className="mx-2">
//       <div className="relative w-full h-[600px] md:h-[700px] lg:h-[600px] rounded-4xl overflow-hidden bg-black">
//         <Swiper
//           modules={[Autoplay, Navigation, EffectFade]}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           navigation
//           effect="fade"
//           loop
//           className="h-full"
//         >
//           {/* ---------- SLIDE 1 ---------- */}
//           <SwiperSlide>
//             {({ isActive }) => (
//               <div className="relative w-full h-full">
//                 <Image
//                   src={heroSlides[0].image}
//                   alt="Shipment Ready"
//                   fill
//                   priority
//                   className="object-cover brightness-[0.4]"
//                 />

//                 <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
//                   {/* Subtitle */}
//                   <motion.div
//                     initial={{ y: -40, opacity: 0 }}
//                     animate={isActive ? { y: 0, opacity: 1 } : {}}
//                     transition={{ duration: 0.6 }}
//                     className="bg-white/10 px-4 py-2 rounded-full mb-4 flex items-center gap-2"
//                   >
//                     <Sparkles className="w-5 h-5 text-gray-300" />
//                     <p className="text-gray-300 font-light text-lg">{heroSlides[0].subtitle}</p>
//                   </motion.div>

//                   {/* TITLE */}
//                   <motion.h1
//                     initial={{ y: -30, opacity: 0 }}
//                     animate={isActive ? { y: 0, opacity: 1 } : {}}
//                     transition={{ duration: 0.8 }}
//                     className="text-4xl md:text-5xl lg:text-6xl text-gray-200 font-light mb-4"
//                   >
//                     <span className="text-primary">Shipment-Ready</span> Women's Clothing
//                   </motion.h1>

//                   {/* DESCRIPTION */}
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={isActive ? { opacity: 1 } : { opacity: 0 }}
//                     transition={{ duration: 0.8, delay: 0.7 }}
//                     className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl font-light"
//                   >
//                     <p className="text-gray-300 text-lg max-w-3xl font-light">
//                       {heroSlides[0].description}
//                     </p>
//                   </motion.p>

//                   <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
//                     transition={{ duration: 0.5, delay: 0.9 }}
//                   >
//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <Button
//                         size="lg"
//                         className="flex items-center px-6 py-3  text-white  shadow-lg transition-all"
//                       >
//                         <ShoppingBag className="w-5 h-5 mr-2" />
//                         Explore Collections
//                       </Button>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             )}
//           </SwiperSlide>

//           {/* ---------- SLIDE 2 ---------- */}
//           <SwiperSlide>
//             {({ isActive }) => (
//               <div className="relative w-full h-full">
//                 <Image
//                   src={heroSlides[1].image}
//                   alt="Exporting Fashion"
//                   fill
//                   priority
//                   className="object-cover brightness-[0.4]"
//                 />

//                 <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
//                   {/* Subtitle */}
//                   <motion.div
//                     initial={{ y: -40, opacity: 0 }}
//                     animate={isActive ? { y: 0, opacity: 1 } : {}}
//                     transition={{ duration: 0.6 }}
//                     className="bg-white/10 px-4 py-2 rounded-full mb-4 flex items-center gap-2"
//                   >
//                     <Sparkles className="w-5 h-5 text-gray-300" />
//                     <p className="text-gray-300 font-light text-lg">{heroSlides[1].subtitle}</p>
//                   </motion.div>

//                   {/* TITLE */}
//                   <motion.h1
//                     initial={{ y: -30, opacity: 0 }}
//                     animate={isActive ? { y: 0, opacity: 1 } : {}}
//                     transition={{ duration: 0.8 }}
//                     className="text-4xl md:text-5xl lg:text-6xl text-gray-200 font-light mb-4"
//                   >
//                     We Build Brands By <span className="text-primary">Exporting Fashion</span>
//                   </motion.h1>

//                   {/* DESCRIPTION */}
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={isActive ? { opacity: 1 } : { opacity: 0 }}
//                     transition={{ duration: 0.8, delay: 0.7 }}
//                     className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl font-light"
//                   >
//                     <p className="text-gray-300 text-lg max-w-2xl font-light">
//                       {heroSlides[1].description}
//                     </p>
//                   </motion.p>

//                   {/* CTA */}
//                   <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
//                     transition={{ duration: 0.5, delay: 0.9 }}
//                   >
//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <Button
//                         size="lg"
//                         className="flex items-center px-6 py-3  text-white  shadow-lg transition-all"
//                       >
//                         <ShoppingBag className="w-5 h-5 mr-2" />
//                         Explore Collections
//                       </Button>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             )}
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useHomeStore } from "@/store/home-store";
import { useRouter } from "next/navigation";

export default function EnhancedHeroCarousel() {
  const router = useRouter();
  const { homePageData } = useHomeStore();

  const banners = homePageData?.banners || [];

  if (!banners.length) return null;

  return (
    <div className="mx-2">
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[600px] rounded-4xl overflow-hidden bg-black">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          effect="fade"
          loop
          className="h-full"
        >
          {banners.map((banner: any) => (
            <SwiperSlide key={banner.id}>
              {({ isActive }) => (
                <div className="relative w-full h-full">
                  <Image
                    src={banner.image || banner.banner_image}
                    alt={banner.title}
                    fill
                    priority
                    className="object-cover brightness-[0.4]"
                  />

                  <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    {/* SUBTITLE */}
                    <motion.div
                      initial={{ y: -40, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6 }}
                      className="bg-white/10 px-4 py-2 rounded-full mb-4 flex items-center gap-2"
                    >
                      <Sparkles className="w-5 h-5 text-gray-300" />
                      <p className="text-gray-300 font-light text-lg">{banner.short_descp}</p>
                    </motion.div>

                    {/* TITLE */}
                    <motion.h1
                      initial={{ y: -30, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8 }}
                      className="text-4xl md:text-5xl lg:text-6xl text-gray-200 font-light mb-4"
                    >
                      <span className="text-primary">{banner.title}</span>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl font-light"
                    >
                      {banner.long_description}
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          size="lg"
                          className="flex items-center px-6 py-3 text-white shadow-lg transition-all"
                          onClick={() => router.push("/all-products")}
                        >
                          <ShoppingBag className="w-5 h-5 mr-2" />
                          Explore Collections
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
