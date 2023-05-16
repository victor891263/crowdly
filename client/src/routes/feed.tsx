import React, {useEffect, useState} from 'react'
import MainWrapper from "../components/MainWrapper"
import FeedPost from '../components/FeedPost'
import GlassIcon from "../icons/GlassIcon"
import getDummyPosts from "../utilities/getDummyPosts"
import axios from "axios"
import getCurrentUser from "../utilities/getCurrentUser"
import {Post, PostDetailed} from "../types"
import handleError from "../utilities/handleError";
import ExclaimIcon from "../icons/ExclaimIcon";
import DownloadFolderIcon from "../icons/DownloadFolderIcon";
import EmptyFolderIcon from "../icons/EmptyFolderIcon";
import getToken from "../utilities/getToken";
import RetrievalWrapper from "../components/RetrievalWrapper";
import TextBalloonIcon from "../icons/TextBalloonIcon";

export default function Feed({ isFeed }: { isFeed?: boolean }) {
    const [posts, setPosts] = useState<PostDetailed[] | null>(null)
    const [retrievalError, setRetrievalError] = useState('')
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
    }, [isFeed]) // re-retrieve the data when visiting 'feed' from 'trending' and vice versa

    if (isFeed && !currentUser) return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <ExclaimIcon className={'h-10 w-10 text-gray-400'} triangle={true} />
            <h2 className='mt-3 mb-1.5'>Access denied</h2>
            <span>You must be logged in to view this page.</span>
        </div>
    )

    return (
        <MainWrapper>
            <div className='divide-y min-h-full flex flex-col'>
                <div className="pb-6 flex items-center justify-between">
                    <h2>{isFeed ? "Your feed" : "Trending"}</h2>
                    <button>
                        <GlassIcon className={"w-4 h-4"} />
                    </button>
                </div>
                <RetrievalWrapper data={posts} error={retrievalError} >
                    {(posts && posts.length > 0) ? (
                        <>
                            {posts!.map((p, i) => (
                                <FeedPost post={p} key={i} />
                            ))}
                            <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                        </>
                    ):(
                        <div className='flex flex-col items-center justify-center py-10 grow'>
                            <TextBalloonIcon slash={true} className={'h-10 w-10 text-gray-400'} />
                            <h2 className='mt-4 mb-1.5'>No posts found</h2>
                            <span>Start following users to view their posts here.</span>
                        </div>
                    )}
                </RetrievalWrapper>

            </div>
        </MainWrapper>
    )
}