import React, {useEffect, useState} from "react"
import MainWrapper from "../components/MainWrapper"
import FeedPost from "../components/FeedPost"
import {Link, useNavigate, useParams} from "react-router-dom"
import Avatar from "../components/Avatar"
import {PostDetailed, UserDetailed, UserTiny} from "../types"
import axios from "axios"
import handleError from "../utilities/handleError"
import DownloadFolderIcon from "../icons/DownloadFolderIcon";
import ExclaimIcon from "../icons/ExclaimIcon";
import RetrievalWrapper from "../components/RetrievalWrapper";
import getCurrentUser from "../utilities/getCurrentUser";
import EmptyFolderIcon from "../icons/EmptyFolderIcon";
import TextBalloonIcon from "../icons/TextBalloonIcon";
import UserIcon from "../icons/UserIcon";
import EditProfile from "../components/editProfile";
import PopUp from "../components/PopUp";
import getToken from "../utilities/getToken";
import SkeletonProfile from "../components/SkeletonProfile";
import SkeletonFeed from "../components/SkeletonFeed";
import SkeletonTinyProfile from "../components/SkeletonTinyProfile";
import SkeletonProfiles from "../components/SkeletonProfiles";

export default function Profile({ showing }: { showing: 'posts' | 'follows' | 'followers' }) {
    const [profile, setProfile] = useState<UserDetailed | null>(null)

    const [posts, setPosts] = useState<PostDetailed[] | null>(null)
    const [follows, setFollows] = useState<UserTiny[] | null>(null)
    const [followers, setFollowers] = useState<UserTiny[] | null>(null)

    const [profileRetrievalError, setProfileRetrievalError] = useState('')
    const [postsRetrievalError, setPostsRetrievalError] = useState('')
    const [followsRetrievalError, setFollowsRetrievalError] = useState('')
    const [followersRetrievalError, setFollowersRetrievalError] = useState('')

    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false)
    const [operationError, setOperationError] = useState('')

    const { userId } = useParams()
    const navigate = useNavigate()
    const currentUser = getCurrentUser()


    useEffect(() => {
        // clear all data every time a re-retrieve happens
        setProfile(null)
        setPosts(null)
        setFollowers(null)
        setFollows(null)

        setProfileRetrievalError('')
        setPostsRetrievalError('')
        setFollowsRetrievalError('')
        setFollowersRetrievalError('')

        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, { headers: { Authorization: getToken() }})
            .then(response => {
                setProfile(response.data)
                retrievePosts() // for some reason, the useEffect below doesn't respond properly to changes in userId. So I put this function call here to retrieve posts when userId changes as posts are the first thing that can be seen when visiting a profile
            })
            .catch(error => {
                handleError(error, (msg: string) => setProfileRetrievalError(msg))
            })
    }, [userId]) // to re-retrieve data when userId changes


    useEffect(() => {
        if (showing === 'posts' && !posts && !postsRetrievalError) {
            axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/posts`)
                .then(response => {
                    setPosts(response.data)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setPostsRetrievalError(msg))
                })
        }
        if (showing === 'follows' && !follows && !followsRetrievalError) {
            axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/follows`)
                .then(response => {
                    setFollows(response.data)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setFollowsRetrievalError(msg))
                })
        }
        if (showing === 'followers' && !followers && !followersRetrievalError) {
            axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/followers`)
                .then(response => {
                    setFollowers(response.data)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setFollowersRetrievalError(msg))
                })
        }
    }, [showing])


    function retrievePosts() {
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}/posts`)
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => {
                handleError(error, (msg: string) => setPostsRetrievalError(msg))
            })
    }


    function submitNewProfile(e: any, userData: UserDetailed) {
        e.target.innerText = 'Submitting...'
        e.target.disabled = true
        axios.put(`${process.env.REACT_APP_API_URL}/users`, userData, { headers: { Authorization: getToken() }})
            .then(() => {
                navigate(0)
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
                e.target.innerText = 'Submit'
                e.target.disabled = false
            })
    }


    function handleFollowing(e: any) {
        e.target.disabled = true
        if (profile?.followed) {
            axios.delete(`${process.env.REACT_APP_API_URL}/users/${profile!.id}/followers`, { headers: { Authorization: getToken() }})
                .then(() => {
                    // @ts-ignore
                    setProfile({ ...profile, followed: false, followers: profile.followers - 1 })
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                })
                .finally(() => {
                    e.target.disabled = false
                })
        } else {
            axios.post(`${process.env.REACT_APP_API_URL}/users/${profile!.id}/followers`, null, { headers: { Authorization: getToken() }})
                .then(() => {
                    // @ts-ignore
                    setProfile({ ...profile, followed: true, followers: profile.followers + 1 })
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                })
                .finally(() => {
                    e.target.disabled = false
                })
        }
    }


    return (
        <MainWrapper>
            {(profile && isEditBoxOpen) && <EditProfile user={profile} handleSubmit={submitNewProfile} close={() => setIsEditBoxOpen(false)} />}
            {operationError && <PopUp msg={operationError} />}
            <RetrievalWrapper data={profile} error={profileRetrievalError} skeleton={<SkeletonProfile />} >
                {profile && (
                    <div className='flex flex-col min-h-full'>
                        <div className="space-y-5 pb-7">
                            <div className='flex justify-between items-start'>
                                <Avatar img={profile!.image} className={'w-32 h-32'} svgClassName={'w-28 h-28'} />
                                {currentUser && (
                                    (profile.id === currentUser.id) ? (
                                        <button onClick={() => setIsEditBoxOpen(true)} className='border rounded-lg px-3 py-2 text-sm'>Edit profile</button>
                                    ):(
                                        profile.followed ? (
                                            <button onClick={handleFollowing} className='btn-primary px-3 py-2 text-sm'>Unfollow</button>
                                        ):(
                                            <button onClick={handleFollowing} className='btn-primary px-3 py-2 text-sm'>Follow</button>
                                        )
                                    )
                                )}
                            </div>
                            <div className="space-y-2">
                                <h2>{profile!.username}</h2>
                                {profile!.name && (
                                    <span className="block text-gray-400">{profile!.name}</span>
                                )}
                            </div>
                            {profile!.about && (
                                <p className='leading-[1.6]'>{profile!.about}</p>
                            )}
                            {profile!.link && (
                                <a href={profile!.link} className="block w-fit pb-1 text-blue-600" rel='noreferrer' target='_blank'>{profile!.link}</a>
                            )}
                            <div className="flex gap-4">
                                <span><span className='font-semibold'>{profile!.follows}</span> follows</span>
                                <span><span className='font-semibold'>{profile!.followers}</span> followers</span>
                            </div>
                            {profile.followingMe && (
                                <div className='flex items-center gap-1.5 text-gray-400'>
                                    <ExclaimIcon className={"w-5 h-5"} />
                                    <span>This user is following you</span>
                                </div>
                            )}
                        </div>

                        <div className="flex">
                            <div className='sm:hidden border-b flex-grow'></div>
                            <Link to={`/users/${userId}`} className={"flex items-center flex-shrink-0 px-5 py-2.5 font-semibold border-b" + (showing === 'posts' ? ' !text-blue-600 border-blue-600 dark:!text-blue-400' : '')}>Posts</Link>
                            <Link to={`/users/${userId}/follows`} className={"flex items-center flex-shrink-0 px-5 py-2.5 font-semibold border-b" + (showing === 'follows' ? ' !text-blue-600 border-blue-600 dark:!text-blue-400' : '')}>Follows</Link>
                            <Link to={`/users/${userId}/followers`} className={"flex items-center flex-shrink-0 px-5 py-2.5 font-semibold border-b" + (showing === 'followers' ? ' !text-blue-600 border-blue-600 dark:!text-blue-400' : '')}>Followers</Link>
                            <div className='border-b flex-grow'></div>
                        </div>

                        {(showing === 'posts') && (
                            <RetrievalWrapper data={posts} error={postsRetrievalError} skeleton={<SkeletonFeed />} >
                                {(posts && posts.length > 0) ? (
                                    <div className='divide-y'>
                                        {posts!.map((post, index) => (
                                            <FeedPost post={post} key={index} />
                                        ))}
                                        <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                                    </div>
                                ):(
                                    <div className='flex flex-col items-center justify-center py-10 grow'>
                                        <TextBalloonIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                                        <h2 className='mt-4 mb-1'>No posts found</h2>
                                        <span>It looks like this user hasn't posted anything yet.</span>
                                    </div>
                                )}
                            </RetrievalWrapper>
                        )}

                        {(showing === 'follows') && (
                            <RetrievalWrapper data={follows} error={followsRetrievalError} skeleton={<SkeletonProfiles />} >
                                {(follows && follows.length > 0) ? (
                                    <div className='divide-y'>
                                        {follows!.map((profile, index) => (
                                            <div className="py-4 flex items-center gap-3" key={index}>
                                                <Avatar img={profile.image} className={'w-10 h-10'} svgClassName={'w-8 h-8'} />
                                                <Link to={`/users/${profile.id}`} className="cursor-pointer font-semibold text-black dark:text-white">{profile.username}</Link>
                                            </div>
                                        ))}
                                        <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                                    </div>
                                ):(
                                    <div className='flex flex-col items-center justify-center py-10 grow'>
                                        <UserIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                                        <h2 className='mt-4 mb-1'>No followees found</h2>
                                        <span>It looks like this user hasn't followed anyone yet.</span>
                                    </div>
                                )}
                            </RetrievalWrapper>
                        )}

                        {(showing === 'followers') && (
                            <RetrievalWrapper data={followers} error={followersRetrievalError} skeleton={<SkeletonProfiles />} >
                                {(followers && followers.length > 0) ? (
                                    <div className='divide-y'>
                                        {followers!.map((profile, index) => (
                                            <div className="py-4 flex items-center gap-3" key={index}>
                                                <Avatar img={profile.image} className={'w-10 h-10'} svgClassName={'w-8 h-8'} />
                                                <Link to={`/users/${profile.id}`} className="cursor-pointer font-semibold text-black dark:text-white">{profile.username}</Link>
                                            </div>
                                        ))}
                                        <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                                    </div>
                                ):(
                                    <div className='flex flex-col items-center justify-center py-10 grow'>
                                        <UserIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                                        <h2 className='mt-4 mb-1'>No followers found</h2>
                                        <span>It looks like this user hasn't been followed by anyone yet.</span>
                                    </div>
                                )}
                            </RetrievalWrapper>
                        )}
                    </div>
                )}
            </RetrievalWrapper>
        </MainWrapper>
    )
}