'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Camila Duartes',
      role: 'Fashion Enthusiast',
      // image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      rating: 5,
      text: 'It has been over 5 seasons since our boutique has been sourcing beachwear and resortwear for women from Vastra. The fabric is always very breathable, the design is fully bespoke, and the finishing of every product is also premium. We highly recommend Vastra as the best women’s clothing manufacturers in India.',
    },
    {
      name: 'Santiago López',
      role: 'Tech Professional',
      // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Vastra has played a pivotal role in establishing my brand in Latin America. The demand for Indian aesthetic, embroidered women’s western wear is high in my region. Vastra is an amazing team of custom clothing manufacturers that has fulfilled my dream of launching an Aesthetic Maxi Dress Brand. Their support has been magical for me.',
    },
    {
      name: 'Alejandro Reyes',
      role: 'Small Business Owner',
      // image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Wonderful packaging and excellent labelling. Vastra is my go-to partner for running my women’s apparel business smoothly. Their shipment always arrives on time, the communication is clear, and their stitching quality never disappoints my customers and me. Highly recommend Vastra as  reliable garment manufacturers in India!',
    },
    {
      name: 'Sebastián Martínez',
      role: 'Fitness Coach',
      // image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The designs are very modern, trendy, and exactly what we expect for the Latin American Markets. Their team understands our requirements really well, and they always deliver customized styles with commendable craftsmanship. What we found with Vastra is rare to find from most of the cloth manufacturers in India and even in the US.',
    },
    {
      name: 'Gabriela Ramos',
      role: 'Fitness Coach',
      // image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Their fabric material is genuinely very good. It is light, breathable, and the colours are really trendy. From pastel to vibrant colours, I find a very wide range of dress materials for my resortwear business. The design is always in line with the latest fashion. And their packaging and labeling support keep me going well. Vastra is a versatile clothing manufacturer in India.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-5 website-bg text-black relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6  relative z-10">
        <div className="text-primary font-medium tracking-[0.2em] uppercase text-sm block mb-4">
          <span className="bg-secondary px-2 py-1 rounded-xl">Testimonials</span>
        </div>
        {/* Heading */}
        <div className="lg:text-center text-start mb-5">
          <h2 className="text-xl md:text-4xl font-bold mb-4 tracking-wide ">
            Know Us Better Through The Eyes of Importers Like You
          </h2>
        </div>

        {/* Main Testimonial Box */}
        <div className="max-w-6xl mx-auto">
          <div className="relative website-bg border border-white/10 rounded-3xl p-5 md:p-14 shadow-xl">
            {/* Quote Icon */}
            <Quote className="absolute md:top-6 top-2 left-6 md:h-10 md:w-10 h-5 w-5 text-primary" />

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`transition-all duration-700 ${
                    index === activeIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 absolute inset-0 translate-y-10 pointer-events-none'
                  }`}
                >
                  {/* Message */}
                  <h3 className="md:text-xl text-md text-center mb-5 text-black/80 leading-relaxed mt-3 text-justify">
                    {/* "{testimonial.text}" */}
                    {testimonial.text}
                  </h3>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <Avatar className="h-12 w-12">
                      {/* Image (optional) */}
                      {/* <AvatarImage src={testimonial.image} alt={testimonial.name} /> */}

                      {/* Fallback → First Letter */}
                      <AvatarFallback className="text-lg text-primary font-semibold uppercase">
                        {testimonial.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <h4 className="font-bold md:text-lg text-md">{testimonial.name}</h4>
                      {/* <p className="text-gray-400">{testimonial.role}</p> */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'w-12 h-2 bg-white'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
