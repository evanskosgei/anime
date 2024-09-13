/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MoveLeft } from 'lucide-react';
import label_1 from "../assets/label6/labeel1.jpeg"
import Zoom_img from '../components/zoom';

const Tama_images = () => {
  const [openZoom, setOpenZoom] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const image = { src: label_1, alt: "Silica Plate Preparation", type: "image" };

  const handleImageClick = (image) => {
    setCurrentMedia(image);
    setOpenZoom(true);
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <button 
                onClick={() => handleImageClick(image)}
                className="w-full h-full"
              >
                <img
                  className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                  src={image.src}
                  alt={image.alt}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {currentMedia && currentMedia.type === "image" && (
        <Zoom_img
          isOpen={openZoom}
          onClose={() => setOpenZoom(false)}
          imageUrl={currentMedia.src}
          altText={currentMedia.alt}
        />
      )}
    </div>
  )
}

export default Tama_images;