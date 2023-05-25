import React, {useEffect, useState} from 'react'
import MainWrapper from "../components/MainWrapper"
import FeedPost from '../components/FeedPost'
import GlassIcon from "../icons/GlassIcon"
import axios from "axios"
import getCurrentUser from "../utilities/getCurrentUser"
import {PostDetailed} from "../types"
import handleError from "../utilities/handleError";
import ExclaimIcon from "../icons/ExclaimIcon";
import getToken from "../utilities/getToken";
import RetrievalWrapper from "../components/RetrievalWrapper";
import TextBalloonIcon from "../icons/TextBalloonIcon";
import SkeletonFeed from "../components/SkeletonFeed";
import SearchBox from "../components/SearchBox";
import FeedAddPost from "../components/FeedAddPost";

export default function Feed({ isFeed }: { isFeed?: boolean }) {
    const [posts, setPosts] = useState<PostDetailed[] | null>(null)
    const [retrievalError, setRetrievalError] = useState('')
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const currentUser = getCurrentUser()

    useEffect(() => {
        // set the states back to their original states to trigger data retrieval from API when visiting 'feed' from 'trending' and vice versa
        setPosts(null)
        setRetrievalError('')

        if (isFeed && !currentUser) return // if the user visits the feed page without logging in, don't proceed

        axios.get(`${process.env.REACT_APP_API_URL}/posts/${isFeed ? 'feed' : 'trending'}`, {
            headers: {
                Authorization: getToken()
            }
        }).then(response => {
            setPosts(response.data)
        }).catch(error => {
            handleError(error, (msg: string) => setRetrievalError(msg))
        })
    }, [isFeed, currentUser]) // re-retrieve the data when visiting 'feed' from 'trending' and vice versa

    if (isFeed && !currentUser) return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <ExclaimIcon className={'h-8 w-8 text-gray-400'} triangle={true} />
            <h2 className='mt-4 mb-1'>Access denied</h2>
            <span>You must be logged in to view this page.</span>
        </div>
    )

    return (
        <MainWrapper>
            {isSearchOpen && <SearchBox close={() => setIsSearchOpen(false)} />}
            <div className='divide-y min-h-full flex flex-col'>
                <div className="pb-6 pt-0.5 flex items-center justify-between">
                    <h2>{isFeed ? "Your feed" : "Trending"}</h2>
                    <button onClick={() => setIsSearchOpen(true)}>
                        <GlassIcon className={"w-4 h-4"} />
                    </button>
                </div>
                {currentUser && (
                    <div className='lg:hidden py-5'>
                        <FeedAddPost />
                    </div>
                )}
                <RetrievalWrapper data={posts} error={retrievalError} skeleton={<SkeletonFeed />} >
                    {(posts && posts.length > 0) ? (
                        <>
                            {posts!.map((p, i) => (
                                <FeedPost post={p} key={i} />
                            ))}
                            <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                        </>
                    ):(
                        <div className='flex flex-col items-center justify-center py-10 grow'>
                            <TextBalloonIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                            <h2 className='mt-4 mb-1'>No posts found</h2>
                            <span>Start following users to view their posts here.</span>
                        </div>
                    )}
                </RetrievalWrapper>

            </div>
        </MainWrapper>
    )
}