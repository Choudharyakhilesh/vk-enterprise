import { CircleCheckBig, DollarSign, Handshake, Package, Palette, Wind } from "lucide-react";

export function WhyVastraSection() {
  const features = [
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Indian Design Aesthetics",
      description:
        "We Ensure Every Design Represents The Indian Aesthetics Without Compromising the Western Style. Royal Prints, Beautiful Hand Embroidery, and Top-Quality Material for Happiest Vacations.",
    },
    {
      icon: <Wind className="w-7 h-7" />,
      title: "Breathable Fabric",
      description:
        "Breathable Cotton, Rayon, Linen, Satin, Viscose, and Silk Fabric Materials Are Our Core Speciality. We Provide A Wide Range of Fabric Materials That Unify Design and Comfort for the Best Experience.",
    },
    {
      icon: <CircleCheckBig className="w-7 h-7" />,
      title: "100% Customised Designs",
      description:
        "We're OEM Specialists, And Therefore, We Ensure 100% Custom Designs for Importers. Bring Your Design Ideas to Us And Get Bespoke Women's Wear in All Categories. Your Ideas, Our Execution.",
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "Reasonable Prices",
      description:
        "Based in India, We House 12K+ Diligent, Skilled, and Dedicated Indian Employees & Artisans, And an Abundance of Domestically Produced High-Quality Fabric Materials. Therefore, Our Prices Are Reasonable.",
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: "Design to Export Services",
      description:
        "We Are Not Only Cloth Manufacturers, But Also Brand Makers. Therefore, We Offer Start-to-Finish Services From Designing, Cutting, Stitching, Quality Assurance, Shipment, Packaging, Labeling, And What Not.",
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      title: "Low MOQ",
      description:
        "We Believe in Everlasting Partnerships, and We're 100% Sure of Our Quality. Therefore, We Do Not Mind A Minimum Order Quantity (MOQ) As Low As 1000 Pieces. We're Sure That You Will Place a Bulk Order Next Time.",
    },
  ];

  return (
    <section className="py-5 bg-gray-50">
      <div className="premium-container">
        <div className="text-center mb-5">
          <h2 className="premium-heading text-4xl lg:text-5xl text-primary mb-3">
            Why Vastra?
          </h2>
          <h3 className="text-2xl text-gray-800 font-light">
            Exporting Indian Aesthetics, Diligence & Quality
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-gray-200
                rounded-2xl
                p-3
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  items-center
                  justify-center
                  w-14
                  h-14
                  rounded-full
                  bg-gray-100
                  text-gray-700
                  transition-colors
                  duration-300
                  group-hover:bg-secondary
                  group-hover:text-primary
                "
              >
                {feature.icon}
              </div>

              <h3
                className="
                  text-xl
                  font-semibold
                  text-gray-900
                  mb-4
                  text-center
                  transition-colors
                  duration-300
                  group-hover:text-primary
                "
              >
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
