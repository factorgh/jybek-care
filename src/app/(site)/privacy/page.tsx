import type { Metadata } from 'next';
import { Shield } from 'lucide-react';
import Link from 'next/link';
import { PrivacyPolicyContent } from '@/components/marketing/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jybek Home Care',
  description:
    'Privacy Policy for Jybek HomeCare Group LLC – how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-brand-600 dark:text-brand-400" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
            Your privacy matters to us. This policy explains how Jybek HomeCare Group LLC collects, uses, and protects your information.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white dark:bg-gray-950 rounded-3xl p-6 sm:p-10 shadow-soft-xl border border-gray-150 dark:border-gray-900">
          <PrivacyPolicyContent />
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-brand hover:shadow-lg transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
