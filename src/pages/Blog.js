import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiCalendar, FiClock, FiArrowRight, FiSearch, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { useTranslation } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('blog.meta.title')}</title>
        <meta name="description" content={t('blog.meta.description')} />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <section className="relative py-20 bg-white dark:bg-background-dark overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-blue-500/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-primary-500/5 rounded-full blur-3xl"
            />
          </div>
          
          <div className="container-max relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
              >
                <span className="text-primary-600 dark:text-primary-400 font-semibold">{t('blog.hero.badge')}</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('blog.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('blog.hero.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative glass-card p-4">
                <FiSearch className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('blog.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {allTags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                      : 'glass-card text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {tag === 'all' ? t('blog.tags.all') : tag}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding bg-gray-50 dark:bg-background-dark/50">
          <div className="container-max">
            {searchTerm === '' && selectedTag === 'all' && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-8">
                  <FiTrendingUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t('blog.featured.title')}
                  </h2>
                </div>
                
                <Link to={`/blog/${featuredPost.slug}`}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="glass-card overflow-hidden group hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
                  >
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary-500 via-blue-500 to-indigo-600 overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 via-blue-500/90 to-indigo-600/90"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <FiBookOpen className="w-24 h-24 text-white opacity-50" />
                          </div>
                        </motion.div>
                        <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                          <FiTrendingUp className="w-4 h-4" />
                          {t('blog.badges.featured')}
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <FiCalendar className="w-4 h-4" />
                            {formatDate(featuredPost.date)}
                          </div>
                          <div className="flex items-center gap-2">
                            <FiClock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {featuredPost.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                          {featuredPost.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPost.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-4 transition-all duration-300">
                          {t('blog.readMore')}
                          <FiArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            )}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {regularPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="glass-card overflow-hidden group hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48 bg-gradient-to-br from-primary-500 via-blue-500 to-indigo-600 overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 via-blue-500/80 to-indigo-600/80"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FiBookOpen className="w-16 h-16 text-white opacity-40" />
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium group-hover:gap-3 transition-all duration-300">
                        {t('blog.readMore')}
                        <FiArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <FiSearch className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t('blog.noResults.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('blog.noResults.description')}
                </p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center glass-card p-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6"
              >
                <FiBookOpen className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('blog.cta.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('blog.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary group"
                >
                  {t('blog.cta.getInTouch')}
                  <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://github.com/serhatsoysal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  {t('blog.cta.followGithub')}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
