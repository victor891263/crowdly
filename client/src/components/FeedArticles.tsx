import React from "react";
import getHelpArticles from "../utilities/getHelpArticles";
import {Link} from "react-router-dom";
import ArrowIcon from "../icons/ArrowIcon";

export default function FeedArticles() {
    const helpArticles = getHelpArticles()

    function returnHelpArticles() {
        let elements: JSX.Element[] = []
        for (let i = 0; i < 3; i++) {
            elements.push(
                <Link className='flex flex-col gap-0.5' to={`/help/articles/${helpArticles[i].id}`} key={i}>
                    <div className='flex items-center justify-between'>
                        <span>{helpArticles[i].title}</span>
                        <ArrowIcon className={'w-4 h-4 -rotate-90'} />
                    </div>
                    <span className='text-sm text-gray-400'>Updated on {helpArticles[i].lastUpdate.toLocaleDateString()}</span>
                </Link>
            )
        }
        return elements
    }

    return (
        <div>
            <h2 className='mb-4'>Articles</h2>
            <div className='space-y-4'>
                {returnHelpArticles()}
            </div>
        </div>
    )
}