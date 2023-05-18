import React from "react"
import setTimeLabel from "../utilities/setTimeLabel"
import {PostDetailed} from "../types"

export default function SkeletonTinyPost({ post }: { post: PostDetailed }) {
    return (
        <div className="animate-pulse !text-transparent block py-7 space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className='bg-gray-100 w-8 h-8 rounded-full' />
                    <span className="bg-gray-100 text-sm">{post.User.username}</span>
                </div>
                <span className="bg-gray-100 text-sm">{setTimeLabel(post.createdAt)}</span>
            </div>
            <p className='bg-gray-100'>{post.body}</p>
            <div className="flex items-center gap-3.5 text-sm">
                <span className='bg-gray-100'><span>{post.likes}</span> likes</span>
                <span className='bg-gray-100'><span>{post.dislikes}</span> dislikes</span>
                <span className='bg-gray-100'><span>{post.replies}</span> replies</span>
            </div>
        </div>
    )
}