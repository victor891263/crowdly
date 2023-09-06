import {gql, useQuery} from "@apollo/client"
import {PostSmall} from "../types"
import FeedPost from "./FeedPost"
import GenericLoading from "./GenericLoading"
import GenericError from "./GenericError"
import React from "react"
import TextBalloonIcon from "../icons/TextBalloonIcon"

export default function SearchPosts({ keyword }: { keyword: string }) {
    const GET_POSTS = gql`
        query GetPosts($body: String!) {
            posts(body: $body) {
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
    const { loading, error, data } = useQuery<{ posts: PostSmall[] }>(GET_POSTS, {
        variables: { body: keyword }
    })

    return (
        <>
            {loading && (
                <GenericLoading />
            )}
            {error && (
                <GenericError msg={error.message} />
            )}
            {data && (data.posts.length > 0 ? (
                <div className='divide-y'>
                    {data.posts.map(post => (
                        <FeedPost post={post} />
                    ))}
                </div>
            ):(
                <div className='flex items-center justify-center h-full'>
                    <div className='text-center max-w-md py-20'>
                        <TextBalloonIcon slash={true} className='h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600' />
                        <div className='mt-5 subtitle'>No posts found</div>
                        <p className='mt-3'>Check your keyword or change it to find different posts.</p>
                    </div>
                </div>
            ))}
        </>
    )
}