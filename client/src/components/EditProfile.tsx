import React, {useState} from "react"
import handleTextareaResize from "../utilities/handleTextareaResize"
import {User} from "../types"
import BoxFullScreen from "./BoxFullScreen"
import {useNavigate} from "react-router-dom"
import PopUp from "./PopUp"
import ButtonWithSpinner from "./ButtonWithSpinner"
import {gql, useMutation} from "@apollo/client"
import Joi from "joi"
import CrossIcon from "../icons/CrossIcon"

export default function EditProfile({ user, close }: { user: User, close: () => void }) {
    const [userData, setUserData] = useState(user)
    const [inputErrors, setInputErrors] = useState({
        username: '',
        about: ''
    })
    const navigate = useNavigate()

    const schema = Joi.object({
        username: Joi.string().alphanum().min(1).max(255).required(),
        about: Joi.string().min(0).max(500)
    })

    const EDIT_USER = gql`
        mutation EditUser($input: EditUserInput!) {
            editUser(input: $input)
        }
    `
    const [editUser, editOperation] = useMutation(EDIT_USER)

    function handleSubmit() {
        // validate inputs and if validation failed, don't proceed
        const result = schema.validate(userData, { abortEarly: false })
        if (result.error) {
            result.error.details.forEach(error => {
                const label = error.context!.label as ('username' | 'about')
                setInputErrors(prev => ({ ...prev, [label]: error.message.replaceAll(`"`, ``) }))
            })
            return
        }
        // send data to server
        editUser({
            variables: {
                input: { username: userData.username, about: userData.about }
            }
        }).then(response => {
            navigate(0)
        })
    }

    return (
        <>
            {editOperation.error && <PopUp msg={editOperation.error.message} color={'red'} />}
            <BoxFullScreen close={close}>
                <div className='max-w-md w-full py-20'>
                    <h2 className='mb-8 subtitle'>Edit profile</h2>
                    <div className='space-y-6'>
                        <div>
                            <span className='block text-sm mb-2'>Username</span>
                            <input onChange={e => {
                                setUserData(prev => ({ ...prev, username: e.target.value }))
                            }}
                                   value={userData.username}
                                   type='text'
                                   placeholder='Username'
                                   className='py-2 px-3 w-full'
                            />
                            {inputErrors.username && (
                                <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                    <CrossIcon className='h-4 w-4 shrink-0' />
                                    <div className='text-sm first-letter:capitalize'>{inputErrors.username}</div>
                                </div>
                            )}
                        </div>
                        <div>
                            <span className='block text-sm mb-2'>About</span>
                            <textarea
                                onChange={e => {
                                    handleTextareaResize(e)
                                    setUserData(prev => ({ ...prev, about: e.target.value }))
                                }}
                                ref={e => {
                                    if (e) handleTextareaResize({ target: e })
                                }}
                                value={userData.about}
                                style={{ resize: 'none', overflow: 'hidden' }}
                                className="w-full !py-2.5 !px-3.5 h-32"
                                placeholder="How would you describe yourself?"
                            />
                            {inputErrors.about && (
                                <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                    <CrossIcon className='h-4 w-4 shrink-0' />
                                    <div className='text-sm first-letter:capitalize'>{inputErrors.about}</div>
                                </div>
                            )}
                        </div>
                        <ButtonWithSpinner label={'Save'} isLoading={editOperation.loading} handleClick={handleSubmit} type={'primary'} className={'!mt-8'} />
                    </div>
                </div>
            </BoxFullScreen>
        </>
    )
}