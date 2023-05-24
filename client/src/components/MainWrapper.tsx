import React, {ReactNode} from "react"
import Header from "./Header"
import getCurrentUser from "../utilities/getCurrentUser";
import FeedAddPost from "./FeedAddPost";
import FeedJoin from "./FeedJoin";
import FeedArticles from "./FeedArticles";
import FeedFooter from "./FeedFooter";

export default function MainWrapper({ children }: { children: ReactNode }) {
    const currentUser = getCurrentUser()

    return (
        <>
            <Header />
            <div className="
            grid lg:grid-cols-[auto_280px] xl:grid-cols-[240px_auto_280px]
            min-h-screen
            container xl:max-w-screen-xl
            mx-auto
            pt-[4.75rem] sm:pt-[5.5rem]
            pb-8
            px-4 sm:px-6 lg:px-8
            ">
                <div className="top-[5.5rem] sticky self-start max-xl:hidden">
                    {currentUser ? (
                        <FeedAddPost />
                    ):(
                        <FeedJoin />
                    )}
                </div>
                <div className="xl:border-l xl:pl-8 xl:ml-8 lg:border-r lg:pr-8 lg:mr-8 flex flex-col">
                    {children}
                </div>
                <div className="top-[5.5rem] sticky self-start max-lg:hidden">
                    <div className='xl:hidden mb-7 pb-7 border-b'>
                        {currentUser ? (
                            <FeedAddPost />
                        ):(
                            <FeedJoin />
                        )}
                    </div>
                    <FeedArticles />
                    <div className="pt-7 mt-7 text-sm text-gray-400 border-t">
                        <FeedFooter />
                    </div>
                </div>
            </div>
        </>
    )
}