'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Textarea, Card, Modal } from '@/components/ui';
import { CheckCircle, Shield } from 'lucide-react';
import { PrivacyPolicyContent } from '@/components/marketing/PrivacyPolicyContent';

/**
 * Contact form component with A2P compliant consent checks, matching the desktop lead form mockup
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
        Contact Jybek HomeCare
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Homepage lead/contact form
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields (Row of 3 inputs: Last, First, Middle) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input
            label="Last Name"
            placeholder="e.g. Smith"
            required
          />
          <Input
            label="First Name"
            placeholder="e.g. John"
            required
          />
          <Input
            label="Middle Name"
            placeholder="e.g. Robert"
          />
        </div>

        {/* Email Address */}
        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
        />

        {/* Phone Number */}
        <Input
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          required
        />

        {/* Message */}
        <Textarea
          label="Message"
          placeholder="Tell us how we can help you..."
          rows={5}
          required
        />

        {/* A2P Consent Checkbox Panel */}
        <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 space-y-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="sms-form-consent"
              required
              className="mt-1 w-4.5 h-4.5 rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
            />
            <label htmlFor="sms-form-consent" className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed cursor-pointer select-none">
              By checking this box, you are agreeing to receive{' '}
              <span className="font-bold bg-yellow-100 dark:bg-yellow-950/40 text-gray-900 dark:text-white px-1 py-0.5 rounded">
                appointment, scheduling, and care-coordination
              </span>{' '}
              text messages from{' '}
              <span className="font-bold bg-yellow-100 dark:bg-yellow-950/40 text-gray-900 dark:text-white px-1 py-0.5 rounded">
                Jybek HomeCare
              </span>
              . Message frequency varies. Message and data rates may apply. See our{' '}
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(true)}
                className="text-brand-600 dark:text-brand-400 font-semibold hover:underline"
              >
                Privacy Policy
              </button>{' '}
              and{' '}
              <a href="#terms" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">
                Terms &amp; Conditions
              </a>
              . Message HELP for assistance. Reply STOP to any message to opt out.
            </label>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-2xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 pt-3 border-t border-gray-150 dark:border-gray-800/80">
            <button type="button" onClick={() => setIsPrivacyOpen(true)} className="hover:underline">
              Privacy Policy
            </button>
            <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">•</span>
            <a href="#terms" className="hover:underline">
              Terms &amp; Conditions
            </a>
            <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">•</span>
            <a href="#sms-terms" className="hover:underline">
              SMS Terms of Service
            </a>
          </div>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          size="lg"
          fullWidth
          isLoading={isLoading}
          className="py-4 font-extrabold tracking-widest text-sm uppercase transition-all duration-200"
        >
          SUBMIT / SEND
        </Button>

        {/* Bottom links footer */}
        <div className="text-center text-3xs text-gray-450 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800/60 space-x-3.5">
          <span>© Jybek HomeCare</span>
          <span>|</span>
          <button type="button" onClick={() => setIsPrivacyOpen(true)} className="hover:underline text-brand-600/80 dark:text-brand-550 font-medium">
            Privacy Policy
          </button>
          <span>•</span>
          <a href="#terms" className="hover:underline text-brand-600/80 dark:text-brand-550 font-medium">
            Terms &amp; Conditions
          </a>
          <span>•</span>
          <a href="#sms-terms" className="hover:underline text-brand-600/80 dark:text-brand-550 font-medium">
            SMS Terms of Service
          </a>
        </div>
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
