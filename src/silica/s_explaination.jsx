/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const S_explaination = () => {
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
                            Silica Plate
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <p>A silica plate is a thin layer of silica (silicon dioxide, SiO₂) coated onto a solid backing material, such as glass, plastic, or aluminum. These plates are commonly used in Thin-Layer Chromatography (TLC), an analytical technique that separates chemical compounds in a mixture.</p>

                    <h4 className='text-xl font-bold text-blue-400'>Key Characteristics of Silica Plates:</h4>
                    <ol className="space-y-4 list-disc pl-6 mb-6">

                        <li>Stationary Phase:</li>
                        <span className="font-semibold">In chromatography, the silica layer acts as the stationary phase. It’s porous and has a large surface area, allowing different compounds to interact with it during the separation process.</span>

                        <li>Polarity:</li>
                        <span className="font-semibold">Silica is polar, meaning it interacts more strongly with polar compounds. As a result, non-polar compounds move faster across the plate (with the mobile phase), while polar compounds are retained for longer due to stronger interactions with the silica.</span>

                        <li>Surface Structure:</li>
                        <span className="font-semibold">The surface of a silica plate is rough and has microscopic pores, making it ideal for capillary action, where liquids spread easily. This property helps separate compounds based on their affinity to the silica.</span>

                        <li>Usage in TLC:</li>
                        <span className="font-semibold">In TLC, a small amount of a sample is applied to the bottom of the silica plate (the &quot;spotting&quot;). The plate is then placed in a solvent (mobile phase), which travels up the plate by capillary action, carrying the components of the sample with it. Depending on how strongly each component interacts with the silica, they move at different rates and separate.</span>
                        <li>Wear and Tear on the Pencils:</li>
                        <span className="font-semibold">Continuous use of either type of pencil on a rough surface like silica will wear them down quickly, requiring frequent sharpening of the blunt pencil, which could lead to inconsistencies in results.</span>
                    </ol>
                    <h4 className='text-xl font-bold text-blue-400'>Applications:</h4>
                    <ol className="space-y-4 list-decimal pl-6 mb-6">
                        <li className="font-semibold">Chemical Analysis: Silica plates are used to identify or monitor the progress of chemical reactions by separating components in a mixture.</li>
                        <li className="font-semibold">Purity Testing: They help in testing the purity of substances by showing the presence of impurities through separation.</li>
                        <li className="font-semibold">Qualitative Analysis: Different compounds separated on a silica plate can be visualized under UV light or by applying specific stains.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default S_explaination;