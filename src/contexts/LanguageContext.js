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

export const LanguageProvider = ({ children }) => {
  const { currentLanguage, switchLanguage, supportedLanguages, currentLanguageInfo } = useLanguage();

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    for (const k of keys) {
      translation = translation?.[k];
    }
    if (!translation) {
      translation = translations.en;
      for (const k of keys) {
        translation = translation?.[k];
      }
    }
    if (!translation) {
      return key;
    }
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