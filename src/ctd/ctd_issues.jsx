/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const CTD_issues = () => {
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
                            CTD Issues
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p className='text-2xl font-semibold text-blue-400'>What are some of expected Issues</p>
                    <p>When using the CTD (Cyclohexamine:Toluene
                    ) solvent system in Thin-Layer Chromatography (TLC) experiments, several issues can arise, including handling difficulties and challenges related to solvent interactions with the sample.</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li>Volatility and Evaporation</li>
                        <ol className='list-disc'>
                            <li>Cyclohexamine, Toluene, and Diethylamine are all volatile compounds. This means they can evaporate quickly, especially in an open environment, which can lead to:</li>
                            <ol className='list-disc indent-2'>
                                <li><span className='font-semibold'>Changing Solvent Ratios:</span>If the solvent evaporates unevenly, the original 75:15:10 ratio of cyclohexamine, toluene, and diethylamine can shift, causing inconsistent results.</li>
                                <li><span className='font-semibold'>Decreased Solvent Effectiveness:</span>The solvent may lose its ability to separate compounds properly if its composition is altered due to evaporation.</li>
                            </ol>
                            <li><span className='font-semibold'>Solution:</span> Use a tightly sealed development tank and perform the experiment in a controlled environment to minimize evaporation.</li>
                        </ol>
                        <li>Toxicity and Hazardous Fumes</li>
                        <ol>
                            <li>Cyclohexamine and Diethylamine are toxic, and toluene is hazardous as well. Inhalation of the vapors can cause:</li>
                        </ol>
                        <ol className='list-disc'>
                            <li><span className='font-semibold'>Respiratory Irritation:</span>Prolonged exposure to these solvents can cause health issues like headaches, nausea, or lung irritation.</li>
                            <li><span className='font-semibold'>Environmental Hazards: </span> These solvents are harmful to the environment and require proper disposal.</li>
                            <li>Always conduct experiments involving CTD in a fume hood to avoid inhaling the fumes and use appropriate personal protective equipment (PPE) such as gloves and safety goggles.</li>
                        </ol>
                        <li>pH and Compound Sensitivity</li>
                        <ol className='list-disc'>
                            <li>Diethylamine is a weak base and can alter the pH of the solvent system.</li>
                            <li>Decomposition of Analytes: Certain compounds may degrade or react in the presence of a base, leading to poor separation or loss of analytes.</li>
                            <li>Altered Separation: If a compound changes its ionization state due to the basic nature of diethylamine, it might interact differently with the stationary phase, resulting in poor or incomplete separation.</li>
                            <li>For pH-sensitive compounds, consider using an alternative solvent system or buffer the solvent to maintain a neutral pH.</li>
                        </ol>
                        <li>Non-Universal Application</li>
                        <ol className='list-disc'>
                            <li>Highly Polar or Ionic Compounds: The non-polar nature of toluene may cause poor separation for highly polar compounds, which may remain stuck near the baseline.</li>
                            <li>Inadequate Solubility: If the compounds are not sufficiently soluble in the CTD system, they may not travel properly on the TLC plate, resulting in unclear or smudged spots.</li>
                            <li>If separation is inadequate, consider adjusting the ratio of the solvents or switch to a different solvent system that better suits the polarity of your analytes.</li>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default CTD_issues;