'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye, Hash, Layers } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IProducts } from '@/store/products-store';
import { useTopLoader } from 'nextjs-toploader';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface ProductCardProps {
  product: IProducts;
  onQuickView: (product: IProducts) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { start } = useTopLoader();
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-stone-100  flex flex-col h-full"
      onClick={() => {
        start();
        router.push(`/productsdetails/${product.id}`);
      }}
      onMouseEnter={() => swiperRef.current?.autoplay.start()}
      onMouseLeave={() => {
        swiperRef.current?.autoplay.stop();
        swiperRef.current?.slideTo(0);
      }}
    >
      <div className="relative aspect-[11/18] overflow-hidden bg-[#F9F8F6]">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.autoplay.stop();
          }}
          effect="fade"
          loop={product.images?.length > 1}
          className="w-full h-full product-card-slider"
        >
          {product?.images?.map((img: string, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${product.title} - ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {product?.images?.length > 1 && (
          <>
            <button
              type="button"
              className="flex absolute left-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 items-center justify-center rounded-full bg-black/50 hover:bg-black/70 opacity-100  lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                swiperRef.current?.slidePrev();
              }}
            >
              <ChevronLeft className="w-6 h-6 text-white stroke-[2.5px]" />
            </button>

            <button
              type="button"
              className="flex absolute right-3 top-1/2 -translate-y-1/2 z-40  w-9 h-9 items-center justify-center rounded-full  bg-black/50 hover:bg-black/70  opacity-100  lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                swiperRef.current?.slideNext();
              }}
            >
              <ChevronRight className="w-6 h-6 text-white stroke-[2.5px]" />
            </button>
          </>
        )}

        <div className="hidden lg:block absolute bottom-6 left-4 right-4 translate-y-4 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100 z-30 ">
          <Button
            className="w-full bg-white/95 hover:bg-white text-black border-0 shadow-xl text-xs font-bold h-10 uppercase tracking-widest"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
      </div>

      <div className="p-3 bg-white group transition-all duration-300">
        {/* Category & Style Code Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] px-1 py-1 rounded-md font-bold border border-secondary text-primary uppercase tracking-[0.15em]">
            {product.category_name}
          </span>
          {product.style_code && (
            <div className="flex items-center gap-1 bg-secondary/20 px-2 py-0.5 rounded border border-stone-100">
              <Hash className="w-3 h-3 text-primary/80" />
              <span className="text-[11px] font-bold text-primary/80 uppercase tracking-tighter">
                {product.style_code}
              </span>
            </div>
          )}
        </div>

        {/* Title & Arrow */}
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-lg font-semibold text-stone-900 leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {product.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Description */}
        <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed mb-2 font-light">
          {product.description}
        </p>

        {/* Bottom Info Bar: Fabric & Details */}
        {product.fabric && (
          <div className="pt-1 border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-stone-50 rounded-full">
                <Layers className="w-3.5 h-3.5 text-stone-500" />
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-xs  text-stone-400 font-medium leading-none">Material:</span>
                <span className="text-xs font-semibold text-stone-700 line-clamp-1">
                  {product.fabric}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .product-card-slider .swiper-pagination {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
