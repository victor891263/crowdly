import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import ThemeButton from "./ThemeButton"
import BarsIcon from "../icons/BarsIcon"
import BellIcon from '../icons/BellIcon'
import getCurrentUser from "../utilities/getCurrentUser"
import GitHubIcon from "../icons/GitHubIcon";
import HandWavingIcon from "../icons/HandWavingIcon";
import MobileMenu from "./MobileMenu";
import axios from "axios";
import getToken from "../utilities/getToken";
import handleError from "../utilities/handleError";
import PopUp from "./PopUp";

export default function Header({ isFeed }: { isFeed?: boolean }) {
    const [notiCount, setNotiCount] = useState<number | null>(null)
    const [error, setError] = useState('')

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const currentUser = getCurrentUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            axios.get(`${process.env.REACT_APP_API_URL}/notifications/count`, {
                headers: {
                    Authorization: getToken()
                }
            })
                .then(response => {
                    setNotiCount(response.data)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setError(msg), true)
                })
        }
    }, [])

    return (
        <>
            {error && <PopUp msg={error} />}
            {isMenuOpen && <MobileMenu close={() => setIsMenuOpen(false)} />}
            <header className="fixed w-full bg-white dark:bg-zinc-900">
                <div className={'container mx-auto px-4 sm:px-6 lg:px-8' + (isFeed ? " lg:max-w-screen-lg" : " xl:max-w-screen-xl")}>
                    <div className={"h-14 sm:h-16 border-b flex items-center justify-between text-sm font-medium"}>
                        <nav className="flex items-center gap-[22px]">
                            <Link to="/">Crowdly</Link>
                            <div className="flex items-center gap-[22px] max-md:hidden">
                                <Link to="/trending">Trending</Link>
                                <Link to="/about">About</Link>
                                <Link to="/help">Help</Link>
                            </div>
                        </nav>

                        <div className="flex items-center max-md:hidden">

                            {currentUser ? (
                                <div className="flex items-center gap-[22px]">
                                    <Link to="/notifications">
                                        {(notiCount && (notiCount > 0)) ? <span className='py-0.5 px-2 rounded-full bg-blue-600 text-white text-xs mr-1 dark:bg-blue-400 dark:text-black'>{notiCount}</span> : ''}
                                        <span>Notifications</span>
                                    </Link>
                                    <Link to={`/users/${currentUser.id}`}>Profile</Link>
                                    <button onClick={() => {
                                        localStorage.removeItem('jwt')
                                        navigate('/')
                                    }} >Logout</button>
                                </div>
                            ):(
                                <div className='flex items-center gap-[22px]'>
                                    <Link to="/login">Login</Link>
                                    <Link to="/join">Sign up</Link>
                                </div>
                            )}
                            <div className="flex gap-4 items-center justify-center ml-5">
                                <ThemeButton className={'w-[22px] h-[22px]'} />
                                <a href="/">
                                    <GitHubIcon className={"w-[22px] h-[22px] p-[1px]"} />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 md:hidden">
                            <Link to='/notifications' className='flex items-center'>
                                {(notiCount && (notiCount > 0)) ? <span className='py-0.5 px-2 rounded-full bg-blue-600 text-white text-xs mr-1 dark:bg-blue-400 dark:text-black'>{notiCount}</span> : ''}
                                <BellIcon className={'w-4 h-4'} />
                            </Link>
                            <ThemeButton className={'w-5 h-5'} />
                            <button onClick={() => setIsMenuOpen(true)}>
                                <BarsIcon className={'w-6 h-6'} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
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