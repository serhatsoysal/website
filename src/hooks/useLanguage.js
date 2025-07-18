import { useState, useEffect } from 'react';

// Language configuration - follows Open/Closed Principle
const SUPPORTED_LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  tr: {
    code: 'tr',
    name: 'Türkçe',
    flag: '🇹🇷'
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦'
  },
  it: {
    code: 'it',
    name: 'Italiano',
    flag: '🇮🇹'
  }
};

const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'preferred-language';

// Custom hook for language management - Single Responsibility Principle
export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (savedLanguage && SUPPORTED_LANGUAGES[savedLanguage]) {
      return savedLanguage;
    }
    
    // Fallback to browser language
    const browserLanguage = navigator.language.split('-')[0];
    return SUPPORTED_LANGUAGES[browserLanguage] ? browserLanguage : DEFAULT_LANGUAGE;
  });

  // Effect to persist language choice
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentLanguage);
    document.documentElement.lang = currentLanguage;
    
    // Set document direction for RTL languages
    if (currentLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLanguage]);

  // Language switching function
  const switchLanguage = (languageCode) => {
    if (SUPPORTED_LANGUAGES[languageCode]) {
      setCurrentLanguage(languageCode);
    }
  };

  return {
    currentLanguage,
    switchLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
    currentLanguageInfo: SUPPORTED_LANGUAGES[currentLanguage]
  };
}; 