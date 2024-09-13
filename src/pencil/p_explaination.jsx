/* eslint-disable no-unused-vars */
import React from 'react';
import { MoveLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/languageSelector';

const P_explanation = () => {
  const { t } = useTranslation(); 

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-4 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <div className='flex items-center justify-between'>
            <button onClick={() => window.history.back()} className='font-bold text-xl flex items-center text-blue-400 hover:text-blue-300 transition-colors'>
              <MoveLeft className="mr-2" />
              {t('backButton')}
            </button>
            <h1 className="text-2xl font-bold text-center text-blue-400">
              {t('pencilExplanation')}
            </h1>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-4 text-lg">
            {t('labTestIntro')}
          </p>
          <ul className="space-y-4 list-disc pl-6 mb-6">
            <li>
              <span className="font-semibold">{t('sharpPencil')}:</span> {t('sharpPencilDescription')}
            </li>
            <li>
              <span className="font-semibold">{t('bluntPencil')}:</span> {t('bluntPencilDescription')}
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-3 text-blue-400">{t('outcome')}</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>{t('sharpPencilOutcome')}</li> 
            <li>{t('bluntPencilOutcome')}</li> 
          </ol>
        </div>
      </div>
      <LanguageSelector/>
    </div>
  );
};

export default P_explanation;
