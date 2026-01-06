import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from 'lucide-react';
import { Button, Input } from '@/components/ui';

// Footer navigation sections
const footerLinks = {
  findCare: {
    title: 'Find Jybek Care',
    links: [
      { label: 'Jybek In-Home Care', href: '/find-care?type=in-home' },
      { label: 'Jybek Assisted Living', href: '/find-care?type=assisted-living' },
      { label: 'Jybek Memory Care', href: '/find-care?type=memory-care' },
      { label: 'Jybek Skilled Nursing', href: '/find-care?type=nursing-home' },
      { label: 'Jybek Respite Care', href: '/find-care?type=respite' },
      { label: 'Jybek Care Assessment', href: '/assessment' },
    ],
  },
  services: {
    title: 'Jybek Services',
    links: [
      { label: 'Jybek Personal Care', href: '/services#personal-care' },
      { label: 'Jybek Companion Care', href: '/services#companion-care' },
      { label: 'Jybek Memory Care', href: '/services#specialized-care' },
      { label: 'Jybek Skilled Nursing', href: '/services#skilled-nursing' },
      { label: 'Jybek Respite Care', href: '/services#respite-care' },
      { label: 'Jybek Assisted Living', href: '/services#assisted-living' },
    ],
  },
  resources: {
    title: 'Jybek Resources',
    links: [
      { label: 'All Resources', href: '/resources' },
      { label: 'Jybek Articles', href: '/resources/articles' },
      { label: 'Jybek Hire', href: '/resources/hire' },
    ],
  },
  company: {
    title: 'About Jybek',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Contact Jybek', href: '/contact' },
    ],
  },
};

// Social media links
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

/**
 * Main footer component with newsletter signup and navigation links
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay informed with caregiving tips
              </h3>
              <p className="text-gray-400 mb-4 lg:mb-0">
                Get weekly articles, resources, and support for your caregiving journey.
              </p>
            </div>
            <div className="lg:w-1/2 lg:max-w-md">
              <form className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-brand-500"
                />
                <Button
                  type="submit"
                  variant="primary"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo/jybek_logo.webp"
                alt="Jybek Home Care"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Connecting families with trusted caregivers. Compassionate, 
              professional home care for your loved ones.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:+1 888-717-5009"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-400 transition-colors"
              >
                <Phone className="h-5 w-5 text-brand-500" />
                +1 888-717-5009
              </a>
              <a
                href="mailto:info@jybekhomecares.com"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-400 transition-colors"
              >
                <Mail className="h-5 w-5 text-brand-500" />
                info@jybekhomecares.com
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                <span>
                  123 Care Street, Suite 100
                  <br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Jybek Home Care. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-500">
                Made with <Heart className="inline h-4 w-4 text-red-500" /> for families
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

