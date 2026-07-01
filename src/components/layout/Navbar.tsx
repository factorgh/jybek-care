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
  Shield,
  ChevronRight,
  Sliders,
} from 'lucide-react';

// Services menu categories
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

interface NavItem {
  label: string;
  href: string;
  icon: any;
  highlight?: boolean;
  megaMenu?: boolean;
  children?: { label: string; href: string }[];
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

// Hierarchical Navigation Groups (Option B)
const navGroups: NavGroup[] = [
  {
    title: 'Core Care',
    items: [
      { label: 'Home', href: '/', icon: Home },
      { label: 'Find Jybek Care', href: '/find-care', icon: Search, highlight: true },
      { label: 'Jybek Services', href: '/services', icon: Heart, megaMenu: true },
    ]
  },
  {
    title: 'Resources & Info',
    items: [
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
    ]
  },
  {
    title: 'Company & Compliance',
    items: [
      { label: 'About Jybek', href: '/about', icon: Users },
      { label: 'Contact', href: '/contact', icon: HelpCircle },
      { label: 'Privacy Policy', href: '/privacy', icon: Shield },
    ]
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  // Close mobile navigation drawer on path changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* ========================================================================= */}
      {/* DESKTOP VIEWPORTS (Sticky Left Sidebar)                                   */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex fixed top-0 bottom-0 left-0 w-80 h-screen bg-white dark:bg-gray-900 border-r border-gray-150 dark:border-gray-800 z-50 flex-col justify-between shadow-soft">
        
        {/* Top Logo branding */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-center">
          <Link href="/" className="group">
            <Image
              src="/images/logo/jybek_logo.webp"
              alt="Jybek Home Care"
              width={160}
              height={55}
              className="h-14 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-200"
              priority
            />
          </Link>
        </div>

        {/* Scrollable Middle Navigation Menu (Grouped & Premium) */}
        <nav className="flex-1 py-6 px-4 overflow-y-auto space-y-6 scrollbar-thin">
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-1.5">
              {/* Group Category Title */}
              <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-3">
                {group.title}
              </h4>
              
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const hasSubmenu = item.children || item.megaMenu;
                  
                  // Active state matching path
                  const isDirectActive = pathname === item.href;
                  const isChildActive = item.children && item.children.some(c => pathname === c.href);
                  const isActive = isDirectActive || isChildActive;

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => hasSubmenu && handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Left vertical color bar for active states */}
                      {isActive && (
                        <div className="absolute left-0 top-2.5 bottom-2.5 w-1 bg-brand-600 dark:bg-brand-400 rounded-r-md" />
                      )}

                      {/* Main Link Button */}
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative',
                          isActive
                            ? 'bg-brand-50/80 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400 font-semibold'
                            : 'text-gray-600 dark:text-gray-400 hover:text-brand-600 hover:bg-gray-50 dark:hover:bg-gray-800/40',
                          item.highlight && !isActive && 'text-brand-600 bg-brand-50/50 dark:bg-brand-950/20'
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={cn(
                            'h-4.5 w-4.5 shrink-0 transition-colors',
                            isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400 dark:text-gray-500 group-hover:text-brand-500'
                          )} />
                          <span>{item.label}</span>
                        </div>
                        {hasSubmenu && (
                          <ChevronRight
                            className={cn(
                              'h-3.5 w-3.5 text-gray-400 transition-transform duration-200 shrink-0',
                              activeDropdown === item.label && 'rotate-90 text-brand-500'
                            )}
                          />
                        )}
                      </Link>

                      {/* Inline Accordion child rendering for Resources on desktop sidebar */}
                      {item.children && (
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-11 pr-2 py-0.5 space-y-0.5 mt-0.5"
                              onMouseEnter={() => handleDropdownEnter(item.label)}
                              onMouseLeave={handleDropdownLeave}
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={cn(
                                    'block py-1.5 px-3 text-xs rounded-lg transition-colors font-medium',
                                    pathname === child.href
                                      ? 'text-brand-600 dark:text-brand-400 font-semibold bg-brand-50/30 dark:bg-brand-950/10'
                                      : 'text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/20'
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer Call-To-Action (Widget Card) & Copyright */}
        <div className="p-5 border-t border-gray-150 dark:border-gray-800 bg-gray-50/10">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-50 to-blue-50/30 dark:from-brand-950/20 dark:to-gray-900 border border-brand-100/50 dark:border-brand-950/30 space-y-3 shadow-inner-soft">
            <div className="flex items-center gap-2 text-brand-800 dark:text-brand-350">
              <Phone className="h-4 w-4 shrink-0 animate-pulse-soft text-brand-600 dark:text-brand-400" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider">24/7 Care Support</span>
            </div>
            <p className="text-2xs text-gray-500 dark:text-gray-400 leading-snug">
              Need immediate assistance? Speak directly with our care coordinators.
            </p>
            <a
              href="tel:+1 888-717-5009"
              className="flex items-center gap-2 w-full px-3 py-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl text-center justify-center transition-all duration-200 text-xs shadow-brand hover:shadow-lg"
            >
              <span>Call +1 888-717-5009</span>
            </a>
          </div>
          
          <div className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-4 leading-normal">
            <p>© {new Date().getFullYear()} Jybek Home Care. All rights reserved.</p>
            <p className="font-semibold text-brand-600/80 dark:text-brand-500/80 mt-0.5 uppercase tracking-wider text-[9px]">Powered by OAJ Software Consult</p>
          </div>
        </div>

        {/* Desktop Services Hover Slide-Out Drawer */}
        <AnimatePresence>
          {activeDropdown === 'Jybek Services' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed left-80 top-0 bottom-0 w-[46rem] bg-white dark:bg-gray-900 shadow-2xl border-r border-gray-150 dark:border-gray-850 p-8 z-40 overflow-y-auto flex flex-col justify-between"
              onMouseEnter={() => handleDropdownEnter('Jybek Services')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-100 dark:border-gray-800">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Heart className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                    Jybek Care Services Catalog
                  </h2>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    Select a service vertical to learn about our specific in-home care programs.
                  </p>
                </div>
                
                {/* Categories Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(servicesMenu).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h3 className="text-[10px] font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest pb-1 border-b border-gray-50 dark:border-gray-800/50">
                        {category}
                      </h3>
                      <ul className="space-y-1">
                        {items.map((menuItem) => (
                          <li key={menuItem.label}>
                            <Link
                              href={menuItem.href}
                              className="block py-1 text-xs text-gray-650 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-300 hover:underline transition-all"
                            >
                              {menuItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
                >
                  <span>Explore All Programs &amp; Details</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET VIEWPORTS (Top Header & Hamburger Drawer)                 */}
      {/* ========================================================================= */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-150 dark:border-gray-800 z-50 flex items-center justify-between px-6 shadow-soft">
        <Link href="/">
          <Image
            src="/images/logo/jybek_logo.webp"
            alt="Jybek Home Care"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile Slide-out navigation drawer panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 lg:hidden z-50 flex">
            {/* Dark backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-80 max-w-[85vw] h-full bg-white dark:bg-gray-950 flex flex-col justify-between border-r border-gray-100 dark:border-gray-850 shadow-2xl z-10"
            >
              <div>
                {/* Header inside drawer */}
                <div className="p-5 border-b border-gray-100 dark:border-gray-850 flex items-center justify-between">
                  <Image
                    src="/images/logo/jybek_logo.webp"
                    alt="Jybek Home Care"
                    width={110}
                    height={38}
                    className="h-9 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation items list (Grouped on mobile as well) */}
                <nav className="p-4 space-y-6 overflow-y-auto max-h-[70vh] scrollbar-thin">
                  {navGroups.map((group) => (
                    <div key={group.title} className="space-y-1.5">
                      <h4 className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-3">
                        {group.title}
                      </h4>
                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          const isExpanded = mobileExpanded === item.label;
                          const hasSubmenu = item.children || item.megaMenu;
                          const isActive = pathname === item.href;
                          
                          return (
                            <div key={item.label} className="space-y-1">
                              {hasSubmenu ? (
                                <button
                                  onClick={() => toggleMobileExpanded(item.label)}
                                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850"
                                >
                                  <div className="flex items-center gap-3">
                                    <Icon className="h-4.5 w-4.5 text-gray-400 dark:text-gray-500" />
                                    <span>{item.label}</span>
                                  </div>
                                  <ChevronDown className={cn('h-3.5 w-3.5 text-gray-400 transition-transform duration-200', isExpanded && 'rotate-180')} />
                                </button>
                              ) : (
                                <Link
                                  href={item.href}
                                  className={cn(
                                    'flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors',
                                    isActive
                                      ? 'bg-brand-500 text-white font-semibold'
                                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850'
                                  )}
                                >
                                  <Icon className="h-4.5 w-4.5 text-gray-400 dark:text-gray-500" />
                                  <span>{item.label}</span>
                                </Link>
                              )}

                              {/* Inline sub-items under Accordion */}
                              {item.children && isExpanded && (
                                <div className="pl-11 pr-2 py-1 space-y-0.5">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      className="block py-2 px-3 text-xs font-semibold text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-gray-850 rounded-lg"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {/* Inline categories under Services mega menu in mobile */}
                              {item.megaMenu && isExpanded && (
                                <div className="pl-8 pr-2 py-1 space-y-4 mt-2 border-l border-gray-100 dark:border-gray-800 ml-4">
                                  {Object.entries(servicesMenu).map(([category, items]) => (
                                    <div key={category} className="space-y-1">
                                      <h4 className="text-[10px] font-extrabold text-brand-650 dark:text-brand-400 uppercase tracking-widest pl-3">
                                        {category}
                                      </h4>
                                      <div className="space-y-0.5">
                                        {items.map((subItem) => (
                                          <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            className="block py-1.5 px-3 text-xs text-gray-650 dark:text-gray-400 hover:text-brand-600"
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
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Bottom footer call in mobile drawer */}
              <div className="p-5 border-t border-gray-100 dark:border-gray-850 space-y-3.5">
                <a
                  href="tel:+1 888-717-5009"
                  className="flex items-center gap-3 px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl text-center justify-center transition-colors text-sm shadow-brand"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+1 888-717-5009</span>
                </a>
                <p className="text-center text-3xs text-gray-450">
                  © {new Date().getFullYear()} Jybek Home Care.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

// Arrow helper icon
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
