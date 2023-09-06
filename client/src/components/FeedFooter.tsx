import React from "react"
import {Link} from "react-router-dom"
import getCurrentUser from "../utilities/getCurrentUser"

export default function FeedFooter() {
    const currentUser = getCurrentUser()

    function logout() {
        localStorage.removeItem('jwt')
        localStorage.removeItem('rememberMe')
        window.location.href = '/'
    }

    return (
        <div className='text-sm text-slate-400'>
            <div className="flex gap-4 items-center justify-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/help">Help</Link>
                {currentUser ? (
                    <button onClick={logout} >Logout</button>
                ):(
                    <>
                        <Link to="/join">Join</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
            <p className="text-center mt-2">© 2023 Victor. All rights reserved.</p>
        </div>
    )
}