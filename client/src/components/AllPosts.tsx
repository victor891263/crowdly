import { useQuery, gql } from '@apollo/client'
import {PostSmall} from "../types"
import GenericLoading from "./GenericLoading"
// @ts-ignore
import GenericError from "./GenericError"
import React from "react"
import FeedPost from "./FeedPost"
import TextBalloonIcon from "../icons/TextBalloonIcon"

export default function AllPosts({ sortBy }: { sortBy: 'Date' | 'Engagement' }) {
    const GET_ALL_POSTS = gql`
            query GetAllPosts {
                trending {
                    id
                    createdAt
                    updatedAt
                    body
                    userId
                    repliedId
                    quotedId
                    likes
                    dislikes
                    replies
                    User {
                        id
                        username
                        image
                    }
                }
            }
        `

    const { loading, error, data } = useQuery<{ trending: PostSmall[] }>(GET_ALL_POSTS)

    function sortPosts(posts: PostSmall[]) {
        const sortedPosts = [...posts]
        if (sortBy === 'Date') {
            sortedPosts.sort((a, b) => {
                if (a.createdAt < b.createdAt) return 1
                if (a.createdAt > b.createdAt) return -1
                return 0
            })
        }
        if (sortBy === 'Engagement') {
            sortedPosts.sort((a, b) => {
                if ((a.likes + a.dislikes) < (b.likes + b.dislikes)) return 1
                if ((a.likes + a.dislikes) > (b.likes + b.dislikes)) return -1
                return 0
            })
        }
        return sortedPosts
    }

    const sortedPosts = data && sortPosts(data.trending)

    return (
        <>
            {loading && (
                <GenericLoading />
            )}
            {error && (
                <GenericError msg={error.message} />
            )}
            {sortedPosts && (sortedPosts.length > 0 ? (
                <div className='divide-y'>
                    {sortedPosts.map((p, i) => (
                        <FeedPost post={p} key={i} />
                    ))}
                </div>
            ):(
                <div className='flex items-center justify-center h-full'>
                    <div className='text-center max-w-md'>
                        <TextBalloonIcon slash={true} className='h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600' />
                        <div className='mt-5 subtitle'>No posts found</div>
                        <p className='mt-3'>This isn't supposed to happen actually.</p>
                        <button className='mt-7 primary' >Search</button>
                    </div>
                </div>
            ))}
        </>
    )
}