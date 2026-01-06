'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Shield,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Jybek Certified Caregiver',
    type: 'Full-time / Part-time',
    location: 'Multiple Locations',
    salary: '$18 - $25/hr',
    description: 'Provide compassionate in-home care to seniors and individuals needing assistance with daily activities.',
    requirements: ['CNA certification preferred', 'Valid driver&apos;s license', '1+ year experience'],
    featured: true,
  },
  {
    id: 2,
    title: 'Jybek Home Health Aide',
    type: 'Full-time',
    location: 'All Service Areas',
    salary: '$16 - $22/hr',
    description: 'Assist clients with personal care, medication reminders, and light housekeeping duties.',
    requirements: ['HHA certification', 'Background check required', 'Reliable transportation'],
    featured: true,
  },
  {
    id: 3,
    title: 'Jybek Companion Care Specialist',
    type: 'Part-time / Per Diem',
    location: 'Flexible',
    salary: '$15 - $20/hr',
    description: 'Provide companionship, conversation, and assist with light daily activities for seniors.',
    requirements: ['Compassionate personality', 'Good communication skills', 'Background check'],
    featured: false,
  },
  {
    id: 4,
    title: 'Jybek Live-in Caregiver',
    type: 'Live-in',
    location: 'Client Homes',
    salary: '$200 - $300/day',
    description: 'Provide round-the-clock care while living in the client&apos;s home. Room and board included.',
    requirements: ['3+ years experience', 'CPR certified', 'Excellent references'],
    featured: false,
  },
  {
    id: 5,
    title: 'Jybek Memory Care Specialist',
    type: 'Full-time',
    location: 'All Service Areas',
    salary: '$20 - $28/hr',
    description: 'Specialized care for clients with Alzheimer&apos;s, dementia, and other memory-related conditions.',
    requirements: ['Memory care certification', '2+ years specialized experience', 'Patient demeanor'],
    featured: true,
  },
  {
    id: 6,
    title: 'Jybek Care Coordinator',
    type: 'Full-time',
    location: 'Office / Remote',
    salary: '$45,000 - $55,000/year',
    description: 'Coordinate care plans, manage caregiver schedules, and ensure quality client satisfaction.',
    requirements: ['Healthcare management experience', 'Strong organizational skills', 'Bachelor&apos;s degree preferred'],
    featured: false,
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Industry-leading compensation with regular raises and bonuses',
  },
  {
    icon: Shield,
    title: 'Health Benefits',
    description: 'Medical, dental, and vision insurance for full-time employees',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Choose shifts that work for your lifestyle and commitments',
  },
  {
    icon: Award,
    title: 'Jybek Training Program',
    description: 'Paid training and ongoing professional development opportunities',
  },
  {
    icon: Heart,
    title: 'Meaningful Work',
    description: 'Make a real difference in the lives of seniors and families',
  },
  {
    icon: Users,
    title: 'Supportive Team',
    description: 'Join a caring community of professionals who support each other',
  },
];

export default function JybekHirePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Join the Jybek Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Jybek Hire
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Build a rewarding career in home care. Join our team of compassionate professionals making a difference in people&apos;s lives every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="px-8 py-4 bg-white text-brand-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Open Positions
                </a>
                <a
                  href="tel:+18887175009"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  +1 888-717-5009
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop"
                  alt="Jybek Caregivers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/50 to-transparent" />
              </div>
              
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Jybek Caregivers</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at Jybek?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our caregivers because we know they&apos;re the heart of everything we do.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-brand-50 transition-colors group"
              >
                <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors">
                  <benefit.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Jybek Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role and start making a difference today.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${
                  job.featured ? 'border-2 border-brand-500' : ''
                }`}
              >
                {job.featured && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-brand-600 text-white text-xs font-semibold rounded-full">
                    Featured Position
                  </span>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req) => (
                        <span
                          key={req}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          <CheckCircle className="w-3 h-3 text-brand-600" />
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Link
                      href={`/resources/hire/apply?position=${job.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Jybek?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Take the first step toward a rewarding career in home care. We&apos;d love to meet you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#openings"
                className="px-8 py-4 bg-white text-brand-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Positions
              </a>
              <a
                href="tel:+18887175009"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 888-717-5009
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

