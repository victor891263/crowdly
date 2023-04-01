import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="fixed w-full bg-white shadow text-gray-700 dark:text-gray-300 dark:shadow-none dark:bg-gray-800 dark:border-b dark:border-gray-700">
            <div className="container py-4 flex items-center justify-between mx-auto text-sm xl:max-w-screen-xl max-2xl:px-6">
                <nav className="flex items-center gap-6">
                    <Link to="/" className="font-bold text-black dark:text-white">👋 Crowdly</Link>
                    <div className="flex items-center gap-6 max-md:hidden">
                        <Link to="/about">About</Link>
                        <Link to="/help">Help</Link>
                    </div>
                    <div className="relative max-sm:hidden">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2.5">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-3.5 h-3.5"><path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path></svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search" className="w-auto py-2 pl-9 text-sm rounded-full bg-transparent focus:outline-none border placeholder:text-gray-400 focus:border-violet-600 dark:border-gray-700 dark:focus:border-violet-400 dark:placeholder:text-gray-600"/>
                    </div>
                </nav>
                <nav className="items-center gap-6 hidden md:flex">
                    <Link to="/login">Login</Link>
                    <Link to="/signup" className="rounded px-4 py-2 bg-violet-600 text-white dark:text-black dark:bg-violet-400">Sign up</Link>
                </nav>
                <div className="flex items-center gap-4 md:hidden">
                    <button className="sm:hidden">
                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4"><path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path></svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        </header>
    );
};