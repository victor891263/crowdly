import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Header from '../components/Header';
import FeedPost from '../components/FeedPost';
import FeedSuggestions from '../components/FeedSuggestions';
import FeedAddPost from "../components/FeedAddPost";
import ThemeButton from "./ThemeButton";
import GlassIcon from "../icons/GlassIcon";
import GitHubIcon from "../icons/GitHubIcon";
import getCurrentUser from "../utils/getCurrentUser";

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
    const currentUser = getCurrentUser()
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

    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
    }

    return (
        <>
            <Header isFeed={true} />
            <div className="pt-[52px] sm:pt-16 text-gray-700 dark:text-gray-300 dark:bg-gray-900">
                <div className="container mx-auto flex gap-7 lg:max-w-screen-lg px-6">
                    <div className="flex flex-col gap-5 lg:border-r lg:pr-7 dark:border-gray-700">
                        <div className="divide-y dark:divide-gray-700">
                            <div className="py-4 flex items-center justify-between">
                                <h1 className="font-bold text-lg text-black dark:text-white">{isTrending ? "Trending" : "Your feed"}</h1>
                                <button>
                                    <GlassIcon className={"w-4 h-4"} />
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
                                    <Link to="/join" className="rounded-md px-3.5 py-2 text-sm bg-indigo-600 text-white dark:bg-indigo-400 dark:text-black">Sign up</Link>
                                    <Link to="/login" className="rounded-md border px-3.5 py-2 text-sm text-indigo-600 dark:border-gray-700 dark:text-indigo-400">Login</Link>
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
                            <div className="flex gap-3 items-center justify-center mt-4">
                                <ThemeButton />
                                <a href="/">
                                    <GitHubIcon className={"w-[18px] h-[18px]"} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};