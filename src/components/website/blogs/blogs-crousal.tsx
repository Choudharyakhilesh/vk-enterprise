"use client";

import { IBlog, useHomeStore } from "@/store/home-store";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { start } from "repl";
import { useTopLoader } from "nextjs-toploader";

export function BlogSectionCrousal() {
  const router = useRouter();
  const { start } = useTopLoader();
  const { homePageData } = useHomeStore();

  const blogs = homePageData?.blogs || [];

  if (!blogs.length) return null;

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl text-stone-900 text-center mb-2">Latest Blogs</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {blogs?.map((blog: IBlog, index: number) => (
            <SwiperSlide key={index} className="py-5 !h-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col w-full h-full">
                {/* Image */}
                <div className="relative h-48 w-full bg-gray-50">
                  <Image src={blog.image} alt={blog.title} fill className="object-contain" />
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-lg text-black font-semibold line-clamp-1">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-1">{blog.short_desc}</p>
                  {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {blog.tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Button
                    size="sm"
                    className="relative text-primary font-medium text-sm bg-transparent shadow-none
             hover:bg-transparent px-0 pb-1
             after:absolute after:left-0 after:-bottom-0.5
             after:h-[2px] after:w-0 after:bg-primary after:rounded-full
             after:transition-all after:duration-300 after:ease-in-out
             hover:after:w-full"
                    onClick={() => {
                      start();
                      router.push(`/blog-details/${blog.id}`);
                    }}
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
