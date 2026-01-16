import type { Metadata } from "next";
import { Shield, Cookie, Eye, Lock, Users, Database } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Jybek Home Care",
  description:
    "Learn how Jybek Home Care protects your privacy and handles your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-brand-600 dark:text-brand-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Jybek Home Care is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our
              home care services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Information We Collect
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Name and contact information (phone, email)</li>
                  <li>Address and location data</li>
                  <li>Demographic information</li>
                  <li>Health and care preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Technical Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Cookies and similar technologies</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                How We Use Your Information
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Service Delivery
                </h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Connect you with qualified caregivers</li>
                  <li>• Coordinate care services</li>
                  <li>• Process payments and billing</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Improvement & Marketing
                </h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Improve our services</li>
                  <li>• Personalize your experience</li>
                  <li>• Send relevant communications</li>
                  <li>• Analyze usage patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Cookies and Tracking Technologies
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Essential Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Required for basic website functionality and security. These
                  cannot be disabled.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Help us understand how visitors interact with our website to
                  improve user experience.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Marketing Cookies
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Used to deliver relevant advertisements and measure marketing
                  effectiveness.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Data Protection and Security
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure data storage systems</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
              <li>Compliance with healthcare privacy regulations</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Your Privacy Rights
              </h2>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Access and Correction
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You can request access to or correction of your personal
                  information.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Data Portability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You can request a copy of your data in a machine-readable
                  format.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Deletion
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You can request deletion of your personal information, subject
                  to legal obligations.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have questions about this Privacy Policy or want to
              exercise your privacy rights, please contact us:
            </p>

            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>
                <strong>Email:</strong> privacy@jybekhomecares.com
              </p>
              <p>
                <strong>Phone:</strong> +1 888-717-5009
              </p>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
