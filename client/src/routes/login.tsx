import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Joi from 'joi'
import PopUp from "../components/PopUp"
import {gql, useMutation} from "@apollo/client"
import ButtonWithSpinner from "../components/ButtonWithSpinner"
import CrossIcon from "../icons/CrossIcon"
import CheckIcon from "../icons/CheckIcon"

export default function Login() {
    const [rememberMe, setRememberMe] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ username: '', password: '' })

    const schema = Joi.object({
        username: Joi.string().alphanum().min(1).max(20).required(),
        password: Joi.string().min(1).max(20).required()
    })

    const LOGIN = gql`
        mutation Login($input: LoginInput!) {
            login(input: $input)
        }
    `
    const [login, { loading, error, data }] = useMutation<{ login: string }>(LOGIN)

    function submit() {
        // validate inputs and if validation failed, don't proceed
        const result = schema.validate({ username, password }, { abortEarly: false })
        if (result.error) {
            result.error.details.forEach(error => {
                const label = error.context!.label as ('username' | 'password')
                setErrors(prev => ({ ...prev, [label]: error.message.replaceAll(`"`, ``) }))
            })
            return
        }

        // submit data
        login({ variables: { input: { username, password } } }).then(response => {
            localStorage.setItem('jwt', response.data!.login)
            if (rememberMe) localStorage.setItem('rememberMe', 'yes') // save user's "remember me" choice
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
                        <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
                        <p className="mt-4">Don’t have an account yet? <Link to='/join' className="text-violet-600">Sign up</Link></p>
                        <div className="mt-8 space-y-6 w-full">
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
                            <div className='flex items-center justify-between text-sm py-1'>
                                <div onClick={() => setRememberMe(!rememberMe)} className='flex items-center space-x-2 cursor-pointer'>
                                    <div className={'h-4 w-4 ring-1 ring-slate-300 rounded flex items-center justify-center' + (rememberMe ? ' bg-violet-600 !ring-violet-600' : '')}>
                                        {rememberMe && <CheckIcon className='w-3.5 h-3.5 text-white' strokeWidth={3} />}
                                    </div>
                                    <div>Remember me</div>
                                </div>
                                <Link to='/recover' className="text-violet-600">Forgot password?</Link>
                            </div>
                            <ButtonWithSpinner label={'Login'} isLoading={loading} handleClick={submit} type={'primary'} className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}