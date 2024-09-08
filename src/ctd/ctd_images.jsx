/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';
import label_1 from "../assets/label6/labeel1.jpeg"

const CTD_images = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-4 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <button onClick={() => window.history.back()} className="font-bold text-xl flex items-center text-blue-400 hover:text-blue-300 transition-colors">
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
            <div>
              <img
                className="w-full h-auto rounded-lg"
                src={label_1}
                alt="Silica Plate Preparation"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                className="max-w-full object-cover h-auto"
                src="https://livenorthumbriaac-my.sharepoint.com/personal/matthew_reynolds_northumbria_ac_uk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmatthew%5Freynolds%5Fnorthumbria%5Fac%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FMVI%5F2870%2EMOV&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb395b88f%2D9df4%2D4be3%2Dbb5a%2D889a77784216"
                title="Silica Plate Preparation Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTD_images;