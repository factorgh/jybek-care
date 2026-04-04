'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

/**
 * Founder's vision section for the homepage
 */
export function FounderVision() {
  return (
    <section className="section bg-brand-50 dark:bg-brand-900/10 overflow-hidden relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white dark:border-gray-800">
              <Image
                src="/teams/ceo.png"
                alt="Peter Martins Akwei"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-brand-200 dark:bg-brand-800/20 rounded-3xl -z-0" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <Quote className="w-16 h-16 text-brand-200 dark:text-brand-800 mb-6" />
            
            <h2 className="text-gray-900 dark:text-white mb-6 leading-tight">
              A Personal Journey of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-rose-500">
                Purpose & Excellence
              </span>
            </h2>

            <div className="space-y-6 text-xl text-gray-700 dark:text-gray-300 italic font-medium leading-relaxed mb-8">
              <p>
                &ldquo;Peter Martins Akwei is the visionary behind Jybek HomeCare Group, combining expertise in risk management and real-world caregiving experience to transform home care delivery. Inspired by personal caregiving for his mother, he is committed to building a system that empowers caregivers and delivers compassionate, reliable support to seniors. Through innovation and purpose-driven leadership, Peter is redefining care with structure, dignity, and excellence.&rdquo;
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">Peter Martins Akwei, MSc</p>
              <p className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Founder & Managing Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
