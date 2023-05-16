import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import Joi from 'joi'
import UserIcon from "../icons/UserIcon"
import LockIcon from "../icons/LockIcon"
import axios from "axios";
import handleError from "../utilities/handleError";
import PopUp from "../components/PopUp";

export default function Auth({ newUser }: { newUser?: boolean }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ username: '', password: '' })
    const [submitError, setSubmitError] = useState('')
    const navigate = useNavigate()

    const schema = Joi.object({
        username: Joi.string().alphanum().min(1).max(30).required(),
        password: Joi.string().min(5).max(20).required()
    })

    function submitUserData(e: any) {
        e.preventDefault()

        // validate inputs and if validation failed, don't proceed
        const result = schema.validate({ username, password }, { abortEarly: false })
        if (result.error) {
            result.error.details.forEach(error => {
                const label = error.context!.label as ('username' | 'password')
                setErrors(prev => ({ ...prev, [label]: error.message.replaceAll(`"`, ``) }))
            })
            return
        }

        e.target.innerText = newUser ? 'Creating...' : 'Logging in...'
        e.target.disabled = true

        // submit to database
        axios.post(`${process.env.REACT_APP_API_URL}/${ newUser ? 'users' : 'auth' }`, { username, password })
            .then(response => {
                localStorage.setItem('jwt', response.data)
                navigate('/')
            })
            .catch(error => {
                handleError(error, (msg: string) => setSubmitError(msg), true)
            })
            .finally(() => {
                e.target.innerText = newUser ? 'Create account' : 'Login'
                e.target.disabled = false
            })
    }

    return (
        <>
            {submitError && <PopUp msg={submitError} />}
            <div className="bg-white dark:bg-zinc-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: `url('https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`}}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight !text-gray-100">Join the community</h1>
                                <p className="max-w-sm mt-3 text-gray-300">Bringing people together and inspire meaningful conversations, helping you discover new connections and share your ideas with the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <form className="w-full max-w-md">
                            <h2 className="text-2xl">{ newUser ? 'Join Crowdly' : 'Welcome back!' }</h2>
                            {newUser ? (
                                <p className="mt-4 text-gray-700 dark:text-gray-300">Already have an account? <Link to='/login' className="text-blue-600">Login</Link></p>
                            ):(
                                <p className="mt-4 text-gray-700 dark:text-gray-300">Don’t have an account yet? <Link to='/join' className="text-blue-600">Sign up</Link></p>
                            )}
                            <div className="relative flex items-center mt-8">
                                <UserIcon outline={true} className={"absolute w-5 h-5 mx-3 text-gray-400"} />
                                <input
                                    onChange={e => {
                                        setErrors(prev => ({ ...prev, username: '' }))
                                        setUsername(e.target.value)
                                    }}
                                    value={username}
                                    type="text"
                                    className={"block w-full py-2.5 rounded-lg px-10" + (errors.username ? " border-red-600 dark:border-red-400" : "")}
                                    placeholder="Username"/>
                            </div>
                            {errors.username && <span className='block mt-1.5 text-red-600 first-letter:capitalize dark:text-red-400'>{errors.username}</span>}
                            <div className="relative flex items-center mt-4">
                                <LockIcon className={"absolute w-5 h-5 mx-3 text-gray-400"} />
                                <input
                                    onChange={e => {
                                        setErrors(prev => ({ ...prev, password: '' }))
                                        setPassword(e.target.value)
                                    }}
                                    value={password}
                                    type="password"
                                    className={"block w-full py-2.5 rounded-lg px-10" + (errors.password ? " border-red-600 dark:border-red-400" : "")}
                                    placeholder="Password"/>
                            </div>
                            {errors.password && <span className='block mt-1.5 text-red-600 first-letter:capitalize dark:text-red-400'>{errors.password}</span>}
                            <div className="mt-4">
                                <button onClick={submitUserData} className="btn-primary w-full py-2">{ newUser ? 'Create account' : 'Login' }</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};