import React from "react"

export default function CheckIcon({ className, strokeWidth }: { className?: string, strokeWidth?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className={className}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth || 2} d="M5 13l4 4L19 7"></path></svg>
    )
}