import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {gql, useMutation, useLazyQuery} from '@apollo/client'
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
import PopUp from "../components/PopUp";
import ButtonWithSpinner from "../components/ButtonWithSpinner";
import LinkIcon from "../icons/LinkIcon";

export default function Profile() {
    const [profile, setProfile] = useState<User>()
    const [showing, setShowing] = useState<'posts' | 'follows' | 'followers'>('posts')

    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false)
    const [updateSuccessMsg, setUpdateSuccessMsg] = useState('')

    const { userId } = useParams()
    const currentUser = getCurrentUser()

    const GET_USER = gql`
        query GetUser($id: ID!) {
            user(id: $id) {
                id
                createdAt
                updatedAt
                email
                newEmail
                username
                name
                about
                link
                image
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
    const [getUser, { loading, error }] = useLazyQuery<{ user: User }>(GET_USER, {
        variables: { id: userId }
    })
    const [follow, followOperation] = useMutation(FOLLOW)
    const [unfollow, unfollowOperation] = useMutation(UNFOLLOW)

    useEffect(() => {
        getUser({
            variables: { id: userId }
        }).then(response => {
            setProfile(response.data!.user)
        })
    }, [userId])

    function handleFollow() {
        follow({
            variables: { id: profile!.id }
        }).then(response => {
            const newProfile = {...profile!}
            newProfile.followed = true
            newProfile.followers += 1
            setProfile(newProfile)
        })
    }

    function handleUnfollow() {
        unfollow({
            variables: { id: profile!.id }
        }).then(response => {
            const newProfile = {...profile!}
            newProfile.followed = false
            newProfile.followers -= 1
            setProfile(newProfile)
        })
    }

    return (
        <UserWrapper>
            <PopUp msg={updateSuccessMsg || ''} color={'green'} />
            <PopUp msg={followOperation.error ? followOperation.error.message : ''} color={'red'} />
            <PopUp msg={unfollowOperation.error ? unfollowOperation.error.message : ''} color={'red'} />
            {(profile && isEditBoxOpen) && <EditProfile user={profile} setUser={setProfile} onSuccess={setUpdateSuccessMsg} close={() => setIsEditBoxOpen(false)} />}
            {loading && <GenericLoading />}
            {error && <GenericError msg={error.message} />}
            {profile && (
                <div>
                    <div className="space-y-6 pb-7">
                        <div className='flex justify-between items-start'>
                            {profile.image ? (
                                <img src={profile.image} className='h-32 w-32 rounded-full' />
                            ):(
                                <AvatarIcon className='h-32 w-32 text-slate-400/50' />
                            )}
                            {currentUser && (
                                (profile.id === String(currentUser.id)) ? (
                                    <button onClick={() => setIsEditBoxOpen(true)} className='secondary'>Edit profile</button>
                                ):(
                                    profile.followed ? (
                                        <ButtonWithSpinner handleClick={handleUnfollow} label={'Unfollow'} isLoading={unfollowOperation.loading} type={'secondary'} />
                                    ):(
                                        <ButtonWithSpinner handleClick={handleFollow} label={'Follow'} isLoading={followOperation.loading} type={'primary'} />
                                    )
                                )
                            )}
                        </div>
                        <div>
                            <div className='subtitle'>{profile.name || profile.username}</div>
                            <div className='font-medium text-slate-400'>@{profile.username}</div>
                        </div>
                        <p className='whitespace-pre-wrap'>{profile.about || 'This user has not added an introduction yet.'}</p>
                        <div className='space-y-1.5 py-0.5 text-slate-400'>
                            <div className='flex items-center space-x-1.5'>
                                <CalendarIcon className={"small-height small-width"} />
                                <span>Joined on {new Date(profile.createdAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            </div>
                            {profile.link && (
                                <div className='flex items-center space-x-1.5'>
                                    <LinkIcon className={"small-height small-width"} />
                                    <a href={profile.link} rel='noreferrer' target='_blank'>{profile.link}</a>
                                </div>
                            )}
                            {profile.followingMe && (
                                <div className='flex items-center space-x-1.5'>
                                    <UserIcon outline={true} className={"small-height small-width"} />
                                    <span>Following you</span>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4">
                            <span><span className='font-semibold'>{profile.follows}</span> follows</span>
                            <span><span className='font-semibold'>{profile.followers}</span> followers</span>
                        </div>
                    </div>
                    <div className="flex font-medium pt-2">
                        <button onClick={() => setShowing('posts')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'posts' ? 'text-violet-600 border-violet-600' : '')}>Posts</button>
                        <button onClick={() => setShowing('follows')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'follows' ? 'text-violet-600 border-violet-600' : '')}>Follows</button>
                        <button onClick={() => setShowing('followers')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'followers' ? 'text-violet-600 border-violet-600' : '')}>Followers</button>
                        <div className='border-b flex-grow'></div>
                    </div>
                    {(showing === 'posts') && (
                        <ProfilePosts id={profile.id} />
                    )}
                    {(showing === 'follows') && (
                        <ProfileFollowing id={profile.id} />
                    )}
                    {(showing === 'followers') && (
                        <ProfileFollowers id={profile.id} />
                    )}
                </div>
            )}
        </UserWrapper>
    )
}