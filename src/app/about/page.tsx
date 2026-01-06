import type { Metadata } from 'next';
import { AboutHero } from './components/AboutHero';
import { Mission } from './components/Mission';
import { Team } from './components/Team';
import { Values } from './components/Values';
import { CTA } from '@/components/marketing';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Jybek Home Care\'s mission to provide compassionate, professional home care services to families across the nation.',
};

/**
 * About page - Company information, mission, team, and values
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Team />
      <CTA />
    </>
  );
}

