/* eslint-disable no-unused-vars */
import React from 'react'
import { MoveLeft } from 'lucide-react';
import pencil_1 from "../assets/pencil_line/pencil1.jpeg"
import pencil_2 from "../assets/pencil_line/pencil2.jpeg"

const Pencil_draw_img = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-4 sm:p-8 text-white">
            <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                        <button onClick={() => window.history.back()} className="font-bold text-xl flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                            <MoveLeft className="mr-2" />
                            Back
                        </button>
                        <h1 className="text-2xl font-bold text-center text-blue-400">
                            Silica Plate Preparation Guide
                        </h1>
                    </div>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <img
                                className="w-full h-auto rounded-lg"
                                src={pencil_1}
                                alt="Silica Plate Preparation"
                            />
                        </div>
                        <div>
                            <img
                                className="w-full h-auto rounded-lg"
                                src={pencil_2}
                                alt="Silica Plate Preparation"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pencil_draw_img;