/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const S_issues = () => {
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
                            Silica Issues
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p>When using silica plates in Thin-Layer Chromatography (TLC), several issues can arise, potentially affecting the accuracy and reproducibility of the experiment.</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">

                        <li>Fragility and Surface Damage:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">Brittleness:</span> Silica plates are delicate and can easily crack or break under mechanical stress, especially if mishandled or if a sharp tool is used.</li>
                            <li><span className="font-semibold">Scratches:</span> Any physical damage to the surface, like scratches, will disrupt the uniformity of the stationary phase, leading to poor separation or streaks in the chromatogram.</li>
                            <li><span className="font-semibold">Chipping:</span> The edges of the plate can chip easily during handling, causing uneven solvent flow or incomplete separation.</li>
                        </ol>

                        <li>Non-Uniform Coating:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">Inconsistent Layer Thickness:</span> If the silica layer is not uniformly coated on the plate, the separation quality can suffer. A thicker or thinner silica layer in certain areas may affect the capillary action and lead to poor resolution or uneven movement of the solvent.</li>
                        </ol>

                        <li>Solvent and Sample Issues:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">Overloading the Sample:</span> Applying too much sample onto the silica plate (during spotting) can cause smearing or streaking, which makes it difficult to analyze individual components.</li>
                            <li><span className="font-semibold">Solvent Compatibility:</span> The choice of solvent (mobile phase) must be compatible with the sample and silica. If the solvent doesn&apos;t interact well with the silica, it can lead to poor separation or cause compounds to stay at the origin.</li>
                            <li><span className="font-semibold">Solvent Saturation:</span> Insufficient solvent saturation in the TLC chamber can lead to improper solvent movement and uneven results. Similarly, excess solvent can cause the spots to run or distort.</li>
                        </ol>
                        <li>Poor Separation (Low Resolution):</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">Improper Solvent Polarity:</span> If the solvent used is too polar or too non-polar for the sample, it can result in poor separation, with all compounds moving together or staying near the starting point.</li>
                            <li><span className="font-semibold">Overlapping Spots:</span> If components of the mixture have similar affinities to the silica, they may not separate well, leading to overlapping spots or poor resolution.</li>
                        </ol>
                        <li> Environmental Factors:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">Humidity:</span> High humidity can interfere with solvent evaporation and the overall separation process. Moisture in the air can alter the interaction between the silica and the compounds being analyzed.</li>
                            <li><span className="font-semibold">Temperature:</span> Variations in temperature can affect the solvent evaporation rate, leading to inconsistent separation results.</li>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default S_issues;