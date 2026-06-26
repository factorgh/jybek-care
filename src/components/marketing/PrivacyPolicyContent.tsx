'use client';

import { Shield, MessageSquare, Mail, Phone, MapPin, Globe, Check } from 'lucide-react';

export function PrivacyPolicyContent() {
  return (
    <div className="space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
      {/* Meta details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-xs sm:text-sm border border-gray-100 dark:border-gray-800">
        <div>
          <span className="block font-semibold text-gray-900 dark:text-white">Company</span>
          <span>Jybek HomeCare Group LLC</span>
        </div>
        <div>
          <span className="block font-semibold text-gray-900 dark:text-white">DBA</span>
          <span>Jybek HomeCare Services</span>
        </div>
        <div>
          <span className="block font-semibold text-gray-900 dark:text-white">Effective Date</span>
          <span>June 19, 2026</span>
        </div>
        <div>
          <span className="block font-semibold text-gray-900 dark:text-white">Last Updated</span>
          <span>June 19, 2026</span>
        </div>
      </div>

      {/* SMS Compliance Callout */}
      <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border-l-4 border-brand-600 dark:border-brand-500 flex gap-4">
        <MessageSquare className="h-6 w-6 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-brand-900 dark:text-brand-300 text-xs uppercase tracking-wider mb-1">
            SMS &amp; Mobile Messaging Disclosure
          </h4>
          <p className="text-gray-900 dark:text-gray-200 font-medium text-sm">
            No mobile opt-in data will be shared with third parties. Message and data rates may apply. Reply STOP to opt out of SMS messages at any time. Reply HELP for assistance.
          </p>
        </div>
      </div>

      {/* 1. Who We Are */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          1. Who We Are
        </h3>
        <p>
          Jybek HomeCare Group LLC (DBA Jybek HomeCare Services) is a non-medical homecare agency located at 44 Bearfoot Rd #200, Northborough, MA 01532. We provide in-home personal care, companion care, respite care, and related homecare services to individuals and families.
        </p>
        <p>
          For questions about this policy, contact us at{' '}
          <a href="mailto:info@jybekhomecares.com" className="text-brand-600 dark:text-brand-400 hover:underline">
            info@jybekhomecares.com
          </a>{' '}
          or call{' '}
          <a href="tel:+18887175009" className="text-brand-600 dark:text-brand-400 hover:underline">
            +1 888-717-5009
          </a>
          .
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          2. Information We Collect
        </h3>
        <p>We collect information you provide directly, including:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Name, address, phone number, and email address</li>
          <li>ZIP code and care service needs</li>
          <li>Health and care-related information needed to deliver our services</li>
          <li>Communications with our team via phone, email, or SMS</li>
          <li>Information submitted through our website contact or assessment forms</li>
        </ul>
        <p>
          We also collect limited technical data such as browser type, pages visited, and IP address through standard website analytics tools.
        </p>
      </section>

      {/* 3. How We Use Your Information */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          3. How We Use Your Information
        </h3>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Provide, coordinate, and improve our homecare services</li>
          <li>Respond to inquiries and schedule consultations</li>
          <li>Send appointment reminders, shift notifications, and care updates via SMS or phone</li>
          <li>Comply with applicable federal and state regulations</li>
          <li>Send care-related newsletters or resources if you have subscribed</li>
        </ul>
      </section>

      {/* 4. SMS Messaging & Mobile Communications */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          4. SMS Messaging &amp; Mobile Communications
        </h3>
        <p>
          By providing your phone number and consenting to receive SMS communications from Jybek HomeCare Services, you agree to receive text messages related to care scheduling, caregiver coordination, appointment reminders, and service updates.
        </p>

        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-150 dark:border-emerald-900/50 flex gap-3 my-4">
          <div className="bg-emerald-500 rounded-full p-1 h-5 w-5 shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5">
            <Check className="h-3 w-3" strokeWidth={3} />
          </div>
          <p className="text-emerald-900 dark:text-emerald-300 font-semibold text-sm">
            No mobile opt-in data will be shared with third parties for marketing or any other purpose.
          </p>
        </div>

        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            <strong>Opt-in:</strong> Consent is obtained verbally or through signed service agreements, or via our website contact forms.
          </li>
          <li>
            <strong>Opt-out:</strong> Reply <strong>STOP</strong> to any SMS message to unsubscribe immediately. You will receive one confirmation message and no further texts.
          </li>
          <li>
            <strong>Help:</strong> Reply <strong>HELP</strong> to any SMS message for assistance, or call +1 888-717-5009.
          </li>
          <li>
            <strong>Frequency:</strong> Message frequency varies based on operational needs.
          </li>
          <li>
            <strong>Rates:</strong> Message and data rates may apply depending on your carrier plan.
          </li>
        </ul>
      </section>

      {/* 5. How We Share Your Information */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          5. How We Share Your Information
        </h3>
        <p>
          We do not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            <strong>Service delivery:</strong> With caregivers and care coordinators to fulfill your care plan
          </li>
          <li>
            <strong>Legal compliance:</strong> When required by law, court order, or government authority
          </li>
          <li>
            <strong>Business operations:</strong> With trusted service providers (payroll, scheduling, IT) who are bound by confidentiality agreements
          </li>
          <li>
            <strong>Safety:</strong> To protect the health or safety of a client, caregiver, or the public
          </li>
        </ul>
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-150 dark:border-emerald-900/50 flex gap-3 my-4">
          <div className="bg-emerald-500 rounded-full p-1 h-5 w-5 shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5">
            <Check className="h-3 w-3" strokeWidth={3} />
          </div>
          <p className="text-emerald-900 dark:text-emerald-300 font-semibold text-sm">
            We never share your mobile opt-in data or phone number with third parties for marketing purposes.
          </p>
        </div>
      </section>

      {/* 6. Data Security */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          6. Data Security
        </h3>
        <p>
          We implement appropriate administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      {/* 7. Your Rights */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          7. Your Rights
        </h3>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information (subject to legal retention requirements)</li>
          <li>Opt out of SMS communications at any time by replying STOP</li>
          <li>Opt out of email newsletters by clicking the unsubscribe link</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:info@jybekhomecares.com" className="text-brand-600 dark:text-brand-400 hover:underline">
            info@jybekhomecares.com
          </a>
          .
        </p>
      </section>

      {/* 8. Cookies & Website Analytics */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          8. Cookies &amp; Website Analytics
        </h3>
        <p>
          Our website uses cookies and standard analytics tools to understand how visitors use the site and improve user experience. You may disable cookies in your browser settings. We do not use tracking technologies to sell your data to advertisers.
        </p>
      </section>

      {/* 9. Children's Privacy */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          9. Children&apos;s Privacy
        </h3>
        <p>
          Our services and website are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us immediately.
        </p>
      </section>

      {/* 10. Changes to This Policy */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
          10. Changes to This Policy
        </h3>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically. Continued use of our services after any changes constitutes acceptance of the updated policy.
        </p>
      </section>

      {/* Contact box */}
      <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-800 space-y-4">
        <h4 className="font-bold text-gray-950 dark:text-white text-base">
          Questions About This Policy?
        </h4>
        <div className="grid gap-3 text-sm">
          <div className="flex gap-3">
            <Shield className="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0" />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Jybek HomeCare Group LLC</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">DBA Jybek HomeCare Services</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0" />
            <span>44 Bearfoot Rd #200, Northborough, MA 01532</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0" />
            <a href="tel:+18887175009" className="hover:underline">
              +1 888-717-5009
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0" />
            <a href="mailto:info@jybekhomecares.com" className="hover:underline">
              info@jybekhomecares.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-brand-600 dark:text-brand-400 shrink-0" />
            <a href="https://jybekhomecares.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              jybekhomecares.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
