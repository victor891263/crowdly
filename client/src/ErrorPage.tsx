import {useRouteError, isRouteErrorResponse, Link} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    let info = {
        status: '???',
        statusText: 'Unknown error',
        message: `We don't have any idea why this error occurred`
    };

    if (isRouteErrorResponse(error)) {
        info = {
            status: String(error.status),
            statusText: error.statusText,
            message: error.error ? error.error.message : `We don't have any idea why this error occurred`
        };
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-sm text-center">
                <h2 className="text-2xl">{info.status} - {info.statusText}</h2>
                <p className="mt-6">{info.message}.</p>
                <Link to='/' className='block border rounded-lg font-medium py-2 px-4 w-fit text-sm mx-auto mt-10 text-indigo-600 '>Go back home</Link>
            </div>
        </div>
    );
}