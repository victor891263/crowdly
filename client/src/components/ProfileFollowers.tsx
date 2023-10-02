import {gql, useQuery} from "@apollo/client"
import {UserSmall} from "../types"
import GenericLoading from "./GenericLoading"
import GenericError from "./GenericError"
import AvatarIcon from "../icons/AvatarIcon"
import UserIcon from "../icons/UserIcon"
import React from "react"
import {Link} from "react-router-dom";

export default function ProfileFollowers({ id }: { id: string }) {
    const GET_FOLLOWERS = gql`
        query GetFollowers($followedId: ID!) {
            followers(followedId: $followedId) {
                id
                username
                image
            }
        }
    `
    const { loading, error, data } = useQuery<{ followers: UserSmall[] }>(GET_FOLLOWERS, {
        variables: { followedId: id }
    })

    return (
        <>
            {loading && <GenericLoading />}
            {error && <GenericError msg={error.message} />}
            {data && (
                data.followers.length > 0 ? (
                    <div className='divide-y'>
                        {data.followers.map(user => (
                            <Link to={`/users/${user.id}`} className='flex items-center space-x-2 py-6'>
                                {user.image ? (
                                    <img src={user.image} className='h-10 w-10 rounded-full' />
                                ):(
                                    <AvatarIcon className='h-10 w-10 text-slate-400/50' />
                                )}
                                <div className='text-sm font-semibold'>{user.username}</div>
                            </Link>
                        ))}
                    </div>
                ):(
                    <div className='flex flex-col items-center text-center py-16'>
                        <UserIcon slash={true} className={'h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600'} />
                        <div className='mt-5 subtitle'>No users found</div>
                        <p className='mt-3'>It looks like this user hasn't been followed by anyone yet.</p>
                    </div>
                )
            )}
        </>
    )
}