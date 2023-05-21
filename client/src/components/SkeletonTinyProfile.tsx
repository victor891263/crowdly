import React from "react"
import {UserTiny} from "../types"

export default function SkeletonTinyProfile({ profile }: { profile: UserTiny }) {
    return (
        <div className="animate-pulse flex items-center gap-3">
            <div className='w-10 h-10 rounded-full bg-gray-100' />
            <span className="!text-transparent bg-gray-100">{profile.username}</span>
        </div>
    )
}