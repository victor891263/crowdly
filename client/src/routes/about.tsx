import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <Header />

            <div className="max-2xl:px-6 container mx-auto pt-40 pb-20 space-y-32 sm:space-y-40 xl:max-w-screen-xl">
                <section className="space-y-24 xl:space-y-12">
                    <div>
                        <h2 className="max-w-xl mx-auto text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-white">Crowdly is a <span className="text-violet-600 dark:text-violet-400">trouble-free</span> social platform.</h2>
                        <p className="max-w-xl mx-auto mt-5 leading-normal text-xl text-center text-gray-700 dark:text-gray-300">Designed to bring people together and inspire meaningful conversations, Crowdly helps you discover new connections and share your thoughts with the world.</p>
                    </div>

                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="font-black text-4xl text-gray-400 sm:text-5xl dark:text-gray-600">#1</div>

                            <h3 className="mt-3 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl dark:text-white">Straightforward account creation process.</h3>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Creating an account has never been simpler. With just a unique username and a valid email address, you can become part of our vibrant social media community. Give up the lengthy sign-up processes for an instant access to all the features you need to connect with others.</p>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://source.unsplash.com/random/360x420" alt="" className="max-lg:w-full mx-auto rounded-lg shadow-lg bg-gray-500"/>
                        </div>
                    </div>

                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <div className="font-black text-4xl text-gray-400 sm:text-5xl dark:text-gray-600">#2</div>

                            <h3 className="mt-3 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl dark:text-white">Never miss an update from your favorite people.</h3>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Crowdly's easy-to-use follow feature makes it effortless to build and maintain meaningful connections on our social media platform - simply follow them and their posts will appear on your personalized feed. This way, you'll be able to stay in the loop at all times.</p>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="https://source.unsplash.com/random/361x421" alt="" className="max-lg:w-full mx-auto rounded-lg shadow-lg bg-gray-500"/>
                        </div>
                    </div>

                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="font-black text-4xl text-gray-400 sm:text-5xl dark:text-gray-600">#3</div>

                            <h3 className="mt-3 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl dark:text-white">Join the conversation and let your voice be heard.</h3>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Whether you want to upvote or downvote a post to show your approval or disapproval, reply to express your thoughts, or quote a post to share it with your own followers, our interactive features allow you to be an active participant in the community.</p>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://source.unsplash.com/random/360x420" alt="" className="max-lg:w-full mx-auto rounded-lg shadow-lg bg-gray-500"/>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-600 dark:text-violet-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Get the pulse of the community.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">Upvote or downvote posts to help determine the most popular content. The "score" lets you discover posts that align with your interests.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-600 dark:text-violet-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Amplify others' voices and yours as well.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">Share other users' posts and add your own commentary. The quoted post appears on your profile, making it easy for revisiting.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-600 dark:text-violet-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Take control of your experience.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">On Crowdly, you can block others - say goodbye to unwanted content and hello to a more personalized and enjoyable social media experience.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-600 dark:text-violet-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Discover the best of our community.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">Whether you're looking for the most upvoted, downvoted, or replied-to content, Crowdly makes it easy to discover what's trending.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-600 dark:text-violet-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Simplify your social media experience.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">Comprehensive documentation designed to make using our platform easy and intuitive will help you get the most out of our platform.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-violet-600 dark:text-violet-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <div className="ml-3">
                                <dt className="text-lg font-bold dark:text-white">Transparency and collaboration.</dt>
                                <dd className="mt-2 text-gray-700 dark:text-gray-300">As an open-source app, our code is available for all to see on <a href="https://github.com/victor891263/crowdly" target="_blank" className="text-violet-600 dark:text-violet-400">GitHub</a>. This allows the people to contribute to Crowdly's development.</dd>
                            </div>
                        </div>
                    </dl>
                </section>

                <section className="bg-violet-600 text-white p-6 rounded-xl flex flex-col justify-center space-y-8 sm:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row dark:bg-violet-400 dark:text-gray-900">
                    <div className="max-w-sm flex flex-col space-y-4 text-center max-lg:mx-auto lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tight leading-none sm:text-4xl">Join us now</h1>
                        <p className="text-lg">Create a Crowdly account and start connecting with the crowd and share your stories!</p>
                    </div>
                    <div className="max-sm:w-full flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
                        <div className="w-full flex max-sm:flex-col">
                            <input type="text" placeholder="example@email.com" className="max-sm:rounded-md outline-none p-3 pl-4 bg-transparent border rounded-l-md placeholder:text-white sm:w-2/3 dark:border-gray-900 dark:placeholder:text-gray-900"/>
                            <button type="button" className="max-sm:rounded-md max-sm:mt-3 p-3 font-semibold rounded-r-md sm:w-1/3 bg-white text-violet-600 dark:bg-gray-900 dark:text-violet-400">Sign up</button>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}


/*

<section className="max-w-lg mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Crowdly is open-source</h2>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Pellentesque viverra, leo id euismod laoreet, nunc risus molestie orci, vel faucibus quam justo id mauris.</p>
                    <button className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-violet-600 text-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 text-gray-50"><path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path></svg>
                        <span className="flex flex-col items-start ml-4 leading-none">
                            <span className="mb-1 text-xs">GET IT ON</span>
                            <span className="font-semibold title-font">Google Play</span>
                        </span>
                    </button>
                </section>

 */