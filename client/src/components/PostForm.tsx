import React, {useState} from "react"
import {gql, useMutation} from '@apollo/client'
import BoxFullScreen from "./BoxFullScreen"
import PopUp from "./PopUp"
import {useNavigate} from "react-router-dom"
import handleTextareaResize from "../utilities/handleTextareaResize"
import ButtonWithSpinner from "./ButtonWithSpinner"
import CrossIcon from "../icons/CrossIcon"

export default function PostForm({ type, content, id, close, closeMenu }: { type: 'add' | 'edit' | 'quote', content?: string, id?: string, close: () => void, closeMenu?: () => void }) {
    const [body, setBody] = useState(content || '')
    const [inputError, setInputError] = useState('')
    const navigate = useNavigate()

    const ADD_POST = gql`
        mutation AddPost($input: AddPostInput!) {
            addPost(input: $input)
        }
    `
    const QUOTE_POST = gql`
        mutation QuotePost($input: AddPostInput!) {
            addPost(input: $input)
        }
    `
    const EDIT_POST = gql`
        mutation EditPost($input: EditPostInput!, $id: ID!) {
            editPost(input: $input, id: $id)
        }
    `
    const [addPost, addOperation] = useMutation<{ addPost: string }>(ADD_POST)
    const [quotePost, quotingOperation] = useMutation<{ addPost: string }>(QUOTE_POST)
    const [editPost, editingOperation] = useMutation(EDIT_POST)

    function handleSubmit() {
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
        if (type === 'add') addPost({
            variables: {
                input: { body }
            }
        }).then((response) => {
            navigate(`/posts/${response.data?.addPost}`)
            close()
            if (closeMenu) closeMenu()
        })
        if (type === 'edit') editPost({
            variables: {
                input: { body },
                id
            }
        }).then(() => {
            navigate(0)
        })
        if (type === 'quote') quotePost({
            variables: {
                input: { body, quotedId: id }
            }
        }).then((response) => {
            navigate(`/posts/${response.data?.addPost}`)
        })
    }

    return (
        <>
            {quotingOperation.error && <PopUp msg={quotingOperation.error.message} color={'red'} />}
            {editingOperation.error && <PopUp msg={editingOperation.error.message} color={'red'} />}
            <BoxFullScreen close={close}>
                <div className='max-w-md w-full py-20'>
                    <h2 className='subtitle'>{(type === 'add' && 'New post') || (type === 'edit' && 'Edit post') || (type === 'quote' && 'Quote post') || ''}</h2>
                    <div className='mt-8 relative'>
                        <textarea
                            onChange={e => {
                                handleTextareaResize(e)
                                setBody(e.target.value)
                            }}
                            ref={e => {
                                if (e) handleTextareaResize({ target: e })
                            }}
                            className='w-full h-36 !rounded-lg !py-2.5 !px-3.5 !pb-16'
                            placeholder='Have anything to share?'
                            value={body}
                        />
                        <div className='absolute bottom-3 right-3'>
                            <ButtonWithSpinner handleClick={handleSubmit} label={(type === 'add' && 'Submit') || (type === 'edit' && 'Save') || (type === 'quote' && 'Post') || ''} isLoading={addOperation.loading || editingOperation.loading || quotingOperation.loading} type={'primary'} />
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
            </BoxFullScreen>
        </>
    )
}