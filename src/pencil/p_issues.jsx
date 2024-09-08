/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const P_issues = () => {
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
                            Pencil Issues
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <ol className="space-y-4 list-disc pl-6 mb-6">
                        <li>Fragility of Silica:</li>
                        <span className="font-semibold">Silica plates are brittle, and sharp tools can easily cause cracks or break the surface. This can ruin the experiment, especially if you&apos;re working on a chromatography plate where the surface integrity is critical.</span>
                        <li>Inconsistent Application of Force:</li>
                        <span className="font-semibold">A sharp pencil applies a concentrated force, which can lead to uneven pressure on the silica. This inconsistency may damage specific areas, creating unwanted grooves or cracks.</span>
                        <li>Loss of Precision with a Blunt Pencil:</li>
                        <span className="font-semibold">While the blunt pencil doesn&apos;t damage the silica, it might lack the precision required for fine details or accurate lines. The broader contact can lead to smudging or less-defined markings, which could be problematic in experiments requiring exact drawings or lines.</span>
                        <li>Surface Contamination:</li>
                        <span className="font-semibold">Both sharp and blunt pencils may leave behind graphite particles or debris on the silica surface, which can interfere with further steps in the experiment (e.g., chromatography). The debris might alter the results by interacting with substances applied to the plate.</span>
                        <li>Wear and Tear on the Pencils:</li>
                        <span className="font-semibold">Continuous use of either type of pencil on a rough surface like silica will wear them down quickly, requiring frequent sharpening of the blunt pencil, which could lead to inconsistencies in results.</span>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default P_issues;