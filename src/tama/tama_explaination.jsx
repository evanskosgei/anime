/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const Tama_explaination = () => {
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
                            TAMA Explaination
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>What is TAMA?</p>
                    <p>TAMA is a solvent system used in Thin-Layer Chromatography (TLC) experiments. It is a specific mixture of four solvents:</p>
                    <ol className='space-y-4 list-disc pl-6 mb-6'>
                        <li>Toluene</li>
                        <li>Acetone</li>
                        <li>Methanol</li>
                        <li>Ammonia</li>
                    </ol>
                    <p>The ratio in which these solvents are mixed is typically 45:45:7:3, meaning 45 parts toluene, 45 parts acetone, 7 parts methanol, and 3 parts ammonia.</p>

                    <p className='text-2xl font-semibold text-blue-400'>Purpose of TAMA in TLC</p>
                    <p>TAMA is used as the mobile phase (the solvent system that moves up the TLC plate). Different solvents have varying polarity, and the specific combination in TAMA allows for the separation of compounds based on their polarity and interaction with the silica (stationary phase) and the solvent system (mobile phase).</p>
                    <p className='text-2xl font-semibold text-blue-400'>Roles of Each Component</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li><span className='font-semibold'>Toluene:</span> A non-polar solvent, helps dissolve non-polar compounds.</li>
                        <li><span className='font-semibold'>Acetone:</span> A moderately polar solvent, which helps balance the polarity.</li>
                        <li><span className='font-semibold'>Methanol:</span>  A polar solvent, increases the solvent&apos;s ability to move polar compounds.</li>
                        <li><span className='font-semibold'>Ammonia:</span>  Used to alter the pH, helping in the separation of compounds that are sensitive to pH changes or charged compounds.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Tama_explaination;