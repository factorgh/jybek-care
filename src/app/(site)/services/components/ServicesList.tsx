'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Button } from '@/components/ui';
import {
  Heart,
  Users,
  Clock,
  Home,
  Car,
  Shield,
  Brain,
  Stethoscope,
  Eye,
  Activity,
  UserCheck,
  Building,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

// Service categories with detailed information
const serviceCategories = [
  {
    title: 'Jybek Care Levels',
    id: 'care-levels',
    services: [
      {
        id: 'companion-care',
        icon: Heart,
        title: 'Companion Care',
        description: 'Meaningful companionship and social engagement to combat isolation and enhance quality of life.',
        features: ['Conversation & emotional support', 'Hobby participation', 'Social outings', 'Light housekeeping'],
        color: 'rose',
        image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=500&fit=crop',
      },
      {
        id: 'personal-care',
        icon: Users,
        title: 'Personal Care',
        description: 'Compassionate assistance with daily activities while maintaining independence and dignity.',
        features: ['Bathing assistance', 'Dressing & grooming', 'Meal preparation', 'Medication reminders'],
        color: 'brand',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop',
      },
      {
        id: 'special-advance-care',
        icon: Stethoscope,
        title: 'Special Advance Care',
        description: 'Advanced medical care for complex health needs requiring specialized attention and expertise.',
        features: ['Medical monitoring', 'Skilled nursing', 'Wound care', 'Post-surgical support'],
        color: 'emerald',
        image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=500&fit=crop',
      },
    ],
  },
  {
    title: 'Jybek Frequent Care',
    id: 'frequent-care',
    services: [
      {
        id: 'hourly-care',
        icon: Clock,
        title: 'Hourly Care',
        description: 'Flexible care by the hour for when you need occasional support or a helping hand.',
        features: ['Flexible scheduling', 'No minimum hours', 'Same-day availability', 'Consistent caregivers'],
        color: 'amber',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop',
      },
      {
        id: '24-hour-care',
        icon: Shield,
        title: '24-Hour Care',
        description: 'Round-the-clock care with rotating caregivers ensuring continuous support day and night.',
        features: ['Day & night coverage', 'Rotating staff', 'Continuous monitoring', 'Emergency response'],
        color: 'purple',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
      },
      {
        id: 'live-in-care',
        icon: Home,
        title: 'Live-in Care',
        description: 'A dedicated caregiver lives in your home providing consistent, personalized care.',
        features: ['One consistent caregiver', 'Cost-effective option', 'Deep relationship building', 'Comprehensive care'],
        color: 'teal',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=500&fit=crop',
      },
    ],
  },
  {
    title: 'Home Care Services',
    id: 'home-care-services',
    services: [
      {
        id: 'hospice-care',
        icon: Heart,
        title: 'Hospice Care Support',
        description: 'Compassionate end-of-life care support for patients and their families during difficult times.',
        features: ['Pain management support', 'Emotional support', 'Family respite', 'Dignity in final days'],
        color: 'rose',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
      },
      {
        id: 'palliative-care',
        icon: Stethoscope,
        title: 'Palliative Care Support',
        description: 'Specialized care focused on comfort and quality of life for those with serious illnesses.',
        features: ['Symptom management', 'Comfort measures', 'Care coordination', 'Family support'],
        color: 'emerald',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
      },
      {
        id: 'fall-prevention',
        icon: Shield,
        title: 'Fall Prevention',
        description: 'Proactive care and home safety measures to prevent falls and maintain mobility.',
        features: ['Home safety assessment', 'Mobility assistance', 'Exercise programs', 'Environmental modifications'],
        color: 'brand',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop',
      },
      {
        id: 'low-vision',
        icon: Eye,
        title: 'Low Vision Care',
        description: 'Specialized assistance for those with visual impairments to maintain independence.',
        features: ['Navigation assistance', 'Reading support', 'Safety monitoring', 'Adaptive techniques'],
        color: 'purple',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop',
      },
      {
        id: 'respite-care',
        icon: Clock,
        title: 'Respite Care',
        description: 'Short-term relief for family caregivers so you can take the break you deserve.',
        features: ['Flexible scheduling', 'Day or overnight', 'Emergency coverage', 'Vacation coverage'],
        color: 'amber',
        image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=500&fit=crop',
      },
      {
        id: 'alzheimers-dementia',
        icon: Brain,
        title: "Alzheimer's & Dementia Care",
        description: 'Specialized care for those with memory conditions, providing safety and cognitive support.',
        features: ['Cognitive activities', 'Wandering prevention', 'Routine maintenance', 'Behavioral support'],
        color: 'purple',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
      },
      {
        id: 'chronic-conditions',
        icon: Activity,
        title: 'Chronic Conditions Care',
        description: 'Ongoing support for managing chronic health conditions and maintaining quality of life.',
        features: ['Condition monitoring', 'Medication management', 'Lifestyle support', 'Doctor coordination'],
        color: 'emerald',
        image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=500&fit=crop',
      },
    ],
  },
  {
    title: 'Jybek Support Services',
    id: 'support-services',
    services: [
      {
        id: 'transportation',
        icon: Car,
        title: 'Transportation',
        description: 'Safe and reliable transportation to medical appointments, errands, and social activities.',
        features: ['Medical appointments', 'Grocery shopping', 'Social events', 'Wheelchair accessible'],
        color: 'brand',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop',
      },
      {
        id: 'transitional-care',
        icon: Building,
        title: 'Transitional Care',
        description: 'Support during transitions from hospital to home or between care settings.',
        features: ['Discharge planning', 'Home preparation', 'Follow-up care', 'Recovery support'],
        color: 'teal',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      },
      {
        id: 'couples-care',
        icon: Users,
        title: 'Couples Care',
        description: 'Coordinated care for couples who want to remain together while receiving support.',
        features: ['Coordinated schedules', 'Shared activities', 'Individual needs met', 'Cost savings'],
        color: 'rose',
        image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=500&fit=crop',
      },
      {
        id: 'elderly-support',
        icon: Heart,
        title: 'Elderly Support',
        description: 'Comprehensive care designed specifically for the unique needs of seniors.',
        features: ['Age-appropriate care', 'Safety focus', 'Social engagement', 'Health monitoring'],
        color: 'brand',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop',
      },
      {
        id: 'adults-under-65',
        icon: UserCheck,
        title: 'Adults Under 65',
        description: 'Care services for younger adults with disabilities or health conditions.',
        features: ['Independence focus', 'Life skills support', 'Community integration', 'Goal-oriented care'],
        color: 'purple',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop',
      },
      {
        id: 'veterans-care',
        icon: Shield,
        title: 'Veterans Care',
        description: 'Specialized care honoring those who served, with understanding of veteran-specific needs.',
        features: ['VA benefits assistance', 'PTSD-aware care', 'Service-connected support', 'Peer connections'],
        color: 'emerald',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
      },
      {
        id: 'facility-support',
        icon: Building,
        title: 'Facility Support',
        description: 'Additional care support for those in assisted living or nursing facilities.',
        features: ['Extra attention', 'Family advocacy', 'Quality monitoring', 'Personalized care'],
        color: 'teal',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=500&fit=crop',
      },
    ],
  },
  {
    title: 'Flagship Programs',
    id: 'flagship-programs',
    services: [
      {
        id: 'return-recovery',
        icon: Activity,
        title: 'Jybek Return & Recovery',
        description: 'Specialized program for post-hospitalization recovery and rehabilitation support.',
        features: ['Recovery planning', 'Therapy support', 'Progress monitoring', 'Family education'],
        color: 'emerald',
        image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=500&fit=crop',
      },
      {
        id: 'stability-pathways',
        icon: Shield,
        title: 'Jybek Stability Pathways',
        description: 'Long-term care planning and support for maintaining stability and independence.',
        features: ['Care planning', 'Goal setting', 'Regular assessments', 'Adaptive care'],
        color: 'brand',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop',
      },
      {
        id: 'thrivelife',
        icon: Sparkles,
        title: 'Jybek Thrivelife',
        description: 'Holistic wellness program focusing on physical, mental, and social well-being.',
        features: ['Wellness activities', 'Social programs', 'Mental health support', 'Nutrition guidance'],
        color: 'amber',
        image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=500&fit=crop',
      },
    ],
  },
];

const iconColors = {
  brand: 'bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400',
  rose: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
  purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  teal: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
};

/**
 * Comprehensive services list organized by categories
 */
export function ServicesList() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceCategories.map((category, categoryIndex) => (
          <div key={category.id} id={category.id} className="mb-20 last:mb-0">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h2>
              <div className="w-20 h-1 bg-brand-600 rounded-full" />
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="default" padding="none" hover className="h-full overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {/* Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconColors[service.color as keyof typeof iconColors]}`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link href="/find-care" className="inline-flex items-center text-brand-600 font-medium text-sm group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 py-12 bg-gray-50 dark:bg-gray-900 rounded-3xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Not sure which service is right for you?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our care advisors are here to help you find the perfect care solution for your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Take Care Assessment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
