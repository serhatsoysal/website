import { useState, useEffect } from 'react';

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

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (savedLanguage && SUPPORTED_LANGUAGES[savedLanguage]) {
      return savedLanguage;
    }
    const browserLanguage = navigator.language.split('-')[0];
    return SUPPORTED_LANGUAGES[browserLanguage] ? browserLanguage : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentLanguage);
    document.documentElement.lang = currentLanguage;
    if (currentLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLanguage]);

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