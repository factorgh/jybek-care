import type { Metadata } from 'next';
import { PrivacyPolicyContent } from '@/components/marketing/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jybek Home Care',
  description:
    'Privacy Policy for Jybek HomeCare Group LLC – how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}
