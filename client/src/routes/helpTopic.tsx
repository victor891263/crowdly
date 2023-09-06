import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer from "../components/Footer"
import getHelpArticles from "../utilities/getHelpArticles"

export default function HelpTopic() {
    const { topic } = useParams();
    const articles = getHelpArticles()
    const relevantArticles = articles.filter(article => article.topics.includes(topic as string))

    return (
        <>
            <div style={{ minHeight: `calc(100vh - 226px)` }} className="px-6 container mx-auto pt-40 pb-20 xl:max-w-screen-xl">
                <h1 className='first-letter:capitalize text-3xl font-bold'>{topic}</h1>
                <div className="mt-4 text-slate-400">{relevantArticles.length} articles</div>
                <div className="mt-14 space-y-9 max-w-screen-md">
                    {relevantArticles.map((article, index) => (
                        <div key={index}>
                            <Link to={`/help/articles/${article.id}`} className="font-semibold text-lg text-violet-600 ">{article.title}</Link>
                            <p className="mt-3 line-clamp-2">{article.content.find(content => content.type === 'text')!.body}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}