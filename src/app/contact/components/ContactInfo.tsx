'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

// Contact methods
const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Speak with a care advisor',
    value: '+1 888-717-5009',
    href: 'tel:+1 888-717-5009',
    availability: 'Available 24/7',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us a message',
    value: 'info@jybekhomecares.com',
    href: 'mailto:info@jybekhomecares.com',
    availability: 'Response within 24 hours',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our team',
    value: 'Start a conversation',
    href: '#',
    availability: 'Available 8am-8pm EST',
  },
];

// Office locations
const offices = [
  {
    city: 'San Francisco',
    address: '123 Care Street, Suite 100',
    state: 'CA 94105',
  },
  {
    city: 'New York',
    address: '456 Health Avenue, Floor 12',
    state: 'NY 10001',
  },
  {
    city: 'Chicago',
    address: '789 Wellness Blvd, Suite 200',
    state: 'IL 60601',
  },
];

/**
 * Contact information sidebar
 */
export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Contact methods */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h3>
        <div className="space-y-4">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              variant="default"
              padding="md"
              hover
              className="group"
            >
              <a href={method.href} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-200 dark:group-hover:bg-brand-800/30 transition-colors">
                  <method.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 transition-colors">
                    {method.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {method.description}
                  </p>
                  <p className="font-medium text-brand-600">
                    {method.value}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {method.availability}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>

      {/* Office locations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Our Offices
        </h3>
        <Card variant="default" padding="md">
          <div className="space-y-4">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className={`flex items-start gap-3 ${
                  index !== offices.length - 1
                    ? 'pb-4 border-b border-gray-100 dark:border-gray-800'
                    : ''
                }`}
              >
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {office.city}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {office.address}
                    <br />
                    {office.state}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Hours */}
      <Card variant="elevated" padding="md" className="bg-brand-50 dark:bg-brand-900/20 border-brand-100 dark:border-brand-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-100 dark:bg-brand-800/50 rounded-xl flex items-center justify-center">
            <Clock className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              24/7 Care Support
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Our care advisors are always available
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

