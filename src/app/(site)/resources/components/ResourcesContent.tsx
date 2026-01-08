'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, Badge } from '@/components/ui';
import {
  BookOpen,
  FileText,
  Video,
  Download,
  ArrowRight,
  Clock,
  Heart,
  Brain,
  DollarSign,
  Users,
  Shield,
} from 'lucide-react';

// Resource categories
const categories = [
  { id: 'all', label: 'All Resources' },
  { id: 'guides', label: 'Care Guides' },
  { id: 'articles', label: 'Articles' },
  { id: 'videos', label: 'Videos' },
  { id: 'downloads', label: 'Downloads' },
];

// Featured resources
const resources = [
  {
    id: '1',
    title: 'Signs a Senior Needs Help at Home',
    description:
      'Learn to recognize the warning signs that indicate your aging parent may need assistance with daily activities.',
    category: 'guides',
    type: 'Guide',
    readTime: '8 min read',
    icon: Heart,
    featured: true,
  },
  {
    id: '2',
    title: 'How to Select a Home Care Company',
    description:
      'A comprehensive guide to evaluating and choosing the right home care agency for your loved one.',
    category: 'guides',
    type: 'Guide',
    readTime: '12 min read',
    icon: Shield,
  },
  {
    id: '3',
    title: 'Understanding Alzheimer\'s Stages',
    description:
      'An overview of the stages of Alzheimer\'s disease and what to expect as the condition progresses.',
    category: 'articles',
    type: 'Article',
    readTime: '10 min read',
    icon: Brain,
  },
  {
    id: '4',
    title: 'How to Pay for In-Home Care',
    description:
      'Explore payment options including insurance, Medicare, Medicaid, and VA benefits for home care services.',
    category: 'guides',
    type: 'Guide',
    readTime: '15 min read',
    icon: DollarSign,
  },
  {
    id: '5',
    title: 'Caregiver Burnout: Signs and Prevention',
    description:
      'Recognize the signs of caregiver burnout and learn strategies to take care of yourself while caring for others.',
    category: 'articles',
    type: 'Article',
    readTime: '7 min read',
    icon: Users,
  },
  {
    id: '6',
    title: 'Care Plan Template',
    description:
      'Download our comprehensive care plan template to organize and document your loved one\'s care needs.',
    category: 'downloads',
    type: 'Download',
    readTime: 'PDF',
    icon: FileText,
  },
];

// Quick links
const quickLinks = [
  { label: 'Take Care Assessment', href: '/assessment', icon: BookOpen },
  { label: 'Find Care Near You', href: '/find-care', icon: Heart },
  { label: 'Contact an Advisor', href: '/contact', icon: Users },
];

/**
 * Resources page content
 */
export function ResourcesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Caregiving Resources
            </h1>
            <p className="text-xl text-white/80">
              Expert guides, articles, and tools to help you navigate 
              caregiving decisions with confidence.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
              className="dark:fill-gray-950"
            />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Categories */}
                <Card variant="default" padding="md">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Categories
                  </h3>
                  <nav className="space-y-1">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className="w-full px-3 py-2 text-left text-sm rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-brand-600 transition-colors"
                      >
                        {category.label}
                      </button>
                    ))}
                  </nav>
                </Card>

                {/* Quick links */}
                <Card variant="elevated" padding="md" className="bg-brand-50 dark:bg-brand-900/20 border-brand-100 dark:border-brand-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-3 text-sm text-brand-700 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 transition-colors"
                      >
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Resources grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      variant="default"
                      padding="md"
                      hover
                      className={`h-full ${
                        resource.featured
                          ? 'md:col-span-2 border-brand-200 dark:border-brand-800'
                          : ''
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center shrink-0">
                          <resource.icon className="w-6 h-6 text-brand-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="primary" size="sm">
                              {resource.type}
                            </Badge>
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              {resource.readTime}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {resource.description}
                          </p>
                          <button className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                            Read more
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

