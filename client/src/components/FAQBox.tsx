import {useState} from "react"

export default function FAQBox({ title, body }: { title: string, body: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='border rounded-lg p-6 flex space-x-5 h-fit'>
            <button onClick={() => setIsOpen(!isOpen)} className='h-7 w-7 rounded-md bg-violet-600 flex items-center justify-center shrink-0'>
                <svg className={'h-5 w-5 !text-white transition-transform ' + (isOpen ? 'rotate-180' : '')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </button>
            <div>
                <div className='text-lg font-bold'>{title}</div>
                {isOpen && <p className='mt-4'>{body}</p>}
            </div>
        </div>
    )
}