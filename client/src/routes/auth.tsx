import React, {useEffect, useState} from 'react'
import {Link, useSearchParams} from "react-router-dom"
import Joi from 'joi'
import UserIcon from "../icons/UserIcon"
import LockIcon from "../icons/LockIcon"
import PopUp from "../components/PopUp"
import {gql, useMutation} from "@apollo/client"
import ButtonWithSpinner from "../components/ButtonWithSpinner"

export default function Auth({ newUser }: { newUser?: boolean }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ username: '', password: '' })

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const name = searchParams.get('username')
        if (name) setUsername(name)
    }, [searchParams])

    useEffect(() => {
        setErrors({ username: '', password: '' })
    }, [newUser])

    const schema = Joi.object({
        username: Joi.string().alphanum().min(1).max(20).required(),
        password: Joi.string().min(1).max(20).required()
    })

    const LOGIN = gql`
        mutation Login($input: LoginInput!) {
            login(input: $input)
        }
    `
    const SIGN_UP = gql`
        mutation SignUp($input: AddUserInput!) {
            addUser(input: $input)
        }
    `
    const [login, loginOperation] = useMutation<{ login: string }>(LOGIN)
    const [signUp, signUpOperation] = useMutation<{ addUser: string }>(SIGN_UP)

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
        if (newUser) signUp({ variables: { input: { username, password } } }).then(response => {
            localStorage.setItem('jwt', response.data!.addUser)
            window.location.href = '/'
        })
        else login({ variables: { input: { username, password } } }).then(response => {
            localStorage.setItem('jwt', response.data!.login)
            window.location.href = '/'
        })
    }

    return (
        <>
            {(loginOperation.error || signUpOperation.error) && <PopUp msg={loginOperation.error!.message || signUpOperation.error!.message} color={'red'} />}
            <div className="bg-white dark:bg-gray-900">
                <div className="flex items-center h-screen">
                    <div className="max-lg:hidden h-full w-full bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`}}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div className='max-w-sm text-white'>
                                <h1 className='text-2xl font-bold'>Join the community</h1>
                                <p className="mt-4 leading-[1.6]">Bringing people together and inspire meaningful conversations, helping you discover new connections and share your ideas with the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:mx-auto shrink-0 w-full max-w-md max-lg:px-6 lg:px-12">
                        <h2 className='text-2xl font-bold'>{ newUser ? 'Join Crowdly' : 'Welcome back!' }</h2>
                        {newUser ? (
                            <p className="mt-4 text-gray-700 dark:text-gray-300">Already have an account? <Link to='/login' className="text-violet-600">Login</Link></p>
                        ):(
                            <p className="mt-4 text-gray-700 dark:text-gray-300">Don’t have an account yet? <Link to='/join' className="text-violet-600">Sign up</Link></p>
                        )}
                        <div className="mt-8 space-y-3.5 w-full">
                            <div className="relative flex items-center">
                                <UserIcon outline={true} className={"absolute w-5 h-5 mx-3 text-slate-400"} />
                                <input
                                    onChange={e => {
                                        setErrors(prev => ({ ...prev, username: '' }))
                                        setUsername(e.target.value)
                                    }}
                                    value={username}
                                    type="text"
                                    className="block w-full !py-2.5 rounded-lg !px-10"
                                    placeholder="Username"/>
                            </div>
                            {errors.username && <div className='!mt-2.5 pb-1 text-sm text-red-600 first-letter:capitalize'>{errors.username}</div>}
                            <div className="relative flex items-center">
                                <LockIcon className={"absolute w-5 h-5 mx-3 text-slate-400"} />
                                <input
                                    onChange={e => {
                                        setErrors(prev => ({ ...prev, password: '' }))
                                        setPassword(e.target.value)
                                    }}
                                    value={password}
                                    type="password"
                                    className="block w-full !py-2.5 rounded-lg !px-10"
                                    placeholder="Password"/>
                            </div>
                            {errors.password && <div className='!mt-2.5 pb-1 text-sm text-red-600 first-letter:capitalize'>{errors.password}</div>}
                            <ButtonWithSpinner label={newUser ? 'Create account' : 'Login'} isLoading={loginOperation.loading || signUpOperation.loading} handleClick={submit} type={'primary'} className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};