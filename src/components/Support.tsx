import React, { useState } from 'react';
import { MessageCircle, Mail, Users, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Support: React.FC = () => {
  const { t } = useLanguage();
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hello! How can we help you today?', sender: 'support', time: '10:30 AM' }
  ]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatMessage,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatMessage('');
      
      // Simulate auto-reply
      setTimeout(() => {
        const autoReply = {
          id: chatMessages.length + 2,
          text: 'Thank you for your message! Our team will get back to you shortly.',
          sender: 'support',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, autoReply]);
      }, 1000);
    }
  };

  const socialLinks = [
    { name: 'Discord', icon: '🎮', url: '#', color: 'bg-indigo-600 hover:bg-indigo-500' },
    { name: 'VKontakte', icon: 'VK', url: '#', color: 'bg-blue-600 hover:bg-blue-500' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'bg-pink-600 hover:bg-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 pixel-font">
            {t('supportTitle')} 🎧
          </h1>
          <p className="text-xl text-gray-600">
            {t('supportSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Live Chat */}
          <div className="bg-white rounded-lg shadow-lg minecraft-card">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <MessageCircle className="text-green-500" />
                <span>{t('chatSupport')}</span>
              </h2>
            </div>
            
            <div className="h-80 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder={t('typeMessage')}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg minecraft-button flex items-center space-x-2"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Support */}
            <div className="bg-white rounded-lg shadow-lg p-6 minecraft-card">
              <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2 mb-4">
                <Mail className="text-red-500" />
                <span>{t('email')}</span>
              </h3>
              <p className="text-gray-600 mb-4">
                {t('getDetailedHelp')}
              </p>
              <a
                href="mailto:support@minecraft-services.com"
                className="inline-block px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-bold rounded-lg minecraft-button"
              >
                {t('sendEmail')} 📧
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-6 minecraft-card">
              <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2 mb-4">
                <Users className="text-purple-500" />
                <span>{t('socialTitle')}</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`flex items-center justify-center space-x-2 px-4 py-3 ${social.color} text-white font-bold rounded-lg minecraft-button transition-all duration-200`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-lg p-6 minecraft-card">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t('faqTitle')} 🤔
              </h3>
              <div className="space-y-3">
                <details className="border border-gray-200 rounded-lg p-3">
                  <summary className="font-semibold cursor-pointer">
                    {t('faqQuestion1')}
                  </summary>
                  <p className="mt-2 text-gray-600">
                    {t('faqAnswer1')}
                  </p>
                </details>
                <details className="border border-gray-200 rounded-lg p-3">
                  <summary className="font-semibold cursor-pointer">
                    {t('faqQuestion2')}
                  </summary>
                  <p className="mt-2 text-gray-600">
                    {t('faqAnswer2')}
                  </p>
                </details>
                <details className="border border-gray-200 rounded-lg p-3">
                  <summary className="font-semibold cursor-pointer">
                    {t('faqQuestion3')}
                  </summary>
                  <p className="mt-2 text-gray-600">
                    {t('faqAnswer3')}
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;