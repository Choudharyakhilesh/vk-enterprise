'use client';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Fashion Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      rating: 5,
      text: 'ShopHub has completely transformed my shopping experience! The quality of products is outstanding.',
    },
    {
      name: 'Robert Johnson',
      role: 'Tech Professional',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Fast shipping and great deals. The website is easy to navigate and checkout is smooth.',
    },
    {
      name: 'Emily Chen',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Amazing product selection and extremely convenient for busy schedules. Love the service!',
    },
    {
      name: 'Michael Brown',
      role: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Top-notch quality and hassle-free return policy. Every purchase exceeded expectations.',
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
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            What Our Customers Say
          </h2>
          <h3 className="text-xl text-primary font-light max-w-2xl mx-auto">
            Trusted by thousands of happy customers
          </h3>
        </div>

        {/* Main Testimonial Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative website-bg border border-white/10 rounded-3xl p-10 md:p-14 shadow-xl">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary" />

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
                  <h3 className="text-xl text-center mb-5 text-black/80 leading-relaxed mt-3">
                    {/* "{testimonial.text}" */}
                    {testimonial.text}
                  </h3>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border border-white/20"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
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

        {/* Stats - Black & White version */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9/5", label: "Avg. Rating" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-black">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
