import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HelpTopic() {
    const params = useParams();

    const articles = [
        {
            title: "Reporting jobs on Crowdly",
            body: "If you come across a job on Crowdly that you find to be inappropriate, broken, or incorrect, you can flag the job to be removed with your feedback. Check out more information below on how to report a job. We take…"
        },
        {
            title: "Privacy for shared career interests",
            body: "Once you have indicated that you’re open to job opportunities, users of Crowdly's Recruiter product will be able to find you based on your shared career interests when they're searching for profiles. Only recruiters…"
        },
        {
            title: "Automated detection of harmful content",
            body: "The #Hiring feature enables hiring managers in both small businesses and enterprises to signal that they’re hiring on their Crowdly profiles to attract more qualified candidates via their network. Related tasks Apply…"
        }
    ];

    return (
        <>
            <Header />
            <div className="container mx-auto px-6 pt-32 pb-16 text-gray-700 xl:max-w-screen-xl dark:text-gray-300">
                <h1 className="first-letter:capitalize sm:text-3xl font-bold tracking-tight text-2xl text-black dark:text-white">{params.topic}</h1>
                <p className="sm:mt-3 mt-2 text-sm">18 articles</p>
                <div className="border-t pt-8 mt-9 dark:border-gray-700">
                    <div className="flex flex-col gap-7 lg:w-8/12 lg:pr-8">
                        {articles.map((a, i) => (
                            <div key={i}>
                                <h2 className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">{a.title}</h2>
                                <p className="mt-2">{a.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

/*


<ol className="flex h-8 gap-x-2 text-sm italic">
                        <li className="flex items-center">
                            <Link to="/">Help</Link>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                            <Link to="/" className="flex items-center">Getting started</Link>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                            <Link to="/" className="flex items-center">Creating an account</Link>
                        </li>
                    </ol>

*/