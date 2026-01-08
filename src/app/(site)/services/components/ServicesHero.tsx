'use client';

import { motion } from 'framer-motion';

/**
 * Services page hero section
 */
export function ServicesHero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Care Services for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-accent-teal">
              Every Need
            </span>
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            From daily assistance to specialized medical care, our comprehensive 
            services are designed to support your loved ones at every stage of life.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            className="dark:fill-gray-950"
          />
        </svg>
      </div>
    </section>
  );
}
