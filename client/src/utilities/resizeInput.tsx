import React from "react"

export default function resizeInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const textarea = e.target
    textarea.style.height = ''
    textarea.style.height = `${textarea.scrollHeight}px`
}