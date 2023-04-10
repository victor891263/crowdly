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
                <h1 className="font-black text-gray-300 text-8xl sm:text-9xl dark:text-gray-700">{info.status}</h1>
                <p className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl dark:text-white lowercase first-letter:uppercase">{info.statusText}</p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">{info.message}.</p>
                <a href="#" className="inline-block px-5 py-3 mt-6 text-sm font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring dark:text-black dark:bg-indigo-400">Go back home</a>
            </div>
        </div>
    );
}

/*

<h2 className="mb-8 font-black text-9xl text-gray-400 dark:text-gray-600">{info.status}</h2>
<p className="text-2xl font-semibold tracking-tight md:text-3xl dark:text-white">{info.statusText}</p>
<p className="mt-4 mb-8 text-gray-700 dark:text-gray-300">{info.message}</p>
<Link to="/" className="block w-fit mx-auto px-8 py-3 rounded bg-violet-600 text-white dark:bg-violet-400 dark:text-black">Back to homepage</Link>

*/