import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    let info = {
        status: '&%#!',
        statusText: 'Unknown error',
        message: 'Cannot describe the error'
    };

    if (isRouteErrorResponse(error)) {
        info = {
            status: String(error.status),
            statusText: error.statusText,
            message: error.error ? error.error.message : 'Cannot describe the error'
        };
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-black text-9xl text-gray-400 dark:text-gray-600">{info.status}</h2>
                <p className="text-2xl font-semibold tracking-tight md:text-3xl dark:text-white">{info.statusText}</p>
                <p className="mt-4 mb-8 text-gray-700 dark:text-gray-300">{info.message}</p>
                <Link to="/" className="block w-fit mx-auto px-8 py-3 rounded bg-violet-600 text-white dark:bg-violet-400 dark:text-black">Back to homepage</Link>
            </div>
        </div>
    );
}