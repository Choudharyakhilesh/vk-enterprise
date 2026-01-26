import { AllProductList } from '@/components/website/products/all-products';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/vastra-logo-2.png',
};

const AllProductsSection = () => {
  return <AllProductList />;
};

export default AllProductsSection;
