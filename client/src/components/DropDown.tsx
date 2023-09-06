import {useEffect, useRef, useState} from "react"
import ArrowUpDown from "../icons/ArrowUpDown"
import CheckIcon from "../icons/CheckIcon"

export default function DropDown({ label, list, value, handleClick, className }: { label: string, list: string[], value: string, handleClick: (e: string) => void, className?: string }) {
    const [isActive, setIsActive] = useState(false)
    const ref = useRef(null)

    // close menu when clicked outside
    useEffect(() => {
        const handleClick = (event: any) => {
            const current = ref.current as any
            if (current && !current.contains(event.target)) setIsActive(false)
        }
        if (isActive) document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [isActive])

    return (
        <div ref={ref} className={'relative ' + (className || '')}>
            <button onClick={() => setIsActive(!isActive)} className={'!font-normal secondary flex items-center justify-between w-full !pr-2 ' + (isActive ? 'bg-slate-100' : '')}>
                <div>{label}: <span className='font-semibold'>{value}</span></div>
                <ArrowUpDown className='h-5 w-5' />
            </button>
            {isActive && (
                <div className='absolute z-10 mt-2 w-full bg-white border rounded-md shadow dark:bg-gray-900'>
                    <div className='w-full p-2 rounded-md dark:bg-gray-800/60'>
                        {list.map(item => (
                            <button onClick={() => {
                                handleClick(item)
                                setIsActive(false)
                            }} className='flex items-center justify-between w-full text-left py-1.5 px-2.5 text-sm capitalize rounded hover:bg-slate-100 dark:hover:bg-gray-700/50'>
                                <span className={value === item ? 'font-semibold' : ''}>{item}</span>
                                {value === item && <CheckIcon className='h-4 w-4 text-violet-600' strokeWidth={2.5} />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}