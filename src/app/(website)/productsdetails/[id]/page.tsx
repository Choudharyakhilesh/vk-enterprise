import ProductDetailsPage from '@/components/website/products-details/products-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Details',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/vastra-logo-2.png',
};

export default function Home() {
  return (
    <div>
      <ProductDetailsPage />
    </div>
  );
}
