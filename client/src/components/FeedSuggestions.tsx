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
            followers: 258,
            image: 'https://source.unsplash.com/157x157/?portrait?3'
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
            <div className="space-y-4">
                {suggestions.map((s, i) => (
                    <div className="flex items-center justify-between" key={i}>
                        <div className="flex items-center gap-3">
                            <img className="hidden object-cover w-9 h-9 rounded-full sm:block" src={s.image} alt="avatar"/>
                            <div>
                                <a className="cursor-pointer text-sm font-semibold text-black dark:text-white" role="link">{s.username}</a>
                                <div className="text-sm"><span className="">{s.followers}</span> followers</div>
                            </div>
                        </div>
                        <button className="text-indigo-600 text-sm font-semibold dark:text-indigo-400">Follow</button>
                    </div>
                ))}
            </div>
            <button className="text-indigo-600 text-sm font-semibold dark:text-indigo-400">See all</button>
        </div>
    );
};