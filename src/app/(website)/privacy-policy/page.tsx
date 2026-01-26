import PrivacyPolicy from '@/components/website/privacy-policy/privacy-policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Vastra Cloth Manufacturers and Exporters',
  icons: '/file.svg',
};

const PrivacyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPage;
