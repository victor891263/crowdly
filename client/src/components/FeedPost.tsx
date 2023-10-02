import React from 'react'
import setTimeLabel from '../utilities/setTimeLabel'
import {PostSmall} from "../types"
import {Link} from "react-router-dom"
import AvatarIcon from "../icons/AvatarIcon"
import ArrowIcon from "../icons/ArrowIcon"

export default function FeedPost({ post, showReplyLabel }: { post: PostSmall, showReplyLabel?: boolean }) {
    return (
        <Link to={`/posts/${post.id}`} className="block py-9 space-y-5">
            <div className="flex items-center justify-between">
                {post.User ? (
                    <div className='flex items-center space-x-2'>
                        {post.User.image ? (
                            <img src={post.User.image} className='h-10 w-10 rounded-full' />
                        ):(
                            <AvatarIcon className='h-10 w-10 text-slate-400/50' />
                        )}
                        <div className='text-sm font-semibold'>{post.User.username}</div>
                    </div>
                ):(
                    <div className='flex items-center space-x-2'>
                        <AvatarIcon className='h-10 w-10 text-slate-400/50' />
                        <div className='text-sm font-semibold'>[anonymous]</div>
                    </div>
                )}
                <span className="text-sm text-slate-400">{setTimeLabel(post.createdAt)}</span>
            </div>
            <p>{post.body}</p>
            {post.quotedId && (
                <div className='!mt-4 flex items-center space-x-0.5 text-slate-400'>
                    <div><ArrowIcon className='h-4 w-4 rotate-[225deg]' /></div>
                    <span className="text-sm">quoting another post</span>
                </div>
            )}
            {(showReplyLabel && post.repliedId) && (
                <div className='!mt-4 flex items-center space-x-0.5 text-slate-400'>
                    <div><ArrowIcon className='h-4 w-4 rotate-[225deg]' /></div>
                    <span className="text-sm">replying to another post</span>
                </div>
            )}
            <div className="flex gap-x-4 text-sm">
                <span><span className='font-semibold'>{post.points}</span> points</span>
                <span><span className='font-semibold'>{post.replies}</span> replies</span>
                <span><span className='font-semibold'>{post.quotes}</span> quotes</span>
            </div>
        </Link>
    )
}