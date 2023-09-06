import BellIcon from "../icons/BellIcon"
import React, {useContext} from "react"
import {Link} from "react-router-dom"
import NotificationsContext from "../notificationsContext"
import PopUp from "./PopUp"

export default function NotificationButton() {
    const { state, error } = useContext(NotificationsContext)!

    return (
        <>
            {error && <PopUp msg={error} color={'red'} />}
            <Link to={`/notifications`} className='relative'>
                {state && (
                    <div className='absolute -top-[5px] -right-[5px] text-[0.625rem] text-white bg-violet-600 rounded pt-0.5 px-1'>
                        <span className='leading-[0px]'>{state.length}</span>
                    </div>
                )}
                <BellIcon className={'h-5 w-5'} />
            </Link>
        </>
    )
}