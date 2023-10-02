import React, {useEffect, useState} from 'react'
import {Link, useSearchParams} from "react-router-dom"
import Joi from 'joi'
import PopUp from "../components/PopUp"
import {gql, useMutation} from "@apollo/client"
import ButtonWithSpinner from "../components/ButtonWithSpinner"
import CrossIcon from "../icons/CrossIcon"

export default function Join() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: '', username: '', password: '' })

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const name = searchParams.get('username')
        if (name) setUsername(name)
    }, [searchParams])

    const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).min(1).max(50).required(),
        username: Joi.string().alphanum().min(1).max(20).required(),
        password: Joi.string().min(1).max(20).required()
    })
    const SIGN_UP = gql`
        mutation SignUp($input: AddUserInput!) {
            addUser(input: $input)
        }
    `
    const [signUp, { loading, error, data }] = useMutation<{ addUser: string }>(SIGN_UP)

    function submit() {
        // validate inputs and if validation failed, don't proceed
        const result = schema.validate({ email, username, password }, { abortEarly: false })
        if (result.error) {
            result.error.details.forEach(error => {
                const label = error.context!.label as ('email' | 'username' | 'password')
                setErrors(prev => ({ ...prev, [label]: error.message.replaceAll(`"`, ``) }))
            })
            return
        }

        // submit data
        signUp({ variables: { input: { email, username, password } } }).then(response => {
            console.log(response.data!.addUser)
            localStorage.setItem('rememberMe', 'yes')
            localStorage.setItem('jwt', response.data!.addUser)
            window.location.href = '/'

        })
    }

    return (
        <>
            <PopUp msg={error ? error.message : ''} color={'red'} />
            <div className="bg-white dark:bg-gray-900">
                <div className="flex items-center h-screen">
                    <div className="max-lg:hidden h-full w-full bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`}}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div className='max-w-sm text-white'>
                                <h1 className='text-2xl font-bold tracking-tight'>Join the community</h1>
                                <p className="mt-4">Bringing people together and inspire meaningful conversations, helping you discover new connections and share your ideas with the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:mx-auto shrink-0 w-full max-w-md max-lg:px-6 lg:px-12">
                        <h2 className='text-2xl font-bold tracking-tight'>Join Crowdly</h2>
                        <p className="mt-4">Already have an account? <Link to='/login' className="text-violet-600">Login</Link></p>
                        <div className="mt-8 space-y-6 w-full">
                            <div>
                                <label className='mb-2 block text-sm font-medium'>Email</label>
                                <input
                                    onChange={e => {
                                        setErrors(prev => ({ ...prev, email: '' }))
                                        setEmail(e.target.value)
                                    }}
                                    value={email}
                                    type="text"
                                    className="w-full"
                                />
                                {errors.email && (
                                    <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                        <CrossIcon className='h-4 w-4 shrink-0' />
                                        <div className='text-sm first-letter:capitalize'>{errors.email}</div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className='mb-2 block text-sm font-medium'>Username</label>
                                <input
                                    onChange={e => {
                                        setErrors(prev => ({ ...prev, username: '' }))
                                        setUsername(e.target.value)
                                    }}
                                    value={username}
                                    type="text"
                                    className="w-full"
                                />
                                {errors.username && (
                                    <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                        <CrossIcon className='h-4 w-4 shrink-0' />
                                        <div className='text-sm first-letter:capitalize'>{errors.username}</div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className='mb-2 block text-sm font-medium'>Password</label>
                                <input
                                    onChange={e => {
                                        setErrors(prev => ({ ...prev, password: '' }))
                                        setPassword(e.target.value)
                                    }}
                                    value={password}
                                    type="password"
                                    className="w-full"
                                />
                                {errors.password && (
                                    <div className='mt-2 text-red-600 flex items-center space-x-1'>
                                        <CrossIcon className='h-4 w-4 shrink-0' />
                                        <div className='text-sm first-letter:capitalize'>{errors.password}</div>
                                    </div>
                                )}
                            </div>
                            <ButtonWithSpinner label={'Create account'} isLoading={loading} handleClick={submit} type={'primary'} className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}