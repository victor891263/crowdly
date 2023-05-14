import React, { ReactNode } from "react"
import Header from "./Header"
import FeedSidebar from "./FeedSidebar"

export default function MainWrapper({ children }: { children: ReactNode }) {
    return (
        <>
            <Header isFeed={true} />
            <div className="
            grid lg:grid-cols-[auto_280px]
            min-h-screen
            container lg:max-w-screen-lg
            mx-auto
            pt-14 sm:pt-16
            px-4 sm:px-6 lg:px-8
            ">
                <div className="lg:border-r lg:pr-8 lg:mr-8">
                    {children}
                </div>
                <div className="top-16 sticky self-start max-lg:hidden">
                    <FeedSidebar />
                </div>
            </div>
        </>
    )
}