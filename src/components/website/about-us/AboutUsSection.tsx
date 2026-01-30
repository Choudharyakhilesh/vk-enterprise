'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Package, Globe, Factory } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import { useRouter } from 'next/navigation';

// --- Number Counter Sub-Component ---
function Counter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Value se number aur suffix (k+, M+ etc) alag karna
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2, // 2 seconds tak animation chalegi
        ease: 'easeOut',
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function AboutUsSection() {
  const router = useRouter();
  const stats = [
    { icon: <Factory />, value: '45k+', label: 'Factory Area' },
    { icon: <Users />, value: '11k+', label: 'Team Members' },
    { icon: <Globe />, value: '25k+', label: 'Global Importers' },
    { icon: <Package />, value: '6M+', label: 'Items Yearly' },
  ];

  return (
    <section className="py-10 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Who We Are & What We Do?
              {/* Who We Are & What Vastra Does? */}
            </span>
            <h2 className="text-4xl lg:text-6xl text-slate-900 mb-8 leading-tight">
              We Build Brands By <span className="text-primary">Exporting Fashion</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-2 border-l-2 border-amber-200 pl-2 text-justify">
              Vastra Cloth Manufacturers and Exporters is a well-established women’s clothing
              manufacturer, designer, and wholesaler based in India. Established in 1997 in Jaipur,
              Vastra specializes in manufacturing premium vacation wear for women.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-2 border-l-2 border-amber-200 pl-2 text-justify">
              We’re custom clothing manufacturers committed to building and supporting clothing
              brands worldwide since 3 decades with our Original Equipment Manufacturing (OEM) and
              Original Design Manufacturing (ODM) services.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 border-l-2 border-amber-200 pl-2 text-justify">
              From cloth manufacturing to designing, shipping, branding, packaging, and labeling, we
              provide complete support for women’s clothing brands.
            </p>
            <Button
              onClick={() => router.push('/about-us')}
              size="lg"
              className="flex items-center px-6 py-3 transition-all mt-3"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right Side: Bento-ish Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-[2rem] ${'bg-white shadow-xl shadow-slate-200/50'} border border-slate-100 flex flex-col items-center justify-center text-center`}
              >
                <div className="p-3 bg-secondary rounded-full text-primary mb-4">
                  {React.cloneElement(stat.icon, { size: 28 })}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  {/* Yahan humne Counter component use kiya hai */}
                  <Counter value={stat.value} />
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
