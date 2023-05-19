import React from "react"
import setTimeLabel from "../utilities/setTimeLabel"
import getDummyPosts from "../utilities/getDummyPosts"
import SkeletonTinyPost from "./SkeletonTinyPost"

export default function SkeletonPost() {
    const posts = getDummyPosts()
    const post = posts[0]

    return (
        <div className='divide-y !text-transparent'>
            <div className="pb-7 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className='bg-gray-100 w-10 h-10 rounded-full' />
                        <span className="bg-gray-100">{post.User.username}</span>
                    </div>
                    <span className="bg-gray-100">{setTimeLabel(post.createdAt)}</span>
                </div>
                <p className='text-lg bg-gray-100'>{post.body}</p>
                <div className="flex items-center gap-4">
                    <span className='bg-gray-100'><span>{post.likes}</span> likes</span>
                    <span className='bg-gray-100'><span>{post.dislikes}</span> dislikes</span>
                </div>
            </div>
            <div className='flex gap-5 py-5'>
                <button className='bg-gray-100'>Liked</button>
                <button className='bg-gray-100'>Disliked</button>
                <button className='bg-gray-100'>Quote</button>
            </div>
            <div>
                <div className='pt-6 pb-3'><h2 className='bg-gray-100 w-fit !text-transparent'>10 replies</h2></div>
                <div className='divide-y'>
                    {posts.map((reply, index) => (
                        <SkeletonTinyPost post={reply} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}