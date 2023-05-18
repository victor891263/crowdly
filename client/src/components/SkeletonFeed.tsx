import React from "react"
import getDummyPosts from "../utilities/getDummyPosts"
import SkeletonTinyPost from "./SkeletonTinyPost";

export default function SkeletonFeed() {
    const dummyPosts = getDummyPosts()

    return (
        <div className='divide-y !text-transparent'>
            {dummyPosts!.map((post, index) => (
                <SkeletonTinyPost post={post} key={index} />
            ))}
        </div>
    )
}