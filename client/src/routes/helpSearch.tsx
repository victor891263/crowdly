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
            <Header />
            <div style={{ minHeight: `calc(100vh - 226px)` }} className="px-6 lg:px-8 container mx-auto pt-32 pb-16 xl:max-w-screen-xl">
                <h1 className='first-letter:capitalize'>Search results</h1>
                <p className="sm:mt-5 mt-4 text-sm">{result.length} articles found</p>
                <div className="border-t pt-8 mt-9">
                    {result.length > 0 ? (
                        <div className="flex flex-col gap-7 lg:w-8/12 lg:pr-8">
                            {result.map((article, index) => (
                                <div key={index}>
                                    <Link to={`/help/articles/${article.id}`} className="font-medium text-lg text-blue-600 dark:text-blue-400">{article.title}</Link>
                                    <p className="mt-2">{article.content.find(content => content.type === 'text')!.body.slice(0, 200)}...</p>
                                </div>
                            ))}
                        </div>
                    ):(
                        <div className='flex flex-col items-center justify-center py-10 grow'>
                            <TextBalloonIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                            <h2 className='mt-4 mb-1'>No articles found</h2>
                            <span>Sorry to tell you that we have no answers you're looking for.</span>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}