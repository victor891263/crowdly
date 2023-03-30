import React from 'react';

export default function Login() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'}}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Join the community</h2>
                            <p className="max-w-sm mt-3 text-gray-300">Bringing people together and inspire meaningful conversations, helping you discover new connections and share your ideas with the world.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <form className="w-full max-w-md">
                        <h1 className="text-3xl font-semibold dark:text-white">Welcome back!</h1>
                        <p className="mt-3 text-gray-700 dark:text-gray-300">Don’t have an account yet? <a href="#" className="text-violet-600 hover:underline dark:text-violet-400">Sign up</a></p>
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </span>
                            <input type="email" className="block w-full py-3 bg-transparent text-gray-700 border rounded-md px-11 placeholder:text-gray-400 focus:border-violet-600 dark:text-gray-300 dark:border-gray-700 dark:placeholder:text-gray-600 dark:focus:border-violet-300 focus:outline-none" placeholder="Email address"/>
                        </div>
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </span>
                            <input type="password" className="block w-full py-3 bg-transparent text-gray-700 border rounded-md px-10 placeholder:text-gray-400 focus:border-violet-600 dark:text-gray-300 dark:border-gray-700 dark:placeholder:text-gray-600 dark:focus:border-violet-300 focus:outline-none" placeholder="Password"/>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-6 py-2.5 text-white bg-violet-600 rounded-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-50 dark:bg-violet-400 dark:text-black dark:focus:ring-transparent">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};