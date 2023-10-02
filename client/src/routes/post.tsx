import React, {useContext, useEffect, useState} from "react"
import {useQuery, gql, useMutation, useLazyQuery} from '@apollo/client'
import setTimeLabel from "../utilities/setTimeLabel"
import FeedPost from "../components/FeedPost"
import getCurrentUser from "../utilities/getCurrentUser"
import {Link, useNavigate, useParams} from "react-router-dom"
import {Post as PostType} from "../types"
import PopUp from "../components/PopUp"
import PostForm from "../components/PostForm"
import TextBalloonIcon from "../icons/TextBalloonIcon"
import GenericError from "../components/GenericError"
import GenericLoading from "../components/GenericLoading"
import UserWrapper from "../components/userWrapper"
import AvatarIcon from "../icons/AvatarIcon"
import LikeButton from "../components/LikeButton"
import DislikeButton from "../components/DislikeButton"
import handleTextareaResize from "../utilities/handleTextareaResize"
import ButtonWithSpinner from "../components/ButtonWithSpinner"
import ArrowIcon from "../icons/ArrowIcon"
import UserIcon from "../icons/UserIcon"
import NotificationsContext from "../notificationsContext";
import BoxFullScreen from "../components/BoxFullScreen";

export default function Post() {
    const [post, setPost] = useState<PostType>()
    const [reply, setReply] = useState('')

    const [isQuoteBoxOpen, setIsQuoteBoxOpen] = useState(false)
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false)

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

    const { postId } = useParams()
    const navigate = useNavigate()
    const currentUser = getCurrentUser()
    const { setSuccessMsg } = useContext(NotificationsContext)

    const GET_POST = gql`
        query GetPost($id: ID!) {
            post(id: $id) {
                id
                createdAt
                updatedAt
                body
                userId
                repliedId
                quotedId
                points
                quotes
                likes
                liked
                dislikes
                disliked
                replies
                repliedPosts {
                    id
                    createdAt
                    updatedAt
                    body
                    userId
                    repliedId
                    quotedId
                    likes
                    dislikes
                    points
                    quotes
                    replies
                    User {
                        id
                        username
                        image
                    }
                }
                User {
                    id
                    username
                    image
                }
            }
        }
    `
    const REPLY_TO_POST = gql`
        mutation ReplyToPost($input: AddPostInput!) {
            addPost(input: $input)
        }
    `
    const DELETE_POST = gql`
        mutation DeletePost($id: ID!, $repliedId: ID) {
            deletePost(id: $id, repliedId: $repliedId)
        }
    `
    const [getPost, { loading, error }] = useLazyQuery<{ post: PostType }>(GET_POST)
    const [replyToPost, replyOperation] = useMutation<{ addPost: string }>(REPLY_TO_POST)
    const [deletePost, deleteOperation] = useMutation(DELETE_POST)

    useEffect(() => {
        // without these, the edit and quote boxes remain open after quoting a post or editing a post
        setIsEditBoxOpen(false)
        setIsQuoteBoxOpen(false)
        // without this, previous post doesn't disappear
        setPost(undefined)
        // retrieve data
        getPost({
            variables: { id: postId }
        }).then(response => {
            setPost(response.data!.post)
        })
    }, [postId])

    function handleReaction(isNew: boolean, type: 'like' | 'dislike') {
        const newPost = {...post!}
        if (isNew) {
            if (type === 'like') newPost.points += 1
            if (type === 'dislike') newPost.points -= 1
            newPost[`${type}d`] = true
            newPost[`${type}s`] += 1
        } else {
            if (type === 'like') newPost.points -= 1
            if (type === 'dislike') newPost.points += 1
            newPost[`${type}d`] = false
            newPost[`${type}s`] -= 1
        }
        setPost(newPost)
    }

    function handleReply() {
        replyToPost({
            variables: {
                input: { body: reply, repliedId: post!.id, targetUserId: post!.User.id }
            }
        }).then(response => {
            setReply('')
            navigate(`/posts/${response.data?.addPost}`)
        })
    }

    function handleDelete() {
        deletePost({
            variables: {
                id: post!.id,
                repliedId: post!.repliedId
            }
        }).then(response => {
            setSuccessMsg('Your post has been deleted successfully')
            setTimeout(() => setSuccessMsg(''), 5000)
            navigate('/')
        })
    }

    return (
        <>
            <PopUp msg={replyOperation.error ? replyOperation.error.message : ''} color={'red'} />
            <PopUp msg={deleteOperation.error ? deleteOperation.error.message : ''} color={'red'} />
            {(post && isQuoteBoxOpen) && <PostForm type={'quote'} close={() => setIsQuoteBoxOpen(false)} id={post.id} userId={post.User.id} />}
            {(post && isEditBoxOpen) && <PostForm type={'edit'} close={() => setIsEditBoxOpen(false)} id={post.id} content={post.body} />}
            {isConfirmationOpen && (
                <BoxFullScreen close={() => setIsConfirmationOpen(false)} >
                    <div className='max-w-sm w-full m-auto py-24'>
                        <h2 className='subtitle mb-3.5'>Are you sure?</h2>
                        <p className='mb-6'>Deleting your post will delete all the replies made to it. This action is not reversible.</p>
                        <ButtonWithSpinner handleClick={handleDelete} label={'Delete post'} isLoading={deleteOperation.loading} type={'secondary'} className={'text-red-600'} />
                    </div>
                </BoxFullScreen>
            )}
            <UserWrapper>
                {loading && <GenericLoading />}
                {error && <GenericError msg={error.message} />}
                {post && (
                    <div className='divide-y'>
                        <div className="pb-9 space-y-6">
                            <div className="flex items-center justify-between">
                                {post.User ? (
                                    <Link to={`/users/${post.User.id}`} className='flex items-center space-x-2.5'>
                                        {post.User.image ? (
                                            <img src={post.User.image} className='h-12 w-12 rounded-full' />
                                        ):(
                                            <AvatarIcon className='h-12 w-12 text-slate-400/50' />
                                        )}
                                        <div className='font-semibold'>{post.User.username}</div>
                                    </Link>
                                ):(
                                    <div className='flex items-center space-x-2'>
                                        <AvatarIcon className='h-10 w-10 text-slate-400/50' />
                                        <div className='font-semibold'>[anonymous]</div>
                                    </div>
                                )}
                                <span className="text-slate-400">{setTimeLabel(post.createdAt)}</span>
                            </div>
                            <p className='text-lg leading-[1.55] whitespace-pre-wrap'>{post.body}</p>
                            <div className="flex items-center gap-4">
                                <span><span className='font-semibold'>{post.points}</span> points <sup>(+{post.likes}/-{post.dislikes})</sup></span>
                                <span><span className='font-semibold'>{post.quotes}</span> quotes</span>
                            </div>
                            {post.repliedId && (
                                <div className='flex items-center space-x-1 text-violet-600'>
                                    <div><ArrowIcon className='h-5 w-5 rotate-[225deg]' /></div>
                                    <Link to={`/posts/${post.repliedId}`} className=''>view what this post is replying to</Link>
                                </div>
                            )}
                            {post.quotedId && (
                                <div className='flex items-center space-x-1 text-violet-600'>
                                    <div><ArrowIcon className='h-5 w-5 rotate-[225deg]' /></div>
                                    <Link to={`/posts/${post.quotedId}`} className=''>view what this post is quoting</Link>
                                </div>
                            )}
                        </div>
                        {currentUser && (
                            <div className='flex space-x-2.5 py-9'>
                                {(currentUser && (currentUser.id !== post.userId)) && (
                                    <div className='flex'>
                                        <LikeButton postId={post.id} liked={post.liked} disliked={post.disliked} onSuccess={handleReaction} />
                                        <DislikeButton postId={post.id} liked={post.liked} disliked={post.disliked} onSuccess={handleReaction} />
                                    </div>
                                )}
                                <button onClick={() => setIsQuoteBoxOpen(true)} className='secondary'>Quote</button>
                                {(currentUser && (currentUser.id === post.userId)) && (
                                    <>
                                        <button onClick={() => setIsEditBoxOpen(true)} className='secondary'>Edit post</button>
                                        <button onClick={() => setIsConfirmationOpen(true)} className='secondary text-red-600'>Delete post</button>
                                    </>
                                )}
                            </div>
                        )}
                        <div className='pt-8'>
                            <h2 className='subtitle'>{post.repliedPosts.length} {post.repliedPosts.length > 1 ? 'replies' : 'reply'}</h2>
                            {currentUser ? (
                                <div className='mt-8 relative'>
                                    <textarea onChange={e => {
                                        handleTextareaResize(e)
                                        setReply(e.target.value)
                                    }} className='w-full h-32 !rounded-lg !py-2.5 !px-3.5 !pb-16' placeholder='What are your thoughts?' value={reply} />
                                    <div className='absolute bottom-3 right-3'>
                                        <ButtonWithSpinner handleClick={handleReply} label={'Post'} isLoading={replyOperation.loading} type={'primary'} />
                                    </div>
                                    <div className='absolute bottom-2.5 left-3.5 text-sm text-slate-400'>{reply.length}/500</div>
                                </div>
                            ):(
                                <div className='mt-8'>
                                    <div className='flex space-x-2 bg-slate-100 py-3 px-4 rounded-md text-slate-400'>
                                        <div className='pt-0.5'><UserIcon outline={true} className={"small-height small-width"} /></div>
                                        <span className="semismall-text font-medium">You must be logged in to react or reply</span>
                                    </div>
                                </div>
                            )}
                            {post.repliedPosts.length > 0 ? (
                                <div className='mt-1 divide-y'>
                                    {post.repliedPosts.map((reply, index) => (
                                        <FeedPost post={reply} key={index} />
                                    ))}
                                </div>
                            ):(
                                <div className='flex flex-col items-center text-center py-16'>
                                    <TextBalloonIcon slash={true} className={'h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600'} />
                                    <div className='mt-5 subtitle'>No replies found</div>
                                    <p className='mt-3'>Have an opinion? Why not reply to this thread?</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </UserWrapper>
        </>
    )
}