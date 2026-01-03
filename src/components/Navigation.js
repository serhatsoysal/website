import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = ({ isDark, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/blog', label: t('nav.blog') },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between w-full max-w-6xl transition-all duration-300">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-primary-600/30 transition-transform group-hover:scale-110 flex items-center justify-center">
            <img 
              src="/avatar.png" 
              alt="Serhat Soysal" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-900 dark:text-white text-lg font-bold tracking-tight hidden sm:block">
            {t('home.hero.name')}
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all duration-200 relative ${
                isActive(item.path) 
                  ? 'text-primary-600 dark:text-white' 
                  : 'text-gray-600 dark:text-white/70 hover:text-primary-600 dark:hover:text-white hover:scale-105'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                />
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-gray-600 dark:text-white/70 hover:text-primary-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
            aria-label={t('common.toggleTheme')}
          >
            {isDark ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>

          <Link
            to="/contact"
            className="hidden lg:flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary-600 text-white hover:bg-primary-700 transition-all text-sm font-bold leading-normal tracking-tight shadow-lg"
          >
            <span className="truncate">{t('home.hero.cta.getInTouch')}</span>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-white/70 hover:text-primary-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-4 right-4 glass-nav rounded-2xl p-4 md:hidden"
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive(item.path) 
                    ? 'text-primary-600 dark:text-white bg-primary-50 dark:bg-primary-600/20' 
                    : 'text-gray-600 dark:text-white/70 hover:text-primary-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 mt-2 text-base font-bold rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              {t('home.hero.cta.getInTouch')}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation; 