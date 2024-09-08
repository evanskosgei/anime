/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const C_explaination = () => {
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
                            Capillary tube Explaination
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>What is a Capillary Tube</p>
                    <p>A capillary tube is a small, thin glass or plastic tube with a narrow internal diameter. It is used in various laboratory techniques, including Thin-Layer Chromatography (TLC), to handle and transfer small amounts of liquid samples.</p>

                    <p className='text-2xl font-semibold text-blue-400'>Characteristics of Capillary Tubes:</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <ol className='list-disc'>
                            <li><span className="font-bold">Narrow Diameter:</span> Capillary tubes have a very small internal diameter (usually 0.1 mm to 1 mm), allowing them to handle minute quantities of liquid.</li>
                            <li><span className="font-bold">Capillary Action:</span> The narrow diameter facilitates capillary action, where liquids are drawn into the tube and move along it due to surface tension. This property is crucial for spotting samples onto a TLC plate.</li>
                            <li><span className="font-bold">Precision:</span> Capillary tubes provide precise control over the volume of liquid dispensed, which is essential for accurate sample application in TLC.</li>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default C_explaination;