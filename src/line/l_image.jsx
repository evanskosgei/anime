/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';
import line_1 from "../assets/line/line1.jpeg"
import line_2 from "../assets/line/line2.jpeg"
import line_3 from "../assets/line/line3.jpeg"
import line_4 from "../assets/line/line4.jpeg"
import line_5 from "../assets/line/line5.jpeg"
import line_6 from "../assets/line/line6.jpeg"
import line_7 from "../assets/line/line7.jpeg"

const L_image = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-4 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <div className='flex items-center justify-between'>
            <button onClick={() => window.history.back()} className='font-bold text-xl flex items-center text-blue-400 hover:text-blue-300 transition-colors'>
              <MoveLeft className="mr-2" />
              Back
            </button>
            <h1 className="text-2xl font-bold text-center text-blue-400">
              Silica Plate Preparation Guide
            </h1>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-w-16 aspect-h-auto mb-6">
              <iframe
                className="max-w-full h-auto"
                src="https://livenorthumbriaac-my.sharepoint.com/personal/alan_langford_northumbria_ac_uk/_layouts/15/stream.aspx?id=%2Fpersonal%2Falan%5Flangford%5Fnorthumbria%5Fac%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FMVI%5F2859%2EMOV&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E0e4529c4%2Dc820%2D44f4%2D91f5%2Dee8231f45f87"
                title="Silica Plate Preparation Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={line_1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={line_2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={line_3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={line_4} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={line_5} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={line_6} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={line_7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default L_image