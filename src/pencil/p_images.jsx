/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';

const P_images = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-4 sm:p-8 text-white">
            <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                <div className="flex px-6 space-x-4 py-4 border-b border-gray-700 items-center">
                    <button onClick={() => window.history.back()} className='font-bold text-2xl items-center flex'>
                        <MoveLeft />
                        Back
                    </button>
                    <h1 className="text-2xl font-bold text-center text-blue-400">
                        Silica Plate Preparation Guide
                    </h1>
                    <div className="p-6">


                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="/effects.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default P_images;