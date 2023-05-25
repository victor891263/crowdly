import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import getHelpArticles from "../utilities/getHelpArticles";

export default function HelpTopic() {
    const { topic } = useParams();
    const articles = getHelpArticles()
    const relevantArticles = articles.filter(article => article.topics.includes(topic as string))

    return (
        <>
            <Header />
            <div style={{ minHeight: `calc(100vh - 226px)` }} className="px-6 lg:px-8 container mx-auto pt-32 pb-16 xl:max-w-screen-xl">
                <h1 className='first-letter:capitalize'>{topic}</h1>
                <p className="sm:mt-5 mt-4 text-sm">{relevantArticles.length} articles</p>
                <div className="border-t pt-8 mt-9">
                    <div className="flex flex-col gap-7 lg:w-8/12 lg:pr-8">
                        {relevantArticles.map((article, index) => (
                            <div key={index}>
                                <Link to={`/help/articles/${article.id}`} className="font-medium text-lg text-blue-600 dark:text-blue-400">{article.title}</Link>
                                <p className="mt-2">{article.content.find(content => content.type === 'text')!.body.slice(0, 200)}...</p>
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