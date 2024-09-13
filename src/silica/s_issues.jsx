/* eslint-disable no-unused-vars */
import React from 'react';
import { MoveLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/languageSelector';

const S_issues = () => {
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
                            {t('silicaIssues')}
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p>{t('Description')}</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">

                        <li>{t('fragilityAndSurfaceDamage')}:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">{t('brittleness')}:</span> {t('brittlenessDescription')}</li>
                            <li><span className="font-semibold">{t('scratches')}:</span> {t('scratchesDescription')}</li>
                            <li><span className="font-semibold">{t('chipping')}:</span> {t('chippingDescription')}</li>
                        </ol>

                        <li>{t('nonUniformCoating')}:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">{t('inconsistentLayerThickness')}:</span> {t('inconsistentLayerThicknessDescription')}</li>
                        </ol>

                        <li>{t('solventAndSampleIssues')}:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">{t('overloadingTheSample')}:</span> {t('overloadingTheSampleDescription')}</li>
                            <li><span className="font-semibold">{t('solventCompatibility')}:</span> {t('solventCompatibilityDescription')}</li>
                            <li><span className="font-semibold">{t('solventSaturation')}:</span> {t('solventSaturationDescription')}</li>
                        </ol>

                        <li>{t('poorSeparation')}:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">{t('improperSolventPolarity')}:</span> {t('improperSolventPolarityDescription')}</li>
                            <li><span className="font-semibold">{t('overlappingSpots')}:</span> {t('overlappingSpotsDescription')}</li>
                        </ol>

                        <li>{t('environmentalFactors')}:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">{t('humidity')}:</span> {t('humidityDescription')}</li>
                            <li><span className="font-semibold">{t('temperature')}:</span> {t('temperatureDescription')}</li>
                        </ol>
                    </ol>
                </div>
            </div>
            <LanguageSelector/>
        </div>
    );
};

export default S_issues;
