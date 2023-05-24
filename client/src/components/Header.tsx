import React, {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
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

export default function Header() {
    const [notiCount, setNotiCount] = useState<number | null>(null)
    const [error, setError] = useState('')

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const currentUser = getCurrentUser()
    const navigate = useNavigate()
    const { pathname } = useLocation()

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
            <header className="fixed w-full bg-white border-b z-[5] dark:bg-zinc-900">
                <div className={'container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl'}>
                    <div className={"h-14 sm:h-16 flex items-center justify-between text-sm font-medium"}>
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
                                    <Link to="/notifications" className='flex items-center'>
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
                                <a href="https://github.com/victor891263/crowdly" target="_blank">
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
                            <a href="https://github.com/victor891263/crowdly" target="_blank">
                                <GitHubIcon className={"w-[22px] h-[22px] p-[1px]"} />
                            </a>
                            <button onClick={() => setIsMenuOpen(true)}>
                                <BarsIcon className={'w-6 h-6'} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}