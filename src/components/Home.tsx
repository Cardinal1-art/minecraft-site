import React from 'react';
import { Pickaxe, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface HomeProps {
  onNavigate: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Pickaxe className="w-12 h-12 text-orange-500" />,
      title: t('premiumTools'),
      description: t('premiumToolsDesc')
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: t('vipProtection'),
      description: t('vipProtectionDesc')
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: t('serverBoosts'),
      description: t('serverBoostsDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-green-400 to-green-600">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 pixel-font drop-shadow-lg">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
              {t('heroSubtitle')}
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white text-xl font-bold rounded-lg transition-all duration-300 minecraft-button hover:scale-105 shadow-lg"
            >
              {t('shop')} 🛒
            </button>
          </div>
        </div>

        {/* Floating Blocks Animation */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-brown-600 minecraft-block animate-float opacity-80"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-green-700 minecraft-block animate-float-delayed opacity-80"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-stone-600 minecraft-block animate-float opacity-80"></div>
        <div className="absolute bottom-32 right-10 w-14 h-14 bg-blue-600 minecraft-block animate-float-delayed opacity-80"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 pixel-font">
            {t('whyChooseUs')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-lg minecraft-card hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 pixel-font">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('joinThousands')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-all duration-300 minecraft-button"
            >
              {t('browseShop')} 🛍️
            </button>
            <button
              onClick={() => onNavigate('support')}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg transition-all duration-300 minecraft-button"
            >
              {t('getSupport')} 💬
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;