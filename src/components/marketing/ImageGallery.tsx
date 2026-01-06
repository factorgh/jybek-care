'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Gallery images showcasing care moments
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop',
    alt: 'Caregiver helping elderly woman with mobility',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
    alt: 'Professional nurse with patient',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=300&fit=crop',
    alt: 'Senior enjoying quality time',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&h=300&fit=crop',
    alt: 'Family moment with elderly parent',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
    alt: 'Caring professional caregiver',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=400&fit=crop',
    alt: 'Happy senior couple',
    span: 'col-span-2 row-span-1',
  },
];

/**
 * Image gallery showcasing caregiving moments
 */
export function ImageGallery() {
  return (
    <section className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Care in Action
          </span>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Moments of Compassion & Care
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Every day, our caregivers create meaningful connections and provide 
            dignified care to families across the nation.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${image.span}`}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

