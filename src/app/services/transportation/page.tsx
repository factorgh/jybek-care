'use client';

import { ServiceDetailLayout } from '../components/ServiceDetailLayout';
import { Clock, Shield, Heart, Users } from 'lucide-react';

const serviceData = {
  title: 'Jybek Transportation Services',
  subtitle: 'Safe, reliable transportation with caring assistance',
  description:
    'Our Jybek Transportation Services provide more than just a ride—we offer assisted transportation with a caring companion who helps at every step. From medical appointments to grocery shopping to social outings, our caregivers ensure safe, comfortable, door-through-door support.',
  heroImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
  features: [
    {
      title: 'Medical Appointments',
      description: 'Transportation to doctors, specialists, therapy sessions, and medical procedures with appointment assistance.',
    },
    {
      title: 'Door-Through-Door Service',
      description: 'Assistance from inside the home to inside the destination, not just curb-to-curb.',
    },
    {
      title: 'Errand Assistance',
      description: 'Help with grocery shopping, pharmacy pickups, banking, and other essential errands.',
    },
    {
      title: 'Social Outings',
      description: 'Transportation to religious services, family gatherings, community events, and social activities.',
    },
    {
      title: 'Appointment Support',
      description: 'Help communicating with healthcare providers, taking notes, and understanding instructions.',
    },
    {
      title: 'Mobility Assistance',
      description: 'Safe transfers to and from vehicles, wheelchair assistance, and support for those with mobility aids.',
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: 'Safe & Supervised',
      description: 'Trained caregivers ensure safe transport and supervision throughout.',
    },
    {
      icon: Heart,
      title: 'Caring Companionship',
      description: 'More than a driver—a helpful companion for the entire outing.',
    },
    {
      icon: Users,
      title: 'Independence Support',
      description: 'Maintain active lifestyle without depending on family availability.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Transportation on your schedule for all types of appointments.',
    },
  ],
  whatToExpect: [
    'Scheduled pick-up with reminder call or text',
    'Assistance getting ready and leaving the home safely',
    'Companionship and support during the entire outing',
    'Help at the destination with check-in, waiting, and more',
    'Notes from medical appointments to share with family',
    'Safe return home with settling-in assistance',
  ],
  whoIsItFor: [
    'Seniors who no longer drive or prefer not to',
    'Those with mobility challenges needing physical assistance',
    'Individuals who should not attend appointments alone',
    'People who need help navigating medical facilities',
    'Anyone who wants companionship during outings',
    'Those whose family cannot provide regular transportation',
  ],
  faqs: [
    {
      question: 'Is this just a ride service?',
      answer: 'No, this is assisted transportation. Our caregivers help you get ready, accompany you throughout the outing, assist at your destination, and ensure you\'re safely settled when you return home.',
    },
    {
      question: 'Can you wait during long appointments?',
      answer: 'Yes, our caregivers stay with you during appointments. They can wait in waiting rooms, accompany you to exam rooms (with permission), and take notes to share with family.',
    },
    {
      question: 'What vehicles do you use?',
      answer: 'Our caregivers use their own insured vehicles or the client\'s vehicle depending on preference and needs. We can also coordinate with wheelchair-accessible transportation services.',
    },
    {
      question: 'Can you help with out-of-town medical appointments?',
      answer: 'Yes, we can provide transportation and accompaniment for appointments that require longer travel. We discuss these needs individually to plan appropriate care coverage.',
    },
  ],
  relatedServices: [
    { title: 'Jybek Companion Care', href: '/services/companion-care' },
    { title: 'Hourly Care', href: '/services/hourly-care' },
    { title: 'Elderly Support', href: '/services/elderly-support' },
    { title: 'Low Vision Care', href: '/services/low-vision' },
  ],
};

export default function TransportationPage() {
  return <ServiceDetailLayout {...serviceData} />;
}

