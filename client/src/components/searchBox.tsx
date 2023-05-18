import React, {useState} from "react"
import {useNavigate} from "react-router-dom";
import BoxFullScreen from "./BoxFullScreen";

export default function SearchBox({ close }: { close: () => void }) {
    const [keyword, setKeyword] = useState('')
    const [target, setTarget] = useState<'post' | 'username'>('post')
    const navigate = useNavigate()

    function executeSearch() {
        navigate(`/search?${target}=${keyword}`)
    }

    function toggleTarget() {
        if (target === 'post') setTarget('username')
        if (target === 'username') setTarget('post')
    }

    return (
        <BoxFullScreen close={close}>
            <>
                <h2 className='text-xl mb-6'>Search</h2>
                <div className='sm:hidden flex justify-between border py-2 px-3 rounded-lg'>
                    <span>I'm looking for {target === 'post' ? 'posts' : 'users'}</span>
                    <button onClick={toggleTarget}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 rotate-90"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>
                    </button>
                </div>
                <div className="relative mt-2.5 mx-auto flex">
                    <button onClick={toggleTarget} className='max-sm:hidden flex items-center gap-1 px-3.5 border rounded-lg mr-2'>
                        <span>{target === 'post' ? 'Post' : 'User'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>
                    </button>
                    <input onChange={e => setKeyword(e.target.value)} value={keyword} type="text" name="Search" placeholder="Type keyword" className="w-full py-2.5 px-3.5 pr-11 dark:bg-zinc-700/50"/>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button onClick={executeSearch} type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-700 dark:text-gray-300"><path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path></svg>
                        </button>
                    </span>
                </div>
            </>
        </BoxFullScreen>
    )
}