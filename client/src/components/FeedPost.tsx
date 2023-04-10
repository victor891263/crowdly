import React from 'react';
import setTimeLabel from '../utils/setTimeLabel';
import IFeedPost from '../types/feedPost';

export default function FeedPost({ post }: { post: IFeedPost }) {
    return (
        <div className="py-6 space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {post.image ? (
                        <img className="object-cover w-8 h-8 mr-3 rounded-full" src={post.image} alt="avatar"/>
                    ):(
                        <div className="w-8 h-8 mr-3 rounded-full bg-gray-200 flex justify-center items-end dark:bg-gray-700">
                            <svg className="w-6 h-6 text-gray-400 rounded-full dark:text-gray-500" fill="currentColor" viewBox="0 0 53.59 71.46"><path d="M60.31,60.43A16.08,16.08,0,1,1,76.39,44.35,16.07,16.07,0,0,1,60.31,60.43Zm23.23,39.3H37.09a3.57,3.57,0,0,1-3.57-3.57V94.37a26.8,26.8,0,1,1,53.59,0v1.79A3.57,3.57,0,0,1,83.54,99.73Z" transform="translate(-33.52 -28.27)"/></svg>
                        </div>
                    )}
                    <a className="font-semibold text-sm cursor-pointer text-black dark:text-white" role="link">{post.username}</a>
                </div>
                <span className="text-sm font-light text-gray-400 dark:text-gray-500">{setTimeLabel(post._createdAt)}</span>
            </div>
            <p>{post.body}</p>
            {post.quotedId && (
                <p className="border rounded-lg px-4 py-3.5 text-sm dark:border-gray-700">💬 Expand to view the quoted post.</p>
            )}
            <div className="flex items-center gap-4 text-sm">
                <p><span className="font-semibold text-black dark:text-white">{post.score}</span> points</p>
                <p><span className="font-semibold text-black dark:text-white">{post.replies}</span> comments</p>
            </div>
        </div>
    );
};