import React from 'react';

export default function FeedSuggestions() {
    const suggestions = [
        {
            id: 1,
            username: 'commielay22',
            followers: 395,
            image: 'https://source.unsplash.com/156x156/?portrait?3'
        },
        {
            id: 2,
            username: 'TrentJohnson234',
            followers: 258
        },
        {
            id: 3,
            username: 'xxxREAPERxxx',
            followers: 221,
            image: 'https://source.unsplash.com/158x158/?portrait?3'
        }
    ];

    return (
        <div className="h-fit space-y-5">
            <h2 className="text-lg font-bold text-black dark:text-white">Suggestions</h2>
            <div className="space-y-5">
                {suggestions.map((s, i) => (
                    <div className="flex items-center justify-between" key={i}>
                        <div className="flex items-center gap-3">
                            {s.image ? (
                                <img className="object-cover w-9 h-9 rounded-full" src={s.image} alt="avatar"/>
                            ):(
                                <div className="w-9 h-9 rounded-full bg-gray-200 flex justify-center items-end dark:bg-gray-700">
                                    <svg className="w-7 h-7 text-gray-400 rounded-full dark:text-gray-500" fill="currentColor" viewBox="0 0 53.59 71.46"><path d="M60.31,60.43A16.08,16.08,0,1,1,76.39,44.35,16.07,16.07,0,0,1,60.31,60.43Zm23.23,39.3H37.09a3.57,3.57,0,0,1-3.57-3.57V94.37a26.8,26.8,0,1,1,53.59,0v1.79A3.57,3.57,0,0,1,83.54,99.73Z" transform="translate(-33.52 -28.27)"/></svg>
                                </div>
                            )}
                            <div>
                                <a className="cursor-pointer text-sm font-semibold text-black dark:text-white" role="link">{s.username}</a>
                                <div className="text-sm "><span className="">{s.followers}</span> followers</div>
                            </div>
                        </div>
                        <button className="text-indigo-600 text-sm dark:text-indigo-400">Follow</button>
                    </div>
                ))}
            </div>
            <button className="text-indigo-600 text-sm dark:text-indigo-400">See all</button>
        </div>
    );
};