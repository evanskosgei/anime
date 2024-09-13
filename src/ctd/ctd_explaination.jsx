/* eslint-disable no-unused-vars */
import React from 'react';
import { MoveLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/languageSelector';

const CTD_explaination = () => {
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
                            {t('ctdExplaination')}
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>{t('whatIsCTD')}</p>
                    <p>{t('CtdDescription')}</p>
                    <ol className='space-y-4 list-disc pl-6 mb-6'>
                        {t('ctdComponents', { returnObjects: true }).map((component, index) => (
                            <li key={index}>{component}</li>
                        ))}
                    </ol>
                    <p>{t('ctdRatio')}</p>

                    <p className='text-2xl font-semibold text-blue-400'>{t('purposeOfCTD')}</p>
                    <p>{t('ctdPurpose')}</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        {t('ctdRoles', { returnObjects: true }).map((role, index) => (
                            <li key={index}>
                                <span className='font-semibold'>{role.title}:</span> {role.description}
                            </li>
                        ))}
                    </ol>
                    <p>{t('ctdBalance')}</p>
                </div>
            </div>
            <LanguageSelector/>
        </div>
    );
}

export default CTD_explaination;
