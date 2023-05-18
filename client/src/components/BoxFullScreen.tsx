import React from "react"
import CrossIcon from "../icons/CrossIcon";

export default function BoxFullScreen({ children, close }: { children: JSX.Element, close: () => void }) {
    return (
        <>
            <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-gray-900/25 backdrop-blur-sm'></div>
            <button onClick={close} className='fixed top-4 right-4 z-30'><CrossIcon className={'w-4 h-4 text-white'} /></button>
            <div className="fixed top-0 left-0 w-screen h-screen flex z-20">
                <div className='sm:m-auto sm:rounded-2xl mt-auto rounded-t-2xl max-w-lg w-full bg-white shadow-md p-7 dark:bg-zinc-800'>
                    {children}
                </div>
            </div>
        </>
    )
}