'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui';
import { VideoModal } from '@/components/marketing/VideoModal';

interface VideoSectionProps {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
}

/**
 * A premium video preview section that opens a YouTube modal
 */
export function VideoSection({ videoId, title, description, thumbnailUrl }: VideoSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumb = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold mb-6">
              Watch Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => setIsOpen(true)}
                leftIcon={<Play className="w-5 h-5 fill-current" />}
                size="lg"
              >
                Watch Video
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(youtubeUrl, '_blank')}
                rightIcon={<ExternalLink className="w-4 h-4" />}
              >
                View on YouTube
              </Button>
            </div>
          </motion.div>

          {/* Video Preview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src={thumb}
                alt={title}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-600 shadow-xl"
                >
                  <Play className="w-8 h-8 fill-current translate-x-1" />
                </motion.div>
              </div>
            </div>

            {/* Decorative background orb */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        videoId={videoId} 
      />
    </section>
  );
}
