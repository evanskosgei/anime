/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MoveLeft } from 'lucide-react';
import line_4 from "../assets/line/line4.jpeg"
import line_5 from "../assets/line/line5.jpeg"
import line_6 from "../assets/line/line6.jpeg"
import line_7 from "../assets/line/line7.jpeg"
import uv_3 from "../assets/uv/uv3.jpeg"
import uv_4 from "../assets/uv/uv4.jpeg"
import Zoom_img from '../components/zoom';

const Spotted_img = () => {
    const [openZoom, setOpenZoom] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const images = [
        { src: line_4, alt: "Line image 4" },
        { src: line_5, alt: "Line image 5" },
        { src: line_6, alt: "Line image 6" },
        { src: line_7, alt: "Line image 7" },
        { src: uv_3, alt: "Line image 8" },
        { src: uv_4, alt: "Line image 8" },
    ];
    const handleImageClick = (image) => {
        setCurrentImage(image);
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
                            Line Preparation Guide
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((image, index) => (
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
                        ))}
                    </div>
                </div>
            </div>
            {currentImage && (
                <Zoom_img
                    isOpen={openZoom}
                    onClose={() => setOpenZoom(false)}
                    imageUrl={currentImage.src}
                    altText={currentImage.alt}
                />
            )}
        </div>
    )
}

export default Spotted_img;