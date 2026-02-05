import { AboutUsSection } from '@/components/website/about-us/AboutUsSection';
import { FaqSection } from '@/components/website/faq-section/faq-section';
import { FinalCtc } from '@/components/website/final-ctc/final-ctc';
import EnhancedHeroCarousel from '@/components/website/home-carousel/EnhancedHeroCarousel';
import { ProductList } from '@/components/website/products/ProductList';
import { ServicesSection } from '@/components/website/services/ServicesSection';
import { TestimonialsSection } from '@/components/website/testimonials-section/TestimonialsSection';
import { WhyVastraSection } from '@/components/website/why-vastra/WhyVastraSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vastra - Women's Clothing Manufacturers & Exporters",
  description:
    "Vastra Cloth Manufacturers and Exporters - Designing, Manufacturing, Wholesaling & Shipping Women's Fashion From India. Building Brands Worldwide since 1997.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/file.svg',
  },
  // icons: '/vk-logo.svg',
  keywords: [
    "Women's Clothing Manufacturers",
    'Clothing Exporters India',
    "Wholesale Women's Fashion",
    'Vastra Exports Jaipur',
    'Cotton Garment Manufacturers',
    'Ethic Wear Exporters',
    'Textile Manufacturing India',
  ],
};

export default function Page() {
  return (
    <>
      <EnhancedHeroCarousel />
      <AboutUsSection />
      <ProductList />
      {/* <BlogSectionCrousal /> */}
      <ServicesSection />
      <WhyVastraSection />
      {/* <VideoTestimonialSlider /> */}
      <TestimonialsSection />
      <FinalCtc />
      <FaqSection />
    </>
  );
}
