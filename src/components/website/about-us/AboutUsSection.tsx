// import { Button } from "@/components/ui/button";
// import { ArrowRight, Users, Package, Globe, Factory, Award } from "lucide-react";

// export function AboutUsSection() {
//   const stats = [
//     { icon: <Factory className="w-6 h-6" />, value: "45,000", label: "Feet² Factory Area" },
//     { icon: <Users className="w-6 h-6" />, value: "11,000", label: "Dedicated Employees" },
//     { icon: <Globe className="w-6 h-6" />, value: "25,000", label: "Importers Worldwide" },
//     { icon: <Package className="w-6 h-6" />, value: "60,00,000", label: "Garments Annually" },
//   ];

//   return (
//     <section className="relative py-24 overflow-hidden">
//       <div className="absolute inset-0">
//         <svg
//           className="absolute top-0 left-0 w-full h-full opacity-30"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//               <circle cx="2" cy="2" r="1" fill="#f59e0b" opacity="0.2" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#dots)" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="order-2 lg:order-2">
//             <div className="relative">
//               <div className="absolute -inset-4  rounded-3xl opacity-20 blur-2xl"></div>
//               <div className="relative grid grid-cols-2 gap-5">
//                 {stats.map((stat, index) => (
//                   <div
//                     key={index}
//                     className="group bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-rotate-1"
//                     style={{
//                       animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
//                       animationDelay: `${index * 0.2}s`,
//                     }}
//                   >
//                     <div className="flex flex-col items-center text-center space-y-3">
//                       <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
//                         {stat.icon}
//                       </div>
//                       <div className="text-3xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
//                         {stat.value}
//                       </div>
//                       <div className="text-xs text-gray-500 font-medium leading-tight">
//                         {stat.label}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="order-1 lg:order-1 space-y-8">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 mb-6 shadow-sm">
//                 <Award className="w-4 h-4 text-amber-600" />
//                 <span className="text-amber-700 text-sm font-semibold">
//                   Excellence Since 1997
//                 </span>
//               </div>

//               <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                 Who We Are &<br />
//                 <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                   What We Do?
//                 </span>
//               </h2>

//               <h3 className="text-2xl text-gray-700 mb-6 font-light italic">
//                 We Build Brands By Exporting Fashion
//               </h3>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Vastra Cloth Manufacturers and Exporters is a well-established women's vacation
//                 wear designer, manufacturer, and wholesaler based in India. From cloth
//                 manufacturing to designing, shipping, branding, packaging, and labeling, we
//                 provide complete support for women's clothing brands worldwide.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <Button
//                 size="lg"
//                 className="flex items-center px-6 py-3 text-black transition-all"
//               >
//                 Learn More About Us
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(1deg); }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Package, Globe, Factory } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";

// --- Number Counter Sub-Component ---
function Counter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Value se number aur suffix (k+, M+ etc) alag karna
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2, // 2 seconds tak animation chalegi
        ease: "easeOut",
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
  const stats = [
    { icon: <Factory />, value: "45k+", label: "Factory Area" },
    { icon: <Users />, value: "11k+", label: "Team Members" },
    { icon: <Globe />, value: "25k+", label: "Global Importers" },
    { icon: <Package />, value: "6M+", label: "Items Yearly" },
  ];

  return (
    <section className="py-10 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Who We Are & What We Do?
            </span>
            <h2 className="text-4xl lg:text-6xl text-slate-900 mb-8 leading-tight">
              We Build Brands By <span className="text-primary">Exporting Fashion</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 border-l-2 border-amber-200 pl-6">
              Vastra is committed to supporting clothing brands worldwide with premium OEM and
              ODM services. From Jaipur to the world, we handle everything from design to global
              shipping.
            </p>
            <Button size="lg" className="flex items-center px-6 py-3 transition-all">
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
                className={`p-8 rounded-[2rem] ${"bg-white shadow-xl shadow-slate-200/50"} border border-slate-100 flex flex-col items-center justify-center text-center`}
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
