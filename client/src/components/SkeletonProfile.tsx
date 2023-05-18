import React from "react"
import getDummyPosts from "../utilities/getDummyPosts";
import SkeletonTinyPost from "./SkeletonTinyPost";

export default function SkeletonProfile() {
    const posts = getDummyPosts()

    return (
        <div className='animate-pulse !text-transparent'>
            <div className="space-y-5 pb-7">
                <div className='flex justify-between items-start'>
                    <div className='bg-gray-100 w-32 h-32 rounded-full' />
                    <button className='bg-gray-100 px-3 py-2 text-sm'>Unfollow</button>
                </div>
                <div className="space-y-2">
                    <h2 className='bg-gray-100 w-fit !text-transparent'>Thisisadummyuser</h2>
                </div>
                <p className='bg-gray-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada augue quis mi accumsan aliquam. Praesent placerat turpis eu lectus mollis, non egestas tellus tincidunt. Curabitur sagittis lacus sit amet dui sodales, sit amet mollis nibh mollis. Aenean fringilla sit amet ex sed suscipit.</p>
                <div className="flex gap-4">
                    <a className='bg-gray-100'><span>100</span> follows</a>
                    <a className='bg-gray-100'><span>100</span> followers</a>
                </div>
            </div>

            <div className="flex gap-3 border-b">
                <div className='sm:hidden border-b flex-grow'></div>
                <div className={"flex items-center flex-shrink-0 py-3"}><span className='bg-gray-100'>Followers</span></div>
                <div className={"flex items-center flex-shrink-0 py-3"}><span className='bg-gray-100'>Followers</span></div>
                <div className={"flex items-center flex-shrink-0 py-3"}><span className='bg-gray-100'>Followers</span></div>
                <div className='border-b flex-grow'></div>
            </div>

            <div className='divide-y'>
                {posts!.map((post, index) => (
                    <SkeletonTinyPost post={post} key={index} />
                ))}
            </div>
        </div>
    )
}