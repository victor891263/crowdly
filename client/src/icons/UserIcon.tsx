import React from "react"

export default function UserIcon({ className, outline, slash }: { className: string, outline?: boolean, slash?: boolean }) {
    if (slash) return (
        <svg className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.91 103.87"><path d="M53,71.84l8.65,8.65H45.26a13,13,0,0,0-13,13v17.32A4.32,4.32,0,0,1,28,115.11h0a4.32,4.32,0,0,1-4.33-4.32V93.47A21.63,21.63,0,0,1,45.26,71.84Zm58.31,40h0a4.33,4.33,0,0,1-6.12,0L13.89,20.61a4.33,4.33,0,0,1,0-6.12h0a4.33,4.33,0,0,1,6.12,0L37.2,31.69a26,26,0,1,1,30.9,30.9l9.25,9.25h2.54a21.62,21.62,0,0,1,21.63,21.63V96l9.74,9.74A4.33,4.33,0,0,1,111.26,111.87ZM45.48,40,59.82,54.3a16.91,16.91,0,0,0,2.75.22A17.31,17.31,0,1,0,45.26,37.21,18.13,18.13,0,0,0,45.48,40Z" transform="translate(-12.62 -11.25)"/></svg>
    )
    if (outline) return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    )
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 53.59 71.46"><path d="M60.31,60.43A16.08,16.08,0,1,1,76.39,44.35,16.07,16.07,0,0,1,60.31,60.43Zm23.23,39.3H37.09a3.57,3.57,0,0,1-3.57-3.57V94.37a26.8,26.8,0,1,1,53.59,0v1.79A3.57,3.57,0,0,1,83.54,99.73Z" transform="translate(-33.52 -28.27)"/></svg>
    )
}