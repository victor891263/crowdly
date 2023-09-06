import React, {useContext, useState} from "react"
import setTimeLabel from "../utilities/setTimeLabel"
import {Notification as NotificationType} from "../types"
import {gql, useMutation} from "@apollo/client"
import AvatarIcon from "../icons/AvatarIcon"
import {useNavigate} from "react-router-dom"
import NotificationsContext from "../notificationsContext"
import PopUp from "./PopUp"

export default function Notification({ notification }: { notification: NotificationType }) {
    const [error, setError] = useState('')

    const label = notification.postId ? (notification.isReply ? ' replied to your post' : ' reacted to your post') : ' is now following you'
    const navigate = useNavigate()

    const { state, setState } = useContext(NotificationsContext)!

    const DELETE_NOTIFICATION = gql`
        mutation DeleteNotification($id: ID!) {
            deleteNotification(id: $id)
        }
    `
    const [deleteNotification, deleteOperation] = useMutation(DELETE_NOTIFICATION)

    function handleDelete() {
        deleteNotification({
            variables: { id: notification.id }
        }).then(data => {
            if (data) {
                // update the notification list
                const newNotifications = [...state!].filter(n => n.id !== notification.id)
                setState(newNotifications)

                // redirect user to notification source
                if (notification.postId) navigate(`/posts/${notification.postId}`)
                else navigate(`/users/${notification.userId}`)
            }
        }).catch(error => {
            if (error) setError(error.message)
        })
    }

    return (
        <>
            <PopUp msg={error} color={'red'} />
            <button onClick={handleDelete} disabled={deleteOperation.loading} className="flex items-center justify-between w-full py-5">
                {notification.User ? (
                    <div className='flex items-center space-x-3 sm:space-x-2.5'>
                        {notification.User.image ? (
                            <img src={notification.User.image} className='h-11 w-11 rounded-full' />
                        ):(
                            <AvatarIcon className='h-11 w-11 text-slate-400/50' />
                        )}
                        <div className='space-y-1'>
                            <div>
                                <span className='font-semibold'>{notification.User.username}</span>
                                <span>{label}</span>
                            </div>
                            <div className='sm:hidden text-sm text-slate-400 text-left'>{setTimeLabel(notification.createdAt)}</div>
                        </div>
                    </div>
                ):(
                    <div className='flex items-center space-x-3'>
                        <AvatarIcon className='h-11 w-11 text-slate-400/50' />
                        <div className='space-y-1'>
                            <div>
                                <span className='font-semibold'>[anonymous]</span>
                                <span>{label}</span>
                            </div>
                            <div className='sm:hidden text-sm text-slate-400 text-left'>{setTimeLabel(notification.createdAt)}</div>
                        </div>
                    </div>
                )}
                <span className="max-sm:hidden text-sm text-slate-400">{setTimeLabel(notification.createdAt)}</span>
            </button>
        </>
    )
}