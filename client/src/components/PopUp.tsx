import React, {useEffect, useRef, useState} from "react"
import ErrorIcon from "../icons/ErrorIcon"

export default function PopUp({ msg, color }: { msg: string, color: 'red' | 'green' }) {
    const [label, setLabel] = useState('')

    useEffect(() => {
        setLabel(msg)
        if (label.length !== msg.length) {
            setTimeout(() => setLabel(''), 3000)
        }
    }, [msg])

    return (
        <div className={'fixed bottom-0 left-0 w-screen z-50 p-6 pt-0 flex justify-center ' + (label.length > 0 ? 'transition' : 'scale-90 opacity-0')}>
            <div className={'p-3 pr-3.5 rounded-md text-white w-fit mx-auto flex space-x-2' + ((color === 'red' ? ' bg-red-700' : '') || (color === 'green' ? ' bg-green-700' : ''))}>
                <div className='pt-1'><ErrorIcon className={'h-4 w-4 shrink-0'} /></div>
                <div className='leading-[1.6] text-[15px]'>{label}</div>
            </div>
        </div>
    )
}