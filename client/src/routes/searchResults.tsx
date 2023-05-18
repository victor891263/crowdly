import React, {useEffect, useState} from "react"
import {Link, useSearchParams} from "react-router-dom"
import axios from "axios"
import {PostDetailed, User} from "../types"
import handleError from "../utilities/handleError"
import MainWrapper from "../components/MainWrapper";
import GlassIcon from "../icons/GlassIcon";
import SkeletonFeed from "../components/SkeletonFeed";
import FeedPost from "../components/FeedPost";
import TextBalloonIcon from "../icons/TextBalloonIcon";
import RetrievalWrapper from "../components/RetrievalWrapper";
import SkeletonTinyProfile from "../components/SkeletonTinyProfile";
import Avatar from "../components/Avatar";
import UserIcon from "../icons/UserIcon";

export default function SearchResults() {
    const [posts, setPosts] = useState<PostDetailed[] | null>(null)
    const [profiles, setProfiles] = useState<User[] | null>(null)

    const [postsError, setPostsError] = useState('')
    const [profilesError, setProfilesError] = useState('')

    const [searchParams] = useSearchParams()
    const postKeyword = searchParams.get('post')
    const usernameKeyword = searchParams.get('username')

    useEffect(() => {
        if (postKeyword && !usernameKeyword) {
            axios.get(`${process.env.REACT_APP_API_URL}/search?post=${postKeyword}`)
                .then(response => {
                    setPosts(response.data)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setPostsError(msg))
                })
        }

        if (usernameKeyword && !postKeyword) {
            axios.get(`${process.env.REACT_APP_API_URL}/search?username=${usernameKeyword}`)
                .then(response => {
                    setProfiles(response.data)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setProfilesError(msg))
                })
        }
    }, [])

    return (
        <MainWrapper>
            <div className='min-h-full flex flex-col'>
                <div className="pb-6 pt-0.5 flex items-center justify-between border-b">
                    <h2>Search</h2>
                    <button>
                        <GlassIcon className={"w-4 h-4"} />
                    </button>
                </div>
                {(postKeyword && !usernameKeyword) && (
                    <RetrievalWrapper data={posts} error={postsError} skeleton={<SkeletonFeed />} >
                        {(posts && posts.length > 0) ? (
                            <>
                                <span className='pt-4 text-sm text-gray-400'>{posts.length} result{posts.length > 1 ? 's' : ''} returned for '{postKeyword}'</span>
                                <div className='divide-y'>
                                    {posts!.map((p, i) => (
                                        <FeedPost post={p} key={i} />
                                    ))}
                                </div>
                                <span className='block border-t pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                            </>
                        ):(
                            <div className='flex flex-col items-center justify-center py-10 grow'>
                                <TextBalloonIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                                <h2 className='mt-4 mb-1'>No posts found</h2>
                                <span>The post you're trying to find doesn't exist.</span>
                            </div>
                        )}
                    </RetrievalWrapper>
                )}
                {(usernameKeyword && !postKeyword) && (
                    <RetrievalWrapper data={profiles} error={profilesError} skeleton={<SkeletonTinyProfile />} >
                        {(profiles && profiles.length > 0) ? (
                            <>
                                <span className='pt-4 text-sm text-gray-400'>{profiles.length} result{profiles.length > 1 ? 's' : ''} returned for '{postKeyword}'</span>
                                <div className='divide-y'>
                                    {profiles!.map((profile, index) => (
                                        <div className="py-4 flex items-center gap-3" key={index}>
                                            <Avatar img={profile.image} className={'w-10 h-10'} svgClassName={'w-8 h-8'} />
                                            <Link to={`/users/${profile.id}`} className="cursor-pointer font-semibold text-black dark:text-white">{profile.username}</Link>
                                        </div>
                                    ))}
                                </div>
                                <span className='block border-t pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                            </>
                        ):(
                            <div className='flex flex-col items-center justify-center py-10 grow'>
                                <UserIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                                <h2 className='mt-4 mb-1'>No profiles found</h2>
                                <span>The user you're trying to find doesn't exist.</span>
                            </div>
                        )}
                    </RetrievalWrapper>
                )}
            </div>
        </MainWrapper>
    )
}