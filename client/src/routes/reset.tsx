import PopUp from "../components/PopUp"
import CrossIcon from "../icons/CrossIcon"
import ButtonWithSpinner from "../components/ButtonWithSpinner"
import React, {useState} from "react"
import {gql, useMutation} from "@apollo/client"
import {useNavigate, useParams} from "react-router-dom"

export default function Reset() {
    const [password, setPassword] = useState('')
    const [inputError, setInputError] = useState('')

    const RESET_ACCOUNT = gql`
        mutation ResetAccount($id: ID!, $password: String!) {
            resetAccount(id: $id, password: $password)
        }
    `
    const [send, { loading, error, data }] = useMutation(RESET_ACCOUNT)
    const { id } = useParams()
    const navigate = useNavigate()

    async function handleReset() {
        // check password length
        if (password.length < 1) {
            setInputError('Password cannot be empty')
            return
        }
        if (password.length > 50) {
            setInputError('Password is too long')
            return
        }
        // send to API
        await send({
            variables: { id, password }
        })
        setTimeout(() => navigate('/login'), 3000)
    }

    return (
        <>
            <PopUp msg={data ? 'Your password has been updated successfully' : ''} color={'green'} />
            <PopUp msg={error ? error.message : ''} color={'red'} />
            <div className="bg-white dark:bg-gray-900">
                <div className="flex items-center h-screen">
                    <div className="max-lg:hidden h-full w-full bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`}}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div className='max-w-sm text-white'>
                                <h1 className='text-2xl font-bold tracking-tight'>Join the community</h1>
                                <p className="mt-4 leading-[1.6]">Bringing people together and inspire meaningful conversations, helping you discover new connections and share your ideas with the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:mx-auto shrink-0 w-full max-w-md max-lg:px-6 lg:px-12">
                        <h2 className='text-2xl font-bold tracking-tight'>Reset your password</h2>
                        <p className="mt-4">After updating, you'll be able to login with your new password.</p>
                        <div className="mt-8 space-y-6 w-full">
                            <div className="">
                                <label className='mb-2 block text-sm font-medium'>New password</label>
                                <input
                                    onChange={e => {
                                        setInputError('')
                                        setPassword(e.target.value)
                                    }}
                                    value={password}
                                    type="text"
                                    className="w-full"
                                />
                                {inputError && (
                                    <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                        <CrossIcon className='h-4 w-4 shrink-0' />
                                        <div className='text-sm first-letter:capitalize'>{inputError}</div>
                                    </div>
                                )}
                            </div>
                            <ButtonWithSpinner label={'Send instructions'} isLoading={loading} handleClick={handleReset} type={'primary'} className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}