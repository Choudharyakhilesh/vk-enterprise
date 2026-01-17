// "use client";

// import Link from "next/link";
// import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Circle } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function VKFooter() {
//   return (
//     <footer className="w-full bg-white pt-0">
//       <div className="mx-auto max-w-[1400px] px-4">
//         {/* Soothing Background Box */}
//         <div className="bg-[#F8FAF8] rounded-[3rem] p-10 md:p-16 border border-stone-100 shadow-sm">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
//             {/* 1. Company Info (Restored Details) */}
//             <div className="col-span-1 md:col-span-1">
//               <div className="flex items-center mb-6">
//                 {/* <img src="/vk-logo.svg" alt="VASTRA Logo" className="h-10 w-auto mr-3" /> */}
//                 <span className="text-2xl font-serif tracking-widest text-primary">VASTRA</span>
//               </div>
//               <p className="text-[#4A6358] text-sm leading-relaxed font-light mb-6">
//                 Premium handcrafted fashion designed for elegance and modern simplicity. Your
//                 trusted partner for luxury clothing & timeless style.
//               </p>
//               {/* Socials Icons (Restored) */}
//               <div className="flex space-x-3">
//                 {[Facebook, Instagram, Twitter].map((Icon, i) => (
//                   <button
//                     key={i}
//                     className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-stone-100 text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-all shadow-sm"
//                   >
//                     <Icon size={16} />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Quick Links (Restored Links) */}
//             <div>
//               <div className="flex items-center gap-2 mb-8">
//                 <Circle className="w-2 h-2 fill-[#1B4332] text-[#1B4332]" />
//                 <h3 className="text-[#1B4332] font-semibold text-lg">Quick Links</h3>
//               </div>
//               <ul className="space-y-3">
//                 {[
//                   ["Home", "/"],
//                   ["All Products", "/all-products"],
//                   ["About Us", "/about-us"],
//                   ["Contact", "/contact-us"],
//                 ].map(([label, href]) => (
//                   <li key={label}>
//                     <Link
//                       href={href}
//                       className="text-[#4A6358] hover:text-[#1B4332] transition-colors text-sm font-light"
//                     >
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* 3. Contact Info (Restored Asli Details) */}
//             <div>
//               <div className="flex items-center gap-2 mb-8">
//                 <Circle className="w-2 h-2 fill-[#1B4332] text-[#1B4332]" />
//                 <h3 className="text-[#1B4332] font-semibold text-lg">Contact Us</h3>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3 text-[#4A6358]">
//                   <Phone size={14} className="text-[#1B4332]" />
//                   <span className="text-sm">+91 98765 43210</span>
//                 </div>
//                 <div className="flex items-center space-x-3 text-[#4A6358]">
//                   <Mail size={14} className="text-[#1B4332]" />
//                   <span className="text-sm">info@vastra.com</span>
//                 </div>
//                 <div className="flex items-center space-x-3 text-[#4A6358]">
//                   <MapPin size={14} className="text-[#1B4332]" />
//                   <span className="text-sm">Jaipur, India</span>
//                 </div>
//               </div>
//             </div>

//             {/* 4. Newsletter (Added for Attraction) */}
//             <div>
//               <div className="flex items-center gap-2 mb-8">
//                 <Circle className="w-2 h-2 fill-[#1B4332] text-[#1B4332]" />
//                 <h3 className="text-[#1B4332] font-semibold text-lg">Stay Updated</h3>
//               </div>
//               <p className="text-[#4A6358] text-xs mb-4 font-light">
//                 Join our list for exclusive bulk offers.
//               </p>
//               <div className="flex gap-2">
//                 <input
//                   placeholder="Email"
//                   className="bg-white border-none rounded-xl px-4 py-2 text-xs w-full focus:ring-1 focus:ring-stone-200 outline-none"
//                 />
//                 <Button size="sm" className=" ">
//                   Join
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="w-full bg-primary mt-6 py-4 rounded-t-[2.5rem] text-center">
//           <p className="text-white/90 text-[10px] uppercase tracking-widest font-light">
//             © {new Date().getFullYear()} VASTRA. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  LucideIcon,
} from 'lucide-react';

import { useHomeStore, ISettings } from '@/store/home-store';

const SOCIAL_ICON_MAP: Record<string, LucideIcon> = {
  facebook_url: Facebook,
  instagram_url: Instagram,
  twitter_url: Twitter,
  youtube_url: Youtube,
  linkedln_url: Linkedin,
};

export function VKFooter() {
  const { homePageData } = useHomeStore();

  /* -----------------------------
     GET SETTING BY KEY
  -------------------------------- */
  const getSetting = (key: string, defaultValue = ''): string => {
    const setting = homePageData?.setting?.find((item: ISettings) => item.key === key);
    return setting?.value || defaultValue;
  };

  /* -----------------------------
     FILTER ONLY VALID SOCIAL LINKS
  -------------------------------- */
  const socialLinks =
    homePageData?.setting?.filter(
      (item: ISettings) => SOCIAL_ICON_MAP[item.key] && item.value && item.value.trim() !== ''
    ) || [];

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-4">
        {/* MAIN CONTENT */}
        <div className="bg-[#FDFBF7] rounded-2xl md:rounded-[3rem] p-4 md:p-8 border border-stone-100 shadow-sm relative overflow-hidden">
          {/* BACKGROUND LETTER */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <span className="text-9xl font-serif font-bold text-stone-900">V</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 relative z-10">
            {/* BRAND */}
            <div className="space-y-6">
              <Image
                src="/vastra-logo-2.png"
                alt="Vastra Logo"
                width={120}
                height={40}
                className="w-[95px]"
              />

              <p className="text-stone-500 text-sm leading-relaxed font-light">
                {`Jaipur's premier export house. We specialize in blending traditional aesthetics
                with modern global fashion trends.`}
              </p>

              {/* SOCIAL ICONS (NOW WORKING) */}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((item) => {
                  const Icon = SOCIAL_ICON_MAP[item.key];

                  return (
                    <Link
                      key={item.key}
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-stone-100 text-stone-600 hover:bg-[#C29043] hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C29043]" />
                <h3 className="text-stone-900 font-bold text-sm uppercase tracking-[0.2em]">
                  Explore
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'All Products', href: '/all-products' },
                  { label: 'Blogs', href: '/blogs' },
                  { label: 'About Us', href: '/about-us' },
                  { label: 'Contact Us', href: '/contact-us' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-stone-500 font-normal hover:text-[#C29043] transition-colors text-sm  flex items-center group"
                    >
                      <p className="w-0  group-hover:w-4 transition-all duration-300 h-[1px] bg-[#C29043] mr-0 group-hover:mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C29043]" />
                <h3 className="text-stone-900 font-bold text-sm uppercase tracking-[0.2em]">
                  Contact
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <Phone size={14} className="mt-1 text-[#C29043]" />
                  <span className="text-sm text-stone-600 font-medium">
                    {getSetting('contact_number', '+91 7427873957')}
                  </span>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail size={14} className="mt-1 text-[#C29043]" />
                  <span className="text-sm text-stone-600 font-medium break-all">
                    {getSetting('office_mail_address', 'info@vastraexports.com')}
                  </span>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin size={14} className="mt-1 text-[#C29043]" />
                  <span className="text-sm text-stone-600 leading-relaxed font-medium line-clamp-2">
                    {getSetting('office_address', 'Jaipur, Rajasthan')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="w-full bg-[#C29043] py-5 rounded-t-[2.5rem] text-center mt-6">
          <p className="text-white text-[11px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} VASTRA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
