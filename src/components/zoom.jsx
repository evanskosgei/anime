/* eslint-disable no-unused-vars */
import React from 'react'
import { X } from 'lucide-react'

const Zoom_img = ({ isOpen, onClose, imageUrl, altText }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-75">
            <div className="relative w-auto h-full flex items-center justify-center">
                <div className="relative flex w-full max-w-4xl mx-auto flex-col rounded-md bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
                        <h5 className="text-xl font-medium leading-normal text-surface dark:text-white">
                            Zoomed Image
                        </h5>
                        <button
                            onClick={onClose}
                            className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                            aria-label="Close"
                        >
                            <span className="[&>svg]:h-6 [&>svg]:w-6">
                                <X />
                            </span>
                        </button>
                    </div>
                    <div className="relative p-4 flex items-center justify-center">
                        <img src={imageUrl} alt={altText} className="max-w-full max-h-[70vh] object-contain" />
                    </div>
                    <div className="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
                        <button
                            onClick={onClose}
                            className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Zoom_img;