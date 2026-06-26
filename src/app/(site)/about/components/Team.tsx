'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

// Team members
const team = [
  {
    name: 'Peter Martins Akwei, MSc',
    role: 'Founder & Managing Director',
    bio: 'Peter Martins Akwei is a purpose-driven leader whose journey into home care was guided by both experience and faith. Grounded in Christian values and a commitment to impact, he founded Jybek HomeCare Group to provide care that goes beyond tasks—care that uplifts lives. By integrating risk management, technology, and faith-based principles, he is building a system that creates meaningful opportunities for caregivers while ensuring seniors receive the quality care they deserve.',
    image: '/teams/ceo.png',
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

        {/* Team grid - Centered for solo member */}
        <div className="flex justify-center">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="max-w-md w-full"
            >
              <Card variant="default" padding="lg" className="text-center h-full">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-5 border-2 border-brand-100 dark:border-brand-900/30">
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
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

