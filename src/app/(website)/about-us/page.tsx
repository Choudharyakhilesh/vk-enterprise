import { AboutSection } from '@/components/website/about-us/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vastra Cloth Manufacturers and Exporters',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/file.svg',
};

const AboutPage = () => {
  return <AboutSection />;
};

export default AboutPage;
