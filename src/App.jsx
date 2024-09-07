/* eslint-disable no-unused-vars */
import React from 'react';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-4 sm:p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-center text-blue-400">
            Silica Plate Preparation Guide
          </h1>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">In pairs, prepare a silica plate as follows:</h2>
          <ol className="space-y-4 list-decimal list-inside">
            <li className="pl-6 -indent-6">
              Using a <span className="text-yellow-400 hover:underline cursor-help" title="Use a soft pencil">pencil</span>, draw a line 1cm from the bottom of each plate. When marking the plate, it is very important to take care not to press too hard so as to scratch or damage the <span className="text-yellow-400 hover:underline cursor-help" title="Silica is the coating on the plate">silica</span> surface of the plate.
            </li>
            <li className="pl-6 -indent-6">
              Mark on the line across at least 0.5cm from the side of the plate and then at equal spacing ~1cm apart the location of each of the four solutions. Use letters to denote each sample and write these onto the plate underneath the line/crosses.
            </li>
            <li className="pl-6 -indent-6">
              Using a clean capillary tube for each solution, carefully spot each one onto the respective cross - try to keep the diameter to ~0.5cm. Each sample will need to be spotted multiple times. It is very important to ensure that the plate has dried in between each spot.
            </li>
            <li className="pl-6 -indent-6">
              Check under short UV that you can clearly see your spots on the bottom line.
            </li>
            <li className="pl-6 -indent-6">
              <p className="mb-2">The following solvents are in development tanks in the fume cupboards:</p>
              <ul className="list-disc list-inside pl-4 space-y-1 text-gray-300">
                <li>TAMA = toluene:acetone:methanol:ammonia (45:45:7:3)</li>
                <li>CTD = cyclohexamine:toluene:diethylamine (75:15:10)</li>
              </ul>
            </li>
            <li className="pl-6 -indent-6">
              One of you will label the very top of one plate TAMA and the other in your pairs will label the plate with CTD and carefully place into the respective tank. Forceps may be required. Please ensure that the lid is placed promptly back onto the tank.
            </li>
            <li className="pl-6 -indent-6">
              Once the mobile phase is approx. 1cm from the top of the plate, remove from the tank and immediately draw a pencil line along the solvent front (it will evaporate off very quickly). Leave inside the fume cabinet to dry completely.
            </li>
            <li className="pl-6 -indent-6">
              Once dry remove from the fume cabinet and view the plate under the UV light box. Circle any spots.
            </li>
          </ol>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Remember to use gentle pressure when marking the plate
        </p>
        <p className="flex items-center justify-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
          </svg>
          Always work in a well-ventilated area when handling solvents
        </p>
      </div>
    </div>
  );
}