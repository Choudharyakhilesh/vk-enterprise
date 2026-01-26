'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Layers, Hash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTopLoader } from 'nextjs-toploader';
import { useState } from 'react';

// Swiper Imports
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { IProducts } from '@/store/products-store';

interface QuickViewModalProps {
  product: IProducts | null;
  open: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, open, onClose }: QuickViewModalProps) {
  const { start } = useTopLoader();
  const router = useRouter();

  // 1. Main Swiper instance ko store karne ke liye state
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  // Active index track karne ke liye (taaki thumbnail highlit ho sake)
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-0 rounded-2xl gap-0">
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4 z-50 p-2 bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition-colors shadow-sm focus:outline-none focus:ring-0"
        >
          <X className="h-4 w-4 text-stone-500" />
        </button>

        <div className="grid md:grid-cols-2 h-[600px] max-h-[800px]">
          {/* Left Side: Main Slider */}
          <div className="h-full bg-stone-50 relative">
            <SwiperReact
              modules={[Autoplay, Navigation]}
              // 2. Swiper instance ko state mein set karna
              onSwiper={setMainSwiper}
              // 3. Slide change hone par index update karna
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="h-full w-full"
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </SwiperReact>
          </div>

          {/* Right Side: Details + Gallery */}
          <div className="p-3 bg-white flex flex-col h-full">
            <div className="flex-1">
              <Badge variant="outline" className="mb-3 text-primary border-secondary">
                {product.category_name}
              </Badge>
              <h2 className="text-2xl font-bold text-stone-900 mb-2">{product.title}</h2>

              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-stone-100 rounded-lg">
                    <Layers className="h-3 w-3 text-stone-600" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs tracking-wider text-stone-400 font-bold uppercase">
                      Fabric:
                    </span>
                    <span className="text-xs font-semibold text-stone-800">
                      {product.fabric || 'Premium Cotton'}
                    </span>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-stone-200" />

                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-stone-100 rounded-lg">
                    <Hash className="h-3 w-3 text-stone-600" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] tracking-wider text-stone-400 font-bold uppercase">
                      Code:
                    </span>
                    <span className="text-sm font-mono font-bold text-primary">
                      #{product.style_code || 'VX-2024'}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed mb-6">{product.description}</p>

              {/* Product Gallery (Thumbnails) */}
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-3">
                  Product Gallery
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      // 4. Thumbnail click logic: slide to specific index
                      onClick={() => {
                        if (mainSwiper) {
                          mainSwiper.slideTo(index);
                        }
                      }}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        activeIndex === index
                          ? 'border-secondary ring-2 ring-secondary-100 opacity-100'
                          : 'border-stone-100 opacity-60 hover:opacity-100 hover:border-stone-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-contain bg-stone-100"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className=" mt-auto">
              <Button
                variant="default"
                className="w-full"
                onClick={() => {
                  start();
                  router.push(`/productsdetails/${product.id}`);
                }}
              >
                View Full Details
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
