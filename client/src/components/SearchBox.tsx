import GlassIcon from "../icons/GlassIcon"

export default function SearchBox({ value, handleChange, handleSubmit }: { value: string, handleChange: (e: any) => void, handleSubmit: (e: any) => void }) {
    return (
        <form onSubmit={handleSubmit} className='relative block w-full'>
            <div className='absolute left-0 top-0 px-3 h-full flex items-center'>
                <GlassIcon className={'h-4 w-4 shrink-0 text-slate-400'} />
            </div>
            <input value={value} onChange={handleChange} className='w-full !pl-[2.375rem]' type='text' placeholder='Search' />
        </form>
    )
}