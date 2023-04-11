import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HelpArticle() {
    const params = useParams();

    return (
        <>
            <Header />
            <div className="container mx-auto px-6 pt-32 pb-16 text-gray-700 xl:max-w-screen-xl dark:text-gray-300">
                <h1 className="first-letter:capitalize sm:text-3xl font-bold tracking-tight text-2xl text-black dark:text-white">{params.article}</h1>
                <div className="sm:mt-3 mt-2 text-sm">Last updated 2 days ago</div>
                <div className="flex border-t pt-8 mt-9 dark:border-gray-700">
                    <div className="lg:w-8/12 lg:pr-8">
                        <div className="flex flex-col gap-4 leading-relaxed whitespace-pre-wrap">
                            <p>Crossposting is an easy way to take a post from one community and share it with another community. When you crosspost content, the crosspost includes an embed of the original post, along with the username, community, and karma score on the original post. This gives your fellow redditors a way to find the original source of the content while also providing ways to get more exposure for the original content and the community it was posted in.</p>
                            <h3 className="pt-4 font-semibold text-lg text-black dark:text-white">Can I Crosspost anywhere?</h3>
                            <p>No. Not all communities allow crossposting and you must first be a member of a community to crosspost there. If a community does not allow crossposted content and you are a member of that community, the option to select that community will be greyed out during the selection process.</p>
                            <h3 className="pt-4 font-semibold text-lg text-black dark:text-white">What are some Crossposting best practices I should know?</h3>
                            <p>You should only crosspost content that is relevant to the community you are posting in. Crossposting content randomly in various, unrelated communities can be seen as spammy behavior which may reflect poorly on you and the community you’re crossposting from.</p>
                        </div>
                        <div className="lg:hidden mt-10 pt-8 border-t dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-black dark:text-white">Tagged in</h3>
                            <div className="flex gap-2 mt-4">
                                <div className="border rounded py-2 px-3 text-indigo-600 font-semibold dark:border-gray-700 dark:text-indigo-400">Getting started</div>
                                <div className="border rounded py-2 px-3 text-indigo-600 font-semibold dark:border-gray-700 dark:text-indigo-400">Data and privacy</div>
                            </div>
                        </div>
                        <div className="lg:hidden mt-10 pt-8 border-t dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-black dark:text-white">Related articles</h3>
                            <Link to="/" className="block w-fit mt-3.5 font-semibold text-indigo-600 dark:text-indigo-400">How do I save a post and where does it get saved?</Link>
                            <Link to="/" className="block w-fit mt-3.5 font-semibold text-indigo-600 dark:text-indigo-400">What are community content tags and how do they work and how can I get one?</Link>
                            <Link to="/" className="block w-fit mt-3.5 font-semibold text-indigo-600 dark:text-indigo-400">What can I do to get my posts noticed?</Link>
                        </div>
                        <div className="mt-10 pt-8 border-t flex flex-col items-center dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-black dark:text-white">Was this article useful?</h3>
                            <div className="flex gap-2 mt-4 font-semibold text-indigo-600 dark:text-indigo-400">
                                <button className="block border rounded py-2 px-6 dark:border-gray-700">Yes</button>
                                <button className="block border rounded py-2 px-6 dark:border-gray-700">No</button>
                            </div>
                            <p className="mt-4 text-sm">199 out of 274 found this helpful</p>
                        </div>
                        <div className="mt-10 pt-8 md:pt-10 border-t grid grid-cols-2 gap-4 dark:border-gray-700">
                            <Link to="/" className="block md:border rounded-md md:py-3 md:px-4 dark:border-gray-700">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="rotate-180 w-3 h-auto inline"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                    <div className="inline md:text-sm ml-1">Previous article</div>
                                </div>
                                <div className="max-md:hidden mt-0.5 font-semibold text-indigo-600 dark:text-indigo-400">Conditional Rendering</div>
                            </Link>
                            <Link to="/" className="text-right block md:border rounded-md md:py-3 md:px-4 dark:border-gray-700">
                                <div>
                                    <div className="inline md:text-sm mr-1">Next article</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-auto inline"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                </div>
                                <div className="max-md:hidden mt-0.5 font-semibold text-indigo-600 dark:text-indigo-400">Event Handling</div>
                            </Link>
                        </div>
                    </div>

                    <div className="max-lg:hidden w-4/12 pl-8 border-l dark:border-gray-700">
                        <h3 className="font-semibold text-lg text-black dark:text-white">Tagged in</h3>
                        <div className="flex gap-2 mt-4">
                            <div className="border rounded py-2 px-3 text-indigo-600 font-semibold dark:border-gray-700 dark:text-indigo-400">Getting started</div>
                            <div className="border rounded py-2 px-3 text-indigo-600 font-semibold dark:border-gray-700 dark:text-indigo-400">Data and privacy</div>
                        </div>
                        <h3 className="mt-8 font-semibold text-lg text-black dark:text-white">Related articles</h3>
                        <Link to="/" className="block w-fit mt-3.5 font-semibold text-indigo-600 dark:text-indigo-400">How do I save a post and where does it get saved?</Link>
                        <Link to="/" className="block w-fit mt-3.5 font-semibold text-indigo-600 dark:text-indigo-400">What are community content tags and how do they work and how can I get one?</Link>
                        <Link to="/" className="block w-fit mt-3.5 font-semibold text-indigo-600 dark:text-indigo-400">What can I do to get my posts noticed?</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

/*

BREADCRUMBS

<ol className="text-sm italic leading-6">
                        <Link to="/" className="inline">Help</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-auto inline mx-1.5 mb-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        <Link to="/" className="inline">Getting started</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-auto inline mx-1.5 mb-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        <Link to="/" className="inline">Creating an account</Link>
                    </ol>

RELATED ARTICLES IN SINGLE-COLUMN FORMAT

<div className="mt-10 pt-10 border-t dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-black dark:text-white">Related articles</h3>
                            <Link to="/" className="block w-fit mt-4 font-semibold text-indigo-600 dark:text-indigo-400">How do I save a post and where does it get saved?</Link>
                            <Link to="/" className="block w-fit mt-3 font-semibold text-indigo-600 dark:text-indigo-400">What are community content tags and how do they work?</Link>
                            <Link to="/" className="block w-fit mt-3 font-semibold text-indigo-600 dark:text-indigo-400">What can I do to get my posts noticed?</Link>
                        </div>

 */