/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const UV_explaination = () => {
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
                            UV Explaination
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>What is UV Light</p>
                    <p>Ultraviolet (UV) light is a type of electromagnetic radiation with a wavelength shorter than visible light but longer than X-rays.</p>

                    <p className='text-2xl font-semibold text-blue-400'>Why Was UV Light Used in This Experiment</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li>Visualization of Non-Visible Compounds</li>
                        <ol className='list-disc'>
                            <li>Many compounds are colorless or nearly invisible to the naked eye on a TLC plate. UV light helps to detect these compounds by making them fluoresce (emit light) or appear as dark spots against a glowing background.</li>
                            <li>Some compounds naturally absorb UV light, causing them to either fluoresce or block the fluorescence of the silica gel (which is often mixed with a UV-active indicator), making them visible under UV light.</li>
                        </ol>
                        <li>Ensuring Proper Sample Application</li>
                        <ol className='list-disc'>
                            <li>UV light allows you to confirm that the sample has been properly spotted onto the plate. By checking under UV light before developing the TLC, you can ensure that the spots are visible and well-defined, and that the amount of sample applied is sufficient for the experiment.</li>
                        </ol>
                        <li>Monitoring Spot Intensity and Shape</li>
                        <ol className='list-disc'>
                            <li>The intensity of fluorescence or the contrast under UV light helps assess how concentrated or diluted a sample is. It can indicate whether the spots are concentrated enough for clear separation.</li>
                            <li>Spotting under UV light also helps to detect if the spots are too diffuse, irregular, or merged, which could affect the interpretation of results.</li>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default UV_explaination;