import { AllBlogSection } from '@/components/website/blogs/all-blogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Blogs',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/vastra-logo-2.png',
};

export default function Home() {
  return (
    <div>
      <AllBlogSection />
    </div>
  );
}
