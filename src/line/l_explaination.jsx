/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const L_explaination = () => {
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
                            Line Explaination
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p>In pairs, prepare a silica plate as follows:</p>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">

                        <li>Drawing the Baseline:</li>
                        <ol className='list-disc'>
                            <li><span className="font-normal">You will take a silica plate and, using a pencil, draw a horizontal line 1 cm from the bottom of the plate. This baseline is where you will apply the samples.</span></li>
                            <li><span className="font-normal">Use light pressure when drawing the line to avoid scratching or damaging the silica coating. Any scratches could interfere with the flow of solvent and the separation process during the TLC experiment.</span></li>
                        </ol>

                        <li>Marking Sample Points:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">Along the baseline, mark positions where the samples will be spotted. Start 0.5 cm from the side edge of the plate and mark additional points spaced evenly (~1 cm apart). Each of these marks represents where a different solution will be applied.</span></li>
                            <li><span className="font-semibold">Label these points by writing letters under the baseline to identify each sample. For example, &quote;A&quote; for sample 1, &quote;B&quote; for sample 2, and so on. This ensures you can track the identity of each sample during the experiment.</span></li>
                        </ol>
                    </ol>
                    <h1 className="text-2xl font-bold text-blue-400">Importance of line</h1>
                    <ol className="space-y-4 list-decimal pl-6 mb-6" >
                        <li> Baseline for Sample Application:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">The line serves as a reference point where you apply the different samples. By having a consistent baseline, you ensure that all samples start at the same position, making it easier to compare how far each compound travels during the experiment.</span></li>
                        </ol>
                        <li> Consistency Across Experiments:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">Drawing the line at a fixed distance (1 cm from the bottom) ensures that all experiments are comparable. Whether you&apos;re running multiple samples on one plate or multiple plates in separate experiments, using a consistent starting point allows for accurate and reproducible results.</span></li>
                        </ol>
                        <li> Prevents Sample Contamination by the Solvent:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">The line is drawn above the solvent level when the plate is placed in the development tank. This prevents the solvent from dissolving the sample directly when it starts to rise through capillary action. If the sample is below the solvent line, it could dissolve into the solvent prematurely, causing smudging or mixing, and leading to poor separation.</span></li>
                        </ol>
                        <li> Helps Spot Detection Under UV Light:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">The baseline also helps when checking the plate under UV light. After separation, you can easily locate where each sample was initially applied and trace how far each spot has moved during the experiment.</span></li>
                        </ol>
                        <li> Ensures Uniform Separation:</li>
                        <ol className='list-disc'>
                            <li><span className="font-semibold">A clear and consistent line helps ensure that the solvent moves uniformly across the plate. If the sample application points were uneven or if the baseline wasn’t straight, it could lead to uneven solvent flow, affecting the separation and making it harder to interpret the results.</span></li>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default L_explaination;