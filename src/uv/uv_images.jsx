/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MoveLeft } from 'lucide-react';
// import uv_1 from "../assets/uv/uv1.jpeg"
// import uv_2 from "../assets/uv/uv2.jpeg"
import uv_5 from "../assets/uv/uv5.mp4"
import uv_6 from "../assets/uv/uv6.mp4"
import Zoom_img from '../components/zoom';

const Uv_images = () => {
  const [openZoom, setOpenZoom] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);

  // const images = [
  //   { src: uv_1, alt: "UV image 1", type: "image" },
  //   { src: uv_2, alt: "UV image 2", type: "image" },
  // ];

  const videos = [
    { src: uv_5, title: "UV video 1" },
    { src: uv_6, title: "UV video 2" },
  ];

  const handleImageClick = (image) => {
    setCurrentMedia(image);
    setOpenZoom(true);
  };

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
              UV Detection Guide
            </h1>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9 mb-6">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  src={video.src}
                  title={video.title}
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
            {/* {images.map((image, index) => (
              <div key={index}>
                <button 
                  onClick={() => handleImageClick(image)}
                  className="w-full h-full"
                >
                  <img 
                    className="h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105" 
                    src={image.src} 
                    alt={image.alt} 
                  />
                </button>
              </div>
            ))} */}
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

export default Uv_images;