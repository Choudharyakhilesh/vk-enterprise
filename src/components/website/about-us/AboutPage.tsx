"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Settings,
  Leaf,
  Layers,
  Box,
  Zap,
  Sparkles,
  Heart,
  Target,
  Eye,
  ArrowUpRight,
} from "lucide-react";

export function AboutSection() {
  // Primary Color: #cc9547
  // Secondary Color: #e8d8bd

  const stats = [
    { label: "Annual Production", value: "60,00,000+", sub: "Garments" },
    { label: "Workforce", value: "11,000", sub: "Employees" },
    { label: "Factory Space", value: "45,000", sub: "Square Feet" },
    { label: "Experience", value: "3 Decades", sub: "Est. 1997" },
  ];

  // Naya Updated Content for Core Business Areas
  const coreServices = [
    {
      title: "Original Equipment Manufacturers (OEM)",
      desc: "We’re dedicated OEM clothing manufacturers in India, sourcing, cutting, sewing, and finishing women’s garments under a brand's label. Established or aspiring, any clothing brand may bring their designs and customisation requirements to us and take home fully customised stitched vacation wear for women under their private labeling.",
      icon: Layers,
      link: "Explore Collections",
    },
    {
      title: "Original Design Manufacturers (ODM)",
      desc: "Housing top-notch designers and craftsmen, Vastra also provides Original Design Manufacturing, that is ODM services for brands wishful of faster solutions. We provide ready-to-customise designs in every women’s clothing category, which you can tweak and enhance to sell under your brand name. Our designs, your branding.",
      icon: Settings,
      link: "Explore Collections",
    },
    {
      title: "Global Export",
      desc: "We are a dedicated manufacturer and exporter with in-house bulk-order shipping services. Our team delivers bulk orders to all corners of the world through waterways, airways, and even roadways. Depending upon your order size, choice of transportation, and customisation levels, our team delivers your bulk orders within 25-45 days.",
      icon: Globe,
      link: "Learn More",
    },
    {
      title: "Support Material Supplies",
      desc: "Vastra also provides support materials useful and impactful in making your brand. Our support materials include packaging materials, labels, buttons, hooks, laces, embroidery materials, tassels, and many more. Our packaging and labelling materials are environment-friendly and water and heat-proof. Our metallic hooks and embellishments are anti-tarnish.",
      icon: Box,
      link: "Learn More",
    },
  ];

  const differentiators = [
    {
      title: "Fusion Makers",
      desc: "We’re creative women's clothing manufacturers blending not just different types of fabric materials, but also the Indian Aesthetics with Western Style.",
      icon: Zap,
    },
    {
      title: "Customisers",
      desc: "Every single piece of garment designed and manufactured at Vastra speaks your brand story with 100% customised designs.",
      icon: Sparkles,
    },
    {
      title: "Eco-Friendly",
      desc: "We’re an ethical garment manufacturers in India. Our fabrics and dyes are eco-friendly and safe for all, the summers, the skin, and the environment.",
      icon: Leaf,
    },
    {
      title: "Socially Responsible",
      desc: "Our workers work 24/7 hours, but in rotational shifts for only 8 hours a day without compromising production quantity.",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen font-sans text-stone-900 overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className=" flex items-center justify-center text-center px-6 py-6">
        <div className="">
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.4em] text-xs mb-4 font-bold"
            style={{ color: "#cc9547" }}
          >
            Established 1997
          </motion.p> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-5xl font-serif tracking-tight mb-4"
          >
            About Vastra
          </motion.h1>
          <p className="max-w-2xl mx-auto text-stone-600 font-light italic">
            "We are backstage workers who bring your brands into the limelight."
          </p>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="py-5 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800"
              alt="Vastra Manufacturing"
              className="w-full object-cover aspect-[4/5]"
            />
          </motion.div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif" style={{ color: "#cc9547" }}>
              Company Overview
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg font-light">
              <p>
                Established in 1997, Vastra is 3-decade-old clothing manufacturers in Jaipur,
                India, specializing in customised women’s apparel. We are a B2B manufacturer and
                exporter of resortwear, beachwear, and loungewear.
              </p>
              <p>
                With 45,000 sq. ft. of space and 11,000 employees working in rotational shifts,
                we produce over 6 million garments annually, helping brands scale with tailored
                design and stitching services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIFFERENTIATORS */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: "#cc9547" }}>
            We’re Different Because We’re:
          </h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: "#e8d8bd" }}></div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {differentiators.map((item, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-[#fcf9f5] border border-[#e8d8bd]">
                <item.icon size={28} style={{ color: "#cc9547" }} />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 px-6 bg-[#fcf9f5]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-10 md:p-14 rounded-[2.5rem] bg-white border border-[#e8d8bd] text-center shadow-sm">
            <Target size={40} className="mx-auto mb-6" style={{ color: "#cc9547" }} />
            <h2 className="text-4xl font-serif mb-6" style={{ color: "#cc9547" }}>
              The Mission
            </h2>
            <p className="text-stone-600 text-lg italic leading-relaxed font-light">
              "The mission of our company is to support women’s clothing brands worldwide in
              producing stylish and comfortable apparel to make vacations the happiest occasion
              for their customers."
            </p>
          </div>
          <div className="p-10 md:p-14 rounded-[2.5rem] bg-white border border-[#e8d8bd] text-center shadow-sm">
            <Eye size={40} className="mx-auto mb-6" style={{ color: "#cc9547" }} />
            <h2 className="text-4xl font-serif mb-6" style={{ color: "#cc9547" }}>
              The Vision
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Our vision is to achieve a global presence as the leading custom clothing
              manufacturers and spread the fusion of Indian and Western designs and aesthetics
              all over the world.
            </p>
          </div>
        </div>
      </section>

      {/* --- UPDATED: CORE BUSINESS AREAS --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: "#cc9547" }}>
            Our Core Business Areas
          </h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: "#e8d8bd" }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {coreServices.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 bg-white border border-stone-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              style={{ borderLeft: `4px solid #cc9547` }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#fcf9f5" }}
                >
                  <service.icon size={24} style={{ color: "#cc9547" }} />
                </div>
                <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
                <p className="text-stone-500 leading-relaxed mb-8 font-light italic">
                  {service.desc}
                </p>
              </div>

              <a
                href="#"
                className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:gap-4 transition-all"
                style={{ color: "#cc9547" }}
              >
                {service.link} <ArrowUpRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. STATISTICS */}
      <section className="py-20 px-6 border-t border-stone-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-serif mb-2" style={{ color: "#333" }}>
                {stat.value}
              </h3>
              <p
                className="text-xs uppercase tracking-widest font-bold"
                style={{ color: "#cc9547" }}
              >
                {stat.label}
              </p>
              <p className="text-[10px] text-stone-400 italic mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VALUES & SUPPORT */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div
          className="rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-sm"
          style={{ backgroundColor: "#e8d8bd" }} // Secondary Background
        >
          {/* Decorative background text - Subtle and elegant */}
          <div
            className="absolute top-0 right-0 text-[10rem] font-serif opacity-[0.08] pointer-events-none translate-x-1/4 translate-y-1/4"
            style={{ color: "#cc9547" }}
          >
            VASTRA
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
                Values That Set Us Apart
              </h2>

              <div className="space-y-8">
                {/* Point 1 */}
                <div>
                  <h4 className="text-[#cc9547] font-extrabold uppercase tracking-[0.2em] text-xs mb-3">
                    Client in the Limelight
                  </h4>
                  <p className="text-stone-800 leading-relaxed font-medium">
                    We provide 100% customisation. From print to design, colour, and fabric
                    material, everything is as per your choice and brand ideation.
                  </p>
                </div>

                {/* Point 2 */}
                <div>
                  <h4 className="text-[#cc9547] font-extrabold uppercase tracking-[0.2em] text-xs mb-3">
                    Brand to the Life
                  </h4>
                  <p className="text-stone-800 leading-relaxed font-medium">
                    We do not focus only on manufacturing clothes, but also on building brands.
                    Our core aim is to bring unique brands to life worldwide.
                  </p>
                </div>

                {/* Point 3 */}
                <div>
                  <h4 className="text-[#cc9547] font-extrabold uppercase tracking-[0.2em] text-xs mb-3">
                    End-to-End Support
                  </h4>
                  <p className="text-stone-800 leading-relaxed font-medium">
                    From designing to manufacturing and shipping orders to your country, we
                    provide complete services that support your apparel business.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {/* Glassmorphism card effect on secondary bg */}
              <div className="p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl">
                <h4 className="text-3xl font-serif mb-6 italic text-stone-900 leading-snug">
                  Helping, Supporting, Creating Brands Worldwide
                </h4>
                <p className="text-stone-700 leading-relaxed mb-8">
                  Your vision, our craftsmanship. Together, we build a legacy that resonates
                  across borders.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] shadow-lg transition-all"
                  style={{ backgroundColor: "#cc9547", color: "white" }}
                >
                  GET IN TOUCH
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
