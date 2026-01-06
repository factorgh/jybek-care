'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Home,
  Heart,
  Users,
  FileText,
  HelpCircle,
  Search,
} from 'lucide-react';

// Services categories for mega menu
const servicesMenu = {
  'Jybek Care Levels': [
    { label: 'Jybek Companion Care', href: '/services/companion-care' },
    { label: 'Jybek Personal Care', href: '/services/personal-care' },
    { label: 'Jybek Special Advance Care', href: '/services/special-advance-care' },
  ],
  'Jybek Frequent Care': [
    { label: 'Hourly Care', href: '/services/hourly-care' },
    { label: '24-Hour Care', href: '/services/24-hour-care' },
    { label: 'Live-in Care', href: '/services/live-in-care' },
  ],
  'Jybek Home Care': [
    { label: 'Hospice Care Support', href: '/services/hospice-care' },
    { label: 'Palliative Care Support', href: '/services/palliative-care' },
    { label: 'Fall Prevention', href: '/services/fall-prevention' },
    { label: 'Low Vision Care', href: '/services/low-vision' },
    { label: 'Respite Care', href: '/services/respite-care' },
    { label: "Alzheimer's & Dementia", href: '/services/alzheimers-dementia' },
    { label: 'Chronic Conditions', href: '/services/chronic-conditions' },
  ],
  'Jybek Support': [
    { label: 'Transportation', href: '/services/transportation' },
    { label: 'Transitional Care', href: '/services/transitional-care' },
    { label: 'Couples Care', href: '/services/couples-care' },
    { label: 'Elderly Support', href: '/services/elderly-support' },
    { label: 'Adults under 65', href: '/services/adults-under-65' },
    { label: 'Veterans Care', href: '/services/veterans-care' },
    { label: 'Facility Support', href: '/services/facility-support' },
  ],
  'Jybek Programs': [
    { label: 'Jybek Return & Recovery', href: '/services/return-recovery' },
    { label: 'Jybek Stability Pathways', href: '/services/stability-pathways' },
    { label: 'Jybek Thrivelife', href: '/services/thrivelife' },
  ],
};

// Navigation items
const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Find Jybek Care', href: '/find-care', icon: Search, highlight: true },
  {
    label: 'Jybek Services',
    href: '/services',
    icon: Heart,
    megaMenu: true,
  },
  { label: 'About Jybek', href: '/about', icon: Users },
  {
    label: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { label: 'All Resources', href: '/resources' },
      { label: 'Jybek Articles', href: '/resources/articles' },
      { label: 'Jybek Hire', href: '/resources/hire' },
    ],
  },
  { label: 'Contact', href: '/contact', icon: HelpCircle },
];

/**
 * Main navigation component with responsive mobile menu
 * Includes scroll-based styling and dropdown menus
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle dropdown with delay to allow mouse movement
  const handleDropdownEnter = useCallback((label: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    // Add delay before closing to allow mouse to reach dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      {/* Top bar with contact info */}
      <div
        className={cn(
          'hidden lg:block border-b transition-all duration-300',
          isScrolled
            ? 'border-gray-100 dark:border-gray-800'
            : 'border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <p className={cn(
              'transition-colors duration-300',
              isScrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white/80'
            )}>
              Compassionate care for your loved ones
            </p>
            <a
              href="tel:+1 888-717-5009"
              className={cn(
                'flex items-center gap-2 font-semibold transition-colors duration-300',
                isScrolled
                  ? 'text-brand-600 hover:text-brand-700'
                  : 'text-white hover:text-brand-200'
              )}
            >
              <Phone className="h-4 w-4" />
              +1 888-717-5009
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo/jybek_logo.webp"
              alt="Jybek Home Care"
              width={150}
              height={50}
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => (item.children || item.megaMenu) && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                    pathname === item.href
                      ? isScrolled
                        ? 'text-brand-600 bg-brand-50 dark:bg-brand-900/30'
                        : 'text-white bg-white/20'
                      : isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-brand-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                      : 'text-white/90 hover:text-white hover:bg-white/10',
                    item.highlight && 'font-semibold'
                  )}
                >
                  {item.label}
                  {(item.children || item.megaMenu) && (
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        activeDropdown === item.label && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Regular Dropdown menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft-xl border border-gray-100 dark:border-gray-700 py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mega Menu for Services - Rendered via portal-like fixed positioning */}
                {item.megaMenu && activeDropdown === item.label && (
                  <div 
                    className="fixed inset-x-0 top-[112px] z-50 flex justify-center pt-2"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="w-full max-w-6xl mx-auto px-4"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6">
                        <div className="grid grid-cols-5 gap-6">
                          {Object.entries(servicesMenu).map(([category, items]) => (
                            <div key={category}>
                              <h3 className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-3">
                                {category}
                              </h3>
                              <ul className="space-y-1">
                                {items.map((menuItem) => (
                                  <li key={menuItem.label}>
                                    <Link
                                      href={menuItem.href}
                                      className="block py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                                    >
                                      {menuItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                          <Link
                            href="/services"
                            className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2 rounded-xl transition-colors duration-200',
              isScrolled
                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/10'
            )}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-gray-100 dark:border-gray-800 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-xl text-base transition-colors duration-150',
                        pathname === item.href
                          ? 'text-brand-600 bg-brand-50 dark:bg-brand-900/30'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-12 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.megaMenu && (
                      <div className="ml-8 mt-2 space-y-3">
                        {Object.entries(servicesMenu).map(([category, items]) => (
                          <div key={category}>
                            <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1 px-4">
                              {category}
                            </h4>
                            <div className="space-y-0.5">
                              {items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-4 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
