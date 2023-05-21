import React from "react"
import setTimeLabel from "../utilities/setTimeLabel"
import {NotiType} from "../types"
import Avatar from "./Avatar";

export default function Notification({ noti, handleClick }: { noti: NotiType, handleClick: (e: any, n: NotiType) => void }) {
    let label = ''
    if (noti.postId) {
        if (noti.isReply) label = ' replied to your post'
        else label = ' reacted to your post'
    } else {
        label = ' is now following you'
    }

    return (
        <button onClick={(e) => handleClick(e, noti)} className="flex items-center justify-between pt-4 pb-5 disabled:opacity-50">
            <div className='flex items-center gap-3'>
                <Avatar img={noti.User.image} className={'w-10 h-10'} svgClassName={'w-8 h-8'} />
                <div>
                    <p className='text-left'><span className="font-semibold">{noti.User.username}</span>{label}</p>
                    <span className="sm:hidden text-left text-sm text-gray-400 block mt-1">{setTimeLabel(noti.createdAt)}</span>
                </div>
            </div>
            <span className="max-sm:hidden text-sm text-gray-400 block pl-3">{setTimeLabel(noti.createdAt)}</span>
        </button>
    )
}