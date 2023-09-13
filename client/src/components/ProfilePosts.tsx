import {gql, useQuery} from "@apollo/client"
import {Post} from "../types"
import FeedPost from "./FeedPost"
import TextBalloonIcon from "../icons/TextBalloonIcon"
import React from "react"
import GenericLoading from "./GenericLoading"
import GenericError from "./GenericError"

export default function ProfilePosts({ id }: { id: string }) {
    const GET_POSTS = gql`
        query GetPosts($id: ID!) {
            postsByUser(id: $id) {
                id
                createdAt
                updatedAt
                body
                userId
                repliedId
                quotedId
                points
                quotes
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
    const { loading, error, data } = useQuery<{ postsByUser: Post[] }>(GET_POSTS, {
        variables: { id }
    })

    return (
        <>
            {loading && <GenericLoading />}
            {error && <GenericError msg={error.message} />}
            {data && (
                data.postsByUser.length > 0 ? (
                    <div className='divide-y'>
                        {data.postsByUser.map((post, index) => (
                            <FeedPost post={post} showReplyLabel={true} key={index} />
                        ))}
                    </div>
                ):(
                    <div className='flex flex-col items-center text-center py-16'>
                        <TextBalloonIcon slash={true} className={'h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600'} />
                        <div className='mt-5 subtitle'>No posts found</div>
                        <p className='mt-3'>It looks like this user hasn't posted anything yet.</p>
                    </div>
                )
            )}
        </>
    )
}