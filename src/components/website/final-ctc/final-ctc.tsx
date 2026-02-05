'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTopLoader } from 'nextjs-toploader';
import React from 'react';

export function FinalCtc() {
  const router = useRouter();
  const { start } = useTopLoader();
  return (
    <section className="relative max-w-7xl mx-auto  lg:py-16 py-5  overflow-hidden">
      <div className=" px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-5 items-center">
        {/* Text Content Area */}
        <div className="z-10 order-2 lg:order-1">
          {/* <span
            className="uppercase tracking-[0.3em] text-xs mb-4 block font-bold"
            style={{ color: '#cc9547' }}
          >
            Work With Us
          </span> */}

          <h2 className="text-2xl md:text-4xl font-serif text-slate-900 md:mb-6 mb-1 leading-tight lg:mt-0 md:mt-8 mt-0">
            Get Closer to Your Brand Launch
            <br />
            {/* <span className="italic font-light">Great Together</span> */}
          </h2>
          <p className="text-base md:text-lg text-slate-600 md:mb-8 mb-5 max-w-xl leading-relaxed">
            Build an unbeatable brand image and get ready for a seamless digital transformation in
            business. Connect with our team to get premium-grade software and app solutions.
          </p>
          <Button
            onClick={() => {
              start();
              router.push(`/contact-us`);
            }}
          >
            Discuss Your Requirements
            {/* Moving Arrow */}
            <ArrowRight size={20} strokeWidth={2.5} className="animate-horizontal-bounce" />
          </Button>
        </div>

        {/* Fixed Image Area */}
        <div className="relative order-1 lg:order-2 flex justify-end items-center">
          {/* Main Image Container */}
          <div className="relative z-20 w-full max-w-[500px] overflow-hidden rounded-lg shadow-xl border-4 border-white">
            <img
              src="/Wha.jpeg"
              alt="Design Process"
              className="w-full h-auto block" // h-auto se crop nahi hoga
            />
          </div>

          {/* Overlapping Secondary Image - Adjusted for better visibility */}
          <div className="absolute -bottom-10 -left-6 z-30 w-1/2 overflow-hidden shadow-2xl rounded-lg border-4 border-white hidden md:block">
            <img src="/WhatsApsss.jpeg" alt="Finished Product" className="w-full h-auto block" />
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes horizontal-bounce {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
        }
        .animate-horizontal-bounce {
          animation: horizontal-bounce 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
