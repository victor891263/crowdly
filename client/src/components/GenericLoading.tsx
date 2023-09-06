import Spinner from "../icons/Spinner"

export default function GenericLoading() {
    return (
        <div className='flex items-center justify-center min-h-full'>
            <div className='flex flex-col items-center py-20'>
                <Spinner className='h-9 w-9 border-4 text-violet-600' />
                <div className='mt-5 subtitle'>Working...</div>
            </div>
        </div>
    )
}