import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import women from '../assets/images/women.jpg';

export default function Root() {
    return (
        <>
            <Header />
            <div className="container max-w-screen-xl flex flex-col px-6 py-32 mx-auto gap-y-6 sm:py-40 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2 lg:pr-8">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl dark:text-white">Crowdly is a trouble-free <span className="text-violet-600 dark:text-violet-400">social platform</span>.</h1>
                        <p className="mt-6 leading-relaxed text-lg text-gray-700 dark:text-gray-300">Designed to bring people together and inspire meaningful conversations, Crowdly helps you discover new connections and share your thoughts with the world.</p>
                        <div className="mt-6 space-y-5">
                            <p className="flex items-center text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-violet-600 dark:text-violet-400">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>
                                <span className="mx-2">Easy account creation process</span>
                            </p>
                            <p className="flex items-center text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-violet-600 dark:text-violet-400">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>
                                <span className="mx-2">Build community by following each other</span>
                            </p>
                            <p className="flex items-center text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-violet-600 dark:text-violet-400">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>
                                <span className="mx-2">Interact posts by voting and replying</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-6 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-violet-600 dark:focus-within:border-violet-400">
                        <form className="flex flex-col lg:flex-row">
                            <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none placeholder:text-gray-400 focus:outline-none dark:text-gray-300 dark:placeholder:text-gray-600"/>
                            <button type="button" className="px-6 py-3 m-1 text-white bg-violet-600 rounded-md hover:bg-violet-700 focus:outline-none focus:bg-violet-700 dark:text-black dark:bg-violet-400">Join us</button>
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={women} alt="women drinking"/>
                </div>
            </div>
            <Footer />
        </>
    );
};