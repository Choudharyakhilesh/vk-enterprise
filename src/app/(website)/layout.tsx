// app/(website)/layout.tsx
'use client';

import { ReactNode } from 'react';
import { Header } from '@/components/website/comman/header';
import { VKFooter } from '@/components/website/footer/VKFooter';
import NextTopLoader from 'nextjs-toploader';
import StickyDrawer from '@/components/website/inquiry-form/sticky-drawer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader showSpinner={false} color="#cc9547" />
      {/* <div className="side-padding"></div> */}
      <div className="max-w-8xl mx-auto">
        <Header />
        <StickyDrawer />
        {children}
        <VKFooter />
      </div>
    </>
  );
}
