'use client';

import { motion } from 'framer-motion';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { Button } from '@/components/ui/button';
import { IHomePage, useHomeStore } from '@/store/home-store';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';

type Banner = IHomePage['banners'][number];

export default function EnhancedHeroCarousel() {
  // const router = useRouter();
  const { homePageData } = useHomeStore();

  const banners = homePageData?.banners || [];
  const hasMultipleSlides = banners.length > 1;

  if (!banners.length) return null;

  return (
    <div className="mx-2">
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[600px] rounded-4xl overflow-hidden bg-black">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          autoplay={hasMultipleSlides ? { delay: 5000, disableOnInteraction: false } : false}
          navigation={hasMultipleSlides}
          effect="fade"
          loop={hasMultipleSlides}
          className="h-full"
        >
          {banners.map((banner: Banner) => (
            <SwiperSlide key={banner.id}>
              {({ isActive }) => (
                <div className="relative w-full min-h-[800px] md:aspect-[16/9] rounded-4xl overflow-hidden bg-black">
                  <Image
                    src={banner.image || banner.banner_image}
                    alt={banner.title}
                    fill
                    priority
                    className="object-cover brightness-[0.4]"
                  />

                  <div className="absolute mb-50 inset-0 flex flex-col justify-center items-center text-center px-6 -translate-y-6">
                    {/* SUBTITLE */}
                    {/* <motion.div
                      initial={{ y: -40, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6 }}
                      className="bg-white/10 px-4 py-2 rounded-full mb-4 flex items-center gap-2"
                    >
                      <Sparkles className="w-5 h-5 text-gray-300" />
                      <p className="text-gray-300 font-light text-lg">{banner.short_descp}</p>
                    </motion.div> */}

                    {/* TITLE */}
                    <motion.h1
                      initial={{ y: -30, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8 }}
                      className="text-4xl md:text-5xl lg:text-6xl text-gray-200 font-light mb-4"
                    >
                      <span className="text-primary">
                        {/* {banner.title}  */}
                        Women's Apparel Manufacturer | Private Label | OEM ODM
                      </span>
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
                    {/* CTA Section - Isse update karein */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <div className="flex flex-col sm:flex-row gap-3">
                        {/* ✅ tel: link use karke dialer open karein */}
                        <Button
                          asChild // Taaki Button link ki tarah behave kare
                          size="lg"
                          className="flex items-center px-6 py-3 text-white shadow-lg transition-all"
                        >
                          <a href="tel:+917427873957">
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            Enquire Now
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                    {/* <motion.a
                      href="whatsapp://send?phone=917427873957"
                      initial={{ y: 20, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <Button size="sm" className="flex items-center">
                        <ShoppingBag className="mr-2 w-4 h-4" />
                        Enquire Now
                      </Button>
                    </motion.a> */}
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
