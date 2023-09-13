import React, {useState} from 'react'
import UserWrapper from "../components/userWrapper"
import DropDown from "../components/DropDown"
import AllPosts from "../components/AllPosts"
import PostsForFeed from "../components/PostsForFeed"
import getCurrentUser from "../utilities/getCurrentUser"

export default function Home() {
    const [showing, setShowing] = useState('All')
    const [sortBy, setSortBy] = useState<'Date' | 'Engagement' | 'Points'>('Date')

    const currentUser = getCurrentUser()

    return (
        <UserWrapper>
            <div className='flex max-[500px]:flex-col sm:justify-between pb-9 border-b'>
                <div className='flex max-[500px]:flex-col max-[500px]:space-y-3 min-[500px]:space-x-2.5'>
                    {currentUser && (
                        <DropDown label={'Show'} list={['All', 'Feed']} value={showing} handleClick={i => setShowing(i)} className={'min-[500px]:w-36'} />
                    )}
                    <DropDown label={'Sort by'} list={['Date', 'Engagement', 'Points']} value={sortBy} handleClick={i => setSortBy(i as ('Date' | 'Engagement'))} className={'min-[500px]:w-52'} />
                </div>
                <button className='hidden primary max-sm:ml-2.5 max-[500px]:ml-0 max-[500px]:mt-3'>Apply</button>
            </div>
            {showing === 'All' && <AllPosts sortBy={sortBy} />}
            {showing === 'Feed' && <PostsForFeed sortBy={sortBy} />}
        </UserWrapper>
    )
}