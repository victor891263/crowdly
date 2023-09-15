import React, {useState} from 'react'
import Footer from "../components/Footer"
import CheckIcon from "../icons/CheckIcon"
import {Link} from "react-router-dom"
import FAQBox from "../components/FAQBox"
import getFAQ from "../utilities/getFAQ"

export default function About() {
    const [username, setUsername] = useState('')

    const faqs = getFAQ()

    return (
        <>
            <div className="px-6 lg:px-8 container mx-auto pt-56 pb-20 space-y-32 sm:space-y-40 xl:max-w-screen-xl">
                <section className='max-w-xl mx-auto
max-w-xl mx-auto'>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-white">Crowdly is a <span className="text-violet-600">trouble-free</span> social platform.</h2>
                    <p className="mt-5 leading-normal text-xl text-center text-gray-700 dark:text-gray-300">Designed to bring people together and inspire meaningful conversations, Crowdly helps you discover new connections and share your thoughts with the world.</p>
                </section>

                <section className="space-y-24 xl:space-y-12">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="font-black text-4xl text-gray-400 sm:text-5xl dark:text-gray-600">1</div>

                            <h3 className="mt-3 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl dark:text-white">Straightforward account creation process.</h3>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Creating an account has never been simpler. With just a unique username and a valid email address, you can become part of our vibrant social media community. Give up the lengthy sign-up processes for an instant access to all the features you need to connect with others.</p>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=360&h=420" alt="" className="max-lg:w-full mx-auto rounded-lg shadow-lg bg-gray-500"/>
                        </div>
                    </div>

                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <div className="font-black text-4xl text-gray-400 sm:text-5xl dark:text-gray-600">2</div>

                            <h3 className="mt-3 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl dark:text-white">Never miss an update from your favorite people.</h3>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Crowdly's easy-to-use follow feature makes it effortless to build and maintain meaningful connections on our social media platform - simply follow them and their posts will appear on your personalized feed. This way, you'll be able to stay in the loop at all times.</p>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=360&h=420" alt="" className="max-lg:w-full mx-auto rounded-lg shadow-lg bg-gray-500"/>
                        </div>
                    </div>

                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="font-black text-4xl text-gray-400 sm:text-5xl dark:text-gray-600">3</div>

                            <h3 className="mt-3 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl dark:text-white">Join the conversation and let your voice be heard.</h3>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Whether you want to upvote or downvote a post to show your approval or disapproval, reply to express your thoughts, or quote a post to share it with your own followers, our interactive features allow you to be an active participant in the community.</p>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://images.unsplash.com/photo-1601932151223-b66cde61b081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=360&h=420" alt="" className="max-lg:w-full mx-auto rounded-lg shadow-lg bg-gray-500"/>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">All the features you want.</h2>
                        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">With Crowdly, it's never been easier to connect with others and engage with the content you love.</p>
                    </div>
                    <dl className="mx-auto mt-14 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
                        <div className="flex">
                            <CheckIcon className={"flex-shrink-0 w-6 h-6 text-violet-600"} />
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Get the pulse of the community.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">Upvote or downvote posts to help determine the most popular content. The "score" lets you discover posts that align with your interests.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <CheckIcon className={"flex-shrink-0 w-6 h-6 text-violet-600"} />
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Amplify others' voices and yours as well.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">Share other users' posts and add your own commentary. The quoted post appears on your profile, making it easy for revisiting.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <CheckIcon className={"flex-shrink-0 w-6 h-6 text-violet-600"} />
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Take control of your experience.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">On Crowdly, you can block others - say goodbye to unwanted content and hello to a more personalized and enjoyable social media experience.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <CheckIcon className={"flex-shrink-0 w-6 h-6 text-violet-600"} />
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Discover the best of our community.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">Whether you're looking for the most upvoted, downvoted, or replied-to content, Crowdly makes it easy to discover what's trending.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <CheckIcon className={"flex-shrink-0 w-6 h-6 text-violet-600"} />
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Simplify your social media experience.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">Comprehensive documentation designed to make using our platform easy and intuitive will help you get the most out of our platform.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <CheckIcon className={"flex-shrink-0 w-6 h-6 text-violet-600"} />
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Transparency and collaboration.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">As an open-source app, our code is available for all to see on <a href="https://github.com/victor891263/crowdly" target="_blank" rel='noreferrer' className="text-violet-600">GitHub</a>. This allows the people to contribute to Crowdly's development.</dd>
                            </div>
                        </div>
                    </dl>
                </section>

                <section>
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Your questions answered.</h2>
                        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">We've compiled answers to your most common questions. If you have more questions, feel free to reach out.</p>
                    </div>
                    <div className='mt-14 grid xl:grid-cols-2 gap-5'>
                        {faqs.map(faq => (
                            <FAQBox title={faq.title} body={faq.body} />
                        ))}
                    </div>
                </section>

                <section className="bg-violet-600 text-white p-6 pt-10 rounded-2xl flex flex-col justify-center space-y-8 sm:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="max-w-md flex flex-col space-y-4 text-center max-lg:mx-auto lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tight leading-none !text-gray-100 sm:text-4xl">Join us now</h1>
                        <p className="text-lg">Create a Crowdly account and start connecting with the crowd and share your stories!</p>
                    </div>
                    <div className="max-sm:w-full flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
                        <div className="w-full flex max-sm:flex-col">
                            <input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder="Pick a username" className="sm:!rounded-r-none p-3 pl-4 !ring-white !bg-transparent placeholder:!text-white"/>
                            <Link to={`/join?username=${username}`} className="max-sm:mt-3 max-sm:rounded-l-lg text-center p-3 font-semibold rounded-r-lg sm:w-1/3 bg-white text-violet-600 ring-1 ring-white dark:bg-white">Sign up</Link>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}