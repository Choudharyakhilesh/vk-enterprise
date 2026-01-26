import BlogDetails from '@/components/website/blogs/blog-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Details',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/vastra-logo-2.png',
};

export default function Home() {
  return (
    <div>
      <BlogDetails />
    </div>
  );
}
