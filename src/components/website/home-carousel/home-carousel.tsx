"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { SummerButton } from "@/components/ui/summer-button";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Light fabrics for warm days",
    description: "Discover our exclusive summer essentials",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop",
    cta: "Shop Now",
    bgColor: "bg-gradient-to-r from-pink-50 to-peach-50",
  },
  {
    id: 2,
    title: "Resort Wear",
    subtitle: "Elegant vacation pieces",
    description: "Perfect for your dream getaway",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=800&fit=crop",
    cta: "Explore Resort",
    bgColor: "bg-gradient-to-r from-sky-50 to-mint-50",
  },
  {
    id: 3,
    title: "Beach Essentials",
    subtitle: "Style meets comfort",
    description: "Everything you need for beach days",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop",
    cta: "Shop Beachwear",
    bgColor: "bg-gradient-to-r from-lavender-50 to-pink-50",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className={`absolute inset-0 ${slide.bgColor}`} />
            <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="premium-container">
                <div className="max-w-2xl animate-fadeInUp">
                  <p className="text-white/90 text-lg md:text-xl mb-2 font-light tracking-wide">
                    {slide.subtitle}
                  </p>
                  <h1 className="premium-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-light">
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg">
                    {slide.description}
                  </p>
                  <SummerButton
                    variant="premium"
                    size="lg"
                    className="bg-white/90 backdrop-blur-sm hover:bg-white text-neutral-900"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    {slide.cta}
                  </SummerButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-neutral-900 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-neutral-900 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
