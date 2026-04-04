import { Hero, Services, Stats, HowItWorks, Testimonials, CTA, ImageGallery, FounderVision, CareConnect } from '@/components/marketing';

/**
 * Home page - Main marketing landing page
 * Combines all marketing sections for a comprehensive overview
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CareConnect />
      <ImageGallery />
      <Stats />
      <HowItWorks />
      <FounderVision />
      <Testimonials />
      <CTA />
    </>
  );
}

