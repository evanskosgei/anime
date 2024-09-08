/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const CTD_explaination = () => {
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
                            CTD Explaination
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>What is CTD?</p>
                    <p>CTD refers to a solvent system made up of the following components:</p>
                    <ol className='space-y-4 list-disc pl-6 mb-6'>
                        <li>Cyclohexamine</li>
                        <li>Toluene</li>
                        <li>Diethylamine</li>
                    </ol>
                    <p>The typical ratio of this solvent mixture in your experiment is 75:15:10 (75 parts cyclohexamine, 15 parts toluene, and 10 parts diethylamine). This solvent system, like TAMA, is used in Thin-Layer Chromatography (TLC) to help separate and visualize different compounds based on their chemical properties.</p>

                    <p className='text-2xl font-semibold text-blue-400'>Purpose of CTD in TLC</p>
                    <p>In TLC, the CTD solvent system is used as the mobile phase, which moves up the TLC plate, carrying the compounds you applied on the silica plate. The effectiveness of the separation depends on how well the compounds dissolve in the solvent system and their interaction with the stationary phase (the silica on the TLC plate).</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li><span className='font-semibold'>Cyclohexamine:</span> This is a non-polar amine, which can interact with compounds having basic functional groups.</li>
                        <li><span className='font-semibold'>Toluene:</span> A non-polar organic solvent that helps dissolve non-polar substances and provides a medium for separation.</li>
                        <li><span className='font-semibold'>Diethylamine:</span> This is a non-polar amine, which can interact with compounds having basic functional groups.</li>
                    </ol>
                    <p>The combination of these solvents in CTD provides a balance of polarity that helps achieve separation of compounds that might have different chemical properties.</p>
                </div>
            </div>
        </div>
    )
}

export default CTD_explaination