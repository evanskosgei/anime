/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'lucide-react';
// import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Home = () => {
  return (
    <>
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

        <div className="group fixed bottom-10 right-10 p-2  flex items-end justify-end w-24 h-24 ">
          <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:rotate-90 transition duration-[0.6s]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
            </svg>
          </div>
          <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
            </svg>
          </div>
          <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;