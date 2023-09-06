import {gql, useQuery} from "@apollo/client"
import {UserSmall} from "../types"
import GenericLoading from "./GenericLoading"
import GenericError from "./GenericError"
import React from "react"
import UserIcon from "../icons/UserIcon"
import AvatarIcon from "../icons/AvatarIcon"
import {Link} from "react-router-dom"

export default function SearchUsers({ keyword }: { keyword: string }) {
    const GET_USERS = gql`
        query GetUsers($username: String!) {
            users(username: $username) {
                id
                username
                image
            }
        }
    `
    const { loading, error, data } = useQuery<{ users: UserSmall[] }>(GET_USERS, {
        variables: { username: keyword }
    })

    return (
        <>
            {loading && (
                <GenericLoading />
            )}
            {error && (
                <GenericError msg={error.message} />
            )}
            {data && (data.users.length > 0 ? (
                <div className='divide-y'>
                    {data.users.map(user => (
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
                <div className='flex items-center justify-center h-full'>
                    <div className='text-center max-w-md py-20'>
                        <UserIcon slash={true} className='h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600' />
                        <div className='mt-5 subtitle'>No users found</div>
                        <p className='mt-3'>Check your keyword or change it to find different users.</p>
                    </div>
                </div>
            ))}
        </>
    )
}