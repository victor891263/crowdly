import React, {useState, useContext} from "react"
import {useNavigate, useParams} from "react-router-dom"
import {useQuery, gql, useMutation} from '@apollo/client'
import NotificationsContext from "../notificationsContext"
import {User} from "../types"
import getCurrentUser from "../utilities/getCurrentUser"
import EditProfile from "../components/EditProfile"
import UserWrapper from "../components/userWrapper"
import GenericError from "../components/GenericError"
import GenericLoading from "../components/GenericLoading"
import ProfilePosts from "../components/ProfilePosts"
import AvatarIcon from "../icons/AvatarIcon"
import ProfileFollowing from "../components/ProfileFollowing"
import ProfileFollowers from "../components/ProfileFollowers"
import UserIcon from "../icons/UserIcon"
import CalendarIcon from "../icons/CalendarIcon"

export default function Profile() {
    const [showing, setShowing] = useState<'posts' | 'follows' | 'followers'>('posts')

    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false)

    const { userId } = useParams()
    const currentUser = getCurrentUser()
    const navigate = useNavigate()
    const { setSuccessMsg } = useContext(NotificationsContext)

    const GET_USER = gql`
        query GetUser($id: ID!) {
            user(id: $id) {
                id
                createdAt
                updatedAt
                username
                image
                about
                follows
                followers
                followed
                followingMe
            }
        }
    `
    const FOLLOW = gql`
        mutation FollowUser($id: ID!) {
            followUser(id: $id)
        }
    `
    const UNFOLLOW = gql`
        mutation Unfollow($id: ID!) {
            unfollow(id: $id)
        }
    `
    const DELETE = gql`
        mutation Delete($id: ID!) {
            deleteUser(id: $id)
        }
    `
    const { loading, error, data } = useQuery<{ user: User }>(GET_USER, {
        variables: { id: userId }
    })
    const [follow, followOperation] = useMutation(FOLLOW)
    const [unfollow, unfollowOperation] = useMutation(UNFOLLOW)
    const [deleteUser, deleteOperation] = useMutation(DELETE)

    function handleDelete() {
        deleteUser({
            variables: { id: userId }
        }).then(() => {
            setSuccessMsg('Your account has been deleted successfully')
            setTimeout(() => setSuccessMsg(''), 5000)
            navigate('/')
        })
    }

    if (data && followOperation.data) {
        data.user.followed = true
        data.user.followers += 1
    }
    if (data && unfollowOperation.data) {
        data.user.followed = false
        data.user.followers -= 1
    }

    return (
        <UserWrapper>
            {(data && isEditBoxOpen) && <EditProfile user={data.user} close={() => setIsEditBoxOpen(false)} />}
            {loading && <GenericLoading />}
            {error && <GenericError msg={error.message} />}
            {data && (
                <div>
                    <div className="space-y-6 pb-7">
                        <div className='flex justify-between items-start'>
                            {data.user.image ? (
                                <img src={data.user.image} className='h-32 w-32 rounded-full' />
                            ):(
                                <AvatarIcon className='h-32 w-32 text-slate-400/50' />
                            )}
                            {currentUser && (
                                (data.user.id === String(currentUser.id)) ? (
                                    <div className='flex sm:space-x-2 max-sm:flex-col-reverse'>
                                        <button onClick={handleDelete} className='secondary text-red-600 max-sm:mt-3'>Delete account</button>
                                        <button onClick={() => setIsEditBoxOpen(true)} className='secondary'>Edit profile</button>
                                    </div>
                                ):(
                                    data.user.followed ? (
                                        <button onClick={() => unfollow({ variables: { id: data.user.id } })} className='primary'>Unfollow</button>
                                    ):(
                                        <button onClick={() => follow({ variables: { id: data.user.id } })} className='primary'>Follow</button>
                                    )
                                )
                            )}
                        </div>
                        <div className="space-y-0.5">
                            <div className='subtitle'>{data.user.name || data.user.username}</div>
                            <div className='font-medium text-slate-400'>@{data.user.username}</div>
                        </div>
                        <p>{data.user.about || 'This user has not added an introduction yet.'}</p>
                        {data.user.link && (
                            <a href={data.user.link} className="block w-fit pb-1 text-indigo-600" rel='noreferrer' target='_blank'>{data.user.link}</a>
                        )}

                        <div className='space-y-1.5 py-0.5 text-slate-400'>
                            <div className='flex items-center space-x-1.5'>
                                <CalendarIcon className={"w-[18px] h-[18px]"} />
                                <span>Joined on {new Date(data.user.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            </div>
                            {data.user.followingMe && (
                                <div className='flex items-center space-x-1.5'>
                                    <UserIcon outline={true} className={"w-[18px] h-[18px]"} />
                                    <span>Following you</span>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4">
                            <span><span className='font-semibold'>{data.user.follows}</span> follows</span>
                            <span><span className='font-semibold'>{data.user.followers}</span> followers</span>
                        </div>
                    </div>
                    <div className="flex font-medium pt-2">
                        <button onClick={() => setShowing('posts')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'posts' ? 'text-violet-600 border-violet-600' : '')}>Posts</button>
                        <button onClick={() => setShowing('follows')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'follows' ? 'text-violet-600 border-violet-600' : '')}>Follows</button>
                        <button onClick={() => setShowing('followers')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'followers' ? 'text-violet-600 border-violet-600' : '')}>Followers</button>
                        <div className='border-b flex-grow'></div>
                    </div>
                    {(showing === 'posts') && (
                        <ProfilePosts id={data.user.id} />
                    )}
                    {(showing === 'follows') && (
                        <ProfileFollowing id={data.user.id} />
                    )}
                    {(showing === 'followers') && (
                        <ProfileFollowers id={data.user.id} />
                    )}
                </div>
            )}
        </UserWrapper>
    )
}