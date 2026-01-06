import type { Metadata } from 'next';
import { ServicesHero } from './components/ServicesHero';
import { ServicesList } from './components/ServicesList';
import { CTA } from '@/components/marketing';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our comprehensive care services including in-home care, assisted living, memory care, skilled nursing, and more.',
};

/**
 * Services page - Detailed breakdown of all care services
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CTA />
    </>
  );
}

