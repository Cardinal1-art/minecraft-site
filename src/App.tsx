import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Support from './components/Support';
import Terms from './components/Terms';
import { useCart } from './hooks/useCart';
import './styles/minecraft.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  
  // Initialize cart hook to enable cart functionality
  useCart();

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onNavigate={setCurrentSection} />;
      case 'shop':
        return <Shop />;
      case 'cart':
        return <Cart onNavigate={setCurrentSection} />;
      case 'support':
        return <Support />;
      case 'terms':
        return <Terms />;
      default:
        return <Home onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onNavigate={setCurrentSection} currentSection={currentSection} />
      {renderCurrentSection()}
    </div>
  );
}

export default App;