'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Factory,
  PackageCheck,
  Palette,
  Scissors,
  SearchCheck,
  Send,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Design Discussion',
    description:
      'We understand your vision, product category, target market and design requirements.',
    icon: Palette,
  },
  {
    number: '02',
    title: 'Tech Pack Review',
    description: 'Every measurement, construction detail and specification is carefully reviewed.',
    icon: ClipboardCheck,
  },
  {
    number: '03',
    title: 'Sampling',
    description:
      'Initial samples are developed and refined until the required fit and finish are achieved.',
    icon: Scissors,
  },
  {
    number: '04',
    title: 'Fabric Sourcing',
    description: 'Suitable fabrics, trims and accessories are sourced based on quality and budget.',
    icon: Boxes,
  },
  {
    number: '05',
    title: 'Production',
    description: 'Approved designs move into production with close monitoring at every stage.',
    icon: Factory,
  },
  {
    number: '06',
    title: 'Quality Inspection',
    description:
      'Each garment is inspected for stitching, measurements, finishing and consistency.',
    icon: SearchCheck,
  },
  {
    number: '07',
    title: 'Packing',
    description:
      'Finished products are carefully pressed, labelled and packed as per your requirements.',
    icon: PackageCheck,
  },
  {
    number: '08',
    title: 'Dispatch',
    description:
      'Orders are securely dispatched with the required documents and shipment coordination.',
    icon: Send,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut' as const,
    },
  },
};

export default function HowWeWork() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-5">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#c99743]/8 blur-[100px]" />

        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#c99743]/8 blur-[110px]" />

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(183,131,50,0.25) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Large background text */}
        <div className="absolute left-1/2 top-24 hidden -translate-x-1/2 select-none whitespace-nowrap font-serif text-[130px] text-[#c29142]/[0.025] lg:block">
          OUR PROCESS
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-3">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#b78332]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b78332] sm:text-[11px]">
              From Concept to Creation
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#b78332]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#252525] sm:text-4xl lg:text-[44px]">
            Your Vision, Our Process,
            <br className="hidden sm:block" />{' '}
            <span className="italic text-[#c29142]">Perfectly Delivered</span>
          </h2>

          {/* <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6c6c6c] sm:text-base">
            From the first design conversation to final dispatch, every stage is managed with
            precision, transparency and care.
          </p> */}
        </motion.div>

        {/* Process cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            const showArrow = index !== 3 && index !== 7;

            return (
              <motion.article
                key={step.number}
                variants={cardVariants}
                className="group relative h-full"
              >
                {/* Connecting arrow */}
                {showArrow && (
                  <div className="pointer-events-none absolute -right-[17px] top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e4d1ae] bg-[#faf9f6] shadow-sm">
                      <ArrowRight size={14} strokeWidth={1.5} className="text-[#b78332]" />
                    </div>
                  </div>
                )}

                <div
                  className={`relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[22px] border p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#cba45e] group-hover:shadow-[0_22px_55px_rgba(71,53,24,0.13)] ${
                    index % 2 === 0 ? 'border-[#ebe4d8] bg-white' : 'border-[#e8dfcf] bg-[#fdfbf7]'
                  }`}
                >
                  {/* Animated top line */}
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#a86f20] via-[#dbb76e] to-[#a86f20] transition-all duration-500 group-hover:w-full" />

                  {/* Corner glow */}
                  <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#c29142]/0 blur-2xl transition-all duration-500 group-hover:bg-[#c29142]/10" />

                  {/* Large step number */}
                  <span className="pointer-events-none absolute right-4 top-2 select-none font-serif text-[58px] leading-none text-[#c29142]/[0.08] transition-all duration-500 group-hover:text-[#c29142]/[0.14]">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-7 w-fit">
                    <div className="absolute inset-0 scale-125 rounded-full border border-[#c29142]/15 transition-all duration-500 group-hover:scale-150 group-hover:border-[#c29142]/25" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#dec79d] bg-[#faf7f0] shadow-[0_6px_20px_rgba(105,75,28,0.08)] transition-all duration-500 group-hover:rotate-[8deg] group-hover:border-[#c29142] group-hover:bg-[#c29142] group-hover:shadow-[0_10px_25px_rgba(194,145,66,0.28)]">
                      <Icon
                        aria-hidden="true"
                        size={22}
                        strokeWidth={1.5}
                        className="text-[#b78332] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>
                  </div>

                  {/* Step label */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b78332]">
                      Step {step.number}
                    </span>

                    <span className="h-px w-6 bg-[#d9bd8a]" />
                  </div>

                  <h3 className="font-serif text-[21px] leading-tight text-[#292929] transition-colors duration-300 group-hover:text-[#a86f20]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#707070]">{step.description}</p>

                  {/* Bottom progress */}
                  <div className="mt-auto pt-7">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c29142]" />

                      <div className="h-px flex-1 overflow-hidden bg-[#eadfcd]">
                        <div className="h-full w-0 bg-[#c29142] transition-all duration-700 group-hover:w-full" />
                      </div>

                      <span className="font-serif text-xs text-[#b78332]">{index + 1}/8</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
