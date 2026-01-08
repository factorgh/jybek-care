import { Hero, Services, Stats, HowItWorks, Testimonials, CTA, ImageGallery } from '@/components/marketing';

/**
 * Home page - Main marketing landing page
 * Combines all marketing sections for a comprehensive overview
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ImageGallery />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}

