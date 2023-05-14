import React from "react"
import UserIcon from "../icons/UserIcon";

export default function Avatar({ img, className, svgClassName }: { img?: string, className: string, svgClassName: string }) {
    if (img) return (
        <img className={"object-cover rounded-full " + className} src={img} alt="avatar"/>
    )
    return (
        <div className={"rounded-full bg-gray-200 flex justify-center items-end dark:bg-zinc-700 " + className}>
            <UserIcon className={"text-gray-400 rounded-full " + svgClassName} />
        </div>
    )
}