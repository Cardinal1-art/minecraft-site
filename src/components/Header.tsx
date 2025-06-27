import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { languages } from '../data/languages';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentSection }) => {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const navigationItems = [
    { key: 'home', label: t('home') },
    { key: 'shop', label: t('shop') },
    { key: 'support', label: t('support') },
    { key: 'terms', label: t('terms') }
  ];

  return (
    <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-brown-600 border-2 border-brown-700 minecraft-block"></div>
            <h1 className="text-xl font-bold pixel-font">MineCraft Services</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 minecraft-button ${
                  currentSection === item.key
                    ? 'bg-green-700 shadow-inner'
                    : 'hover:bg-green-500 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language & Cart */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-green-500 transition-colors"
              >
                <Globe size={20} />
                <span className="hidden sm:inline">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code);
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-green-100 flex items-center space-x-2 ${
                        currentLanguage === language.code ? 'bg-green-50 font-semibold' : ''
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={() => onNavigate('cart')}
              className="relative px-4 py-2 bg-orange-500 hover:bg-orange-400 rounded-lg transition-all duration-200 minecraft-button flex items-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">{t('cart')}</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-green-500 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-500">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-all duration-200 minecraft-button ${
                    currentSection === item.key
                      ? 'bg-green-700 shadow-inner'
                      : 'hover:bg-green-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;