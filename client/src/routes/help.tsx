import React from 'react';
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Help() {
    return (
        <>
            <Header />
            <div className="text-gray-700 border-b pb-8 dark:text-gray-300 dark:border-gray-700">
                <div className="container mx-auto px-6 pt-32 xl:max-w-screen-xl">
                    <div className="lg:w-8/12 lg:pr-6">
                        <h1 className="text-black text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Hi, we're here to help.</h1>
                        <div className="relative mt-7 mx-auto">
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-700 dark:text-gray-300"><path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path></svg>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="What do you want to know?" className="bg-transparent appearance-none w-full py-2.5 px-4 pr-11 border rounded bg-transparent text-gray-700 focus:outline-none placeholder:text-gray-400 focus:border-indigo-600 dark:text-gray-300 dark:border-gray-700 dark:focus:border-indigo-400 dark:placeholder:text-gray-600"/>
                        </div>
                    </div>

                    <div className="flex pt-8 pb-16 border-t mt-9 text-gray-700 dark:text-gray-300">
                        <div className="lg:w-8/12 lg:border-r lg:pr-6 w-full dark:border-gray-700">
                            <div>
                                <h2 className="font-bold tracking-tight text-xl text-black dark:text-white">Shortcuts</h2>
                                <div className="md:grid-cols-2 mt-4 grid gap-y-4 font-semibold text-indigo-600 dark:text-indigo-400">
                                    <Link to="/" className="w-fit">Change or add an email address</Link>
                                    <Link to="/" className="w-fit">Close your account</Link>
                                    <Link to="/" className="w-fit">Reset your password</Link>
                                    <Link to="/" className="w-fit">Crowdly Public Profile Visibility</Link>
                                    <Link to="/" className="w-fit">Cancel Crowdly Premium Subscription</Link>
                                    <Link to="/" className="w-fit">Apply for Jobs on Crowdly</Link>
                                </div>
                            </div>
                            <div className="mt-14">
                                <h2 className="font-bold tracking-tight text-xl text-black dark:text-white">All topics</h2>
                                <div className="grid-cols-2 md:grid-cols-3 mt-6 grid gap-6 font-semibold text-indigo-600 dark:text-indigo-400">
                                    <Link to="/" className="flex flex-col items-center text-center p-6 border rounded dark:border-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                        </svg>
                                        <div className="mt-2">Getting started</div>
                                    </Link>
                                    <Link to="/" className="flex flex-col items-center text-center p-6 border rounded dark:border-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                        </svg>
                                        <div className="mt-2">Following accounts</div>
                                    </Link>
                                    <Link to="/" className="flex flex-col items-center text-center p-6 border rounded dark:border-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                        </svg>
                                        <div className="mt-2">Posts and replies</div>
                                    </Link>
                                    <Link to="/" className="flex flex-col items-center text-center p-6 border rounded dark:border-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <div className="mt-2">The voting system</div>
                                    </Link>
                                    <Link to="/" className="flex flex-col items-center text-center p-6 border rounded dark:border-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div className="mt-2">Your profile</div>
                                    </Link>
                                    <Link to="/" className="flex flex-col items-center text-center p-6 border rounded dark:border-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                        <div className="mt-2">Blocking users</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:hidden mt-14">
                                <h2 className="font-bold tracking-tight text-xl text-black dark:text-white">Other resources for you</h2>
                                <div className="flex gap-4 mt-8">
                                    <div className="text-xl">📩</div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-black dark:text-white">Contact us directly</h3>
                                        <p className="mt-1.5">Our policies ensure you have a safe and professional experience.</p>
                                        <Link to="/" className="block mt-2.5 font-semibold text-indigo-600 dark:text-indigo-400">Send message</Link>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    <div className="text-xl">💬</div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-black dark:text-white">Reach out on social media</h3>
                                        <p className="mt-1.5">Your account security and online safety is our top priority.</p>
                                        <Link to="/" className="block mt-2.5 font-semibold text-indigo-600 dark:text-indigo-400">Discover now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-lg:hidden w-4/12 pl-8 h-full">
                            <h2 className="font-bold tracking-tight text-xl text-black dark:text-white">Other resources for you</h2>
                            <div className="flex gap-4 mt-8">
                                <div className="text-xl">📩</div>
                                <div>
                                    <h3 className="font-semibold text-lg text-black dark:text-white">Contact us directly</h3>
                                    <p className="mt-1.5">Our policies ensure you have a safe and professional experience.</p>
                                    <Link to="/" className="block mt-2.5 font-semibold text-indigo-600 dark:text-indigo-400">Send message</Link>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-8">
                                <div className="text-xl">💬</div>
                                <div>
                                    <h3 className="font-semibold text-lg text-black dark:text-white">Reach out on social media</h3>
                                    <p className="mt-1.5">Your account security and online safety is our top priority.</p>
                                    <Link to="/" className="block mt-2.5 font-semibold text-indigo-600 dark:text-indigo-400">Discover now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

/*

<div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
                    <button className="bg-gray-100 p-6 flex flex-col justify-between text-left hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div>
                            <h2 className="font-bold text-lg dark:text-white">Getting started 📋</h2>
                            <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">Creating an account and becoming familiar with the user interface</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 dark:text-gray-400"><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
                    </button>
                    <button className="bg-gray-100 p-6 flex flex-col justify-between text-left hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div>
                            <h2 className="font-bold text-lg dark:text-white">Following accounts 📬</h2>
                            <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">Subscribing to other users' updates and vice versa; populating the feed</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 dark:text-gray-400"><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
                    </button>
                    <button className="bg-gray-100 p-6 flex flex-col justify-between text-left hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div>
                            <h2 className="font-bold text-lg dark:text-white">Posting and replying 💬</h2>
                            <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">Submitting posts, quoting posts, and adding replies</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 dark:text-gray-400"><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
                    </button>
                    <button className="bg-gray-100 p-6 flex flex-col justify-between text-left hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div>
                            <h2 className="font-bold text-lg dark:text-white">The voting system 🗳️</h2>
                            <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">Express your opinion by upvoting and downvoting</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 dark:text-gray-400"><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
                    </button>
                    <button className="bg-gray-100 p-6 flex flex-col justify-between text-left hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div>
                            <h2 className="font-bold text-lg dark:text-white">Your profile ⚙</h2>
                            <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">Customize and select the specific details you can choose to display</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 dark:text-gray-400"><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
                    </button>
                    <button className="bg-gray-100 p-6 flex flex-col justify-between text-left hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div>
                            <h2 className="font-bold text-lg dark:text-white">Blocking users 🛑</h2>
                            <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">How to remove the content you don't want from your feed</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 dark:text-gray-400"><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
                    </button>
                </div>

*/