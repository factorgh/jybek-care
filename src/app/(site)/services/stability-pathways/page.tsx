'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Stability Pathways',
  subtitle: 'Our flagship chronic disease management program',
  description:
    'Jybek Stability Pathways is our comprehensive program designed for individuals living with chronic conditions. This proactive approach focuses on maintaining stability, preventing crises, and improving quality of life through consistent monitoring, lifestyle support, and early intervention.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Condition Monitoring',
      description: 'Regular tracking of vital signs, symptoms, weight, and condition-specific indicators.',
    },
    {
      title: 'Medication Adherence',
      description: 'Systems and support to ensure complex medication regimens are followed correctly.',
    },
    {
      title: 'Lifestyle Coaching',
      description: 'Ongoing support for diet, exercise, stress management, and healthy habits.',
    },
    {
      title: 'Early Warning Detection',
      description: 'Trained recognition of subtle changes that may signal approaching problems.',
    },
    {
      title: 'Care Team Communication',
      description: 'Regular reporting to healthcare providers with relevant health data and observations.',
    },
    {
      title: 'Crisis Prevention',
      description: 'Proactive interventions to prevent emergency situations before they occur.',
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: 'Prevent Crises',
      description: 'Proactive approach catches problems before they become emergencies.',
    },
    {
      icon: Heart,
      title: 'Better Quality of Life',
      description: 'Well-managed conditions mean better daily living.',
    },
    {
      icon: Users,
      title: 'Consistent Support',
      description: 'Ongoing care relationship that truly knows your health.',
    },
    {
      icon: Clock,
      title: 'Long-Term Focus',
      description: 'Sustainable approach to living well with chronic conditions.',
    },
  ],
  whatToExpect: [
    'Comprehensive initial assessment of all conditions and medications',
    'Development of personalized stability goals and metrics',
    'Regular monitoring schedule tailored to your conditions',
    'Documentation and trending of health data over time',
    'Monthly care conferences to review progress',
    'Ongoing adjustments based on health changes and goals',
  ],
  whoIsItFor: [
    'Individuals managing diabetes who need ongoing support',
    'Those with heart failure requiring daily monitoring',
    'People with COPD who want to avoid exacerbations',
    'Individuals with multiple chronic conditions',
    'Anyone who has had repeated hospitalizations for the same condition',
    'Those whose chronic conditions significantly impact daily life',
  ],
  faqs: [
    {
      question: 'How is Stability Pathways different from regular chronic condition care?',
      answer: 'Stability Pathways is a structured program with specific protocols, regular monitoring schedules, trending data over time, and proactive interventions—not just reactive care when problems arise.',
    },
    {
      question: 'What conditions does this program address?',
      answer: 'The program is designed for any chronic condition requiring ongoing management, including diabetes, heart disease, COPD, kidney disease, and others. We customize the approach for your specific conditions.',
    },
    {
      question: 'Will my doctor receive reports?',
      answer: 'Yes, with your permission we provide regular reports to your healthcare team including monitored metrics, observations, and any concerns. This helps your doctors manage your care more effectively.',
    },
    {
      question: 'Is this a long-term program?',
      answer: 'Yes, Stability Pathways is designed for ongoing chronic disease management. It\'s about maintaining stability over time, not a short-term intervention. Many clients benefit from years of program support.',
    },
  ],
  relatedServices: [
    { title: 'Chronic Conditions', href: '/services/chronic-conditions' },
    { title: 'Jybek Return & Recovery', href: '/services/return-recovery' },
    { title: 'Jybek Thrivelife', href: '/services/thrivelife' },
    { title: 'Palliative Care Support', href: '/services/palliative-care' },
  ],
};

export default function StabilityPathwaysPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

