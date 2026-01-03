import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiExternalLink, FiGithub, FiStar, FiCode, FiLayers, FiFilter } from 'react-icons/fi';
import { useTranslation } from '../contexts/LanguageContext';
import { projects } from '../data/projects';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

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
        <title>{t('projects.meta.title')}</title>
        <meta name="description" content={t('projects.meta.description')} />
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
                duration: 35,
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
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-tr from-indigo-500/10 to-primary-500/5 rounded-full blur-3xl"
            />
          </div>
          
          <div className="container-max relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
              >
                <span className="text-primary-600 dark:text-primary-400 font-semibold">{t('projects.hero.badge')}</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('projects.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('projects.hero.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="glass-card rounded-full p-1 flex items-center gap-2">
                <FiFilter className="w-4 h-4 text-primary-600 dark:text-primary-400 ml-3" />
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === 'all'
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {t('projects.filters.all')}
                </button>
                <button
                  onClick={() => setFilter('featured')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === 'featured'
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {t('projects.filters.featured')}
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding bg-gray-50 dark:bg-background-dark/50">
          <div className="container-max">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-2 gap-8 mb-16"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group glass-card overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-primary-500 via-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/80 via-blue-500/80 to-indigo-600/80"></div>
                        <div className="absolute inset-0 opacity-20">
                          <div className="grid grid-cols-8 gap-4 p-8">
                            {[...Array(24)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                                className="w-full h-8 bg-white rounded"
                              ></motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                      <div className="text-white text-center relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="inline-block mb-4"
                        >
                          <FiCode className="w-16 h-16 mx-auto" />
                        </motion.div>
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                      </div>
                    </div>
                    {project.featured && (
                      <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                      >
                        <FiStar className="w-4 h-4" />
                        {t('projects.badges.featured')}
                      </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <FiLayers className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t('projects.techStack')}:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg shadow-primary-500/30"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          {t('projects.buttons.liveDemo')}
                        </motion.a>
                      )}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-medium transition-all duration-200"
                      >
                        <FiGithub className="w-4 h-4" />
                        {t('projects.buttons.github')}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

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
                <FiCode className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('projects.cta.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('projects.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary group"
                >
                  {t('projects.cta.startProject')}
                  <FiExternalLink className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://github.com/serhatsoysal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary group"
                >
                  <FiGithub className="inline-block mr-2 group-hover:rotate-12 transition-transform" />
                  {t('projects.cta.viewGithub')}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
