import {gql, useQuery} from "@apollo/client"
import {PostSmall} from "../types"
import GenericLoading from "./GenericLoading"
import GenericError from "./GenericError"
import FeedPost from "./FeedPost"
import TextBalloonIcon from "../icons/TextBalloonIcon"
import React from "react"
import {Link} from "react-router-dom"

export default function PostsForFeed({ sortBy }: { sortBy: 'Date' | 'Engagement' }) {
    const GET_FEED = gql`
            query GetFeed {
                feed {
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

    const { loading, error, data } = useQuery<{ feed: PostSmall[] }>(GET_FEED)

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

    const sortedPosts = data && sortPosts(data.feed)

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
                        <p className='mt-3'>Start following users to view their posts here.</p>
                        <Link to={`/search`} className='mt-7 primary' >Search</Link>
                    </div>
                </div>
            ))}
        </>
    )
}