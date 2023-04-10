import React from 'react';

export default function FeedTrending() {
    const trendingPosts = [
        {
            id: '1',
            body: `That is awesome. People got tired of crumbs, and wanted the pie. Trump...`,
            username: 'KatarinReme',
            image: 'https://source.unsplash.com/152x152/?portrait?3'
        },
        {
            id: '2',
            body: `Oh dear. I can’t decide if this is sadly pathetic or sadly hilarious.🤪`,
            username: 'RebeccaYChan',
            image: 'https://source.unsplash.com/151x151/?portrait?3'
        }
    ];

    return (
        <div className="bg-white rounded-lg p-6 pt-5 h-fit space-y-5 dark:bg-gray-800">
            <h2 className="text-lg font-bold text-black dark:text-white">Trending</h2>
            <div className="space-y-6">
                {trendingPosts.map((post, index) => (
                    <div className="space-y-3" key={index}>
                        <div className="flex items-center">
                            {post.image ? (
                                <img className="object-cover w-8 h-8 mr-3 rounded-full" src={post.image} alt="avatar"/>
                            ):(
                                <div className="w-8 h-8 mr-3 rounded-full bg-gray-200 flex justify-center items-end dark:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-400 rounded-full dark:text-gray-500" fill="currentColor" viewBox="0 0 53.59 71.46"><path d="M60.31,60.43A16.08,16.08,0,1,1,76.39,44.35,16.07,16.07,0,0,1,60.31,60.43Zm23.23,39.3H37.09a3.57,3.57,0,0,1-3.57-3.57V94.37a26.8,26.8,0,1,1,53.59,0v1.79A3.57,3.57,0,0,1,83.54,99.73Z" transform="translate(-33.52 -28.27)"/></svg>
                                </div>
                            )}
                            <a className="font-bold text-sm cursor-pointer text-black dark:text-white" role="link">{post.username}</a>
                        </div>
                        <p className="">{post.body}</p>
                    </div>
                ))}
            </div>
            <button className="text-violet-600 mt-6 dark:text-violet-400">See all</button>
        </div>
    );
}