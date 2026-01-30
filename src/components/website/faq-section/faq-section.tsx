'use client';

import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const faqs: FAQItem[] = [
    {
      question: '1. What is the production timeline for bulk orders?',
      answer:
        'Although, Bulk production timeline depends on the order size, desired detailing, and level of customization. But on an estimate, it can take 25-45 working days to execute the order. However, we can share a clear timeline only after gathering order requirements from you.',
    },
    {
      question: '2. What fabric options do you provide for each clothing category?',
      answer:
        'Vastra is a custom clothing manufacturer, and therefore, we offer a wide range of fabrics. From cotton to linen, silk, viscose, crepe, georgette, rayon, satin, silk, and silk blends, we offer all types of skin-friendly and summer-friendly fabric options.',
    },
    {
      question: '3. What is the average defect rate, and how do you manage returns?',
      answer:
        'Our defect rate usually remains below 1% as we conduct very strict multi-stage quality checks. If our team finds any genuine defect in the products, then we immediately replace the item or compensate as per our export-quality return policy. Client satisfaction and top-quality product delivery are our primary goals.',
    },
    {
      question: '4. Can you help us create new prints or patterns exclusively for our brand?',
      answer:
        'Yes. Our fashion designers have received their training from top-notch design institutes in India. They are highly skilled in designing exclusive prints, patterns, and embroidery designs as per your brand aesthetics. Our team makes every possible effort to maintain the exclusivity of your brand with unique designs and patterns.',
    },
    {
      question: '5. Do you offer sample pieces? What is the cost of sampling?',
      answer:
        'Yes. At Vastra, you can find the facility of getting customized samples before placing bulk orders. Sampling costs depend on the design and fabric. However, the sampling price remains the same as the price per piece after the order. We will adjust the sample in your bulk order later on.',
    },
    {
      question: '6. Do you offer eco-friendly or sustainable fabric options?',
      answer:
        'Yes, our fabrics are always eco-friendly. We deal in materials like organic cotton, linen, bamboo blends, and also recycled materials. The dyes we use are also organic, skin-friendly, and harmless to the environment.',
    },
    {
      question: '7. Can you replicate a design if we send you reference images?',
      answer:
        'Yes. As Vastra is a custom clothing manufacturer. We can create designs same as the reference images and sketches that you share with us. You can share your preferred designs, prints, and even lookbooks to get 100% customised and refined designs.',
    },
    {
      question: '8. Do you provide size charts, or can we use our own brand’s size chart?',
      answer:
        'For maintaining high quality, we encourage you to use your own size charts. Bring your size chart to us with your measurements, and we will implement the same for your brand. You can use these charts to guide your buyers.',
    },
    {
      question: '9. Can you create plus-size or maternity resortwear?',
      answer:
        'Yes. We can design and manufacture plus-size and maternity resortwear with stretchable fabrics for a comfortable fit so that every woman can enjoy her vacations without worrying about her body type or pregnancy status.',
    },
  ];

  // Sirf 4 dikhane hain ya saare, ye yahan handle hoga
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f9fa] mb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-5">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            FAQs - Do You Have These Queries?
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>

        {/* Accordion List with Transition */}
        <div className="">
          <AnimatePresence initial={false}>
            {displayedFaqs.map((faq, index: number) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  layout // Isse layout shifts smooth hote hain
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="border-b border-gray-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between py-6 text-left focus:outline-none group transition-all"
                  >
                    <span
                      className={`text-lg font-normal transition-colors duration-300 ${
                        isOpen
                          ? 'text-gray-800 hover:text-primary'
                          : 'text-gray-800 group-hover:text-primary'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${isOpen ? 'text-primary' : 'text-gray-400'}`}
                    >
                      <ChevronDown className="w-6 h-6 stroke-[2.5px]" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="pb-8 text-gray-600 text-base leading-relaxed max-w-5xl">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        <div className="mt-12 flex justify-end">
          <Button onClick={() => setShowAll(!showAll)} className="flex gap-2">
            {showAll ? (
              <>
                {' '}
                <Minus className="w-5 h-5" /> SHOW LESS{' '}
              </>
            ) : (
              <>
                {' '}
                <Plus className="w-5 h-5" /> SHOW MORE{' '}
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
