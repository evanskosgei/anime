/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';
// import LanguageSelector from './LanguageSelector';
import LanguageSelector from './components/languageSelector';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-4 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-center text-blue-400">
            {t('silicaPlatePreparationGuide')}
          </h1>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t('prepareSilicaPlate')}</h2>
          <ol className="space-y-4 list-decimal list-inside">
            <Tooltip anchorSelect=".my-pencil-element" place="right" clickable>
              <div>
                <a href='/p-images'>{t('pencilImages')}</a>
              </div>
              <hr />
              <div>
                <a href='/pencil-explaination'>{t('explanation')}</a>
              </div>
              <hr />
              <div>
                <a href='/p-issues'>{t('issues')}</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              {t('step1')} <a className="my-pencil-element text-yellow-400 hover:underline cursor-pointer">{t('pencil')}</a> {t('step1Cont')} <a className="my-silica-element text-yellow-400 hover:underline cursor-pointer">{t('silica')}</a> {t('step1End')}
            </li>
            <Tooltip anchorSelect=".my-silica-element" place="top" clickable>
              <div>
                <a href='/s-image'>{t('silicaImages')}</a>
              </div>
              <hr />
              <div>
                <a href='/silica-explaination'>{t('explanation')}</a>
              </div>
              <hr />
              <div>
                <a href='/s-issues'>{t('issues')}</a>
              </div>
            </Tooltip>

            <li className="pl-6 -indent-6">
              {t('step2')} <a className="my-line-element text-yellow-400 hover:underline cursor-pointer">{t('line')}</a> {t('step2Cont')}
            </li>
            <Tooltip anchorSelect=".my-line-element" place="top" clickable>
              <div>
                <a href='/l-image'>{t('lineImages')}</a>
              </div>
              <hr />
              <div>
                <a href='/line-explaination'>{t('lineExplanation')}</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              {t('step3')} <span className="my-capillary-element text-yellow-400 hover:underline cursor-pointer">{t('capillaryTube')}</span> {t('step3Cont')} <a className="my-spotted-line text-yellow-400 hover:underline cursor-pointer">{t('spottedMultipleTimes')}</a> {t('step3End')}
            </li>
            <Tooltip anchorSelect=".my-spotted-line" place="top" clickable>
              <div>
                <a href='/spotted-images'>{t('spottedLineImages')}</a>
              </div>
            </Tooltip>
            <Tooltip anchorSelect=".my-capillary-element" place="top" clickable>
              <div>
                <a href='/c-image'>{t('capillaryTubeImages')}</a>
              </div>
              <hr />
              <div>
                <a href='/capillarytube-explanation'>{t('capillaryTubeExplanation')}</a>
              </div>
              <hr />
              <div>
                <a href='/c-issues'>{t('capillaryTubeIssues')}</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              {t('step4')} <span className="my-uv-element text-yellow-400 hover:underline cursor-pointer">{t('uv')}</span> {t('step4Cont')}
            </li>
            <Tooltip anchorSelect=".my-uv-element" place="top" clickable>
              <div>
                <a href='/uv-image'>{t('uvImages')}</a>
              </div>
              <hr />
              <div>
                <a href='/uvlight-explaination'>{t('uvExplanation')}</a>
              </div>
              <hr />
              <div>
                <a href='/uv-issues'>{t('uvIssues')}</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6 mb-2">{t('step5')}
              <ul className="list-disc list-inside pl-4 space-y-1 text-gray-300">
                <li><span className="my-tama-element text-yellow-400 hover:underline cursor-pointer">{t('tama')}</span> = {t('tamaDescription')}</li>
                <Tooltip anchorSelect=".my-tama-element" place="top" clickable>
                  <div className='px-2'>
                    <a href='/tama-image'>{t('tamaImages')}</a>
                  </div>
                  <hr className='mb-2 text-gray-300' />
                  <div className='px-2'>
                    <a href='/tamasolvent-explanation'>{t('tamaExplanation')}</a>
                  </div>
                  <hr className='mb-2 text-gray-300' />
                  <div className='px-2'>
                    <a href='/tama-issues'>{t('tamaIssues')}</a>
                  </div>
                </Tooltip>
                <li><span className="my-CTD-element text-yellow-400 hover:underline cursor-pointer">{t('ctd')}</span> = {t('ctdDescription')}</li>
                <Tooltip anchorSelect=".my-CTD-element" place="top" clickable>
                  <div className='px-2'>
                    <a href='/ctd-image'>{t('ctdImages')}</a>
                  </div>
                  <hr className='mb-2 text-gray-300' />
                  <div className='px-2'>
                    <a href='/ctdsolvent-explaination'>{t('ctdExplanation')}</a>
                  </div>
                  <hr className='mb-2 text-gray-300' />
                  <div className='px-2'>
                    <a href='/ctd-issues'>{t('ctdIssues')}</a>
                  </div>
                </Tooltip>
              </ul>
            </li>
            <li className="pl-6 -indent-6">
              {t('step6')} <span className="my-tama-label-img text-yellow-400 hover:underline cursor-pointer">{t('tama')}</span> {t('step6Cont')} <span className="my-ctd-label-img text-yellow-400 hover:underline cursor-pointer">{t('ctd')}</span> {t('step6End')}
            </li>
            <Tooltip anchorSelect=".my-tama-label-img" place="top" clickable>
              <div className='px-2'>
                <a href='/tama-label-image'>{t('tamaLabelImages')}</a>
              </div>
            </Tooltip>
            <Tooltip anchorSelect=".my-ctd-label-img" place="top" clickable>
              <div className='px-2'>
                <a href='/ctd-label-image'>{t('ctdLabelImages')}</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              {t('step7')} <span className="my-pencil-draw-img text-yellow-400 hover:underline cursor-pointer">{t('pencilLine')}</span> {t('step7Cont')}
            </li>
            <Tooltip anchorSelect=".my-pencil-draw-img" place="top" clickable>
              <div className='px-2'>
                <a href='/pencil-draw-image'>{t('pencilLineImages')}</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              {t('step8')} <span className="my-circled-img text-yellow-400 hover:underline cursor-pointer">{t('circleSpots')}</span>
            </li>
            <Tooltip anchorSelect=".my-circled-img" place="top" clickable>
              <div className='px-2'>
                <a href='/circled-spots-image'>{t('circledSpotsImages')}</a>
              </div>
            </Tooltip>
          </ol>
        </div>
      </div>

      <LanguageSelector />
    </div>
  );
};

export default Home;