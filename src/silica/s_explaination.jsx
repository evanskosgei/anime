/* eslint-disable no-unused-vars */
import React from 'react';
import { MoveLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/languageSelector';

const S_explaination = () => {
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
              {t('silicaPlate')}
            </h1>
          </div>
        </div>
        <div className="p-6">
          <p>{t('description')}</p>

          <h4 className='text-xl font-bold text-blue-400'>{t('keyCharacteristics')}</h4>
          <ol className="space-y-4 list-disc pl-6 mb-6">

            <li>{t('stationaryPhase')}</li>
            <span className="font-semibold">{t('stationaryPhaseDescription')}</span>

            <li>{t('polarity')}</li>
            <span className="font-semibold">{t('polarityDescription')}</span>

            <li>{t('surfaceStructure')}</li>
            <span className="font-semibold">{t('surfaceStructureDescription')}</span>

            <li>{t('usageInTLC')}</li>
            <span className="font-semibold">{t('usageInTLCDescription')}</span>
            
            <li>{t('wearAndTear')}</li>
            <span className="font-semibold">{t('wearAndTearDescription')}</span>
          </ol>
          <h4 className='text-xl font-bold text-blue-400'>{t('applications')}</h4>
          <ol className="space-y-4 list-decimal pl-6 mb-6">
            <li className="font-semibold">{t('chemicalAnalysis')}</li>
            <li className="font-semibold">{t('purityTesting')}</li>
            <li className="font-semibold">{t('qualitativeAnalysis')}</li>
          </ol>
        </div>
      </div>
      <LanguageSelector/>
    </div>
  )
}

export default S_explaination;
