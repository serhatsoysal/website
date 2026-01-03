import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiArrowRight, FiHeart } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiFramer } from 'react-icons/si';
import { useTranslation } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/serhatsoysal', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/soysalserhat', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Twitter', icon: FiTwitter, url: 'https://twitter.com/serhatsoysalx', color: 'hover:text-blue-400 dark:hover:text-blue-300' },
    { name: 'Email', icon: FiMail, url: 'mailto:serhatsoysalx@gmail.com', color: 'hover:text-primary-600 dark:hover:text-primary-400' }
  ];

  const footerLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const techStack = [
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' }
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-background-dark/50 border-t border-gray-200 dark:border-white/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-500/5 to-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-primary-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-max relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-600 to-purple-400 flex items-center justify-center text-white shadow-xl shadow-primary-600/30"
              >
                <FiCode className="w-6 h-6" />
              </motion.div>
              <div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white block">
                  {t('home.hero.name')}
                </span>
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {t('home.hero.title')}
                </span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:shadow-lg`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-600 to-purple-400 rounded-full"></div>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary-600 to-purple-400 rounded-full"></div>
              {t('footer.contact')}
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {t('contact.info.email')}
                </p>
                <a 
                  href="mailto:serhatsoysalx@gmail.com"
                  className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  serhatsoysalx@gmail.com
                </a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('contact.info.response')}
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg shadow-primary-600/30"
                >
                  {t('home.hero.cta.getInTouch')}
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center justify-center md:justify-start gap-2">
                {t('footer.copyright', { year: currentYear })}
                <FiHeart className="w-4 h-4 text-red-500 inline-block animate-pulse" />
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span>{t('footer.builtWith')}</span>
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-1"
                  >
                    <tech.icon className={`w-4 h-4 ${tech.color}`} />
                    <span>{tech.name}</span>
                    {index < techStack.length - 1 && <span className="ml-2">•</span>}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card px-6 py-3 rounded-full"
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Made with <span className="text-primary-600 dark:text-primary-400">passion</span> in Dubai 🇦🇪
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
