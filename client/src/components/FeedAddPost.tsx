import React from 'react';

export default function FeedAddPost() {
    const profile = {
        id: '23122321',
        username: 'LJenkins3872',
        image: 'https://source.unsplash.com/150x150/?portrait?3'
    };

    function resize(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const textarea = e.target;
        textarea.style.height = '';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    return (
        <div className="h-fit pb-1 flex flex-col">
            <div className="flex items-center gap-3">
                <img src={profile.image} alt="" className="object-cover w-9 h-9 rounded-full"/>
                <p className="font-semibold text-sm cursor-pointer text-black dark:text-white">{profile.username}</p>
            </div>
            <div className="w-full mt-3">
                <textarea onChange={resize} style={{ resize: 'none', overflow: 'hidden' }} className="w-full rounded-lg py-2.5 px-3.5 h-24 border border-gray-100 bg-gray-100 outline-none focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-800 dark:focus:border-indigo-400 dark:placeholder:text-gray-500" placeholder="What's on your mind?" />
                <button className="block mt-1 ml-auto bg-indigo-600 text-white text-sm font-semibold rounded-md py-2 px-3 dark:bg-indigo-400 dark:text-black">Submit</button>
            </div>
        </div>
    );
};