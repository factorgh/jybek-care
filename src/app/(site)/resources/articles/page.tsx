'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User, BookOpen, Tag, Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Article data
const articles = [
  {
    id: 1,
    title: 'Understanding the Benefits of In-Home Care for Seniors',
    excerpt: 'Discover why more families are choosing in-home care as a compassionate alternative to traditional nursing facilities. Learn about the advantages of personalized care in familiar surroundings.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop',
    category: 'Jybek Care Tips',
    author: 'Dr. Sarah Mitchell',
    date: 'January 5, 2026',
    readTime: '5 min read',
    slug: 'benefits-of-in-home-care',
  },
  {
    id: 2,
    title: 'How to Choose the Right Caregiver for Your Loved One',
    excerpt: 'A comprehensive guide to finding and selecting the perfect caregiver that matches your family\'s unique needs and preferences.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
    category: 'Jybek Guides',
    author: 'Emily Rodriguez',
    date: 'January 3, 2026',
    readTime: '7 min read',
    slug: 'choosing-right-caregiver',
  },
  {
    id: 3,
    title: 'Managing Chronic Conditions at Home: A Family Guide',
    excerpt: 'Learn effective strategies for managing chronic health conditions while maintaining comfort and quality of life at home.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    category: 'Jybek Health',
    author: 'Dr. Michael Chen',
    date: 'December 28, 2025',
    readTime: '8 min read',
    slug: 'managing-chronic-conditions',
  },
  {
    id: 4,
    title: 'The Importance of Companion Care for Emotional Wellbeing',
    excerpt: 'Explore how companionship and social interaction can significantly improve the mental health and happiness of seniors.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=500&fit=crop',
    category: 'Jybek Wellness',
    author: 'Jennifer Adams',
    date: 'December 22, 2025',
    readTime: '6 min read',
    slug: 'companion-care-emotional-wellbeing',
  },
  {
    id: 5,
    title: 'Navigating Memory Care: Support for Alzheimer\'s and Dementia',
    excerpt: 'Essential information and resources for families dealing with memory-related conditions in their loved ones.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
    category: 'Jybek Memory Care',
    author: 'Dr. Patricia Williams',
    date: 'December 18, 2025',
    readTime: '10 min read',
    slug: 'navigating-memory-care',
  },
  {
    id: 6,
    title: 'Respite Care: Taking Care of the Caregiver',
    excerpt: 'Understanding the importance of respite care and how it helps family caregivers maintain their own health and wellbeing.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop',
    category: 'Jybek Care Tips',
    author: 'Robert Thompson',
    date: 'December 15, 2025',
    readTime: '5 min read',
    slug: 'respite-care-caregiver-support',
  },
  {
    id: 7,
    title: 'Fall Prevention Strategies for Seniors at Home',
    excerpt: 'Practical tips and home modifications to reduce fall risk and keep your loved ones safe in their own home.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    category: 'Jybek Health',
    author: 'Dr. James Wilson',
    date: 'December 10, 2025',
    readTime: '6 min read',
    slug: 'fall-prevention-strategies',
  },
  {
    id: 8,
    title: 'Creating a Safe and Comfortable Home Environment',
    excerpt: 'A guide to modifying your home to accommodate aging in place safely and comfortably.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=500&fit=crop',
    category: 'Jybek Guides',
    author: 'Lisa Martinez',
    date: 'December 5, 2025',
    readTime: '7 min read',
    slug: 'safe-home-environment',
  },
  {
    id: 9,
    title: 'Nutrition Tips for Seniors: Eating Well at Any Age',
    excerpt: 'Expert advice on maintaining proper nutrition and healthy eating habits for older adults.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
    category: 'Jybek Wellness',
    author: 'Dr. Amanda Foster',
    date: 'November 30, 2025',
    readTime: '5 min read',
    slug: 'nutrition-tips-seniors',
  },
  {
    id: 10,
    title: 'Understanding the Stages of Dementia',
    excerpt: 'A comprehensive overview of dementia progression and what families can expect at each stage.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=500&fit=crop',
    category: 'Jybek Memory Care',
    author: 'Dr. Patricia Williams',
    date: 'November 25, 2025',
    readTime: '12 min read',
    slug: 'stages-of-dementia',
  },
  {
    id: 11,
    title: '10 Questions to Ask When Hiring a Caregiver',
    excerpt: 'Essential questions to help you find the right caregiver for your family\'s needs.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    category: 'Jybek Guides',
    author: 'Emily Rodriguez',
    date: 'November 20, 2025',
    readTime: '6 min read',
    slug: 'questions-hiring-caregiver',
  },
  {
    id: 12,
    title: 'Managing Medications: A Guide for Family Caregivers',
    excerpt: 'Tips and tools for safely managing multiple medications for your loved one.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop',
    category: 'Jybek Care Tips',
    author: 'Dr. Michael Chen',
    date: 'November 15, 2025',
    readTime: '8 min read',
    slug: 'managing-medications-guide',
  },
];

// Categories derived from articles
const categories = ['All Articles', ...Array.from(new Set(articles.map(a => a.category)))];

const ARTICLES_PER_PAGE = 6;

export default function JybekArticlesPage() {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = activeCategory === 'All Articles' || article.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Get article count per category
  const getCategoryCount = (category: string) => {
    if (category === 'All Articles') return articles.length;
    return articles.filter(a => a.category === category).length;
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Jybek Knowledge Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jybek Articles
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Expert insights, care tips, and resources to help you make informed decisions about home care for your loved ones.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                    : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-600 border border-gray-200 hover:border-brand-200'
                }`}
              >
                {category}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {getCategoryCount(category)}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredArticles.length}</span> article{filteredArticles.length !== 1 ? 's' : ''}
              {activeCategory !== 'All Articles' && (
                <span> in <span className="font-semibold text-brand-600">{activeCategory}</span></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<span className="font-semibold text-brand-600">{searchQuery}</span>&rdquo;</span>
              )}
            </p>
          </div>

          {/* Articles Grid */}
          <AnimatePresence mode="wait">
            {filteredArticles.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${searchQuery}-${currentPage}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {paginatedArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-600 text-white text-xs font-medium rounded-full shadow-lg">
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-brand-600" />
                          </div>
                          <span className="text-sm text-gray-600">{article.author}</span>
                        </div>
                        
                        <Link
                          href={`/resources/articles/${article.slug}`}
                          className="inline-flex items-center gap-1 text-brand-600 font-medium text-sm hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All Articles');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mt-12"
            >
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? 'bg-brand-600 text-white shadow-lg'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Informed with Jybek
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Subscribe to our newsletter for the latest articles, care tips, and resources delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-brand-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
