import React from "react"
import BoxFullScreen from "./BoxFullScreen"
import {Link, useNavigate} from "react-router-dom"
import getCurrentUser from "../utilities/getCurrentUser"
import ArrowIcon from "../icons/ArrowIcon";
import GitHubIcon from "../icons/GitHubIcon";

export default function MobileMenu({ close }: { close: () => void }) {
    const currentUser = getCurrentUser()
    const navigate = useNavigate()

    return (
        <BoxFullScreen close={close}>
            <>
                <div className='flex items-center justify-between'>
                    <h2>Menu</h2>
                    <a href="https://github.com/victor891263/crowdly" target="_blank" rel="noreferrer">
                        <GitHubIcon className={"w-[22px] h-[22px] p-[1px]"} />
                    </a>
                </div>
                <div className='flex flex-col divide-y mt-6'>
                    {currentUser ? (
                        <>
                            <Link to="/feed" className='py-3 flex items-center justify-between'>
                                <span>Feed</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                            <Link to="/trending" className='py-3 flex items-center justify-between'>
                                <span>Trending</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                            <Link to="/about" className='py-3 flex items-center justify-between'>
                                <span>About</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                            <Link to="/help" className='py-3 flex items-center justify-between'>
                                <span>Help</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                            <button className='py-3 flex items-center justify-between' onClick={() => {
                                localStorage.removeItem('jwt')
                                navigate('/')
                            }}>
                                <span className='text-left'>Logout</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </button>
                        </>
                    ):(
                        <>
                            <Link to="/trending" className='py-3 flex items-center justify-between'>
                                <span>Trending</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                            <Link to="/about" className='py-3 flex items-center justify-between'>
                                <span>About</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                            <Link to="/help" className='py-3 flex items-center justify-between'>
                                <span>Help</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                            <Link to="/join" className='py-3 flex items-center justify-between'>
                                <span>Join</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                            <Link to="/login" className='py-3 flex items-center justify-between'>
                                <span>Login</span>
                                <ArrowIcon className={'w-5 h-5 -rotate-90'} />
                            </Link>
                        </>
                    )}
                </div>
            </>
        </BoxFullScreen>
    )
}