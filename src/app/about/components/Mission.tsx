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
              Our Story
            </span>
            <h2 className="text-gray-900 dark:text-white mb-6">
              Built on a Foundation of Care
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Jybek Home Care was founded in 2015 by a team of healthcare professionals 
                who witnessed firsthand the challenges families face when seeking quality 
                care for their loved ones.
              </p>
              <p>
                After years of working in hospitals and care facilities, our founders 
                recognized that the most meaningful care happens at home—where people 
                feel safe, comfortable, and surrounded by what they love.
              </p>
              <p>
                Today, we&apos;ve helped over 50,000 families find trusted caregivers who 
                provide not just assistance, but genuine companionship and dignity to 
                those they serve.
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

