import React from 'react';

export default function FeedSuggestions() {
    const suggestions = [
        {
            id: 1,
            username: 'commielay22',
            image: 'https://source.unsplash.com/156x156/?portrait?3'
        },
        {
            id: 2,
            username: 'Trent234',
            image: 'https://source.unsplash.com/157x157/?portrait?3'
        },
        {
            id: 3,
            username: 'xxREAPERxx',
            image: 'https://source.unsplash.com/158x158/?portrait?3'
        }
    ];

    return (
        <div className="bg-white rounded-lg p-6 pt-4 h-fit dark:bg-gray-800">
            <h2 className="text-lg font-bold text-black dark:text-white">Suggestions</h2>
            <div className="mt-6 space-y-5">
                {suggestions.map((s, i) => (
                    <div className="flex items-center justify-between" key={i}>
                        <div className="flex items-center">
                            <img className="hidden object-cover w-8 h-8 mr-3 rounded-full sm:block" src={s.image} alt="avatar"/>
                            <a className="cursor-pointer text-black dark:text-white" role="link">{s.username}</a>
                        </div>
                        <button className="text-violet-600 dark:text-violet-400">Follow</button>
                    </div>
                ))}
            </div>
        </div>
    );
};