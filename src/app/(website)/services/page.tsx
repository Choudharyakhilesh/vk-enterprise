import AllServicesSection from '@/components/website/services/services-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/vastra-logo-2.png',
};

export default function Home() {
  return (
    <div>
      <AllServicesSection />
    </div>
  );
}
