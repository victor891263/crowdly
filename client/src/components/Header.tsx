import React, {useEffect, useRef, useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import ThemeButton from "./ThemeButton"
import getCurrentUser from "../utilities/getCurrentUser"
import GitHubIcon from "../icons/GitHubIcon"
import ArrowIcon from "../icons/ArrowIcon"
import MenuIcon from "../icons/MenuIcon"
import GlassIcon from "../icons/GlassIcon"
import CrossIcon from "../icons/CrossIcon"
import NotificationButton from "./NotificationButton"
import PostForm from "./PostForm"
import HandWavingColoredIcon from "../icons/HandWavingColoredIcon";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAddPostOpen, setIsAddPostOpen] = useState(false)

    const currentUser = getCurrentUser()
    const location = useLocation()

    useEffect(() => {
        setIsMenuOpen(false)
        setIsAddPostOpen(false)
    }, [location.pathname])

    function logout() {
        localStorage.removeItem('jwt')
        localStorage.removeItem('rememberMe')
        window.location.href = '/'
    }

    return (
        <>
            {isAddPostOpen && <PostForm type={'add'} close={() => setIsAddPostOpen(false)} closeMenu={() => setIsMenuOpen(false)} />}
            <header className='fixed top-0 left-0 w-full pt-6 z-10'>
                <div className='px-6 lg:max-w-screen-lg container mx-auto'>
                    <nav className={'semismall-text p-5 sm:p-6 shadow-md bg-white rounded-lg overflow-hidden transition-all dark:bg-gray-800 ' + (isMenuOpen ? (currentUser ? 'max-sm:h-[336px]' : 'max-sm:h-[274px]') : 'max-sm:h-[60px]')}>
                        <div className='flex items-center justify-between'>
                            <Link to={'/'} className='flex items-center space-x-1.5' >👋 Crowdly</Link>
                            <div className='flex items-center space-x-5'>
                                <div className='flex items-center space-x-5 max-sm:hidden'>
                                    <Link to={'/about'}>About</Link>
                                    <Link to={'/help'}>Help</Link>
                                    {currentUser ? (
                                        <>
                                            <Link to={`/users/${currentUser.id}`}>Profile</Link>
                                            <button onClick={logout}>Logout</button>
                                        </>
                                    ):(
                                        <>
                                            <Link to={'/login'}>Login</Link>
                                            <Link to={'/join'}>Join</Link>
                                        </>
                                    )}
                                </div>
                                <div className='flex items-center space-x-4 sm:space-x-5'>
                                    <Link to={'/search'} ><GlassIcon className={'small-height small-width'} /></Link>
                                    {currentUser && <NotificationButton />}
                                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:hidden' data-testid='nav-menu-toggle-btn' >
                                        {isMenuOpen ? <CrossIcon className='h-6 w-6' /> : <MenuIcon className='h-6 w-6' />}
                                    </button>
                                </div>
                                <div className='flex items-center space-x-5 max-sm:hidden'>
                                    <ThemeButton />
                                    <a href="https://github.com/victor891263/quizwiz" target="_blank" rel="noreferrer" ><GitHubIcon className={'h-5 w-5'} /></a>
                                </div>
                            </div>
                        </div>
                        {isMenuOpen && (
                            <div className="sm:hidden">
                                <div className='border-t mt-5 pt-5 flex flex-col space-y-3'>
                                    <Link to={'/about'} className='flex items-center justify-between'>
                                        <span>About</span>
                                        <ArrowIcon className='h-5 w-5' />
                                    </Link>
                                    <Link to={'/help'} className='flex items-center justify-between'>
                                        <span>Help</span>
                                        <ArrowIcon className='h-5 w-5' />
                                    </Link>
                                    {currentUser ? (
                                        <>
                                            <Link to={`/users/${currentUser.id}`} className='flex items-center justify-between'>
                                                <span>Profile</span>
                                                <ArrowIcon className='h-5 w-5' />
                                            </Link>

                                            <button onClick={logout} className='flex items-center justify-between text-left'>
                                                <span>Logout</span>
                                                <ArrowIcon className='h-5 w-5' />
                                            </button>

                                        </>
                                    ):(
                                        <>
                                            <Link to={'/login'} className='flex items-center justify-between'>
                                                <span>Login</span>
                                                <ArrowIcon className='h-5 w-5' />
                                            </Link>

                                            <Link to={'/join'} className='flex items-center justify-between'>
                                                <span>Join</span>
                                                <ArrowIcon className='h-5 w-5' />
                                            </Link>

                                        </>
                                    )}
                                    {currentUser && <div className='pt-2.5 w-full'><button onClick={() => {
                                        setIsAddPostOpen(true)
                                        setIsMenuOpen(false)
                                    }} className='primary w-full'>Add post</button></div>}
                                </div>
                                <div className='border-t mt-5 pt-5 flex items-center justify-between'>
                                    <div className='text-sm text-slate-400'>© 2023 Victor</div>
                                    <div className='flex space-x-3.5'>
                                        <ThemeButton />
                                        <a href="https://github.com/victor891263/quizwiz" target="_blank" rel="noreferrer" ><GitHubIcon className={'h-5 w-5'} /></a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        </>
    )
}