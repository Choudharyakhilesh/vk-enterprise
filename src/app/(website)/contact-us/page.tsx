import ContactPage from '@/components/website/contact-us/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/vastra-logo-2.png',
};

const ContactSection = () => {
  return <ContactPage />;
};

export default ContactSection;
