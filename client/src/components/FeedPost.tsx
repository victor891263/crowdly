import React from 'react'
import setTimeLabel from '../utilities/setTimeLabel'
import {PostDetailed} from "../types"
import ExclaimIcon from "../icons/ExclaimIcon";
import {Link} from "react-router-dom";
import Avatar from "./Avatar";

export default function FeedPost({ post }: { post: PostDetailed }) {
    return (
        <Link to={`/posts/${post.id}`} className="block py-7 space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar img={post.User.image} className={'w-8 h-8'} svgClassName={'w-6 h-6'} />
                    <span className="font-semibold text-sm">{post.User.username}</span>
                </div>
                <span className="text-sm text-gray-400">{setTimeLabel(post.createdAt)}</span>
            </div>
            <p>{post.body}</p>
            {post.quotedId && (
                <div className='pb-1 flex items-center gap-1.5 text-gray-400'>
                    <ExclaimIcon className={"w-4 h-4"} />
                    <span className="text-sm">This post is a quote</span>
                </div>
            )}
            <div className="flex items-center gap-3.5 text-sm">
                <span><span className='font-semibold'>{post.likes}</span> likes</span>
                <span><span className='font-semibold'>{post.dislikes}</span> dislikes</span>
                <span><span className='font-semibold'>{post.replies}</span> replies</span>
            </div>
        </Link>
    )
}