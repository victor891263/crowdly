import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import Footer from "../components/Footer"
import getHelpArticles from "../utilities/getHelpArticles"
import {Article} from "../types"
import SearchBox from "../components/SearchBox";

export default function Help() {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const articles = getHelpArticles()
    const randomIndexes = getRandomNumbers(6, articles.length)
    const [randomArticles, setRandomArticles] = useState(getRandomArticles(articles, randomIndexes))

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

    function executeSearch(e: any) {
        e.preventDefault()
        navigate(`/help/search?keyword=${keyword}`)
    }

    return (
        <>
            <div className="pt-40 pb-20 px-6 container mx-auto xl:max-w-screen-xl">
                <div className='max-w-screen-md space-y-16'>
                    <div>
                        <h1 className='mb-8 text-3xl font-bold'>Hi, we're here to help.</h1>
                        <SearchBox value={keyword} handleChange={e => setKeyword(e.target.value)} handleSubmit={executeSearch} />
                    </div>
                    <div>
                        <h2 className='subtitle'>Shortcuts</h2>
                        <div className="mt-4 md:grid-cols-2 grid gap-y-3 font-medium text-violet-600 ">
                            {randomArticles.map((article, index) => (
                                <Link to={`/help/articles/${article.id}`} className="w-fit" key={index}>{article.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='subtitle'>All topics</h2>
                        <div className="mt-6 grid-cols-2 md:grid-cols-3 grid gap-5 font-medium text-violet-600 ">
                            <Link to="/help/getting started " className="secondary flex flex-col items-center text-center !py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                                <div className="mt-2">Getting started</div>
                            </Link>
                            <Link to="/help/following users" className="secondary flex flex-col items-center text-center !py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                                <div className="mt-2">Following users</div>
                            </Link>
                            <Link to="/help/posts and replies" className="secondary flex flex-col items-center text-center !py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                                <div className="mt-2">Posts and replies</div>
                            </Link>
                            <Link to="/help/likes and dislikes" className="secondary flex flex-col items-center text-center !py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <div className="mt-2">Likes and dislikes</div>
                            </Link>
                            <Link to="/help/quoting posts" className="secondary flex flex-col items-center text-center !py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                                <div className="mt-2">Quoting posts</div>
                            </Link>
                            <Link to="/help/your profile" className="secondary flex flex-col items-center text-center !py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="mt-2">Your profile</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}