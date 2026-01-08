'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { Linkedin, Twitter } from 'lucide-react';

// Team members
const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'CEO & Co-Founder',
    bio: 'Former geriatrician with 20 years of experience in elder care. Passionate about transforming how families access quality home care.',
    avatar: 'SJ',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Michael Chen',
    role: 'COO & Co-Founder',
    bio: 'Healthcare operations expert who has built and scaled care delivery systems across multiple states.',
    avatar: 'MC',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Care Officer',
    bio: 'Registered nurse and former home care manager dedicated to maintaining the highest standards of care.',
    avatar: 'ER',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'David Kim',
    role: 'CTO',
    bio: 'Tech leader focused on using technology to improve care matching and family communication.',
    avatar: 'DK',
    linkedin: '#',
    twitter: '#',
  },
];

/**
 * Leadership team section
 */
export function Team() {
  return (
    <section id="team" className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Leadership
          </span>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Experienced healthcare and technology leaders united by a shared 
            commitment to improving care for seniors and their families.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="default" padding="lg" className="text-center h-full">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white text-2xl font-bold">
                  {member.avatar}
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-600 font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

