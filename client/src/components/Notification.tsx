import React from "react"
import setTimeLabel from "../utilities/setTimeLabel"
import {NotiType} from "../types"

export default function Notification({ noti, handleClick }: { noti: NotiType, handleClick: (e: any, n: NotiType) => void }) {
    let label = ''
    if (noti.postId) {
        if (noti.isReply) label = ' replied to your post'
        else label = ' reacted to your post'
    } else {
        label = ' is now following you'
    }

    return (
        <button onClick={(e) => handleClick(e, noti)} className="flex justify-between pt-4 pb-5 disabled:opacity-50">
            <p className='text-left'><span className="font-semibold">{noti.User.username}</span>{label}</p>
            <span className="text-sm text-gray-400 block pl-3">{setTimeLabel(noti.createdAt)}</span>
        </button>
    )
}