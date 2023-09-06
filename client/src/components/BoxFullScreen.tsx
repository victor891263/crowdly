import React from "react"
import CrossIcon from "../icons/CrossIcon";

export default function BoxFullScreen({ children, close }: { children: JSX.Element, close: () => void }) {
    return (
        <>
            <button onClick={close} className='fixed top-6 right-6 z-30 secondary !p-1.5'><CrossIcon className={'w-4 h-4'} /></button>
            <div className="fixed z-20 top-0 left-0 w-screen h-screen px-6 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
                {children}
            </div>
        </>
    )
}