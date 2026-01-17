"use client";
import React from "react";
import { motion } from "framer-motion";
import { Settings, Palette, Tag, Package, Ship, Sparkles, ArrowUpRight } from "lucide-react";
import type { Variants } from "framer-motion";
import Image from "next/image";

export function ServicesSection() {
  const services = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Manufacturing (OEM & ODM)",
      desc: "Whether Your Design or Ours, the Branding Remains 100% Yours.",
      num: "01",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Sampling",
      desc: "Bring Your Ideas & Inspect Samples Before Bulk Orders.",
      num: "02",
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Private Labelling",
      desc: "Tape, Hang, Cut-Away, or DTF. All Labelling Solutions.",
      num: "03",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Packaging",
      desc: "From Eco-Friendly to Embellished Gift Bags, We Craft Style.",
      num: "04",
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Global Exporting",
      desc: "We Export Worldwide By Airways and Waterways Safely.",
      num: "05",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Embellishments",
      desc: "Elevate Designs with Elegant Hooks, Buttons, and Laces.",
      num: "06",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // ✅ REQUIRED
      },
    },
  };

  return (
    <section className="py-5">
      {" "}
      {/* Soft Linen Background */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-5x  mb-5">
          <div>
            <div className="">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-primary font-medium tracking-[0.2em] uppercase text-sm block mb-4"
              >
                Our Capabilities
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl lg:text-6xl text-slate-900 leading-tight"
              >
                Building & Supporting <br />
                <span className="text-primary">Global Fashion Brands</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-500 max-w-xl text-sm leading-relaxed border-l border-slate-200 pl-3 pt-1"
            >
              From raw fabric to worldwide doorstep delivery, we handle the complexity while you
              focus on the vision.
            </motion.p>
          </div>
          <div className="relative w-full h-70 rounded-2xl overflow-hidden lg:mt-0 mt-3">
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            <Image
              src="/GettyImages.jpg"
              alt="Services Background"
              width={1000}
              height={1000}
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3  border border-slate-200 rounded-3xl overflow-hidden shadow-sm"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ backgroundColor: "#ffffff" }}
              className="bg-white/80 backdrop-blur-sm p-5 group relative transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-stone-50 text-stone-700 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold  text-slate-900 mb-4 flex items-center gap-2  group-hover:text-primary transition-all duration-500">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>

              <p className="text-slate-500  leading-relaxed font-light text-sm group-hover:text-slate-700 transition-colors">
                {service.desc}
              </p>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
