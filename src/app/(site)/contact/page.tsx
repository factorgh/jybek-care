import type { Metadata } from 'next';
import { ContactHero } from './components/ContactHero';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { FAQ } from './components/FAQ';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Jybek Home Care. We\'re here to help you find the right care for your loved ones.',
};

/**
 * Contact page - Contact form, info, and FAQ
 */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}

