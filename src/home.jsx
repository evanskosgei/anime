/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'lucide-react';
// import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Home = () => {
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
            <Tooltip anchorSelect=".my-pencil-element" place="rigth" clickable>
              <div>
                <a href='/p-images'>Pencil Images</a>
              </div>
              <hr />
              <div>
                <a href='/p-explaination'>Explaination</a>
              </div>
              <hr />
              <div>
                <a href='/p-issues'>Issues</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              Using a <a className="my-pencil-element text-yellow-400 hover:underline cursor-pointer">pencil</a>, draw a line 1cm from the bottom of each plate. When marking the plate, it is very important to take care not to press too hard so as to scratch or damage the <a className="my-silica-element text-yellow-400 hover:underline cursor-pointer">silica</a> surface of the plate.
            </li>
            <Tooltip anchorSelect=".my-silica-element" place="top" clickable>
              <div>
                <a href='/s-image'>Silica Images</a>
              </div>
              <hr />
              <div>
                <a href='/s-explaination'>Explaination</a>
              </div>
              <hr />
              <div>
                <a href='/s-issues'>Issues</a>
              </div>
            </Tooltip>


            <li className="pl-6 -indent-6">
              Mark on the <a className="my-line-element text-yellow-400 hover:underline cursor-pointer">line</a> across at least 0.5cm from the side of the plate and then at equal spacing ~1cm apart the location of each of the four solutions. Use letters to denote each sample and write these onto the plate underneath the line/crosses.
            </li>
            <Tooltip anchorSelect=".my-line-element" place="top" clickable>
              <div>
                <a href='/l-image'>Line Images</a>
              </div>
              <hr />
              <div>
                <a href='/l-explaination'>Line Explaination</a>
              </div>
              <hr />
            </Tooltip>
            <li className="pl-6 -indent-6">
              Using a clean <span className="my-capillary-element text-yellow-400 hover:underline cursor-pointer">capillary tube</span> for each solution, carefully spot each one onto the respective cross - try to keep the diameter to ~0.5cm. Each sample will need to be <a className="my-spotted-line text-yellow-400 hover:underline cursor-pointer"> spotted multiple times</a>. It is very important to ensure that the plate has dried in between each spot.
            </li>
            <Tooltip anchorSelect=".my-spotted-line" place="top" clickable>
              <div>
                <a href='/spotted-images'>Spotted Line Images</a>
              </div>
              <hr />
              <div>
                <a href='#'>Spotted Explaination</a>
              </div>
              <hr />
            </Tooltip>


            <Tooltip anchorSelect=".my-capillary-element" place="top" clickable>
              <div>
                <a href='/c-image'>Capillary tube Images</a>
              </div>
              <hr />
              <div>
                <a href='/c-explaination'>Capillary tube Explaination</a>
              </div>
              <hr />
              <div>
                <a href='/c-issues'>Capillary tube Issues</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              Check under short <span className="my-uv-element text-yellow-400 hover:underline cursor-pointer">UV</span> that you can clearly see your spots on the bottom line.
            </li>
            <Tooltip anchorSelect=".my-uv-element" place="top" clickable>
              <div>
                <a href='/uv-image'>UV Images</a>
              </div>
              <hr />
              <div>
                <a href='/uv-explaination'>UV Explaination</a>
              </div>
              <hr />
              <div>
                <a href='/uv-issues'>UV Issues</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6 mb-2">The following solvents are in development tanks in the fume cupboards:
              <ul className="list-disc list-inside pl-4 space-y-1 text-gray-300">
                <li><span className="my-tama-element text-yellow-400 hover:underline cursor-pointer">TAMA</span> = toluene:acetone:methanol:ammonia (45:45:7:3)</li>
                <Tooltip anchorSelect=".my-tama-element" place="top" clickable>
                  <div className='px-2'>
                    <a href='/tama-image'>TAMA Images</a>
                  </div>
                  <hr className='mb-2 text-gray-300' />
                  <div className='px-2'>
                    <a href='/tama-explaination'>TAMA Explaination</a>
                  </div>
                  <hr className='mb-2 text-gray-300' />
                  <div className='px-2'>
                    <a href='/tama-issues'>TAMA Issues</a>
                  </div>
                </Tooltip>
                <li><span className="my-CTD-element text-yellow-400 hover:underline cursor-pointer">CTD</span> = cyclohexamine:toluene:diethylamine (75:15:10)</li>
                <Tooltip anchorSelect=".my-CTD-element" place="top" clickable>
                  <div className='px-2'>
                    <a href='/ctd-image'>CTD Images</a>
                  </div>
                  <hr className='mb-2 text-gray-300' />
                  <div className='px-2'>
                    <a href='/ctd-explaination'>CTD Explaination</a>
                  </div>
                  <hr className='mb-2 text-gray-300' />
                  <div className='px-2'>
                    <a href='/ctd-issues'>CTD Issues</a>
                  </div>
                </Tooltip>
              </ul>
            </li>
            <li className="pl-6 -indent-6">
              One of you will label the very top of one plate <span className="my-tama-label-img text-yellow-400 hover:underline cursor-pointer">TAMA</span> and the other in your pairs will label the plate with <span className="my-ctd-label-img text-yellow-400 hover:underline cursor-pointer">CTD</span> and carefully place into the respective tank. Forceps may be required. Please ensure that the lid is placed promptly back onto the tank.
            </li>
            <Tooltip anchorSelect=".my-tama-label-img" place="top" clickable>
              <div className='px-2'>
                <a href='/tama-label-image'>TAMA Label Images</a>
              </div>
            </Tooltip>
            <Tooltip anchorSelect=".my-ctd-label-img" place="top" clickable>
              <div className='px-2'>
                <a href='/ctd-label-image'>CTD Label Images</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              Once the mobile phase is approx. 1cm from the top of the plate, remove from the tank and immediately draw a<span className="my-pencil-draw-img text-yellow-400 hover:underline cursor-pointer"> pencil line</span> along the solvent front (it will evaporate off very quickly). Leave inside the fume cabinet to dry completely.
            </li>
            <Tooltip anchorSelect=".my-pencil-draw-img" place="top" clickable>
              <div className='px-2'>
                <a href='/pencil-draw-image'>Pencil Line Images</a>
              </div>
            </Tooltip>
            <li className="pl-6 -indent-6">
              Once dry remove from the fume cabinet and view the plate under the UV light box. <span className="my-circled-img text-yellow-400 hover:underline cursor-pointer">Circle any spots.</span>
            </li>
            <Tooltip anchorSelect=".my-circled-img" place="top" clickable>
              <div className='px-2'>
                <a href='/circled-spots-image'>Circled Spots Images</a>
              </div>
            </Tooltip>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Home;