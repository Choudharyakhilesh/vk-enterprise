import { AboutSection } from '@/components/website/about-us/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/vastra-logo-2.png',
};

const AboutPage = () => {
  return <AboutSection />;
};

export default AboutPage;
