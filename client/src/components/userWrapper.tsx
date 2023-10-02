import {ReactNode} from "react"
import getCurrentUser from "../utilities/getCurrentUser"
import {Link} from "react-router-dom"
import FeedFooter from "./FeedFooter"
import AddPost from "./AddPost"

export default function UserWrapper({ children }: { children: ReactNode }) {
    const currentUser = getCurrentUser()

    return (
        <div className='grid lg:grid-cols-[20rem_auto] container lg:max-w-screen-lg mx-auto px-6'>
            {currentUser ? (
                <div className='pt-40 pb-20 pr-10 max-lg:hidden'>
                    <AddPost userId={currentUser.id} />
                    <div className='mt-5'>
                        <FeedFooter />
                    </div>
                </div>
            ):(
                <div className='pt-40 pb-20 pr-10 max-lg:hidden'>
                    <div className='mb-5 bg-slate-100 p-7 pt-6 rounded-xl'>
                        <h2 className='text-lg font-bold tracking-[0] mb-2'>Join Crowdly today</h2>
                        <p>You just need to provide an email and pick a username.</p>
                        <Link to={'/join'} className='mt-5 block w-fit primary'>Get started</Link>
                    </div>
                    <FeedFooter />
                </div>
            )}
            <div className='pt-40 pb-20 min-h-screen'>{children}</div>
        </div>
    )
}