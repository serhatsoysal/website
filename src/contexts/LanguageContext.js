import React, { createContext, useContext } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

// Create Language Context
const LanguageContext = createContext();

// Custom hook to use language context - Dependency Inversion Principle
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component - Single Responsibility Principle
export const LanguageProvider = ({ children }) => {
  const { currentLanguage, switchLanguage, supportedLanguages, currentLanguageInfo } = useLanguage();

  // Translation function with fallback - Interface Segregation Principle
  const t = (key, params = {}) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    // Navigate through nested translation keys
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    // Fallback to English if translation not found
    if (!translation) {
      translation = translations.en;
      for (const k of keys) {
        translation = translation?.[k];
      }
    }
    
    // Final fallback to key itself
    if (!translation) {
      return key;
    }
    
    // Replace parameters in translation
    if (typeof translation === 'string' && Object.keys(params).length > 0) {
      return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => {
        return params[param] || match;
      });
    }
    
    return translation;
  };

  const value = {
    currentLanguage,
    switchLanguage,
    supportedLanguages,
    currentLanguageInfo,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 