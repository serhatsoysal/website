import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import { useTranslation } from '../contexts/LanguageContext';

const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t('common.notFound')} | Serhat Soysal</title>
        <meta name="description" content={t('common.notFound')} />
      </Helmet>
      
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                404
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {t('common.notFound')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
            >
              {t('common.error')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/" className="btn-primary">
                <FiHome className="w-4 h-4" />
                {t('common.backHome')}
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="btn-secondary"
              >
                <FiArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 