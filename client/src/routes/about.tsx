import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import women from "../assets/images/women.jpg";

export default function About() {
    return (
        <>
            <Header />
            <section className="container max-w-xl px-6 pt-40 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="max-w-xl mx-auto text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Crowdly is a <span className="text-violet-600">trouble-free</span> social platform.</h2>
                    <p className="max-w-xl mx-auto mt-6 text-xl text-center text-gray-700">Designed to bring people together and inspire meaningful conversations, Crowdly helps you discover new connections and share your thoughts with the world.</p>
                </div>
                <div className="grid lg:grid-cols-2 lg:items-center">
                    <div className="max-w-md justify-self-center">
                        <span className="text-xs font-semibold tracking-wider uppercase text-violet-600">build your circle</span>
                        <h3 className="mt-2 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Create an invite-only place where you belong.</h3>
                        <p className="mt-5 text-lg text-gray-700">Discord is about giving people the power to create space to find belonging in their lives. We want to make it easier for you to talk regularly with the people you care about, close to home or around the world.</p>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src="https://source.unsplash.com/random/480x320" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500"/>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 lg:items-center">
                    <div className="max-w-md justify-self-center">
                        <span className="text-xs font-semibold tracking-wider uppercase text-violet-600">build your circle</span>
                        <h3 className="mt-2 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Create an invite-only place where you belong.</h3>
                        <p className="mt-5 text-lg text-gray-700">Discord is about giving people the power to create space to find belonging in their lives. We want to make it easier for you to talk regularly with the people you care about, close to home or around the world.</p>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <img src="https://source.unsplash.com/random/481x321" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500"/>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="px-4 py-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-lg mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">All the features you want</h2>
                        <p className="mt-4 text-lg text-gray-600">Pellentesque viverra, leo id euismod laoreet, nunc
                            risus molestie orci, vel faucibus quam justo id mauris.</p>
                    </div>
                    <dl className="max-w-5xl mx-auto mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-violet-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Quisque at urna</dt>
                                <dd className="mt-2 text-gray-600">Vivamus ultricies bibendum tortor, molestie imperdiet justo cursus eu. Donec quis arcu magna.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-violet-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
                                <dd className="mt-2 text-gray-600">Quisque ultricies volutpat sapien nec varius. Sed sit
                                    amet justo vestibulum, efficitur risus quis, gravida libero.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-violet-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Mauris dignissim</dt>
                                <dd className="mt-2 text-gray-600">Phasellus nec molestie arcu. Proin dictum, lorem mollis rutrum efficitur, lectus velit pharetra elit.</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-violet-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
                                <dd className="mt-2 text-gray-600">Cras a mauris tincidunt, scelerisque justo sit amet,
                                    hendrerit est. Fusce venenatis diam fringilla metus.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-violet-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cras vel bibendum tellus</dt>
                                <dd className="mt-2 text-gray-600">Curabitur molestie neque ac massa pulvinar, nec
                                    sollicitudin nunc consequat. Donec mattis orci eros.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 text-violet-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Dignissim magna</dt>
                                <dd className="mt-2 text-gray-600">Cras ac lectus erat. Curabitur condimentum luctus
                                    nisi, non lacinia ipsum ultricies bibendum tortor.
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </section>
            <Footer />
        </>
    )
}


/*




<h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Crowdly is a <span className="text-violet-600">trouble-free</span> social platform.</h1>
                    <p className="mt-4 sm:mt-6 sm:text-xl sm:leading-relaxed">Designed to bring people together and inspire meaningful conversations, Crowdly helps you discover new connections and share your thoughts with the world.</p>



 */