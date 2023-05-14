import React from 'react'
import { Link } from "react-router-dom"
import ThemeButton from "./ThemeButton"
import BarsIcon from "../icons/BarsIcon"
import BellIcon from '../icons/BellIcon'
import getCurrentUser from "../utilities/getCurrentUser"

export default function Header({ isFeed }: { isFeed?: boolean }) {
    const currentUser = getCurrentUser()

    return (
        <header className="fixed w-full bg-white border-b text-gray-700 dark:text-zinc-300 dark:bg-zinc-900 dark:border-zinc-700">
            <div className={"h-14 sm:h-16 container flex items-center justify-between mx-auto text-sm px-4 sm:px-6 lg:px-8" + (isFeed ? " lg:max-w-screen-lg" : " xl:max-w-screen-xl")}>
                <nav className="flex items-center gap-6">
                    <Link to="/" className="font-semibold text-black dark:text-white">Crowdly</Link>
                    <div className="flex items-center gap-6 max-md:hidden">
                        <Link to="/trending">Trending</Link>
                        <Link to="/about">About</Link>
                        <Link to="/help">Help</Link>
                    </div>
                </nav>
                {currentUser ? (
                    <div className="flex items-center gap-6 max-md:hidden">
                        <Link to="/notifications">Notifications</Link>
                        <Link to="/profile">Profile</Link>
                        <button className="text-red-600 dark:text-red-400">Logout</button>
                    </div>
                ):(
                    <div className="flex items-center gap-6 max-md:hidden">
                        <Link to="/login">Login</Link>
                        <Link to="/join">Sign up</Link>
                    </div>
                )}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeButton className={'w-5 h-5'} />
                    <button>
                        <BellIcon className={'w-4 h-4'} />
                    </button>
                    <button>
                        <BarsIcon className={'w-6 h-6'} />
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