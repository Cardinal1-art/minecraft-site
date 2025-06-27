import React from 'react';
import { FileText, Shield, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Terms: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 pixel-font">
            {t('termsTitle')} 📋
          </h1>
          <p className="text-xl text-gray-600">
            {t('termsSubtitle')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden minecraft-card">
          <div className="p-8">
            <div className="flex items-center space-x-2 mb-6">
              <FileText className="text-blue-500" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">{t('termsTitle')}</h2>
            </div>

            <div className="prose max-w-none text-gray-700 space-y-6">
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center space-x-2">
                  <Shield className="text-green-500" size={20} />
                  <span>{t('serviceAgreement')}</span>
                </h3>
                <p>
                  {t('serviceAgreementText')}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('paymentTerms')}</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('paymentTermsText')}</li>
                  <li>{t('pricesInUSD')}</li>
                  <li>{t('digitalProducts')}</li>
                  <li>{t('physicalItems')}</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('refundPolicy')}</h3>
                <p>
                  {t('refundPolicyText')}
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>{t('refundCondition1')}</li>
                  <li>{t('refundCondition2')}</li>
                  <li>{t('refundCondition3')}</li>
                  <li>{t('refundCondition4')}</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center space-x-2">
                  <AlertTriangle className="text-yellow-500" size={20} />
                  <span>{t('userResponsibilities')}</span>
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('userResp1')}</li>
                  <li>{t('userResp2')}</li>
                  <li>{t('userResp3')}</li>
                  <li>{t('userResp4')}</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('serviceAvailability')}</h3>
                <p>
                  {t('serviceAvailabilityText')}
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>{t('outage1')}</li>
                  <li>{t('outage2')}</li>
                  <li>{t('outage3')}</li>
                  <li>{t('outage4')}</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('privacyPolicy')}</h3>
                <p>
                  {t('privacyPolicyText')}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('limitationLiability')}</h3>
                <p>
                  {t('limitationLiabilityText')}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('contactInfo')}</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> support@minecraft-services.com</p>
                  <p><strong>Discord:</strong> MinecraftServices#1234</p>
                  <p><strong>Support Hours:</strong> 24/7</p>
                </div>
              </section>

              <section className="border-t pt-6">
                <p className="text-sm text-gray-500">
                  <strong>{t('lastUpdated')}:</strong> {new Date().toLocaleDateString()}<br />
                  {t('termsEffective')}
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Agreement Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg minecraft-button transition-all duration-300">
            {t('agreeToTerms')} ✅
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;