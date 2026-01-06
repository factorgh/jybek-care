'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  UserCheck, 
  Heart,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';

// Process steps
const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Tell Us Your Needs',
    description:
      'Share your care requirements through our quick assessment or speak with a care advisor.',
    color: 'from-brand-500 to-brand-600',
    iconBg: 'bg-brand-500',
  },
  {
    number: '2',
    icon: UserCheck,
    title: 'Get Matched',
    description:
      'We match you with pre-screened, background-checked caregivers who fit your needs.',
    color: 'from-teal-500 to-teal-600',
    iconBg: 'bg-teal-500',
  },
  {
    number: '3',
    icon: Heart,
    title: 'Start Receiving Care',
    description:
      'Meet your caregiver, establish a care plan, and enjoy peace of mind.',
    color: 'from-rose-500 to-rose-600',
    iconBg: 'bg-rose-500',
  },
];

/**
 * Clean, professional How It Works section
 */
export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3"
          >
            How It Works
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Finding Care Made{' '}
            <span className="text-brand-600">Simple</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Three easy steps to connect with trusted caregivers and start receiving 
            quality care for your loved ones.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-200 via-teal-200 to-rose-200 dark:from-brand-800 dark:via-teal-800 dark:to-rose-800" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Icon Container */}
                <div className="relative inline-block mb-6">
                  <motion.div 
                    className={`w-[88px] h-[88px] rounded-2xl ${step.iconBg} flex items-center justify-center shadow-lg mx-auto`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, type: 'spring' }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-800"
                  >
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{step.number}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for desktop - between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[72px] -right-6 transform translate-x-1/2 items-center justify-center w-8 h-8 bg-white dark:bg-gray-900 rounded-full shadow-md border border-gray-100 dark:border-gray-800 z-10">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/find-care">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="shadow-lg shadow-brand-500/20"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Get Started Today
              </Button>
            </motion.div>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Free consultation • No obligation • Available 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}
