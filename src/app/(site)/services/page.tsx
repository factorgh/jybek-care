import type { Metadata } from 'next';
import { ServicesHero } from './components/ServicesHero';
import { ServicesList } from './components/ServicesList';
import { VideoSection } from './components/VideoSection';
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
      <VideoSection 
        videoId="FLqi0-4FHuA"
        title="Compassionate Care for Every Family"
        description="Experience the Jybek difference through our specialized home care solutions. We combine advanced healthcare expertise with genuine compassion to ensure your loved ones receive the highest standard of care in the comfort of their own home."
      />
      <ServicesList />
      <CTA />
    </>
  );
}

