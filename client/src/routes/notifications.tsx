import React, {useContext} from "react"
import Notification from '../components/Notification'
import TextBalloonIcon from "../icons/TextBalloonIcon"
import NotificationsContext from "../notificationsContext"
import UserWrapper from "../components/userWrapper"
import GenericLoading from "../components/GenericLoading"
import GenericError from "../components/GenericError"

export default function Notifications() {
    const { state, error } = useContext(NotificationsContext)!

    return (
        <UserWrapper>
            <div className='min-h-full w-full'>
                <h2 className='mb-8 subtitle'>Notifications</h2>
                {(!(state || error)) && <GenericLoading />}
                {error && <GenericError msg={error} />}
                {state && (
                    state.length > 0 ? (
                        <div className='divide-y w-full'>
                            {state.map(notification => (
                                <Notification notification={notification} />
                            ))}
                        </div>
                    ):(
                        <div className='flex items-center justify-center h-full'>
                            <div className='text-center max-w-md'>
                                <TextBalloonIcon slash={true} className='h-10 w-10 text-slate-400/60 mx-auto dark:text-gray-600' />
                                <div className='mt-5 subtitle'>No notifications found</div>
                                <p className='mt-3'>It looks like there hasn't been anything worth your attention.</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </UserWrapper>
    )
}
