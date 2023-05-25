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
import getToken from "../utilities/getToken";
import TextBalloonIcon from "../icons/TextBalloonIcon";
import SkeletonPost from "../components/SkeletonPost";

type Response = {
    repliedPosts: PostDetailed[]
    liked: boolean
    disliked: boolean
} & PostDetailed

export default function Post() {
    const [post, setPost] = useState<Response | null>(null)
    const [reply, setReply] = useState('')

    const [isQuoteBoxOpen, setIsQuoteBoxOpen] = useState(false)
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false)

    const [retrievalError, setRetrievalError] = useState('')
    const [operationError, setOperationError] = useState('')

    const navigate = useNavigate()
    const { postId } = useParams()
    const currentUser = getCurrentUser()

    useEffect(() => {
        // set the states to empty if new post has to be retrieved
        setPost(null)
        setRetrievalError('')
        setIsQuoteBoxOpen(false)

        axios.get(`${process.env.REACT_APP_API_URL}/posts/${postId}`, { headers: { Authorization: getToken() }})
            .then(response => {
                setPost(response.data)
            })
            .catch(error => {
                handleError(error, (msg: string) => setRetrievalError(msg))
            })
    }, [postId]) // if postId is not given here, the component doesn't refresh if postId changes

    function handleLike(e: any) {
        if (post!.liked) {
            e.target.disabled = true
            axios.delete(`${process.env.REACT_APP_API_URL}/posts/${postId}/likes`, { headers: { Authorization: getToken() }})
                .then(() => {
                    setPost({ ...post, liked: false, likes: post!.likes - 1 } as Response)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                })
                .finally(() => {
                    e.target.disabled = false
                })
        } else {
            e.target.disabled = true
            axios.post(`${process.env.REACT_APP_API_URL}/posts/${postId}/likes`, null, { headers: { Authorization: getToken() }})
                .then(() => {
                    setPost({ ...post, liked: true, likes: post!.likes + 1 } as Response)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                })
                .finally(() => {
                    e.target.disabled = false
                })
        }
    }

    function handleDislike(e: any) {
        if (post!.disliked) {
            e.target.disabled = true
            axios.delete(`${process.env.REACT_APP_API_URL}/posts/${postId}/dislikes`, { headers: { Authorization: getToken() }})
                .then(() => {
                    setPost({ ...post, disliked: false, dislikes: post!.dislikes - 1 } as Response)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                })
                .finally(() => {
                    e.target.disabled = false
                })
        } else {
            e.target.disabled = true
            axios.post(`${process.env.REACT_APP_API_URL}/posts/${postId}/dislikes`, null, { headers: { Authorization: getToken() }})
                .then(() => {
                    setPost({ ...post, disliked: true, dislikes: post!.dislikes + 1 } as Response)
                })
                .catch(error => {
                    handleError(error, (msg: string) => setOperationError(msg), true)
                })
                .finally(() => {
                    e.target.disabled = false
                })
        }
    }

    function submitQuotedPost(e: any, body: string) {
        e.target.innerText = 'Submitting...'
        e.target.disabled = true
        axios.post(`${process.env.REACT_APP_API_URL}/posts`, { body, quotedId: post!.id }, { headers: { Authorization: getToken() }})
            .then(response => {
                navigate(`/posts/${response.data.id}`)
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
                e.target.innerText = 'Submit'
                e.target.disabled = false
            })
    }

    function submitEditedPost(e: any, body: string) {
        e.target.innerText = 'Submitting...'
        e.target.disabled = true
        axios.put(`${process.env.REACT_APP_API_URL}/posts/${post!.id}`, { body }, { headers: { Authorization: getToken() }})
            .then(response => {
                navigate(0)
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
                e.target.innerText = 'Submit'
                e.target.disabled = false
            })
    }

    function deletePost(e: any) {
        e.target.innerText = 'Deleting post...'
        e.target.disabled = true
        axios.delete(`${process.env.REACT_APP_API_URL}/posts/${post!.id}?repliedId=${post?.repliedId}`, { headers: { Authorization: getToken() }})
            .then(response => {
                navigate('/')
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
                e.target.innerText = 'Delete post'
                e.target.disabled = false
            })
    }


    function submitReply(e: any) {
        e.target.innerText = 'Submitting...'
        e.target.disabled = true
        axios.post(`${process.env.REACT_APP_API_URL}/posts`, { body: reply, repliedId: post?.id, targetUserId: post?.User.id }, { headers: { Authorization: getToken() }})
            .then(response => {
                navigate(0)
            })
            .catch(error => {
                handleError(error, (msg: string) => setOperationError(msg), true)
                e.target.innerText = 'Submit'
                e.target.disabled = false
            })
    }


    return (
        <MainWrapper>
            {operationError && <PopUp msg={operationError} />}
            {isQuoteBoxOpen && <TextBox handleSubmit={submitQuotedPost} close={() => setIsQuoteBoxOpen(false)} />}
            {isEditBoxOpen && <TextBox handleSubmit={submitEditedPost} close={() => setIsEditBoxOpen(false)} content={post!.body} deletePost={deletePost} />}
            <RetrievalWrapper data={post} error={retrievalError} skeleton={<SkeletonPost />} >
                {post && (
                    <div className='divide-y'>
                        <div className="pb-7 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <Avatar img={post.User.image} className={'w-9 h-9'} svgClassName={'w-7 h-7'} />
                                    <Link to={`/users/${post.User.id}`} className="font-semibold">{post.User.username}</Link>
                                </div>
                                <span className="text-gray-400">{setTimeLabel(post.createdAt)}</span>
                            </div>
                            <p className='text-lg'>{post.body}</p>
                            <div className="flex items-center gap-4">
                                <span><span className='font-semibold'>{post.likes}</span> likes</span>
                                <span><span className='font-semibold'>{post.dislikes}</span> dislikes</span>
                            </div>
                        </div>
                        {post.repliedId && (
                            <div className='py-4'>
                                <Link to={`/posts/${post.repliedId}`} className='text-indigo-600'>View original post</Link>
                            </div>
                        )}
                        {post.quotedId && (
                            <div className='py-4'>
                                <Link to={`/posts/${post.quotedId}`} className='text-indigo-600'>View quoted post</Link>
                            </div>
                        )}

                        {currentUser && (
                            <div className='flex justify-between py-4'>
                                <div className='flex gap-5'>
                                    {(currentUser && (currentUser.id !== post.userId)) && (
                                        <>
                                            <button disabled={post.disliked} onClick={handleLike} className='text-indigo-600'>{post.liked ? 'Liked' : 'Like'}</button>
                                            <button disabled={post.liked} onClick={handleDislike} className='text-indigo-600'>{post.disliked ? 'Disliked' : 'Dislike'}</button>
                                        </>
                                    )}
                                    <button onClick={() => setIsQuoteBoxOpen(true)} className='text-indigo-600'>Quote</button>
                                </div>
                                {(currentUser && (currentUser.id === post.userId)) && (
                                    <div className='flex gap-5'>
                                        <button onClick={() => setIsEditBoxOpen(true)} className='text-indigo-600 '>Edit post</button>
                                    </div>
                                )}
                            </div>
                        )}
                        {currentUser && (
                            <div className="h-fit flex flex-col py-6">
                                <div className="w-full">
                                    <textarea onChange={e => {
                                        resizeInput(e)
                                        setReply(e.target.value)
                                    }} value={reply} style={{ resize: 'none', overflow: 'hidden' }} className="w-full py-2.5 px-3.5 h-24" placeholder="Add something to the conversation" />
                                    <button onClick={submitReply} className="btn-primary block mt-2 ml-auto text-sm py-2 px-3">Submit</button>
                                </div>
                            </div>
                        )}
                        {!currentUser && (
                            <div className='py-4 flex items-center gap-1.5 text-gray-400'>
                                <ExclaimIcon className={"w-5 h-5"} />
                                <span>You must be logged in to participate</span>
                            </div>
                        )}
                        {post.repliedPosts.length > 0 ? (
                            <div>
                                <h2 className='pt-6 pb-3'>{post.repliedPosts.length} {post.repliedPosts.length > 1 ? 'replies' : 'reply'}</h2>
                                <div className='divide-y'>
                                    {post.repliedPosts.map((reply, index) => (
                                        <FeedPost post={reply} key={index} />
                                    ))}
                                    <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                                </div>
                            </div>
                        ):(
                            <div className='flex flex-col items-center text-center py-10'>
                                <TextBalloonIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                                <h2 className='mt-4 mb-1.5'>No replies found</h2>
                                <span>Have an opinion? Why not reply to this thread?</span>
                            </div>
                        )}
                    </div>
                )}
            </RetrievalWrapper>
        </MainWrapper>
    )
}