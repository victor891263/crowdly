import React from 'react';
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Help() {
    return (
        <>
            <Header />
            <div className="container mx-auto pt-40 pb-32 lg:max-w-screen-lg max-2xl:px-6">
                <h1 className="text-3xl font-bold tracking-tight text-center sm:text-4xl dark:text-white">Help center</h1>
                <p className="mt-4 text-lg text-center max-w-lg mx-auto text-gray-700 dark:text-gray-300">Comprehensive documentation designed to make using Crowdly easy and intuitive to help you get the most out of it.</p>
                <div className="relative mt-6 max-w-sm mx-auto">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-700 dark:text-gray-300"><path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path></svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Ask anything" className="appearance-none w-full py-2.5 pl-11 rounded-full bg-transparent text-gray-700 focus:outline-none border placeholder:text-gray-400 focus:border-violet-600 dark:text-gray-300 dark:border-gray-700 dark:focus:border-violet-400 dark:placeholder:text-gray-600"/>
                </div>
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
            </div>
            <Footer />
        </>
    );
};