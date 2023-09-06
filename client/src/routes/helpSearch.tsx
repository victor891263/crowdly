import React from "react"
import Header from "../components/Header";
import {Link, useSearchParams} from "react-router-dom";
import Footer from "../components/Footer";
import getHelpArticles from "../utilities/getHelpArticles";
import TextBalloonIcon from "../icons/TextBalloonIcon";

export default function HelpSearch() {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('keyword') as string

    const articles = getHelpArticles()
    const result = articles.filter(article => article.content.some(c => c.body.includes(keyword)))

    return (
        <>
            <div style={{ minHeight: `calc(100vh - 226px)` }} className="px-6 container mx-auto pt-40 pb-20 xl:max-w-screen-xl">
                <h1 className='first-letter:capitalize text-3xl font-bold'>Search results</h1>
                <div className="mt-4 text-slate-400">{result.length} articles found</div>
                <div className="mt-14 max-w-screen-md">
                    {result.length > 0 ? (
                        <div className="space-y-9">
                            {result.map((article, index) => (
                                <div key={index}>
                                    <Link to={`/help/articles/${article.id}`} className="font-semibold text-lg text-violet-600">{article.title}</Link>
                                    <p className="mt-3 line-clamp-2">{article.content.find(content => content.type === 'text')!.body}</p>
                                </div>
                            ))}
                        </div>
                    ):(
                        <div className='flex flex-col justify-center py-10 grow'>
                            <TextBalloonIcon slash={true} className={'h-10 w-10 text-slate-400/60 dark:text-gray-600'} />
                            <h2 className='mt-5 subtitle'>No articles found</h2>
                            <p className='mt-3'>Sorry to tell you that we don't have the answers you're looking for.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}