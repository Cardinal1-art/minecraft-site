import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('minecraft-service-lang');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    if (translations[langCode]) {
      setCurrentLanguage(langCode);
      localStorage.setItem('minecraft-service-lang', langCode);
    }
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return { currentLanguage, changeLanguage, t };
};