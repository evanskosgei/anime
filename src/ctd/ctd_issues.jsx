/* eslint-disable no-unused-vars */
import React from 'react';
import { MoveLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/languageSelector';

const CTD_issues = () => {
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
                            {t('CtdIssues')}
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>{t('EexpectedIssues')}</p>
                    <p>{t('CctdDescription')}</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li>{t('volatilityAndEvaporation')}</li>
                        <ol className='list-disc'>
                            {t('volatilityPoints', { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ol>
                        <li>{t('toxicityAndFumes')}</li>
                        <ol className='list-disc'>
                            {t('toxicityPoints', { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ol>
                        <li>{t('phAndCompoundSensitivity')}</li>
                        <ol className='list-disc'>
                            {t('phSensitivityPoints', { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ol>
                        <li>{t('nonUniversalApplication')}</li>
                        <ol className='list-disc'>
                            {t('nonUniversalPoints', { returnObjects: true }).map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ol>
                    </ol>
                </div>
            </div>
            <LanguageSelector/>
        </div>
    );
}

export default CTD_issues;
