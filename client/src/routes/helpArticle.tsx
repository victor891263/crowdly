import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import getHelpArticles from "../utilities/getHelpArticles";
import {Article} from "../types";

export default function HelpArticle() {
    const { articleId } = useParams()
    const articles = getHelpArticles()
    const article = articles.find(a => a.id === Number(articleId)) as Article

    const previousArticle = articles.find(a => a.id === (Number(articleId) - 1))
    const nextArticle = articles.find(a => a.id === (Number(articleId) + 1))

    const randomIndexes = getRandomNumbers(3, articles.length)
    const randomArticles = getRandomArticles(articles, randomIndexes)

    function getRandomNumbers(n: number, x: number) {
        let randomNumbers: number[] = []
        while (randomNumbers.length < n) {
            let randomNumber = Math.floor(Math.random() * x)
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber)
            }
        }
        return randomNumbers
    }

    function getRandomArticles(a: Article[], indexes: number[]) {
        let result: Article[] = []
        indexes.forEach(i => {
            result.push(a[i])
        })
        return result
    }

    return (
        <>
            <Header />
            <div className="px-4 sm:px-6 lg:px-8 container mx-auto pt-32 pb-16 text-gray-700 lg:max-w-screen-lg dark:text-gray-300">
                <h1 className="first-letter:capitalize">{article.title}</h1>
                <div className="sm:mt-5 mt-4 text-sm">Last updated 2 days ago</div>
                <div className="flex border-t pt-8 mt-9">
                    <div className="lg:w-8/12 lg:pr-10">
                        <div className="flex flex-col gap-4 leading-relaxed whitespace-pre-wrap">
                            {article.content.map((c, i) => {
                                if (c.type === 'head') return (
                                    <h2 className='mt-5 mb-1' key={i}>{c.body}</h2>
                                )
                                if (c.type === 'text') return (
                                    <p key={i}>{c.body}</p>
                                )
                                if (c.type === 'list') return (
                                    <ol className='list-decimal pl-4 space-y-4' key={i}>
                                        {c.body.map((l, j) => (
                                            <li key={j}>{l}</li>
                                        ))}
                                    </ol>
                                )
                            })}
                        </div>
                        <div className="lg:hidden mt-10 pt-8 border-t dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-black dark:text-white">Tagged in</h3>
                            <div className="flex gap-2 flex-wrap mt-4">
                                {article.topics.map((t, i) => (
                                    <Link to={`/help/${t}`} className="first-letter:capitalize border rounded-lg py-2 px-3 text-blue-600 font-medium dark:border-zinc-700 dark:text-blue-400" key={i}>{t}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="lg:hidden mt-10 pt-8 border-t dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-black dark:text-white">Related articles</h3>
                            {randomArticles.map((article, index) => (
                                <Link to={`/help/articles/${article.id}`} className="block w-fit mt-3.5 font-medium text-blue-600 dark:text-blue-400" key={index}>{article.title}</Link>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 md:pt-10 border-t grid grid-cols-2 gap-4">
                            {previousArticle ? (
                                <Link to={`/help/articles/${previousArticle.id}`} className="block md:border rounded-xl md:py-3 md:px-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="rotate-180 w-3 h-auto inline"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                        <div className="inline md:text-sm ml-1">Previous article</div>
                                    </div>
                                    <div className="max-md:hidden mt-0.5 font-semibold text-blue-600 dark:text-blue-400">{previousArticle.title}</div>
                                </Link>
                            ):(
                                <div></div>
                            )}
                            {nextArticle ? (
                                <Link to={`/help/articles/${nextArticle.id}`} className="text-right block md:border rounded-xl md:py-3 md:px-4">
                                    <div>
                                        <div className="inline md:text-sm mr-1">Next article</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-auto inline"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                    </div>
                                    <div className="max-md:hidden mt-0.5 font-semibold text-blue-600 dark:text-blue-400">{nextArticle.title}</div>
                                </Link>
                            ):(
                                <div></div>
                            )}
                        </div>
                    </div>

                    <div className="max-lg:hidden w-4/12 pl-10 border-l">
                        <h3 className="font-semibold text-lg text-black dark:text-white">Tagged in</h3>
                        <div className="flex gap-2 flex-wrap mt-4">
                            {article.topics.map((t, i) => (
                                <Link to={`/help/${t}`} className="first-letter:capitalize border rounded-lg py-2 px-3 text-blue-600 font-medium dark:border-zinc-700 dark:text-blue-400" key={i}>{t}</Link>
                            ))}
                        </div>
                        <h3 className="mt-8 font-semibold text-lg text-black dark:text-white">Related articles</h3>
                        {randomArticles.map((article, index) => (
                            <Link to={`/help/articles/${article.id}`} className="block w-fit mt-3.5 font-medium text-blue-600 dark:text-blue-400" key={index}>{article.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

/*

`WAS THIS ARTICLE USEFUL` SECTION

<div className="mt-10 pt-8 border-t flex flex-col items-center">
    <h3 className="font-semibold text-lg text-black dark:text-white">Was this article useful?</h3>
    <div className="flex gap-2 mt-4 font-medium text-blue-600 dark:text-blue-400">
        <button className="block border rounded-lg py-2 px-6">Yes</button>
        <button className="block border rounded-lg py-2 px-6">No</button>
    </div>
    <p className="mt-4 text-sm">199 out of 274 found this helpful</p>
</div>





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