import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayers, FiZap, FiSettings, FiDatabase, FiGlobe, FiTrendingUp, FiShield, FiUsers, FiServer, FiCpu } from 'react-icons/fi';
import { SiDocker, SiKubernetes, SiApachekafka, SiRedis, SiSpring, SiPostgresql } from 'react-icons/si';
import { Helmet } from 'react-helmet';
import { useTranslation } from '../contexts/LanguageContext';
import CodeVisualCard from '../components/CodeVisualCard';

const Home = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const floatingIcons = [
    { Icon: SiDocker, color: 'text-blue-500', delay: 0, position: 'top-[15%] left-[5%]', size: 'w-12 h-12' },
    { Icon: SiKubernetes, color: 'text-blue-600', delay: 0.5, position: 'top-[25%] right-[8%]', size: 'w-14 h-14' },
    { Icon: SiApachekafka, color: 'text-gray-900 dark:text-white', delay: 1, position: 'top-[60%] left-[3%]', size: 'w-10 h-10' },
    { Icon: SiRedis, color: 'text-red-600', delay: 1.5, position: 'bottom-[20%] right-[5%]', size: 'w-12 h-12' },
    { Icon: SiSpring, color: 'text-green-600', delay: 2, position: 'top-[45%] right-[12%]', size: 'w-11 h-11' },
    { Icon: SiPostgresql, color: 'text-blue-700', delay: 2.5, position: 'bottom-[35%] left-[7%]', size: 'w-10 h-10' },
    { Icon: FiServer, color: 'text-primary-500', delay: 0.8, position: 'top-[35%] left-[10%]', size: 'w-9 h-9' },
    { Icon: FiCpu, color: 'text-purple-500', delay: 1.8, position: 'bottom-[45%] right-[10%]', size: 'w-10 h-10' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('home.hero.name')} | {t('home.hero.title')}</title>
        <meta name="description" content={t('home.hero.description')} />
      </Helmet>
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-background-dark">
          {/* Background Elements */}
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>
          <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-slow"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
          
          {/* Floating Tech Stack Icons */}
          <div className="absolute inset-0 pointer-events-none z-[1] hidden lg:block">
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} ${item.size} ${item.color} opacity-20 dark:opacity-10`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 20 + index * 2,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
              >
                <item.Icon className="w-full h-full" />
              </motion.div>
            ))}
          </div>
          
          <div className="container-max relative z-10 px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content - Typography */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 text-center lg:text-left order-2 lg:order-1"
              >
                {/* Status Badge */}
                <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-600/30 bg-primary-600/10 backdrop-blur-sm cursor-default"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500 animate-pulse"></span>
                    </span>
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 tracking-widest uppercase">Available for hire</span>
                  </motion.div>
                </motion.div>

                {/* Hero Title */}
                <div className="space-y-2 sm:space-y-4">
                  <motion.h1 
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tighter text-gray-900 dark:text-white font-display"
                  >
                    CRAFTING <br />
                    <span className="text-gradient">DIGITAL</span> REALITIES.
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-600 dark:text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  {t('home.hero.description')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
                >
                  <Link 
                    to="/projects" 
                    className="group flex h-12 sm:h-14 w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-600 px-8 text-white text-base font-bold transition-all duration-300 hover:bg-primary-700 hover:shadow-[0_0_30px_rgba(140,43,238,0.6)] hover:scale-105 active:scale-95"
                  >
                    <span>{t('home.hero.cta.viewWork')}</span>
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="group flex h-12 sm:h-14 w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-8 text-gray-900 dark:text-white text-base font-bold backdrop-blur-sm transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-105 hover:border-primary-500 dark:hover:border-primary-400 active:scale-95"
                  >
                    <span>{t('home.hero.cta.getInTouch')}</span>
                  </Link>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                  variants={itemVariants}
                  className="pt-6 sm:pt-8 mt-4 border-t border-gray-200 dark:border-white/10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12"
                >
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">05<span className="text-primary-500">+</span></p>
                    <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Years Exp.</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">50<span className="text-primary-500">+</span></p>
                    <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Projects</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">100<span className="text-primary-500">%</span></p>
                    <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Satisfaction</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - Visual Card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none w-full"
              >
                <CodeVisualCard />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white dark:bg-background-dark/50 border-t border-gray-200 dark:border-white/5">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white font-display">
                {t('home.services.title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
                {t('home.services.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiCode className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.fullStack.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.fullStack.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiLayers className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.cloudNative.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.cloudNative.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiZap className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.systemDesign.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.systemDesign.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiSettings className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.devops.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.devops.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiDatabase className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.database.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.database.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiGlobe className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.apiDesign.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.apiDesign.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiTrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.performance.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.performance.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiShield className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.security.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.security.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center p-5 sm:p-6 glass-card rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 dark:bg-surface-dark rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiUsers className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t('home.services.consulting.title')}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t('home.services.consulting.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-padding bg-gray-50 dark:bg-background-dark border-t border-gray-200 dark:border-white/5">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-white font-display">
                {t('contact.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                {t('contact.subtitle')}
              </p>
              <Link to="/contact" className="inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full bg-primary-600 px-8 sm:px-10 text-white text-base sm:text-lg font-bold transition-all duration-300 hover:bg-primary-700 hover:shadow-[0_0_30px_rgba(140,43,238,0.6)] hover:scale-105 active:scale-95 group">
                <span>{t('home.hero.cta.getInTouch')}</span>
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 