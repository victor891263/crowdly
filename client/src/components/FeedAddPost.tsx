import React from 'react'

export default function FeedAddPost() {
    function resize(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const textarea = e.target
        textarea.style.height = ''
        textarea.style.height = `${textarea.scrollHeight}px`
    }

    return (
        <div className="h-fit">
            <h2>Post something</h2>
            <div className="w-full mt-5">
                <textarea onChange={resize} style={{ resize: 'none', overflow: 'hidden' }} className="w-full py-2 px-3 h-24" placeholder="What's on your mind?" />
                <button className="btn-primary block ml-auto mt-2 py-2 px-3 text-sm">Submit</button>
            </div>
        </div>
    )
}

/*

const profile = {
    id: '23122321',
    username: 'LJenkins3872',
    image: 'https://source.unsplash.com/150x150/?portrait?3'
}

<div className="flex items-center gap-3">
    {profile.image ? (
        <img className="object-cover w-9 h-9 rounded-full" src={profile.image} alt="avatar"/>
    ):(
        <div className="w-9 h-9 rounded-full bg-gray-200 flex justify-center items-end dark:bg-gray-700">
            <svg className="w-7 h-7 text-gray-400 rounded-full dark:text-gray-500" fill="currentColor" viewBox="0 0 53.59 71.46"><path d="M60.31,60.43A16.08,16.08,0,1,1,76.39,44.35,16.07,16.07,0,0,1,60.31,60.43Zm23.23,39.3H37.09a3.57,3.57,0,0,1-3.57-3.57V94.37a26.8,26.8,0,1,1,53.59,0v1.79A3.57,3.57,0,0,1,83.54,99.73Z" transform="translate(-33.52 -28.27)"/></svg>
        </div>
    )}
    <span className="font-semibold text-sm cursor-pointer text-black dark:text-white">{profile.username}</span>
</div>

*/