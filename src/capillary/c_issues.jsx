/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const C_issues = () => {
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
                    Capillary tube Issues
                </h1>
            </div>
        </div>
        <div className="p-6">
            <p className='font-semibold'>Using capillary tubes in Thin-Layer Chromatography (TLC) can present several issues that might affect the quality and accuracy of the experiment.</p>
            <p>A capillary tube is a small, thin glass or plastic tube with a narrow internal diameter. It is used in various laboratory techniques, including Thin-Layer Chromatography (TLC), to handle and transfer small amounts of liquid samples.</p>

            <p className='text-2xl font-semibold text-blue-400'>Characteristics of Capillary Tubes:</p>
            <ol className="space-y-4 list-decimal pl-6 mb-6">
                <li>Inconsistent Spot Size</li>
                <ol className='list-disc'>
                    <li><span className="font-bold">Overloading:</span> Applying too much sample can cause large or diffuse spots, which can merge or spread, leading to poor resolution and difficulty in analyzing individual components.</li>
                    <li><span className="font-bold">Underloading:</span> Using too little sample can result in faint or invisible spots that are hard to detect and analyze.</li>
                    <li> To solve this; carefully control the amount of liquid drawn into and dispensed from the capillary tube, and apply the sample in multiple small applications if necessary.</li>
                </ol>
                <li>Cross-Contamination</li>
                <ol className='list-disc'>
                    <li><span className="font-bold">Residual Sample:</span> Using the same capillary tube for different samples can lead to cross-contamination, where traces of one sample mix with another.</li>
                    <li><span className="font-bold">Underloading:</span> Using too little sample can result in faint or invisible spots that are hard to detect and analyze.</li>
                    <li> To solve this; Always use a new, clean capillary tube for each sample to avoid contamination. If using the same tube, clean it thoroughly between uses.</li>
                </ol>
                <li>Clogging</li>
                <ol className='list-disc'>
                    <li><span className="font-bold">Blocked Tubes:</span> Capillary tubes can get clogged if the sample solution is too viscous or if the tube is not clean. This can prevent proper spotting of the sample.</li>
                </ol>
                <li>Inaccurate Spotting</li>
                <ol className='list-disc'>
                    <li><span className="font-bold">Irregular Application:</span> Uneven application of the sample can lead to irregular spots, which may affect the separation process and analysis.</li>
                    <li> To solve this; Apply the sample gently and steadily, maintaining a consistent technique for each spot. Practice proper technique to ensure uniform spots.</li>
                </ol>
            </ol>
        </div>
    </div>
</div>
  )
}

export default C_issues;