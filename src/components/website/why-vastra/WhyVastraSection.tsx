// import { CircleCheckBig, DollarSign, Handshake, Package, Palette, Wind } from 'lucide-react';

// export function WhyVastraSection() {
//   const features = [
//     {
//       icon: <Palette className="w-7 h-7" />,
//       title: 'Indian Design Aesthetics',
//       description:
//         'We Ensure Every Design Represents The Indian Aesthetics Without Compromising the Western Style. Royal Prints, Beautiful Hand Embroidery, and Top-Quality Material for Happiest Vacations.',
//     },
//     {
//       icon: <Wind className="w-7 h-7" />,
//       title: 'Breathable Fabric',
//       description:
//         'Breathable Cotton, Rayon, Linen, Satin, Viscose, and Silk Fabric Materials Are Our Core Speciality. We Provide A Wide Range of Fabric Materials That Unify Design and Comfort for the Best Experience.',
//     },
//     {
//       icon: <CircleCheckBig className="w-7 h-7" />,
//       title: '100% Customised Designs',
//       description:
//         "We're OEM Specialists, And Therefore, We Ensure 100% Custom Designs for Importers. Bring Your Design Ideas to Us And Get Bespoke Women's Wear in All Categories. Your Ideas, Our Execution.",
//     },
//     {
//       icon: <DollarSign className="w-7 h-7" />,
//       title: 'Reasonable Prices',
//       description:
//         'Based in India, We House 12K+ Diligent, Skilled, and Dedicated Indian Employees & Artisans, And an Abundance of Domestically Produced High-Quality Fabric Materials. Therefore, Our Prices Are Reasonable.',
//     },
//     {
//       icon: <Package className="w-7 h-7" />,
//       title: 'Design to Export Services',
//       description:
//         'We Are Not Only Cloth Manufacturers, But Also Brand Makers. Therefore, We Offer Start-to-Finish Services From Designing, Cutting, Stitching, Quality Assurance, Shipment, Packaging, Labeling, And What Not.',
//     },
//     {
//       icon: <Handshake className="w-7 h-7" />,
//       title: 'Low MOQ',
//       description:
//         "We Believe in Everlasting Partnerships, and We're 100% Sure of Our Quality. Therefore, We Do Not Mind A Minimum Order Quantity (MOQ) As Low As 1000 Pieces. We're Sure That You Will Place a Bulk Order Next Time.",
//     },
//   ];

//   return (
//     <section className="py-5 bg-gray-50">
//       <div className="premium-container">
//         <div className="text-center mb-5">
//           <h2 className="premium-heading text-4xl lg:text-5xl text-primary mb-3">Why Vastra?</h2>
//           <h3 className="text-2xl text-gray-800 font-light">
//             Exporting Indian Aesthetics, Diligence & Quality
//           </h3>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="
//                 group
//                 bg-white
//                 border border-gray-200
//                 rounded-2xl
//                 p-3
//                 transition-all
//                 duration-300
//                 hover:-translate-y-2
//                 hover:shadow-lg
//               "
//             >
//               <div
//                 className="
//                   mx-auto
//                   mb-6
//                   flex
//                   items-center
//                   justify-center
//                   w-14
//                   h-14
//                   rounded-full
//                   bg-gray-100
//                   text-gray-700
//                   transition-colors
//                   duration-300
//                   group-hover:bg-secondary
//                   group-hover:text-primary
//                 "
//               >
//                 {feature.icon}
//               </div>

//               <h3
//                 className="
//                   text-xl
//                   font-semibold
//                   text-gray-900
//                   mb-4
//                   text-center
//                   transition-colors
//                   duration-300
//                   group-hover:text-primary
//                 "
//               >
//                 {feature.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { CircleCheckBig, DollarSign, Handshake, Package, Palette, Wind } from 'lucide-react';
import Image from 'next/image';

export function WhyVastraSection() {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Indian Design Aesthetics',
      description:
        'As Leading Clothing Manufacturers in India, we Ensure Every Design Represents The Indian Aesthetics With Western Style. Royal Prints, Beautiful Hand Embroidery, and Top-Quality Material for Happiest Vacations.',
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Breathable Fabric',
      description:
        'Breathable Cotton, Rayon, Linen, Satin, Viscose, and Silk Fabric Materials Are Our Core Speciality. We Provide A Wide Range of Fabric Materials That Unify Design and Comfort for the Best Experience.',
    },
    {
      icon: <CircleCheckBig className="w-6 h-6" />,
      title: '100% Customised',
      description:
        'We’re OEM Specialist, Custom Clothing Manufacturers. Therefore, We Ensure 100% Custom Designs for Importers. Bring Your Design Ideas to Life with Us And Get Bespoke Women’s Wear in All Categories.',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Reasonable Prices',
      description:
        'As homegrown Cloth Manufacturers in India, We House 12K+ Diligent, Skilled, and Dedicated Indian Employees & Artisans, and an Abundance of High-Quality Fabric Materials. Thus, Our Prices Are Reasonable.',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Design to Export',
      description:
        'We Are Not Only Cloth Manufacturers, But Also Brand Makers. Therefore, We Offer Start-to-Finsh Services From Designing, Cutting, Stitching, Quality Assurance, Shipment, Packaging, Labeling, And What Not.',
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'Low MOQ',
      description:
        'We Believe in Everlasting Partnerships, and We’re 100% Sure of Our Quality. Therefore, We Do Not Mind A Minimum Order Quantity (MOQ) As Low As 1000 Pieces. We’re Sure That You Will Place a Bulk Order Next Time.',
    },
  ];

  return (
    <section className="my-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* LEFT SIDE: IMAGE */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/whyimage.jpg"
                alt="Vastra Indian Craftsmanship"
                width={1000}
                height={600}
                className="w-full lg:h-[700px] h-[300px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT & FEATURES */}
          <div className="w-full lg:w-7/12">
            <div className="mb-12">
              <h2 className="premium-heading text-4xl lg:text-5xl text-primary mb-3">
                Why Vastra?
              </h2>

              <h3 className="text-2xl text-gray-800 font-light">
                Exporting Indian Aesthetics, Diligence & Quality
              </h3>
            </div>

            {/* Features Grid: 2 Columns, 3 Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="group flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-snug text-sm text-justify">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
