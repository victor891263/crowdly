import handleTextareaResize from "../utilities/handleTextareaResize"
import ButtonWithSpinner from "./ButtonWithSpinner"
import React, {useState} from "react"
import {gql, useMutation, useQuery} from "@apollo/client"
import {UserSmall} from "../types"
import AvatarIcon from "../icons/AvatarIcon"
import GenericLoading from "./GenericLoading"
import GenericError from "./GenericError"
import {Link, useNavigate} from "react-router-dom"
import CrossIcon from "../icons/CrossIcon"

export default function AddPost({ userId }: { userId: number }) {
    const [body, setBody] = useState('')
    const [inputError, setInputError] = useState('')

    const navigate = useNavigate()

    const GET_USER = gql`
        query GetUser($id: ID!) {
            user(id: $id) {
                id
                username
                image
            }
        }
    `
    const ADD_POST = gql`
        mutation AddPost($input: AddPostInput!) {
            addPost(input: $input)
        }
    `
    const getUserOperation = useQuery<{ user: UserSmall }>(GET_USER, {
        variables: { id: userId }
    })
    const [addPost, addOperation] = useMutation<{ addPost: string }>(ADD_POST)

    function handleAdd() {
        // verify input
        if (body.length < 1) {
            setInputError('Post cannot be empty')
            return
        }
        if (body.length > 500) {
            setInputError('Post is too long')
            return
        }
        // call the API
        addPost({
            variables: {
                input: { body }
            }
        }).then(response => {
            navigate(`/posts/${response.data?.addPost}`)
        })
    }

    return (
        <>
            {getUserOperation.loading && (
                <div className='bg-slate-100 rounded-xl'>
                    <GenericLoading />
                </div>
            )}
            {getUserOperation.error && (
                <div className='bg-slate-100 rounded-xl px-8'>
                    <GenericError msg={getUserOperation.error.message} />
                </div>
            )}
            {getUserOperation.data && (
                <div>
                    <Link to={`/users/${userId}`} className='flex items-center space-x-2 w-fit'>
                        {getUserOperation.data.user.image ? (
                            <img src={getUserOperation.data.user.image} className='h-10 w-10 rounded-full' />
                        ):(
                            <AvatarIcon className='h-10 w-10 text-slate-400/50' />
                        )}
                        <div className='text-sm font-semibold'>{getUserOperation.data.user.username}</div>
                    </Link>
                    <div className='mt-4 relative'>
                        <textarea onChange={e => {
                            handleTextareaResize(e)
                            setBody(e.target.value)
                        }} className='w-full h-36 !rounded-lg !py-2.5 !px-3.5 !pb-16' placeholder='Have anything to share?' value={body} />
                        <div className='absolute bottom-3 right-3'>
                            <ButtonWithSpinner handleClick={handleAdd} label={'Post'} isLoading={addOperation.loading} type={'primary'} />
                        </div>
                        <div className='absolute bottom-2.5 left-3.5 text-sm text-slate-400'>{body.length}/500</div>
                    </div>
                    {inputError && (
                        <div className='mt-2 text-red-600 flex items-center space-x-1'>
                            <CrossIcon className='h-4 w-4 shrink-0' />
                            <div className='text-sm'>{inputError}</div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}