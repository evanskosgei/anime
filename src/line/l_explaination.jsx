/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';
import LanguageSelector from '../components/languageSelector';
import { useTranslation } from 'react-i18next';

const L_explaination = () => {
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
                            {t('lineExplanation')}
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p>{t('silicaPlatePreparation')}</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li>{t('drawingBaseline')}</li>
                        <ol className='list-disc'>
                            <li>
                                <span className="font-normal">
                                    {t('baselineInstructions1')}
                                </span>
                            </li>
                            <li>
                                <span className="font-normal">
                                    {t('baselineInstructions2')} 
                                </span>
                            </li>
                        </ol>

                        <li>{t('markingSamplePoints')}</li>
                        <ol className='list-disc'>
                            <li>
                                <span className="font-semibold">
                                    {t('samplePointsInstructions1')}
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    {t('samplePointsInstructions2')} 
                                </span>
                            </li>
                        </ol>
                    </ol>

                    <h1 className="text-2xl font-bold text-blue-400">
                        {t('importanceOfLine')}
                    </h1>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li>{t('baselineForSampleApplication')}</li>
                        <ol className='list-disc'>
                            <li>
                                <span className="font-semibold">
                                    {t('baselineForSampleApplicationInfo')}
                                </span>
                            </li>
                        </ol>

                        <li>{t('consistencyAcrossExperiments')}</li>
                        <ol className='list-disc'>
                            <li>
                                <span className="font-semibold">
                                    {t('consistencyAcrossExperimentsInfo')}
                                </span>
                            </li>
                        </ol>

                        <li>{t('preventsContaminationBySolvent')}</li> 
                        <ol className='list-disc'>
                            <li>
                                <span className="font-semibold">
                                    {t('preventsContaminationBySolventInfo')}
                                </span>
                            </li>
                        </ol>

                        <li>{t('helpsSpotDetectionUnderUV')}</li>
                        <ol className='list-disc'>
                            <li>
                                <span className="font-semibold">
                                    {t('helpsSpotDetectionUnderUVInfo')}
                                </span>
                            </li>
                        </ol>

                        <li>{t('ensuresUniformSeparation')}</li>
                        <ol className='list-disc'>
                            <li>
                                <span className="font-semibold">
                                    {t('ensuresUniformSeparationInfo')}
                                </span>
                            </li>
                        </ol>
                    </ol>
                </div>
                <LanguageSelector/>
            </div>
        </div>
    )
}

export default L_explaination;