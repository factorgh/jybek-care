'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Special Advance Care',
  subtitle: 'Specialized care for complex health needs',
  description:
    'Our Jybek Special Advance Care service provides highly specialized care for individuals with complex medical conditions, advanced cognitive impairments, or those requiring intensive monitoring and support. Our specially trained caregivers deliver expert-level care in the comfort of home.',
  heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Complex Medical Care',
      description: 'Management of multiple chronic conditions, complex medication regimens, and coordination with healthcare providers.',
    },
    {
      title: 'Advanced Monitoring',
      description: 'Vital signs monitoring, symptom tracking, and early detection of health changes requiring intervention.',
    },
    {
      title: 'Specialized Equipment',
      description: 'Proficiency with medical equipment including oxygen, feeding tubes, catheters, and mobility devices.',
    },
    {
      title: 'Wound Care',
      description: 'Professional wound care, pressure ulcer prevention, and skin integrity maintenance.',
    },
    {
      title: 'Post-Surgical Care',
      description: 'Comprehensive care following major surgeries including rehabilitation support and recovery monitoring.',
    },
    {
      title: 'End-of-Life Support',
      description: 'Compassionate care during terminal illness, focusing on comfort and quality of life.',
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: 'Expert Caregivers',
      description: 'Specially trained in advanced care techniques and medical procedures.',
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Emotional support for both clients and families during difficult times.',
    },
    {
      icon: Users,
      title: 'Care Coordination',
      description: 'Seamless communication with doctors, nurses, and specialists.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock care available for intensive support needs.',
    },
  ],
  whatToExpect: [
    'Thorough clinical assessment by our care team',
    'Customized care plan developed with healthcare providers',
    'Assignment of specially trained, experienced caregivers',
    'Regular health monitoring and detailed documentation',
    'Coordination with medical team and regular updates',
    'Emergency protocols and rapid response capabilities',
  ],
  whoIsItFor: [
    'Individuals with multiple complex chronic conditions',
    'Those recovering from major surgery or serious illness',
    'People with advanced Parkinson\'s, ALS, or similar conditions',
    'Clients requiring tube feeding or catheter care',
    'Individuals needing intensive post-hospital recovery support',
    'Those in late-stage dementia requiring specialized approaches',
  ],
  faqs: [
    {
      question: 'How is Special Advance Care different from regular personal care?',
      answer: 'Special Advance Care involves caregivers with additional training and certifications in complex medical care. They can manage sophisticated equipment, recognize subtle health changes, and handle more intensive care needs.',
    },
    {
      question: 'Do you coordinate with our doctors and nurses?',
      answer: 'Yes, coordination with your healthcare team is essential to Special Advance Care. We maintain regular communication, follow physician orders, and provide detailed reports to ensure continuity of care.',
    },
    {
      question: 'Can Special Advance Care help avoid hospitalization?',
      answer: 'Often, yes. By providing intensive monitoring and early intervention at home, our Special Advance Care can help prevent complications that might otherwise require hospitalization.',
    },
    {
      question: 'Is Special Advance Care covered by insurance?',
      answer: 'Coverage varies by insurance plan. We can help verify your benefits and work with long-term care insurance, Medicare Advantage plans, or Medicaid where applicable.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Hospice Care Support', href: '/services/hospice-care' },
    { title: 'Palliative Care Support', href: '/services/palliative-care' },
    { title: 'Chronic Conditions', href: '/services/chronic-conditions' },
  ],
};

export default function SpecialAdvanceCarePage() {
  return <ServiceDetailLayout {...serviceData} />;
}

