import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { useTranslation } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/serhatsoysal' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/serhatsoysal' },
    { name: 'Twitter', icon: FiTwitter, url: 'https://twitter.com/serhatsoysal' },
    { name: 'Email', icon: FiMail, url: 'mailto:serhat@serhatsoysal.com' }
  ];

  const footerLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-gradient mb-4 block">
              Serhat Soysal
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.contact')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {t('contact.info.email')}: serhat@serhatsoysal.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {t('contact.info.response')}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 