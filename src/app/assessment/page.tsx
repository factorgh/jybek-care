import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Care Assessment | Jybek Home Care',
  description:
    'Get personalized care recommendations. Free, no-obligation care matching service.',
};

/**
 * Assessment page - Redirects to Find Care form
 */
export default function AssessmentPage() {
  redirect('/find-care');
}
