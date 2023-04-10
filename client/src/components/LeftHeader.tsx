import React from 'react';
import { Link } from "react-router-dom";

export default function LeftHeader() {
    return (
        <header>
            <nav className="flex flex-col gap-4">
                <Link to="/" className="font-bold text-black dark:text-white">👋 Crowdly</Link>
                <Link to="/about">Home</Link>
                <Link to="/help">Trending</Link>
                <Link to="/about">Profile</Link>
                <Link to="/help">Notifications</Link>
            </nav>
        </header>
    )
}