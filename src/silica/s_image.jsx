/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';
import silica_1 from "../assets/silica/silica1.jpeg"
import silica_2 from "../assets/silica/silica2.jpeg"
import silica_3 from "../assets/silica/silica3.jpeg"

const S_image = () => {
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
            {/* <div className="aspect-w-16 aspect-h-auto mb-6">
              <iframe
                className="max-w-full h-auto"
                src="https://www.youtube.com/embed/7MTwbQB7q5k"
                title="Silica Plate Preparation Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div> */}
            <div>
              <img className="h-auto max-w-full rounded-lg" src={silica_1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={silica_2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={silica_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default S_image