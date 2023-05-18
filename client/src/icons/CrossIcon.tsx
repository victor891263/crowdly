import React from "react"

export default function CrossIcon({ className, circle }: { className: string, circle?: boolean }) {
    if (circle) return (
        <svg className={className} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.9 75.9"><path d="M73.59,57.36a3.17,3.17,0,0,0-4.47,0l-8.18,8.18-8.18-8.18a3.16,3.16,0,0,0-4.47,4.47L56.47,70l-8.18,8.18a3.16,3.16,0,0,0,4.47,4.47l8.18-8.18,8.18,8.18a3.16,3.16,0,0,0,4.47-4.47L65.41,70l8.18-8.18A3.15,3.15,0,0,0,73.59,57.36Z" transform="translate(-22.99 -32.06)"/><path d="M60.94,32.06a37.95,37.95,0,1,0,38,38A37.95,37.95,0,0,0,60.94,32.06Zm0,69.57A31.62,31.62,0,1,1,92.57,70,31.62,31.62,0,0,1,60.94,101.63Z" transform="translate(-22.99 -32.06)"/></svg>
    )

    return (
        <svg className={className} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.69 90.69"><path d="M111.61,17.49h0a7.21,7.21,0,0,0-10.19,0l-33,33.05-33.05-33a7.21,7.21,0,0,0-10.19,0h0a7.21,7.21,0,0,0,0,10.19L58.18,60.73l-33,33.05a7.2,7.2,0,0,0,0,10.18h0a7.19,7.19,0,0,0,10.19,0l33.05-33,33.05,33a7.19,7.19,0,0,0,10.19,0h0a7.2,7.2,0,0,0,0-10.18l-33-33.05,33.05-33A7.21,7.21,0,0,0,111.61,17.49Z" transform="translate(-23.02 -15.38)"/></svg>
    )
}

