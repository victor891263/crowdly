import React, {useEffect, useState} from "react"
import MainWrapper from "../components/MainWrapper"
import setTimeLabel from "../utilities/setTimeLabel"
import FeedPost from "../components/FeedPost"
import getCurrentUser from "../utilities/getCurrentUser"
import {Link, useParams} from "react-router-dom"
import ExclaimIcon from "../icons/ExclaimIcon"
import Avatar from "../components/Avatar"
import axios from "axios";
import handleError from "../utilities/handleError";
import {PostDetailed} from "../types";
import EmptyFolderIcon from "../icons/EmptyFolderIcon";
import RetrievalWrapper from "../components/RetrievalWrapper";

type Response = {
    repliedPosts: PostDetailed[]
    liked: boolean
    disliked: boolean
} & PostDetailed

export default function Post() {
    const [post, setPost] = useState<Response | null>(null)
    const [retrievalError, setRetrievalError] = useState('')
    const { postId } = useParams()
    const currentUser = getCurrentUser()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/posts/${postId}`)
            .then(response => {
                setPost(response.data)
            })
            .catch(error => {
                handleError(error, (msg: string) => setRetrievalError(msg))
            })
    }, [])

    function resize(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const textarea = e.target
        textarea.style.height = ''
        textarea.style.height = `${textarea.scrollHeight}px`
    }

    return (
        <MainWrapper>
            <RetrievalWrapper data={post} error={retrievalError} >
                {post && (
                    <div className='divide-y'>
                        <div className="py-7 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Avatar img={post!.image} className={'w-10 h-10'} svgClassName={'w-8 h-8'} />
                                    <Link to='/' className="font-semibold">{post!.username}</Link>
                                </div>
                                <span className="text-gray-400">{setTimeLabel(post!.createdAt)}</span>
                            </div>
                            <p className='text-lg'>{post!.body}</p>
                            <div className="flex items-center gap-4">
                                <span><span className='font-semibold'>{post!.likes}</span> likes</span>
                                <span><span className='font-semibold'>{post!.dislikes}</span> dislikes</span>
                            </div>
                        </div>
                        {post!.quotedId && (
                            <div className='py-4'>
                                <button className='text-blue-600'>View quoted post</button>
                            </div>
                        )}
                        {currentUser && (
                            <div className='flex justify-between py-5'>
                                <div className='flex gap-6'>
                                    <button className='text-blue-600'>{post!.liked ? 'Liked' : 'Like'}</button>
                                    <button className='text-blue-600'>{post!.disliked ? 'Disliked' : 'Dislike'}</button>
                                    <button className='text-blue-600'>Quote</button>
                                </div>
                                <button className='text-blue-600'>Share</button>
                            </div>
                        )}
                        {currentUser && (
                            <div className="h-fit flex flex-col py-6">
                                <div className="w-full">
                                    <textarea onChange={resize} style={{ resize: 'none', overflow: 'hidden' }} className="w-full py-2 px-3 h-24" placeholder="Add something to the conversation" />
                                    <button className="btn-primary block mt-2 ml-auto text-sm py-2 px-3">Submit</button>
                                </div>
                            </div>
                        )}
                        {!currentUser && (
                            <div className='py-4 flex items-center gap-1.5 text-gray-400'>
                                <ExclaimIcon className={"w-5 h-5"} />
                                <span>You must be logged in to react or reply to this post</span>
                            </div>
                        )}
                        {post!.repliedPosts.length > 0 ? (
                            <div>
                                <h2 className='pt-8 pb-3'>{post!.repliedPosts.length} replies</h2>
                                <div className='divide-y'>
                                    {post!.repliedPosts.map((reply, index) => (
                                        <FeedPost post={reply} key={index} />
                                    ))}
                                    <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                                </div>
                            </div>
                        ):(
                            <div className='flex flex-col items-center py-10'>
                                <EmptyFolderIcon className={'h-10 w-10 text-gray-400'} />
                                <h2 className='mt-3 mb-1.5'>No replies found</h2>
                                <span>Have an opinion? Why not reply to this thread?</span>
                            </div>
                        )}
                    </div>
                )}
            </RetrievalWrapper>
        </MainWrapper>
    )
}