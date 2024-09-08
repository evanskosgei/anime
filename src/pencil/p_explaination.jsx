/* eslint-disable no-unused-vars */
import React from 'react';
import { MoveLeft } from 'lucide-react';

const P_explanation = () => {
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
              Pencil Explanation
            </h1>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-4 text-lg">
            In my lab test using two pencils on silica, the difference in their effects can be explained by the distribution of pressure and the surface area of contact:
          </p>
          <ul className="space-y-4 list-disc pl-6 mb-6">
            <li>
              <span className="font-semibold">Sharp Pencil:</span> The sharp point concentrates the pressure over a small area. When applied to a brittle surface like silica, this high concentration of force can cause the silica to crack or break. Silica, especially in thin layers (like those used in chromatography), is fragile and prone to damage under such focused pressure.
            </li>
            <li>
              <span className="font-semibold">Blunt Pencil:</span> The blunt pencil, on the other hand, has a larger surface area at the tip, which spreads out the force more evenly over the silica. This reduces the risk of breaking the silica, allowing for smoother drawing or marking.
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-3 text-blue-400">Outcome:</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>The sharp pencil causes the silica surface to break due to the high pressure applied on a small area.</li>
            <li>The blunt pencil moves smoothly across the silica surface because the pressure is distributed, minimizing damage.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default P_explanation;