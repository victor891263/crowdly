import CrossIcon from "../icons/CrossIcon"
import ButtonWithSpinner from "../components/ButtonWithSpinner"
import React, {useState} from "react"
import {gql, useMutation} from "@apollo/client"
import PopUp from "../components/PopUp"

export default function Recover() {
    const [email, setEmail] = useState('')
    const [inputError, setInputError] = useState('')

    const SEND_RECOVERY_INSTRUCTIONS = gql`
        mutation SendRecoveryInstructions($email: String!) {
            sendRecoveryInstructions(email: $email)
        }
    `
    const [send, { loading, error, data }] = useMutation(SEND_RECOVERY_INSTRUCTIONS)

    async function handleSend() {
        // check email length
        if (email.length < 1) {
            setInputError('Email cannot be empty')
            return
        }
        if (email.length > 50) {
            setInputError('Email is too long')
            return
        }
        // check if email is valid
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if (!pattern.test(email)) {
            setInputError('Email is not in a valid format')
            return
        }
        // send to API
        await send({
            variables: { email }
        })
    }

    return (
        <>
            <PopUp msg={data ? 'Instructions have been sent to your email address' : ''} color={'green'} />
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
                        <h2 className='text-2xl font-bold tracking-tight'>Recover your account</h2>
                        <p className="mt-4">Instructions on getting access back into your account will be sent to you.</p>
                        <div className="mt-8 space-y-6 w-full">
                            <div className="">
                                <label className='mb-2 block text-sm font-medium'>Email</label>
                                <input
                                    onChange={e => {
                                        setInputError('')
                                        setEmail(e.target.value)
                                    }}
                                    value={email}
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
                            <ButtonWithSpinner label={'Send instructions'} isLoading={loading} handleClick={handleSend} type={'primary'} className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}