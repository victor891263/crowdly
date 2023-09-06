import Spinner from "../icons/Spinner"

export default function ButtonWithSpinner({ label, isLoading, handleClick, type, className }: { label: string, isLoading: boolean, handleClick: () => void, type: 'primary' | 'secondary', className?: string }) {
    return (
        <button onClick={handleClick} disabled={isLoading} className={'relative disabled:!text-transparent ' + `${type} ` + (className || '')}>
            <span>{label}</span>
            {isLoading && (
                <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
                    <Spinner className={'h-5 w-5 border-[3px] ' + (type === 'primary' ? 'text-white' : 'text-slate-300')} />
                </div>
            )}
        </button>
    )
}