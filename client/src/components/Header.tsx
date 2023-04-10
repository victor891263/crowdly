import React from 'react';
import { Link } from "react-router-dom";

export default function Header({ isFeed }: { isFeed?: boolean }) {
    const currentUser = localStorage.getItem('jwt'); // localStorage.getItem('jwt')

    return (
        <header id="the-header" className="fixed w-full bg-white border-b text-gray-700 dark:text-gray-300 dark:bg-gray-900 dark:border-gray-700">
            <div className={"container flex items-center justify-between mx-auto text-sm px-6" + (currentUser ? " py-4 md:py-5" : " py-4") + (isFeed ? " lg:max-w-screen-lg" : " xl:max-w-screen-xl")}>
                <nav className="flex items-center gap-6">
                    <Link to="/" className="font-bold text-black dark:text-white">👋 Crowdly</Link>
                    <div className="flex items-center gap-6 max-md:hidden">
                        <Link to="/trending">Trending</Link>
                        <Link to="/about">About</Link>
                        <Link to="/help">Help</Link>
                    </div>
                </nav>
                {currentUser ? (
                    <div className="flex items-center gap-6 max-md:hidden">
                        <div className="flex items-center gap-1">
                            <div>Notifications</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className="flex items-center gap-1">
                            <div>Account</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                ):(
                    <div className="flex items-center gap-2 max-md:hidden">
                        <Link to="/login" className="rounded-md border px-3 py-2 font-semibold text-indigo-600 dark:border-gray-700 dark:text-indigo-400">Login</Link>
                        <Link to="/join" className="rounded-md px-3 py-2 bg-indigo-600 text-white font-semibold dark:text-black dark:bg-indigo-400">Sign up</Link>
                    </div>
                )}
                <div className="flex items-center gap-4 md:hidden">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

/*

<div className="relative max-sm:hidden">
    <span className="absolute inset-y-0 left-0 flex items-center pl-2.5">
        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
            <svg fill="currentColor" viewBox="0 0 512 512" className="w-3.5 h-3.5"><path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path></svg>
        </button>
    </span>
    <input type="search" name="Search" placeholder="Search" className="w-auto py-2 pl-9 text-sm rounded-full bg-transparent focus:outline-none border placeholder:text-gray-400 focus:border-violet-600 dark:border-gray-700 dark:focus:border-violet-400 dark:placeholder:text-gray-600"/>
</div>

*/