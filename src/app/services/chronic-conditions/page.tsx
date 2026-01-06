'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Chronic Conditions Care',
  subtitle: 'Expert support for living well with chronic illness',
  description:
    'Our Jybek Chronic Conditions Care service provides specialized support for individuals managing chronic health conditions like diabetes, heart disease, COPD, Parkinson\'s, and more. Our trained caregivers help with daily management, symptom monitoring, and maintaining quality of life.',
  heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Condition-Specific Care',
      description: 'Caregivers trained in the specific needs of diabetes, heart disease, COPD, Parkinson\'s, and more.',
    },
    {
      title: 'Medication Management',
      description: 'Complex medication schedules, reminders, and monitoring for side effects.',
    },
    {
      title: 'Symptom Monitoring',
      description: 'Tracking vital signs, blood glucose, weight, symptoms, and reporting changes.',
    },
    {
      title: 'Diet & Nutrition',
      description: 'Preparing meals that meet dietary restrictions and support health management.',
    },
    {
      title: 'Exercise Support',
      description: 'Encouraging and assisting with prescribed physical activity and rehabilitation exercises.',
    },
    {
      title: 'Appointment Coordination',
      description: 'Transportation to medical appointments and help communicating with healthcare providers.',
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: 'Disease Management',
      description: 'Consistent support for managing conditions and preventing complications.',
    },
    {
      icon: Heart,
      title: 'Quality of Life',
      description: 'Focus on living well, not just managing illness.',
    },
    {
      icon: Users,
      title: 'Trained Caregivers',
      description: 'Understanding of specific chronic conditions and their management.',
    },
    {
      icon: Clock,
      title: 'Flexible Support',
      description: 'Care that adjusts to good days and difficult days.',
    },
  ],
  whatToExpect: [
    'Assessment of specific conditions and how they affect daily life',
    'Care plan developed in coordination with your healthcare team',
    'Caregivers matched with experience in your specific conditions',
    'Regular monitoring and documentation of health indicators',
    'Communication with family and healthcare providers',
    'Adjustments as conditions change or new diagnoses arise',
  ],
  whoIsItFor: [
    'Individuals managing type 1 or type 2 diabetes',
    'Those with heart disease, congestive heart failure, or post-cardiac events',
    'People with COPD, emphysema, or other respiratory conditions',
    'Individuals with Parkinson\'s disease or multiple sclerosis',
    'Those with arthritis, osteoporosis, or chronic pain conditions',
    'Anyone managing multiple chronic conditions simultaneously',
  ],
  faqs: [
    {
      question: 'What chronic conditions do you have experience with?',
      answer: 'Our caregivers have experience with diabetes, heart disease, COPD, Parkinson\'s, MS, arthritis, kidney disease, and many other conditions. We match caregivers with relevant experience to each client.',
    },
    {
      question: 'Can you help manage multiple conditions?',
      answer: 'Yes, many of our clients have multiple chronic conditions. We develop comprehensive care plans that address all conditions and watch for interactions between treatments.',
    },
    {
      question: 'How do you work with my doctors?',
      answer: 'With your permission, we communicate with your healthcare team, follow their care instructions, and report observations that may be relevant to your treatment.',
    },
    {
      question: 'Can you help with diabetic care like blood sugar monitoring?',
      answer: 'Yes, our caregivers can assist with blood glucose monitoring, insulin reminders, foot care, diabetic-friendly meal preparation, and recognizing signs of hypo- or hyperglycemia.',
    },
  ],
  relatedServices: [
    { title: 'Palliative Care Support', href: '/services/palliative-care' },
    { title: 'Special Advance Care', href: '/services/special-advance-care' },
    { title: 'Jybek Personal Care', href: '/services/personal-care' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
  ],
};

export default function ChronicConditionsPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

