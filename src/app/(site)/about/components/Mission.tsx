'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { Card } from '@/components/ui';

/**
 * Mission and vision section
 */
export function Mission() {
  return (
    <section className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">
              About the Founder
            </span>
            <h2 className="text-gray-900 dark:text-white mb-6">
              Peter Martin Akwei, MSc
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Peter Martin Akwei is an accomplished professional with a Master&apos;s degree in Risk Management and extensive experience in enterprise and credit risk, developed during his time in the United Kingdom. His background has equipped him with a strong foundation in operational structure, compliance, and strategic decision-making.
              </p>
              <p>
                Peter&apos;s transition into the home care industry was driven by personal experience. While caring for his mother, he encountered firsthand the emotional and practical challenges families face when seeking quality care. This experience sparked a deep commitment to improving how care is delivered.
              </p>
              <p>
                To fully understand the industry, Peter worked hands-on in various in-home care environments, taking on shifts at different levels of service. This ground-level experience provided him with valuable insight into caregiver responsibilities, client expectations, and system gaps within the industry.
              </p>
              <p>
                Today, Peter leads Jybek HomeCare Group with a clear vision: to transform home care through risk-informed systems, technology integration, and compassionate service delivery. His approach focuses on building a reliable and scalable model that supports both caregivers and clients.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card variant="elevated" padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center shrink-0">
                  <Target className="w-7 h-7 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To make quality home care accessible to every family, connecting 
                    them with compassionate caregivers who enhance their loved ones&apos; 
                    quality of life.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="elevated" padding="lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-accent-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Eye className="w-7 h-7 text-accent-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    A world where aging in place is a dignified choice, where every 
                    senior has access to care that honors their independence and 
                    enriches their daily life.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

