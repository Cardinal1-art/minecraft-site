import React from 'react';
import { Minus, Plus, Trash2, CreditCard } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';

interface CartProps {
  onNavigate: (section: string) => void;
}

const Cart: React.FC<CartProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    alert('Redirecting to payment...');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-300 minecraft-block mx-auto mb-6 opacity-50"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 pixel-font">
              {t('cartEmpty')} 🛒
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('startShopping')}
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-all duration-300 minecraft-button"
            >
              {t('browseShop')} 🛍️
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 pixel-font">
          {t('cartTitle')} 🛒
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 minecraft-card"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 bg-red-500 hover:bg-red-400 text-white rounded-lg minecraft-button"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-xl font-bold px-4 py-2 bg-gray-100 rounded-lg">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 bg-green-500 hover:bg-green-400 text-white rounded-lg minecraft-button"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-xl font-bold text-green-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 bg-red-500 hover:bg-red-400 text-white rounded-lg minecraft-button"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6 minecraft-card h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pixel-font">
              {t('orderSummary')}
            </h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-600">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold text-gray-800">
                <span>{t('total')}</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {t('paymentTitle')}
              </h3>
              
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-200 minecraft-button"
              >
                <CreditCard size={20} />
                <span>{t('payWithStripe')}</span>
              </button>
              
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-lg transition-all duration-200 minecraft-button"
              >
                <CreditCard size={20} />
                <span>{t('payWithPayPal')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;