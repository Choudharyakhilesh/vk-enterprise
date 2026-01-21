// app/(website)/layout.tsx
'use client';

import { ReactNode } from 'react';
import { Header } from '@/components/website/comman/header';
import { VKFooter } from '@/components/website/footer/VKFooter';
import NextTopLoader from 'nextjs-toploader';
import StickyDrawer from '@/components/website/inquiry-form/sticky-drawer';
import { Toaster } from '@/components/ui/sonner';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader showSpinner={false} color="#cc9547" />
      {/* <div className="side-padding"></div> */}
      <div className="max-w-8xl mx-auto">
        <Header />
        <StickyDrawer />
        <Toaster
          richColors
          position="bottom-left" // ✅ "top-right" ki jagah "bottom-left" kar dein
        />
        {children}
        <VKFooter />
      </div>
    </>
  );
}
