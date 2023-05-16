import React from "react"

export default function TextBalloonIcon({ className, slash }: { className: string, slash?: boolean }) {
    if (slash) return (
        <svg className={className} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.9 71.89"><path d="M106.85,93.24,97.3,83.7a12,12,0,0,0,4.43-9.31V44.44a12,12,0,0,0-12-12H53.8a11.93,11.93,0,0,0-6.08,1.65l-6.78-6.77a3,3,0,0,0-4.23,4.24l65.9,65.9a3,3,0,0,0,2.12.88,3,3,0,0,0,2.12-.88,3,3,0,0,0,0-4.24Zm-53-54.79h36a6,6,0,0,1,6,6v30a6,6,0,0,1-2.72,5L52.25,38.65A6.16,6.16,0,0,1,53.8,38.45Zm28.41,46a3,3,0,0,1-.4,4.21l-6.5,5.37a5.24,5.24,0,0,1-3.51,1.32A5.49,5.49,0,0,1,68.15,94l-9-7.61H53.8a12,12,0,0,1-12-12v-21a3,3,0,0,1,6,0v21a6,6,0,0,0,6,6h6.41a3,3,0,0,1,1.94.71l9.63,8.11L78,84.06a3,3,0,0,1,4.22.4Z" transform="translate(-35.83 -26.46)"/></svg>
    )
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>

    )
}