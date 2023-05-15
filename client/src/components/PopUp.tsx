import React from "react"
import ErrorIcon from "../icons/ErrorIcon"

export default function PopUp({ msg}: { msg:string }) {
    return (
        <div className="fixed z-30 bottom-0 left-0 w-full dark:bg-gray-900">
            <div className="sm:px-6 lg:px-8 px-4 bg-red-50 py-3.5 dark:bg-red-900/50">
                <div className="grid grid-cols-[1.25rem_auto] items-center justify-center gap-2">
                    <ErrorIcon className={'w-5 h-5 text-red-400 dark:text-red-300'} />
                    <span className='text-red-600 dark:text-red-300'>{msg}</span>
                </div>
            </div>
        </div>
    )
}