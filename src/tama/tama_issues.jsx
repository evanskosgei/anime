/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const Tama_issues = () => {
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
                            TAMA Issues
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>What are some of expected Issues</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li>Volatility and Evaporation</li>
                        <ol className='list-disc'>
                            <li>Toluene, acetone, and methanol are volatile solvents that can evaporate quickly, especially when exposed to open air for prolonged periods. This can change the solvent composition during the experiment, leading to inconsistent results.</li>
                            <li>Ensure that the solvent tank is sealed properly to minimize evaporation and maintain the correct solvent ratio.</li>
                        </ol>
                        <li>Toxicity and Hazardous Fumes</li>
                        <ol className='list-disc'>
                            <li>All components of TAMA are hazardous to health if inhaled in significant quantities. Toluene and ammonia, in particular, can release harmful fumes that irritate the respiratory system.</li>
                            <li>Always perform TLC experiments using TAMA in a well-ventilated area or a fume hood, and wear proper protective equipment, including gloves and goggles.</li>
                        </ol>
                        <li>pH Sensitivity</li>
                        <ol className='list-disc'>
                            <li>Ammonia Alters pH: Ammonia increases the pH of the solvent mixture, which may affect the separation of pH-sensitive compounds. For compounds that are sensitive to changes in pH, the use of ammonia could lead to poor separation or spot distortion.</li>
                            <li>If pH sensitivity is a concern, an alternative solvent system without ammonia or with a buffered pH may be required.</li>
                        </ol>
                        <li>Solvent Imbalance</li>
                        <ol className='list-disc'>
                            <li>Since TAMA is a specific mixture of four solvents in a fixed ratio, even slight deviations from this ratio can significantly affect the results of the TLC experiment. Unequal amounts or improper mixing can lead to inconsistent solvent flow or improper separation of compounds.</li>
                            <li>Ensure precise measurement and thorough mixing of the solvents to maintain the exact 45:45:7:3 ratio for optimal results.</li>
                        </ol>
                        <li>Solvent System Saturation</li>
                        <ol className='list-disc'>
                            <li>If the TAMA solvent is not properly saturated in the development tank (i.e., the tank is not equilibrated before placing the TLC plate), the separation may be uneven or incomplete.</li>
                            <li>Allow the development tank to equilibrate with the solvent vapor for at least 20–30 minutes before placing the TLC plate inside to ensure consistent flow.</li>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Tama_issues;