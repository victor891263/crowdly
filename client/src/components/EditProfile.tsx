import React, {useContext, useState} from "react"
import handleTextareaResize from "../utilities/handleTextareaResize"
import {User} from "../types"
import BoxFullScreen from "./BoxFullScreen"
import {useNavigate} from "react-router-dom"
import PopUp from "./PopUp"
import ButtonWithSpinner from "./ButtonWithSpinner"
import {gql, useMutation} from "@apollo/client"
import Joi from "joi"
import CrossIcon from "../icons/CrossIcon"
import MailIcon from "../icons/MailIcon"
import NotificationsContext from "../notificationsContext"
import AvatarIcon from "../icons/AvatarIcon"
import getFileString from "../utilities/getFileString";

export default function EditProfile({ user, setUser, onSuccess, close }: { user: User, setUser: (u: User) => void, onSuccess: (s: string) => void, close: () => void }) {
    const [showing, setShowing] = useState<'overview' | 'email' | 'password' | 'delete'>('overview')

    const [userData, setUserData] = useState({
        username: user.username || '',
        name: user.name || '',
        about: user.about || '',
        link: user.link || ''
    })
    const [inputErrors, setInputErrors] = useState({
        username: '',
        name: '',
        about: '',
        link: ''
    })

    const [newImg, setNewImg] = useState<File>()
    const [readerError, setReaderError] = useState('')

    const [newEmail, setNewEmail] = useState('')
    const [newEmailError, setNewEmailError] = useState('')

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [passwordErrors, setPasswordErrors] = useState({
        currentPassword: '',
        newPassword: ''
    })

    const { setSuccessMsg } = useContext(NotificationsContext)
    const navigate = useNavigate()

    const schema = Joi.object({
        username: Joi.string().alphanum().min(1).max(255).required(),
        name: Joi.string().min(0).max(100),
        about: Joi.string().min(0).max(500),
        link: Joi.string().min(0).max(200)
    })
    const passwordSchema = Joi.object({
        currentPassword: Joi.string().min(1).max(50).required(),
        newPassword: Joi.string().min(1).max(50).required()
    })

    const EDIT_USER = gql`
        mutation EditUser($input: EditUserInput!, $newImg: String) {
            editUser(input: $input, newImg: $newImg) {
                image
                username
                name
                about
                link
            }
        }
    `
    const EDIT_USER_EMAIL = gql`
        mutation EditUserEmail($email: String!) {
            editUserEmail(email: $email)
        }
    `
    const CANCEL_EMAIL_UPDATE = gql`
        mutation CancelEmailUpdate {
            cancelEmailUpdate
        }
    `
    const EDIT_USER_PASSWORD = gql`
        mutation EditUserPassword($currentPassword: String!, $newPassword: String!) {
            editUserPassword(currentPassword: $currentPassword, newPassword: $newPassword)
        }
    `
    const DELETE_USER = gql`
        mutation DeleteUser {
            deleteUser
        }
    `
    const [editUser, editOperation] = useMutation<{ editUser: User }>(EDIT_USER)
    const [editUserEmail, editEmailOperation] = useMutation(EDIT_USER_EMAIL)
    const [cancelEmailUpdate, cancelOperation] = useMutation(CANCEL_EMAIL_UPDATE)
    const [editUserPassword, editPasswordOperation] = useMutation(EDIT_USER_PASSWORD)
    const [deleteUser, deleteUserOperation] = useMutation(DELETE_USER)

    async function handleSubmit() {
        setInputErrors({
            username: '',
            name: '',
            about: '',
            link: ''
        })

        // validate inputs and if validation failed, don't proceed
        const result = schema.validate(userData, { abortEarly: false })
        if (result.error) {
            result.error.details.forEach(error => {
                const label = error.context!.label as ('username' | 'about' | 'name' | 'link')
                setInputErrors(prev => ({ ...prev, [label]: error.message.replaceAll(`"`, ``) }))
            })
            return
        }

        // create a base64 string out of the image
        let newImgString: string | undefined = undefined
        if (newImg) {
            try {
                newImgString = await getFileString(newImg)
            } catch (error) {
                setReaderError('Failed to process the selected image')
                setTimeout(() => setReaderError(''), 3000)
            }
        }

        // send data to server
        const response = await editUser({
            variables: {
                input: userData,
                newImg: newImgString
            }
        })
        if (response) {
            // I tried the following but it only updated the user profile and not the profile image and usernames in the user's posts and in the "add post" box on the left. Its better to just straight up refresh the page
            // setUser({...user, ...response.data!.editUser })
            onSuccess('Profile updated successfully')
            setTimeout(() => onSuccess(''), 3000)
            navigate(0)
        }
    }

    function handleEmailChange() {
        setNewEmailError('')
        if (newEmail.length < 1) {
            setNewEmailError('The new email cannot be empty')
            return
        }
        if (newEmail.length > 50) {
            setNewEmailError('The new email is too long')
            return
        }
        editUserEmail({
            variables: {
                email: newEmail
            }
        }).then(response => {
            setUser({...user, newEmail })
        })
    }

    function handleCancelEmailUpdate() {
        cancelEmailUpdate().then(response => {
            setUser({...user, newEmail: undefined })
            onSuccess('Changes to email has been rolled back')
            setTimeout(() => onSuccess(''), 3000)
        })
    }

    function handlePasswordChange() {
        setPasswordErrors({
            currentPassword: '',
            newPassword: ''
        })
        // validate inputs and if validation failed, don't proceed
        const result = passwordSchema.validate({ currentPassword, newPassword }, { abortEarly: false })
        if (result.error) {
            result.error.details.forEach(error => {
                const label = error.context!.label as ('currentPassword' | 'newPassword')
                setPasswordErrors(prev => ({ ...prev, [label]: error.message.replaceAll(`"`, ``) }))
            })
            return
        }
        // connect to API
        editUserPassword({
            variables: { currentPassword, newPassword }
        }).then(response => {
            onSuccess('Your password has been updated successfully')
            setTimeout(() => onSuccess(''), 3000)
            setCurrentPassword('')
            setNewPassword('')
        })
    }

    function handleDeleteAccount() {
        deleteUser().then(() => {
            setSuccessMsg('Your account has been deleted successfully')
            setTimeout(() => setSuccessMsg(''), 5000)
            localStorage.removeItem('jwt')
            localStorage.removeItem('rememberMe')
            navigate('/')
        })
    }

    return (
        <>
            <PopUp msg={readerError || ''} color={'red'} />
            <PopUp msg={editOperation.error ? editOperation.error.message : ''} color={'red'} />
            <PopUp msg={editEmailOperation.error ? editEmailOperation.error.message : ''} color={'red'} />
            <PopUp msg={editPasswordOperation.error ? editPasswordOperation.error.message : ''} color={'red'} />
            <PopUp msg={cancelOperation.error ? cancelOperation.error.message : ''} color={'red'} />
            <PopUp msg={deleteUserOperation.error ? deleteUserOperation.error.message : ''} color={'red'} />
            <BoxFullScreen close={close}>
                <div className='max-w-md w-full m-auto py-24'>
                    <h2 className='mb-8 subtitle'>Edit profile</h2>
                    <div className="mb-8 flex font-medium overflow-x-auto">
                        <button onClick={() => setShowing('overview')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'overview' ? 'text-violet-600 border-violet-600' : 'text-slate-400')}>Overview</button>
                        <button onClick={() => setShowing('email')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'email' ? 'text-violet-600 border-violet-600' : 'text-slate-400')}>Email</button>
                        <button onClick={() => setShowing('password')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'password' ? 'text-violet-600 border-violet-600' : 'text-slate-400')}>Password</button>
                        <button onClick={() => setShowing('delete')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'delete' ? 'text-violet-600 border-violet-600' : 'text-slate-400')}>Delete</button>
                        <div className='border-b flex-grow'></div>
                    </div>
                    {showing === 'overview' && (
                        <div className='space-y-6'>
                            <div className='flex space-x-4'>
                                {user.image ? (
                                    <img src={user.image} className='h-16 w-16 rounded-full' />
                                ):(
                                    <AvatarIcon className='h-16 w-16 text-slate-400/50' />
                                )}
                                <div>
                                    {newImg ? (
                                        <button onClick={() => setNewImg(undefined)} className='secondary'>Remove</button>
                                    ):(
                                        <div>
                                            <input id='new-img-selector' type='file' accept='image/*' onChange={e => setNewImg(e.target.files![0])} className='hidden'  />
                                            <label htmlFor='new-img-selector' className='upload-button block w-fit'>Select</label>
                                        </div>
                                    )}
                                    <div className='mt-2 text-xs text-slate-400 line-clamp-1'>{newImg ? newImg.name : 'No file selected'}</div>
                                </div>
                            </div>
                            <div>
                                <span className='block text-sm font-medium mb-2'>Username <span className='text-red-600'>*</span></span>
                                <input onChange={e => {
                                    setUserData(prev => ({ ...prev, username: e.target.value }))
                                }}
                                       value={userData.username}
                                       type='text'
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
                                <span className='block text-sm font-medium mb-2'>Name</span>
                                <input onChange={e => {
                                    setUserData(prev => ({ ...prev, name: e.target.value }))
                                }}
                                       value={userData.name}
                                       type='text'
                                       className='py-2 px-3 w-full'
                                />
                                {inputErrors.name && (
                                    <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                        <CrossIcon className='h-4 w-4 shrink-0' />
                                        <div className='text-sm first-letter:capitalize'>{inputErrors.name}</div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <span className='block text-sm font-medium mb-2'>About</span>
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
                            <div>
                                <span className='block text-sm font-medium mb-2'>Link</span>
                                <input onChange={e => {
                                    setUserData(prev => ({ ...prev, link: e.target.value }))
                                }}
                                       value={userData.link}
                                       type='text'
                                       placeholder='Any social media?'
                                       className='py-2 px-3 w-full'
                                />
                                {inputErrors.link && (
                                    <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                        <CrossIcon className='h-4 w-4 shrink-0' />
                                        <div className='text-sm first-letter:capitalize'>{inputErrors.link}</div>
                                    </div>
                                )}
                            </div>
                            <ButtonWithSpinner label={'Save'} isLoading={editOperation.loading} handleClick={handleSubmit} type={'primary'} className={'!mt-8'} />
                        </div>
                    )}
                    {showing === 'email' && (
                        <div className='space-y-6'>
                            <div>
                                <span className='block text-sm font-medium mb-2'>Current email</span>
                                <input
                                    disabled={true}
                                    value={user.email}
                                    type='text'
                                    className='py-2 px-3 w-full'
                                />
                            </div>
                            {user.newEmail ? (
                                <div className='border rounded-lg p-6 space-y-6 flex flex-col items-center text-center'>
                                    <MailIcon className='h-8 w-8 text-slate-400/60 dark:text-gray-600' />
                                    <p className='!mt-4'>Follow the instructions sent to {user.newEmail} to finish updating. You can rollback the changes you've just made.</p>
                                    <ButtonWithSpinner label={`Rollback changes`} isLoading={cancelOperation.loading} handleClick={handleCancelEmailUpdate} type={'secondary'} />
                                </div>
                            ):(
                                <>
                                    <div>
                                        <span className='block text-sm font-medium mb-2'>New email</span>
                                        <input onChange={e => setNewEmail(e.target.value)}
                                               value={newEmail}
                                               type='text'
                                               className='py-2 px-3 w-full'
                                        />
                                        {newEmailError && (
                                            <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                                <CrossIcon className='h-4 w-4 shrink-0' />
                                                <div className='text-sm first-letter:capitalize'>{newEmailError}</div>
                                            </div>
                                        )}
                                    </div>
                                    <ButtonWithSpinner label={'Save'} isLoading={editEmailOperation.loading} handleClick={handleEmailChange} type={'primary'} />
                                </>
                            )}
                        </div>
                    )}
                    {showing === 'password' && (
                        <div className='space-y-6'>
                            <div>
                                <span className='block text-sm font-medium mb-2'>Current password <span className='text-red-600'>*</span></span>
                                <input
                                    onChange={e => setCurrentPassword(e.target.value)}
                                    value={currentPassword}
                                    type='password'
                                    className='py-2 px-3 w-full'
                                />
                                {passwordErrors.currentPassword && (
                                    <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                        <CrossIcon className='h-4 w-4 shrink-0' />
                                        <div className='text-sm first-letter:capitalize'>{passwordErrors.currentPassword}</div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <span className='block text-sm font-medium mb-2'>New password <span className='text-red-600'>*</span></span>
                                <input
                                    onChange={e => setNewPassword(e.target.value)}
                                    value={newPassword}
                                    type='password'
                                    className='py-2 px-3 w-full'
                                />
                                {passwordErrors.newPassword && (
                                    <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                        <CrossIcon className='h-4 w-4 shrink-0' />
                                        <div className='text-sm first-letter:capitalize'>{passwordErrors.newPassword}</div>
                                    </div>
                                )}
                            </div>
                            <ButtonWithSpinner label={'Save'} isLoading={editPasswordOperation.loading} handleClick={handlePasswordChange} type={'primary'} />
                        </div>
                    )}
                    {showing === 'delete' && (
                        <div>
                            <h3 className='mb-3 text-lg font-bold'>Leaving?</h3>
                            <p className='mb-8'>All posts and replies made by you will be deleted permanently. This action is not reversible.</p>
                            <ButtonWithSpinner label={'Delete my account'} isLoading={deleteUserOperation.loading} handleClick={handleDeleteAccount} type={'secondary'} className={'text-red-600'} />
                        </div>
                    )}
                </div>
            </BoxFullScreen>
        </>
    )
}
