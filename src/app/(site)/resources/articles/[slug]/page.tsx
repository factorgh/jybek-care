'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  User, 
  Tag, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui';

// Article data (in a real app, this would come from a CMS or database)
const articles: Record<string, {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
  author: string;
  authorBio: string;
  authorImage: string;
  date: string;
  readTime: string;
  tags: string[];
}> = {
  'benefits-of-in-home-care': {
    id: 1,
    title: 'Understanding the Benefits of In-Home Care for Seniors',
    excerpt: 'Discover why more families are choosing in-home care as a compassionate alternative to traditional nursing facilities.',
    content: [
      'As our loved ones age, one of the most important decisions families face is choosing the right care option. While nursing homes and assisted living facilities have their place, in-home care has emerged as a preferred choice for many families seeking personalized, compassionate care for their elderly relatives.',
      '## The Comfort of Familiar Surroundings',
      'One of the primary benefits of in-home care is that it allows seniors to remain in the comfort of their own homes. This familiarity can be incredibly important for emotional well-being, especially for those dealing with memory issues or cognitive decline. Being surrounded by personal belongings, family photos, and familiar routines can provide a sense of security and stability.',
      '## Personalized One-on-One Care',
      'Unlike institutional settings where staff must divide their attention among many residents, in-home caregivers can focus entirely on one individual. This personalized attention means care plans can be tailored to specific needs, preferences, and schedules. Whether it\'s preparing favorite meals, maintaining established routines, or providing companionship during preferred activities, in-home care adapts to the senior rather than the other way around.',
      '## Maintaining Independence',
      'In-home care supports independence by providing just the right amount of assistance needed. Caregivers can help with tasks that have become difficult while encouraging seniors to continue doing what they can safely manage on their own. This balance helps maintain dignity and self-esteem.',
      '## Family Involvement',
      'When care is provided at home, family members can remain actively involved in their loved one\'s daily life. They can visit freely, participate in care decisions, and maintain close relationships without the constraints of institutional visiting hours or policies.',
      '## Cost-Effective Care',
      'Contrary to what many assume, in-home care can be more cost-effective than residential care facilities, especially when full-time care isn\'t needed. Families can choose the level of care required—from a few hours a week to 24-hour support—paying only for the services they actually need.',
      '## Health Benefits',
      'Research has shown that seniors who receive care at home often experience better health outcomes. They\'re less exposed to infections common in group settings, experience less stress from environmental changes, and often recover more quickly from illness or surgery in familiar surroundings.',
      '## Making the Decision',
      'Choosing in-home care is a significant decision that should involve the senior, family members, and healthcare providers. Consider factors such as the level of care needed, the home environment, family support available, and personal preferences. A professional care assessment can help determine if in-home care is the right fit.',
      'At Jybek Home Care, we understand that every family\'s situation is unique. Our care coordinators work closely with families to develop personalized care plans that meet individual needs while respecting preferences and promoting independence. Contact us today to learn how we can support your family\'s caregiving journey.',
    ],
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=600&fit=crop',
    category: 'Jybek Care Tips',
    author: 'Dr. Sarah Mitchell',
    authorBio: 'Dr. Sarah Mitchell is a geriatric care specialist with over 20 years of experience in senior healthcare. She is passionate about helping families navigate care decisions.',
    authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    date: 'January 5, 2026',
    readTime: '5 min read',
    tags: ['In-Home Care', 'Senior Care', 'Family Caregiving', 'Health'],
  },
  'choosing-right-caregiver': {
    id: 2,
    title: 'How to Choose the Right Caregiver for Your Loved One',
    excerpt: 'A comprehensive guide to finding and selecting the perfect caregiver that matches your family\'s unique needs.',
    content: [
      'Finding the right caregiver for your loved one is one of the most important decisions you\'ll make. The right match can enhance quality of life, provide peace of mind, and create a caring relationship that benefits everyone involved.',
      '## Understanding Your Needs',
      'Before beginning your search, take time to clearly define what type of care is needed. Consider physical assistance requirements, medical needs, companionship preferences, and scheduling requirements. Document daily routines, preferences, and any special considerations that a caregiver should know.',
      '## Key Qualities to Look For',
      'Beyond technical skills, look for caregivers who demonstrate empathy, patience, and genuine compassion. Communication skills are crucial—your caregiver should be able to clearly communicate with both the care recipient and family members. Reliability and trustworthiness are non-negotiable qualities.',
      '## Essential Questions to Ask',
      'During interviews, ask about experience with similar care situations, how they handle emergencies, their approach to encouraging independence, and how they manage difficult situations. Request specific examples from their past caregiving experiences.',
      '## Background Checks and References',
      'Always verify credentials, conduct thorough background checks, and speak with references. A reputable home care agency handles these verifications as part of their hiring process, providing an additional layer of security.',
      '## The Importance of Compatibility',
      'Technical qualifications matter, but personal compatibility is equally important. Consider personality matches, shared interests, and communication styles. A trial period can help determine if the fit is right for everyone.',
      '## Working with an Agency vs. Private Hire',
      'Agencies provide pre-screened caregivers, handle payroll and taxes, offer backup coverage, and provide supervision. Private hire may cost less but requires families to manage employment responsibilities and find their own backup care.',
      '## Building a Successful Relationship',
      'Once you\'ve chosen a caregiver, invest time in building the relationship. Clear communication about expectations, regular check-ins, and appreciation for good work help create a positive caregiving environment.',
      'At Jybek Home Care, we carefully match caregivers with families based on care needs, personality, and preferences. Our thorough screening process and ongoing supervision ensure you receive quality care you can trust.',
    ],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=600&fit=crop',
    category: 'Jybek Guides',
    author: 'Emily Rodriguez',
    authorBio: 'Emily Rodriguez is a certified care manager and family consultant who has helped hundreds of families find the right care solutions.',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    date: 'January 3, 2026',
    readTime: '7 min read',
    tags: ['Caregiver Selection', 'Family Guide', 'Home Care'],
  },
  'managing-chronic-conditions': {
    id: 3,
    title: 'Managing Chronic Conditions at Home: A Family Guide',
    excerpt: 'Learn effective strategies for managing chronic health conditions while maintaining comfort and quality of life at home.',
    content: [
      'Managing chronic conditions at home requires knowledge, planning, and the right support system. With proper strategies, many people with chronic illnesses can maintain their independence and quality of life while receiving care in the comfort of home.',
      '## Understanding Chronic Condition Management',
      'Chronic conditions like diabetes, heart disease, COPD, and arthritis require ongoing management rather than one-time treatment. Success depends on consistent medication management, lifestyle modifications, regular monitoring, and proactive communication with healthcare providers.',
      '## Creating a Care Plan',
      'Work with your healthcare team to develop a comprehensive care plan. This should include medication schedules, dietary requirements, exercise recommendations, warning signs to watch for, and emergency protocols. Keep this plan updated and share it with all caregivers.',
      '## Medication Management',
      'Proper medication management is critical. Use pill organizers, set reminders, maintain an updated medication list, and understand potential side effects. Professional caregivers can provide medication reminders and monitor for adverse reactions.',
      '## Monitoring and Documentation',
      'Keep track of vital signs, symptoms, and any changes in condition. Regular monitoring can help identify problems early. Share this information with healthcare providers at appointments to help them make informed decisions.',
      '## Nutrition and Exercise',
      'Many chronic conditions benefit from specific dietary approaches and appropriate physical activity. Work with healthcare providers to understand recommendations and find ways to incorporate healthy habits into daily routines.',
      '## Emotional Well-being',
      'Living with chronic conditions can be emotionally challenging. Address mental health needs alongside physical care. Social connection, meaningful activities, and professional support when needed all contribute to overall well-being.',
      '## When to Seek Help',
      'Know the warning signs that require medical attention. Have emergency contacts readily available and ensure caregivers understand emergency protocols. Don\'t hesitate to seek help when symptoms worsen or new problems arise.',
      'Jybek Home Care provides specialized support for individuals managing chronic conditions. Our caregivers receive training in condition-specific care and work closely with healthcare teams to ensure comprehensive, coordinated support.',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    category: 'Jybek Health',
    author: 'Dr. Michael Chen',
    authorBio: 'Dr. Michael Chen is an internal medicine physician specializing in chronic disease management and home-based care strategies.',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
    date: 'December 28, 2025',
    readTime: '8 min read',
    tags: ['Chronic Conditions', 'Health Management', 'Home Care'],
  },
};

// Default article for unknown slugs
const defaultArticle = {
  id: 0,
  title: 'Article Not Found',
  excerpt: 'The requested article could not be found.',
  content: ['We couldn\'t find the article you\'re looking for. Please check the URL or browse our other articles.'],
  image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=600&fit=crop',
  category: 'Jybek Articles',
  author: 'Jybek Team',
  authorBio: 'The Jybek Home Care team is dedicated to providing valuable resources for families.',
  authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
  date: 'January 1, 2026',
  readTime: '1 min read',
  tags: [],
};

// Related articles
const relatedArticles = [
  {
    title: 'The Importance of Companion Care for Emotional Wellbeing',
    slug: 'companion-care-emotional-wellbeing',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=250&fit=crop',
    category: 'Jybek Wellness',
  },
  {
    title: 'Respite Care: Taking Care of the Caregiver',
    slug: 'respite-care-caregiver-support',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=250&fit=crop',
    category: 'Jybek Care Tips',
  },
  {
    title: 'Fall Prevention Strategies for Seniors at Home',
    slug: 'fall-prevention-strategies',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
    category: 'Jybek Health',
  },
];

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug] || defaultArticle;

  const renderContent = (content: string[]) => {
    return content.map((paragraph, index) => {
      // Check if it's a heading
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      // Regular paragraph
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link 
              href="/resources/articles"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>

            {/* Category */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="font-medium">{article.author}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-500">Share:</span>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none">
              {renderContent(article.content)}
            </article>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Box */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Written by {article.author}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {article.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/resources/articles/${relatedArticle.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-brand-600 text-white text-xs font-medium rounded-full">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help with Home Care?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our care experts are ready to help you find the perfect care solution for your loved one. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-care">
                <Button
                  size="lg"
                  className="bg-white text-brand-600 hover:bg-gray-100"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Find Jybek Care Now
                </Button>
              </Link>
              <a href="tel:+18887175009">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  leftIcon={<Phone className="w-5 h-5" />}
                >
                  +1 888-717-5009
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

