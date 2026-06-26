'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Textarea, Select, Card, Modal } from '@/components/ui';
import { Send, CheckCircle, Shield } from 'lucide-react';
import { PrivacyPolicyContent } from '@/components/marketing/PrivacyPolicyContent';

const subjectOptions = [
  { value: 'care-inquiry', label: 'Care Inquiry' },
  { value: 'pricing', label: 'Pricing Information' },
  { value: 'caregiver-application', label: 'Caregiver Application' },
  { value: 'partnership', label: 'Partnership Opportunities' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' },
];

/**
 * Contact form component with validation
 */
export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card variant="elevated" padding="lg" className="text-center">
          <div className="w-20 h-20 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent-emerald" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Message Sent!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for reaching out. A care advisor will contact you within 
            24 hours to discuss your needs.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Send Us a Message
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <Input
            label="First Name"
            placeholder="John"
            required
          />
          <Input
            label="Last Name"
            placeholder="Smith"
            required
          />
        </div>

        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
        />

        <div className="space-y-2">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
          />
          <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
            By providing your phone number, you consent to receive SMS communications from Jybek HomeCare Services related to care scheduling, caregivers, and updates. Message and data rates may apply. Reply STOP to opt out at any time. View our{' '}
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="text-brand-600 dark:text-brand-400 hover:underline font-semibold align-baseline"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>

        <Select
          label="Subject"
          options={subjectOptions}
          placeholder="Select a subject"
          required
        />

        <Textarea
          label="Message"
          placeholder="Tell us how we can help you..."
          rows={5}
          required
        />

        <Button
          type="submit"
          size="lg"
          fullWidth
          isLoading={isLoading}
          rightIcon={<Send className="h-5 w-5" />}
        >
          Send Message
        </Button>
      </form>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        size="xl"
        title={
          <span className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-brand-600 dark:text-brand-400" />
            Privacy Policy | Jybek Home Care
          </span>
        }
      >
        <PrivacyPolicyContent />
      </Modal>
    </motion.div>
  );
}

