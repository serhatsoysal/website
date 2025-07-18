import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayers, FiZap } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import { useTranslation } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
        <title>{t('home.hero.name')} | {t('home.hero.title')}</title>
        <meta name="description" content={t('home.hero.description')} />
      </Helmet>
      
      <div className="pt-16">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with gradient and geometric shapes */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-blue-300/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-primary-300/20 rounded-full blur-3xl"
            />
            
            {/* Floating code elements */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-20 text-4xl text-primary-300/40 dark:text-primary-600/40 font-mono"
            >
              {'{ }'}
            </motion.div>
            <motion.div
              animate={{
                y: [20, -20, 20],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-40 right-32 text-3xl text-blue-300/40 dark:text-blue-600/40 font-mono"
            >
              {'</>'} 
            </motion.div>
            <motion.div
              animate={{
                y: [-15, 15, -15],
                x: [5, -5, 5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-40 left-32 text-5xl text-indigo-300/40 dark:text-indigo-600/40 font-mono"
            >
              {'</>'}
            </motion.div>
          </div>
          
          <div className="container-max relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              {/* Profile avatar placeholder */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">SS</span>
                </div>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="text-gray-900 dark:text-white">
                  {t('home.hero.greeting')} {t('home.hero.name')}
                </span>
                <br />
                <span className="text-gradient">{t('home.hero.title')}</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
              >
                {t('home.hero.subtitle')}
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
              >
                {t('home.hero.description')}
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              >
                <Link to="/projects" className="btn-primary transform hover:scale-105 transition-transform duration-200">
                  {t('home.hero.cta.viewWork')}
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/about" className="btn-secondary transform hover:scale-105 transition-transform duration-200">
                  {t('nav.about')}
                </Link>
                <Link to="/contact" className="btn-secondary transform hover:scale-105 transition-transform duration-200">
                  {t('home.hero.cta.getInTouch')}
                </Link>
              </motion.div>
              
              {/* Scroll indicator */}
              <motion.div
                variants={itemVariants}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
                >
                  <div className="w-1 h-3 bg-primary-500 rounded-full mt-2"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-gray-50 dark:bg-dark-800">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('home.services.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('home.services.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center p-6 bg-white dark:bg-dark-700 rounded-lg shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCode className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('home.services.fullStack.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('home.services.fullStack.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center p-6 bg-white dark:bg-dark-700 rounded-lg shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiLayers className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('home.services.cloudNative.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('home.services.cloudNative.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center p-6 bg-white dark:bg-dark-700 rounded-lg shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiZap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('home.services.systemDesign.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('home.services.systemDesign.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                {t('contact.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('contact.subtitle')}
              </p>
              <Link to="/contact" className="btn-primary">
                {t('home.hero.cta.getInTouch')}
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 