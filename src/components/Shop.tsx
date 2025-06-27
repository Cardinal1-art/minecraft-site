import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';

const Shop: React.FC = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: t('allItems') },
    { key: 'ranks', label: t('ranks') },
    { key: 'items', label: t('items') },
    { key: 'services', label: t('services') },
    { key: 'cosmetics', label: t('cosmetics') }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    // Add a visual feedback animation
    const button = document.activeElement as HTMLElement;
    if (button) {
      button.classList.add('animate-bounce');
      setTimeout(() => {
        button.classList.remove('animate-bounce');
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 pixel-font">
            {t('shopTitle')} 🏪
          </h1>
          <p className="text-xl text-gray-600">
            {t('shopSubtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 text-gray-700 font-semibold">
            <Filter size={20} />
            <span>{t('filter')}:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 minecraft-button ${
                selectedCategory === category.key
                  ? 'bg-green-500 text-white shadow-inner'
                  : 'bg-white text-gray-700 hover:bg-green-100 hover:shadow-lg'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden minecraft-card hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  ${product.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-lg transition-all duration-200 minecraft-button hover:shadow-lg"
                  >
                    <Plus size={18} />
                    <span>{t('addToCart')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-300 minecraft-block mx-auto mb-4 opacity-50"></div>
            <p className="text-xl text-gray-500">{t('noItemsFound')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;