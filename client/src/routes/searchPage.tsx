import React, {useState} from "react"
import UserWrapper from "../components/userWrapper"
import SearchBox from "../components/SearchBox"
import SearchPosts from "../components/SearchPosts"
import SearchUsers from "../components/SearchUsers"
import GlassIcon from "../icons/GlassIcon"

export default function SearchPage() {
    const [input, setInput] = useState('')
    const [keyword, setKeyword] = useState('')
    const [showing, setShowing] = useState<'posts' | 'users'>('posts')

    function handleSearch(e: any) {
        e.preventDefault()
        setKeyword(input)
    }

    return (
        <UserWrapper>
            <div className='min-h-full flex flex-col'>
                <SearchBox value={input} handleChange={e => setInput(e.target.value)} handleSubmit={handleSearch} />
                {keyword.length > 0 ? (
                    <>
                        <div className='mt-8 text-lg font-bold'>Results for "{keyword}"</div>
                        <div className="mt-8 flex font-medium">
                            <button onClick={() => setShowing('posts')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'posts' ? 'text-violet-600 border-violet-600' : '')}>Posts</button>
                            <button onClick={() => setShowing('users')} className={"shrink-0 px-5 py-2.5 border-b " + (showing === 'users' ? 'text-violet-600 border-violet-600' : '')}>Users</button>
                            <div className='border-b flex-grow'></div>
                        </div>
                        <div>
                            {keyword.length > 0 ? (
                                <>
                                    {showing === 'posts' && (
                                        <SearchPosts keyword={keyword} />
                                    )}
                                    {showing === 'users' && (
                                        <SearchUsers keyword={keyword} />
                                    )}
                                </>
                            ):(
                                <div></div>
                            )}
                        </div>
                    </>
                ):(
                    <div className='text-center max-w-md mx-auto py-20'>
                        <GlassIcon className='h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600' />
                        <div className='mt-5 subtitle'>Find anything</div>
                        <p className='mt-3'>Type a keyword into the box above to find posts and users</p>
                    </div>
                )}
            </div>
        </UserWrapper>
    )
}