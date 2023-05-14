import React, {useEffect, useState} from "react"
import MainWrapper from "../components/MainWrapper"
import FeedPost from "../components/FeedPost"
import {Link, useParams} from "react-router-dom"
import Avatar from "../components/Avatar"
import {PostDetailed, UserDetailed} from "../types"
import axios from "axios"
import handleError from "../utilities/handleError"
import DownloadFolderIcon from "../icons/DownloadFolderIcon";
import ExclaimIcon from "../icons/ExclaimIcon";
import RetrievalWrapper from "../components/RetrievalWrapper";

type SimpleProfile = {
    id: string
    username: string
    image?: string
}

export default function Profile({ showing }: { showing: 'posts' | 'follows' | 'followers' }) {
    const [profile, setProfile] = useState<UserDetailed | null>(null)

    const [posts, setPosts] = useState<PostDetailed[] | null>(null)
    const [follows, setFollows] = useState<SimpleProfile[] | null>(null)
    const [followers, setFollowers] = useState<SimpleProfile[] | null>(null)

    const [profileRetrievalError, setProfileRetrievalError] = useState('')
    const [postsRetrievalError, setPostsRetrievalError] = useState('')
    const [followsRetrievalError, setFollowsRetrievalError] = useState('')
    const [followersRetrievalError, setFollowersRetrievalError] = useState('')

    const { userId } = useParams()

    useEffect(() => {
        console.log('usf called')
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
            .then(response => {
                console.log(response)
                setProfile(response.data)
            })
            .catch(error => {
                handleError(error, (msg: string) => setProfileRetrievalError(msg))
            })
    }, [])

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

    return (
        <MainWrapper>
            <RetrievalWrapper data={profile} error={profileRetrievalError} >
                {profile && (
                    <div>
                        <div className="space-y-4 py-7">
                            <Avatar img={profile!.image} className={'w-32 h-32'} svgClassName={'w-28 h-28'} />
                            <div className="pt-3 space-y-2">
                                <h2>{profile!.username}</h2>
                                {profile!.name && (
                                    <span className="block text-gray-400">{profile!.name}</span>
                                )}
                            </div>
                            {profile!.about && (
                                <p>{profile!.about}</p>
                            )}
                            {profile!.link && (
                                <a href="/" className="block w-fit pb-1 text-blue-600" rel='noreferrer'>{profile!.link}</a>
                            )}
                            <div className="flex gap-4">
                                <a><span className='font-semibold'>{profile!.follows}</span> follows</a>
                                <a><span className='font-semibold'>{profile!.followers}</span> followers</a>
                            </div>
                        </div>

                        <div className="flex">
                            <div className='sm:hidden border-b flex-grow'></div>
                            <Link to={`/users/${userId}`} className={"flex items-center flex-shrink-0 px-5 py-2.5 font-semibold border-b" + (showing === 'posts' ? ' !text-blue-600 border-blue-600 dark:!text-blue-400' : '')}>Posts</Link>
                            <Link to={`/users/${userId}/follows`} className={"flex items-center flex-shrink-0 px-5 py-2.5 font-semibold border-b" + (showing === 'follows' ? ' !text-blue-600 border-blue-600 dark:!text-blue-400' : '')}>Follows</Link>
                            <Link to={`/users/${userId}/followers`} className={"flex items-center flex-shrink-0 px-5 py-2.5 font-semibold border-b" + (showing === 'followers' ? ' !text-blue-600 border-blue-600 dark:!text-blue-400' : '')}>Followers</Link>
                            <div className='border-b flex-grow'></div>
                        </div>

                        {(showing === 'posts') && (
                            <RetrievalWrapper data={posts} error={postsRetrievalError} >
                                {posts && (
                                    <div className='divide-y'>
                                        {posts!.map((post, index) => (
                                            <FeedPost post={post} key={index} />
                                        ))}
                                        <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                                    </div>
                                )}
                            </RetrievalWrapper>
                        )}

                        {(showing === 'follows') && (
                            <RetrievalWrapper data={follows} error={followsRetrievalError} >
                                {follows && (
                                    <div className='divide-y'>
                                        {follows!.map((profile, index) => (
                                            <div className="py-4 flex items-center gap-3" key={index}>
                                                <Avatar img={profile.image} className={'w-10 h-10'} svgClassName={'w-8 h-8'} />
                                                <a className="cursor-pointer font-semibold text-black dark:text-white" role="link">{profile.username}</a>
                                            </div>
                                        ))}
                                        <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                                    </div>
                                )}
                            </RetrievalWrapper>
                        )}

                        {(showing === 'followers') && (
                            <RetrievalWrapper data={followers} error={followersRetrievalError} >
                                {followers && (
                                    <div className='divide-y'>
                                        {followers!.map((profile, index) => (
                                            <div className="py-4 flex items-center gap-3" key={index}>
                                                <Avatar img={profile.image} className={'w-10 h-10'} svgClassName={'w-8 h-8'} />
                                                <a className="cursor-pointer font-semibold text-black dark:text-white" role="link">{profile.username}</a>
                                            </div>
                                        ))}
                                        <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
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