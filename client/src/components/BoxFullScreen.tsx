import React, {useEffect} from "react"
import ArrowIcon from "../icons/ArrowIcon"

export default function BoxFullScreen({ children, close }: { children: JSX.Element, close: () => void }) {
    useEffect(() => {
        document.documentElement.style.overflowY = 'hidden'
        return () => {
            document.documentElement.style.overflowY = 'auto'
        }
    }, [])

    return (
        <>

            <div className="fixed z-20 top-0 left-0 w-screen h-screen overflow-auto px-6 flex bg-white dark:bg-gray-900">
                <button onClick={close} className='absolute top-6 left-6 z-30'><ArrowIcon className={'w-6 h-6 rotate-180'} /></button>
                {children}
            </div>
        </>
    )
}