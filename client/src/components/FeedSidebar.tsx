import React from "react"
import FeedAddPost from "./FeedAddPost"
import {Link, useNavigate} from "react-router-dom"
import getCurrentUser from "../utilities/getCurrentUser"

export default function FeedSidebar() {
    const currentUser = getCurrentUser()
    const navigate = useNavigate()

    return (
        <>
            {currentUser ? (
                <FeedAddPost />
            ):(
                <div>
                    <h2>New to Crowdly?</h2>
                    <p className='mt-4 mb-5'>Join us now to get your own personalized timeline!</p>
                    <input type='text' placeholder='Choose a username' className='mb-2 w-full py-2 px-3 text-sm' />
                    <Link to="/join" className="btn-primary block py-2 text-center text-sm">Create account</Link>
                </div>
            )}

            <div className="w-72 pt-5 mt-6 text-sm text-gray-400 border-t">
                <div className="flex gap-3.5 items-center justify-center">
                    {currentUser ? (
                        <>
                            <Link to="/feed">Feed</Link>
                            <Link to="/about">About</Link>
                            <Link to="/help">Help</Link>
                            <button onClick={() => {
                                localStorage.removeItem('jwt')
                                navigate('/')
                            }} >Logout</button>
                        </>
                    ):(
                        <>
                            <Link to="/trending">Trending</Link>
                            <Link to="/about">About</Link>
                            <Link to="/help">Help</Link>
                            <Link to="/join">Join</Link>
                            <Link to="/login">Login</Link>
                        </>
                    )}
                </div>
                <p className="text-center mt-2">© 2023 Victor. All rights reserved.</p>
            </div>
        </>
    )
}