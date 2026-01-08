'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Couples Care',
  subtitle: 'Keeping couples together with coordinated care',
  description:
    'Our Jybek Couples Care service provides coordinated home care for couples where both partners need assistance. We understand the importance of keeping couples together and provide efficient, respectful care that honors your relationship while meeting both partners\' unique needs.',
  heroImage: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Coordinated Care Plans',
      description: 'Individualized care for each partner that works together efficiently for the household.',
    },
    {
      title: 'Dual Personal Care',
      description: 'Bathing, dressing, and grooming assistance for both partners with sensitivity to privacy.',
    },
    {
      title: 'Household Management',
      description: 'Meal preparation, housekeeping, and errands that support both partners\' needs.',
    },
    {
      title: 'Relationship Support',
      description: 'Helping couples maintain connection, activities together, and quality time.',
    },
    {
      title: 'Medication Management',
      description: 'Organized systems for managing multiple medication schedules safely.',
    },
    {
      title: 'Flexible Care Levels',
      description: 'Different care intensity for each partner as appropriate to individual needs.',
    },
  ],
  benefits: [
    {
      icon: Heart,
      title: 'Stay Together',
      description: 'Avoid separation when one partner needs more care than the other.',
    },
    {
      icon: Users,
      title: 'One Caregiver Team',
      description: 'Coordinated care is more efficient than separate arrangements.',
    },
    {
      icon: Shield,
      title: 'Complete Care',
      description: 'Both partners receive appropriate level of support.',
    },
    {
      icon: Clock,
      title: 'Cost Effective',
      description: 'Shared care time can be more affordable than separate care.',
    },
  ],
  whatToExpect: [
    'Comprehensive assessment of both partners\' individual needs',
    'Care plan that addresses each person while functioning as household',
    'Caregivers comfortable working with both partners',
    'Respect for the couple\'s relationship dynamics and preferences',
    'Flexibility when one partner\'s needs change',
    'Support for maintaining connection and shared activities',
  ],
  whoIsItFor: [
    'Elderly couples who both need some assistance',
    'Partners where one has greater care needs than the other',
    'Couples where one is primary caregiver but needs support',
    'Spouses who don\'t want to be separated for care needs',
    'Partners with different conditions requiring different support',
    'Couples looking for efficient, cost-effective care solutions',
  ],
  faqs: [
    {
      question: 'What if our care needs are very different?',
      answer: 'That\'s common. We create individualized care plans for each partner while coordinating efficiently. One partner might need personal care while the other needs primarily companionship.',
    },
    {
      question: 'Is couples care more expensive than individual care?',
      answer: 'It can actually be more cost-effective because caregiver time is shared. You\'re not paying for two completely separate care arrangements when needs can be coordinated.',
    },
    {
      question: 'What happens if one partner\'s condition changes significantly?',
      answer: 'We adjust care plans as needed. If one partner requires significantly more care, we can increase support for that individual while maintaining appropriate care for the other.',
    },
    {
      question: 'How do you handle privacy when both partners need personal care?',
      answer: 'We\'re sensitive to privacy needs and schedule personal care activities appropriately. Some couples are comfortable together; others prefer privacy. We follow your preferences.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Live-in Care', href: '/services/live-in-care' },
    { title: 'Elderly Support', href: '/services/elderly-support' },
  ],
};

export default function CouplesCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

