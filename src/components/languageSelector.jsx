/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: 'https://img.icons8.com/color/48/great-britain-circular.png' },
  { code: 'zh', name: '中文', flag: 'https://img.icons8.com/color/48/china-circular.png' },
  { code: 'hi', name: 'हिन्दी', flag: 'https://img.icons8.com/color/48/india-circular.png' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([i18n.language]);

  const toggleLanguage = (code) => {
    if (selectedLanguages.includes(code)) {
      if (selectedLanguages.length > 1) {
        setSelectedLanguages(prev => prev.filter(c => c !== code));
      }
    } else {
      setSelectedLanguages(prev => [...prev, code]);
    }
    i18n.changeLanguage(code);
  };

  return (
    <div className="group fixed bottom-10 right-10">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl"
        >
          <img width="40" height="40" src="https://img.icons8.com/ios/50/language.png" alt="language"/>
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl overflow-hidden">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => toggleLanguage(lang.code)}
                className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <img width="30" height="30" src={lang.flag} alt={`${lang.name} flag`} className="mr-2" />
                <span className="text-gray-800">{lang.name}</span>
                {selectedLanguages.includes(lang.code) && (
                  <svg className="ml-auto h-4 w-4 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      {languages
        .filter(lang => selectedLanguages.includes(lang.code) && lang.code !== 'en')
        .map((lang, index) => (
          <div 
            key={lang.code}
            className={`absolute rounded-full transition-all duration-200 ease-out ${
              index === 0
                ? 'group-hover:-translate-y-16'
                : 'group-hover:-translate-y-14 group-hover:-translate-x-14'
            } flex hover:p-3 hover:bg-gray-50`}
          >
            <img width="40" height="40" src={lang.flag} alt={`${lang.name} flag`} />
          </div>
        ))}
    </div>
  );
};

export default LanguageSelector;