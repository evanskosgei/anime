/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const UV_issues = () => {
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
                            UV Issues
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>What are some of expected Issues</p>
                    <p>When using UV light in experiments such as Thin-Layer Chromatography (TLC), several issues can arise that may affect the quality of the results or cause safety concerns.</p>

                    <p className='text-2xl font-semibold text-blue-400'> some common problems encountered</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li>Fading or Degradation of Samples</li>
                        <ol className='list-disc'>
                            <li>Prolonged exposure to UV light can cause some compounds to degrade or lose their fluorescence, especially if they are sensitive to light. This can make it difficult to accurately visualize and analyze the spots.</li>
                        </ol>
                        <li>Difficulty in Detecting Non-UV-Active Compounds</li>
                        <ol className='list-disc'>
                            <li>Some compounds do not absorb UV light and may not fluoresce or block the fluorescence of the TLC plate. As a result, they will not be visible under UV light, making it difficult to detect them.</li>
                        </ol>
                        <li>Background Interference</li>
                        <ol className='list-disc'>
                            <li>If the TLC plate itself has a fluorescent background (e.g., a silica plate with a fluorescent indicator), the background can sometimes be too bright, making it difficult to distinguish the spots.</li>
                        </ol>
                        <li>Faint or Weak Spots</li>
                        <ol className='list-disc'>
                            <li>Some samples may not absorb UV light strongly, leading to weak or faint spots that are difficult to detect.</li>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default UV_issues