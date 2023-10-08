import React, {useEffect, useRef, useState} from "react"
import CrossIcon from "../icons/CrossIcon"
import CheckIcon from "../icons/CheckIcon"

export default function PopUp({ msg, color }: { msg: string, color: 'red' | 'green' }) {
    const [label, setLabel] = useState('')

    useEffect(() => {
        setLabel(msg)
        if (label.length !== msg.length) {
            setTimeout(() => setLabel(''), 3000)
        }
    }, [msg])

    return (
        <div className={'fixed bottom-0 left-0 w-screen z-50 p-6 pt-0 flex justify-center ' + (label.length > 0 ? 'transition' : 'scale-90 opacity-0')} data-testid='popUp' >
            <div className={'p-3 pr-4 rounded-md text-white w-fit mx-auto flex space-x-3' + ((color === 'red' ? ' bg-red-700' : '') || (color === 'green' ? ' bg-green-700' : ''))}>
                <div className='relative'>
                    <div className='absolute top-0 left-0 h-full flex items-center'>
                        {color === 'red' && <CrossIcon className={'small-height small-width'} strokeWidth={2} />}
                        {color === 'green' && <CheckIcon className={'small-height small-width'} strokeWidth={2} />}
                    </div>
                    <div className='leading-[1.6] semismall-text text-transparent'>W</div>
                </div>
                <div className='leading-[1.6] semismall-text'>{label}</div>
            </div>
        </div>
    )
}

// <CrossWithCircle className={'h-5 w-5'} />