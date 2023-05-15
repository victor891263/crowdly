import React, {useEffect, useState} from "react"
import MainWrapper from "../components/MainWrapper"
import setTimeLabel from "../utilities/setTimeLabel"
import FeedPost from "../components/FeedPost"
import getCurrentUser from "../utilities/getCurrentUser"
import {Link, useNavigate, useParams} from "react-router-dom"
import ExclaimIcon from "../icons/ExclaimIcon"
import Avatar from "../components/Avatar"
import axios from "axios";
import handleError from "../utilities/handleError";
import resizeInput from "../utilities/resizeInput";
import {PostDetailed} from "../types";
import EmptyFolderIcon from "../icons/EmptyFolderIcon";
import RetrievalWrapper from "../components/RetrievalWrapper";
import PopUp from "../components/PopUp";
import TextBox from "../components/TextBox";

type Response = {
    repliedPosts: PostDetailed[]
    liked: boolean
    disliked: boolean
} & PostDetailed

export default function Post() {
    const [post, setPost] = useState<Response | null>(null)

    const [isQuoteBoxOpen, setIsQuoteBoxOpen] = useState(false)
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false)

    const [retrievalError, setRetrievalError] = useState('')

    const [operationError, setOperationError] = useState('')

    const navigate = useNavigate()
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

    function handleLike(e: any) {
        if (post!.liked) {
            e.target.innerText = 'Unliking...'
            e.target.disabled = true
            axios.delete(`${process.env.REACT_APP_API_URL}/posts/${postId}/likes`)
                .then(() => {
                    setPost({ ...post, liked: false } as Response)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                    e.target.innerText = 'Liked'
                })
                .finally(() => {
                    e.target.disabled = true
                })
        } else {
            e.target.innerText = 'Liking...'
            e.target.disabled = true
            axios.post(`${process.env.REACT_APP_API_URL}/posts/${postId}/likes`)
                .then(() => {
                    setPost({ ...post, liked: true } as Response)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                    e.target.innerText = 'Like'
                })
                .finally(() => {
                    e.target.disabled = true
                })
        }
    }

    function handleDislike(e: any) {
        if (post!.disliked) {
            e.target.innerText = 'Un-disliking...'
            e.target.disabled = true
            axios.delete(`${process.env.REACT_APP_API_URL}/posts/${postId}/dislikes`)
                .then(() => {
                    setPost({ ...post, disliked: false } as Response)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                    e.target.innerText = 'Disliked'
                })
                .finally(() => {
                    e.target.disabled = true
                })
        } else {
            e.target.innerText = 'Disliking...'
            e.target.disabled = true
            axios.post(`${process.env.REACT_APP_API_URL}/posts/${postId}/dislikes`)
                .then(() => {
                    setPost({ ...post, disliked: true } as Response)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                    e.target.innerText = 'Dislike'
                })
                .finally(() => {
                    e.target.disabled = true
                })
        }
    }

    function submitQuotedPost(e: any, body: string) {
        e.target.innerText = 'Submitting...'
        axios.post(`${process.env.REACT_APP_API_URL}/posts`, { body, quotedId: post!.id })
            .then(response => {
                navigate(`/posts/${response.data.id}`)
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
            })
            .finally(() => {
                e.target.innerText = 'Submit'
            })
    }

    function submitEditedPost(e: any, body: string) {
        e.target.innerText = 'Submitting...'
        axios.put(`${process.env.REACT_APP_API_URL}/posts/${post!.id}`, { body })
            .then(response => {
                navigate(0)
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
            })
            .finally(() => {
                e.target.innerText = 'Submit'
            })
    }

    function deletePost(e: any) {
        e.target.innerText = 'Deleting...'
        axios.delete(`${process.env.REACT_APP_API_URL}/posts/${post!.id}`)
            .then(response => {
                navigate('/')
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
            })
            .finally(() => {
                e.target.innerText = 'Delete'
            })
    }

    return (
        <MainWrapper>
            {operationError && <PopUp msg={operationError} />}
            {isQuoteBoxOpen && <TextBox handleSubmit={submitQuotedPost} close={() => setIsQuoteBoxOpen(false)} />}
            {isEditBoxOpen && <TextBox handleSubmit={submitEditedPost} close={() => setIsQuoteBoxOpen(false)} content={post!.body} />}
            <RetrievalWrapper data={post} error={retrievalError} >
                {post && (
                    <div className='divide-y'>
                        <div className="py-7 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Avatar img={post.image} className={'w-10 h-10'} svgClassName={'w-8 h-8'} />
                                    <Link to='/' className="font-semibold">{post.username}</Link>
                                </div>
                                <span className="text-gray-400">{setTimeLabel(post.createdAt)}</span>
                            </div>
                            <p className='text-lg'>{post.body}</p>
                            <div className="flex items-center gap-4">
                                <span><span className='font-semibold'>{post.likes}</span> likes</span>
                                <span><span className='font-semibold'>{post.dislikes}</span> dislikes</span>
                            </div>
                        </div>
                        {post.quotedId && (
                            <div className='py-4'>
                                <button className='text-blue-600'>View quoted post</button>
                            </div>
                        )}
                        {(currentUser && currentUser.id === post.id) && (
                            <div className='flex justify-between gap-6 py-5'>
                                <button onClick={() => setIsEditBoxOpen(true)} className='text-blue-600 dark:text-blue-400'>Edit post</button>
                                <button onClick={deletePost} className='text-red-600 dark:text-red-400'>Delete post</button>
                            </div>
                        )}
                        {currentUser && (
                            <div className='flex justify-between gap-6 py-5'>
                                <button onClick={handleLike} className='text-blue-600'>{post.liked ? 'Liked' : 'Like'}</button>
                                <button onClick={handleDislike} className='text-blue-600'>{post.disliked ? 'Disliked' : 'Dislike'}</button>
                                <button onClick={() => setIsQuoteBoxOpen(true)} className='text-blue-600'>Quote</button>
                            </div>
                        )}
                        {currentUser && (
                            <div className="h-fit flex flex-col py-6">
                                <div className="w-full">
                                    <textarea onChange={resizeInput} style={{ resize: 'none', overflow: 'hidden' }} className="w-full py-2 px-3 h-24" placeholder="Add something to the conversation" />
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
                        {post.repliedPosts.length > 0 ? (
                            <div>
                                <h2 className='pt-8 pb-3'>{post.repliedPosts.length} replies</h2>
                                <div className='divide-y'>
                                    {post.repliedPosts.map((reply, index) => (
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