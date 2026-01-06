'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// FAQ data
const faqs = [
  {
    question: 'How quickly can I get care started?',
    answer:
      'In most cases, we can match you with a caregiver within 24-48 hours. For urgent needs, we offer same-day placement when available. Our care advisors will work with your timeline to ensure a smooth transition.',
  },
  {
    question: 'How are caregivers screened?',
    answer:
      'All caregivers undergo comprehensive background checks including criminal history, sex offender registry, and reference verification. We also verify certifications, conduct in-person interviews, and require ongoing training.',
  },
  {
    question: 'What if the caregiver isn\'t a good fit?',
    answer:
      'Your satisfaction is our priority. If you\'re not happy with your caregiver match, we\'ll work immediately to find a better fit at no additional cost. We want to ensure the best possible care relationship.',
  },
  {
    question: 'How much does home care cost?',
    answer:
      'Care costs vary based on location, type of care needed, and hours required. We provide free consultations to assess your needs and give you a transparent cost estimate. Many families are surprised at how affordable quality care can be.',
  },
  {
    question: 'Do you accept insurance or Medicare?',
    answer:
      'We work with long-term care insurance providers and can help you navigate benefits. While traditional Medicare doesn\'t cover custodial care, we can help explore options like Medicaid, VA benefits, and other assistance programs.',
  },
  {
    question: 'Can I change the care schedule?',
    answer:
      'Absolutely. We understand that care needs evolve. You can adjust schedules, increase or decrease hours, or modify services as needed. Our flexible approach ensures care always matches your current situation.',
  },
];

/**
 * FAQ accordion component
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about our care services.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  'w-full flex items-center justify-between p-5 text-left rounded-xl transition-all duration-200',
                  'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
                  'hover:border-brand-300 dark:hover:border-brand-700',
                  openIndex === index && 'border-brand-500 dark:border-brand-600'
                )}
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180 text-brand-600'
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-b-xl border-x border-b border-gray-200 dark:border-gray-700 -mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

