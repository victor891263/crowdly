import React from "react"
import {Link, useNavigate} from "react-router-dom";
import getCurrentUser from "../utilities/getCurrentUser";

export default function FeedFooter() {
    const currentUser = getCurrentUser()
    const navigate = useNavigate()

    return (
        <div>
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
    )
}