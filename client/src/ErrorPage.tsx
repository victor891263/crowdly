import {useRouteError, isRouteErrorResponse, Link, useNavigate} from "react-router-dom"
import CrossWithCircle from "./icons/CrossWithCircle"

export default function ErrorPage() {
    const error = useRouteError()
    const navigate = useNavigate()

    let info = {
        status: '???',
        statusText: 'Unknown error',
        message: `We don't have any idea why this error occurred`
    }

    if (isRouteErrorResponse(error)) {
        info = {
            status: String(error.status),
            statusText: error.statusText,
            message: error.error ? error.error.message : `We don't have any idea why this error occurred`
        }
    }

    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className='text-center max-w-md py-20'>
                    <CrossWithCircle className='h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600' />
                    <div className='mt-7 subtitle'>{info.status} - {info.statusText}</div>
                    <p className='mt-3'>{info.message}</p>
                    <button onClick={() => navigate('/')} className='mt-9 primary' >Go home</button>
                </div>
            </div>
        </>
    )
}