import type { Metadata } from 'next';
import { ResourcesContent } from './components/ResourcesContent';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Helpful resources, guides, and information for caregivers and families navigating elder care decisions.',
};

/**
 * Resources page - Educational content and guides
 */
export default function ResourcesPage() {
  return <ResourcesContent />;
}

