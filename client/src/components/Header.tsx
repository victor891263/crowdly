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
        window.location.href = '/'
    }

    return (
        <>
            {isAddPostOpen && <PostForm type={'add'} close={() => setIsAddPostOpen(false)} closeMenu={() => setIsMenuOpen(false)} />}
            <header className='fixed top-0 left-0 w-full pt-6 z-10'>
                <div className='px-6 lg:max-w-screen-lg container mx-auto'>
                    <nav className={'p-5 sm:p-6 shadow-md bg-white rounded-lg text-[15px] overflow-hidden transition-all dark:bg-gray-800 ' + (isMenuOpen ? 'max-sm:h-[336px]' : 'max-sm:h-[60px]')}>
                        <div className='flex items-center justify-between'>
                            <Link to={'/'} className='flex items-center space-x-1.5' >
                                <div className='bg-violet-600 rounded-full h-3.5 w-3.5'></div>
                                <div>Crowdly</div>
                            </Link>
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
                                    <Link to={'/search'} ><GlassIcon className={'h-[18px] w-[18px]'} /></Link>
                                    {currentUser && <NotificationButton />}
                                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:hidden'>
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
                            <>
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
                                    {currentUser && <div className='pt-2.5 w-full'><button onClick={() => setIsAddPostOpen(true)} className='primary w-full'>Add post</button></div>}
                                </div>
                                <div className='border-t mt-5 pt-5 flex items-center justify-between'>
                                    <div className='text-sm text-slate-400'>© 2023 Victor</div>
                                    <div className='flex space-x-3.5'>
                                        <ThemeButton />
                                        <a href="https://github.com/victor891263/quizwiz" target="_blank" rel="noreferrer" ><GitHubIcon className={'h-5 w-5'} /></a>
                                    </div>
                                </div>
                            </>
                        )}
                    </nav>
                </div>
            </header>
        </>
    )
}