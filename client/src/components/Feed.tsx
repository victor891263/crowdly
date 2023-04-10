import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Header from '../components/Header';
import FeedPost from '../components/FeedPost';
import FeedSuggestions from '../components/FeedSuggestions';
import FeedAddPost from "../components/FeedAddPost";

export default function Feed({ isTrending }: { isTrending?: boolean }) {
    const posts = [
        {
            id: '1',
            _createdAt: new Date(2023, 2, 29).toString(),
            body: `APPALLING: Tallahassee Classical School principal Hope Carrasquilla was forced to resign after 3 parents complained that a sixth grade art lesson involving Michelangelo\'s David, the most famous statue in the world, was "pornographic."`,
            username: 'ReallyAmerican1',
            score: 52,
            replies: 9,
            image: 'https://source.unsplash.com/152x152/?portrait?3'
        },
        {
            id: '2',
            _createdAt: new Date(2023, 2, 27).toString(),
            body: `Do they also still believe in Santa Claus? Let them grow up. I would bet they are well aware of reproductive organs. I mean, the internet exists ya know lol.`,
            username: 'Williams4TN',
            score: 127,
            replies: 51,
            image: 'https://source.unsplash.com/151x151/?portrait?3',
            quotedId: '59'
        },
        {
            id: '3',
            _createdAt: new Date(2023, 2, 28).toString(),
            body: `I imagine they will be going after art books,  encyclopedias, copies of National geographic, etc.`,
            username: 'Robert76118512',
            score: 18,
            replies: 1
        },
        {
            id: '4',
            _createdAt: new Date(2023, 2, 21).toString(),
            body: `Republicans may think they won today in Tennessee, but their fascism is only further radicalizing and awakening an earthquake of young people, both in the South and across the nation.`,
            username: 'AOC',
            score: 225,
            replies: 91,
            image: 'https://source.unsplash.com/151x151/?portrait?6'
        },
        {
            id: '5',
            _createdAt: new Date(2023, 2, 22).toString(),
            body: `I agree it shouldn’t have been done. Removal isn’t the answer awful precedent. But you & other hyper partisan establishment & extremist politicians brought us here. Are you sorry yet. It’s awful. But radicals pushing & indoctrinating/ forcing people further apart has consequences`,
            username: 'WTPAreTheNews',
            score: 183,
            replies: 55
        }
    ];
    const currentUser = localStorage.getItem('jwt'); // localStorage.getItem('jwt')

    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
    }

    const [paddingTop, setPaddingTop] = useState(0);

    useEffect(() => {
        function updatePaddingTop() {
            const header = document.getElementById('the-header');
            if (header) setPaddingTop(header.clientHeight);
        }

        updatePaddingTop(); // initial call
        window.addEventListener('resize', updatePaddingTop); // add/bind the event listener

        return () => window.removeEventListener('resize', updatePaddingTop); // remove/unbind the event listener when the component is unmounted
    }, []);

    return (
        <>
            <Header isFeed={true} />
            <div style={{ paddingTop }} className="text-gray-700 dark:text-gray-300 dark:bg-gray-900">
                <div className="container mx-auto flex gap-7 lg:max-w-screen-lg px-6">
                    <div className="flex flex-col gap-5 lg:border-r lg:pr-7 dark:border-gray-700">
                        <div className="divide-y dark:divide-gray-700">
                            <div className="py-4 flex items-center justify-between">
                                <h1 className="font-bold text-lg text-black dark:text-white">{isTrending ? "Trending" : "Your feed"}</h1>
                                <button>
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4"><path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path></svg>
                                </button>
                            </div>
                            {posts.map((p, i) => (
                                <FeedPost post={p} key={i} />
                            ))}
                        </div>
                    </div>
                    <div style={{ top: paddingTop }} className="sticky self-start flex flex-col gap-6 max-lg:hidden">
                        {currentUser ? (
                            <div className="pt-6">
                                <FeedAddPost />
                            </div>
                        ):(
                            <div className="pt-5 pb-0.5">
                                <h2 className="font-bold text-lg text-black dark:text-white">Join the conversation</h2>
                                <p className="mt-2.5">Login if you already have an account or sign up now to get your own personalized timeline!</p>
                                <div className="flex items-center mt-4 gap-2">
                                    <Link to="/join" className="rounded-md px-3 py-2 text-sm font-semibold bg-indigo-600 text-white dark:bg-indigo-400 dark:text-black">Sign up</Link>
                                    <Link to="/login" className="rounded-md border px-3 py-2 text-sm font-semibold text-indigo-600 dark:border-gray-700 dark:text-indigo-400">Login</Link>
                                </div>
                            </div>
                        )}
                        {currentUser && (
                            <div className="border-t pt-4 dark:border-gray-700">
                                <FeedSuggestions />
                            </div>
                        )}
                        <div className="w-72 border-t pt-6 text-sm text-gray-400 dark:text-gray-500 dark:border-gray-700">
                            <div className="flex gap-4 items-center justify-center">
                                {currentUser ? (
                                    <>
                                        <Link to="/feed">Feed</Link>
                                        <Link to="/about">About</Link>
                                        <Link to="/help">Help</Link>
                                        <button>Logout</button>
                                    </>
                                ):(
                                    <>
                                        <Link to="/trending">Trending</Link>
                                        <Link to="/about">About</Link>
                                        <Link to="/help">Help</Link>
                                        <Link to="/join">Join</Link>
                                        <Link to="/login">Login</Link>
                                    </>
                                )}
                            </div>
                            <p className="text-center mt-3">© 2023 Victor. All rights reserved.</p>
                            <div className="flex gap-4 items-center justify-center mt-4">
                                <a href="/">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                                </a>
                                <button onClick={toggleTheme}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 dark:hidden"><path d="M12 15.5C12.9667 15.5 13.7917 15.1583 14.475 14.475C15.1583 13.7917 15.5 12.9667 15.5 12C15.5 11.0333 15.1583 10.2083 14.475 9.525C13.7917 8.84167 12.9667 8.5 12 8.5C11.0333 8.5 10.2083 8.84167 9.525 9.525C8.84167 10.2083 8.5 11.0333 8.5 12C8.5 12.9667 8.84167 13.7917 9.525 14.475C10.2083 15.1583 11.0333 15.5 12 15.5ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM1.75 12.75C1.53333 12.75 1.35417 12.6792 1.2125 12.5375C1.07083 12.3958 1 12.2167 1 12C1 11.7833 1.07083 11.6042 1.2125 11.4625C1.35417 11.3208 1.53333 11.25 1.75 11.25H4.25C4.46667 11.25 4.64583 11.3208 4.7875 11.4625C4.92917 11.6042 5 11.7833 5 12C5 12.2167 4.92917 12.3958 4.7875 12.5375C4.64583 12.6792 4.46667 12.75 4.25 12.75H1.75ZM19.75 12.75C19.5333 12.75 19.3542 12.6792 19.2125 12.5375C19.0708 12.3958 19 12.2167 19 12C19 11.7833 19.0708 11.6042 19.2125 11.4625C19.3542 11.3208 19.5333 11.25 19.75 11.25H22.25C22.4667 11.25 22.6458 11.3208 22.7875 11.4625C22.9292 11.6042 23 11.7833 23 12C23 12.2167 22.9292 12.3958 22.7875 12.5375C22.6458 12.6792 22.4667 12.75 22.25 12.75H19.75ZM12 5C11.7833 5 11.6042 4.92917 11.4625 4.7875C11.3208 4.64583 11.25 4.46667 11.25 4.25V1.75C11.25 1.53333 11.3208 1.35417 11.4625 1.2125C11.6042 1.07083 11.7833 1 12 1C12.2167 1 12.3958 1.07083 12.5375 1.2125C12.6792 1.35417 12.75 1.53333 12.75 1.75V4.25C12.75 4.46667 12.6792 4.64583 12.5375 4.7875C12.3958 4.92917 12.2167 5 12 5ZM12 23C11.7833 23 11.6042 22.9292 11.4625 22.7875C11.3208 22.6458 11.25 22.4667 11.25 22.25V19.75C11.25 19.5333 11.3208 19.3542 11.4625 19.2125C11.6042 19.0708 11.7833 19 12 19C12.2167 19 12.3958 19.0708 12.5375 19.2125C12.6792 19.3542 12.75 19.5333 12.75 19.75V22.25C12.75 22.4667 12.6792 22.6458 12.5375 22.7875C12.3958 22.9292 12.2167 23 12 23ZM6 7.05L4.575 5.65C4.425 5.5 4.35417 5.32083 4.3625 5.1125C4.37083 4.90417 4.44167 4.725 4.575 4.575C4.725 4.425 4.90417 4.35 5.1125 4.35C5.32083 4.35 5.5 4.425 5.65 4.575L7.05 6C7.18333 6.15 7.25 6.325 7.25 6.525C7.25 6.725 7.18333 6.89167 7.05 7.025C6.91667 7.175 6.74583 7.25 6.5375 7.25C6.32917 7.25 6.15 7.18333 6 7.05ZM18.35 19.425L16.95 18C16.8167 17.85 16.75 17.6708 16.75 17.4625C16.75 17.2542 16.825 17.0833 16.975 16.95C17.1083 16.8 17.275 16.725 17.475 16.725C17.675 16.725 17.85 16.8 18 16.95L19.425 18.35C19.575 18.5 19.6458 18.6792 19.6375 18.8875C19.6292 19.0958 19.5583 19.275 19.425 19.425C19.275 19.575 19.0958 19.65 18.8875 19.65C18.6792 19.65 18.5 19.575 18.35 19.425ZM16.95 7.05C16.8 6.9 16.725 6.725 16.725 6.525C16.725 6.325 16.8 6.15 16.95 6L18.35 4.575C18.5 4.425 18.6792 4.35417 18.8875 4.3625C19.0958 4.37083 19.275 4.44167 19.425 4.575C19.575 4.725 19.65 4.90417 19.65 5.1125C19.65 5.32083 19.575 5.5 19.425 5.65L18 7.05C17.8667 7.18333 17.6958 7.25 17.4875 7.25C17.2792 7.25 17.1 7.18333 16.95 7.05ZM4.575 19.425C4.425 19.275 4.35 19.0958 4.35 18.8875C4.35 18.6792 4.425 18.5 4.575 18.35L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.1 7.275 17.275 7.275 17.475C7.275 17.675 7.2 17.85 7.05 18L5.65 19.425C5.5 19.575 5.32083 19.6458 5.1125 19.6375C4.90417 19.6292 4.725 19.5583 4.575 19.425Z"/></svg>
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 hidden dark:block"><path d="M12 21.0001C9.5 21.0001 7.375 20.1251 5.625 18.3751C3.875 16.6251 3 14.5001 3 12.0001C3 9.75011 3.6625 7.84178 4.9875 6.27511C6.3125 4.70844 8.05 3.70011 10.2 3.25011C10.8833 3.11678 11.35 3.23344 11.6 3.60011C11.85 3.96678 11.8417 4.46678 11.575 5.10011C11.425 5.48344 11.3083 5.87511 11.225 6.27511C11.1417 6.67511 11.1 7.08344 11.1 7.50011C11.1 9.00011 11.625 10.2751 12.675 11.3251C13.725 12.3751 15 12.9001 16.5 12.9001C16.9167 12.9001 17.3208 12.8626 17.7125 12.7876C18.1042 12.7126 18.4833 12.6084 18.85 12.4751C19.5667 12.2084 20.1 12.2209 20.45 12.5126C20.8 12.8043 20.8917 13.3001 20.725 14.0001C20.275 16.0168 19.2667 17.6876 17.7 19.0126C16.1333 20.3376 14.2333 21.0001 12 21.0001ZM12 19.5001C13.8167 19.5001 15.4 18.9376 16.75 17.8126C18.1 16.6876 18.9417 15.3668 19.275 13.8501C18.8583 14.0334 18.4125 14.1709 17.9375 14.2626C17.4625 14.3543 16.9833 14.4001 16.5 14.4001C14.5833 14.4001 12.9542 13.7293 11.6125 12.3876C10.2708 11.0459 9.6 9.41678 9.6 7.50011C9.6 7.10011 9.64167 6.67094 9.725 6.21261C9.80833 5.75428 9.95833 5.23344 10.175 4.65011C8.54167 5.10011 7.1875 6.01261 6.1125 7.38761C5.0375 8.76261 4.5 10.3001 4.5 12.0001C4.5 14.0834 5.22917 15.8543 6.6875 17.3126C8.14583 18.7709 9.91667 19.5001 12 19.5001Z"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};