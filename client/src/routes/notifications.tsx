import React, {useEffect, useState} from "react"
import getCurrentUser from "../utilities/getCurrentUser"
import ExclaimIcon from "../icons/ExclaimIcon"
import MainWrapper from "../components/MainWrapper"
import RetrievalWrapper from "../components/RetrievalWrapper"
import SkeletonProfiles from "../components/SkeletonProfiles"
import Notification from '../components/Notification'
import TextBalloonIcon from "../icons/TextBalloonIcon"
import axios from "axios"
import handleError from "../utilities/handleError"
import {NotiType as NotiType} from "../types"
import {useNavigate} from "react-router-dom";
import PopUp from "../components/PopUp";
import getToken from "../utilities/getToken";

export default function Notifications() {
    const [notis, setNotis] = useState<NotiType[] | null>(null)
    const [error, setError] = useState('')
    const [deleteError, setDeleteError] = useState('')
    const currentUser = getCurrentUser()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/notifications`, {
            headers: {
                Authorization: getToken()
            }
        })
            .then(response => {
                setNotis(response.data)
            })
            .catch(error => {
                handleError(error, (msg: string) => setError(msg))
            })
    }, [])

    function deleteNoti(e:any, noti: NotiType) {
        e.currentTarget.disabled = true
        axios.delete(`${process.env.REACT_APP_API_URL}/notifications/${noti.id}`, {
            headers: {
                Authorization: getToken()
            }
        })
            .then(() => {
                navigate((noti.postId ? `/posts/${noti.postId}` : `/users/${noti.userId}`))
            })
            .catch(error => {
                handleError(error, (msg: string) => setDeleteError(msg))
                e.currentTarget.disabled = false
            })
    }

    if (!currentUser) return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <ExclaimIcon className={'h-8 w-8 text-gray-400'} triangle={true} />
            <h2 className='mt-4 mb-1'>Access denied</h2>
            <span>You must be logged in to view this page.</span>
        </div>
    )

    return (
        <MainWrapper>
            {deleteError && <PopUp msg={deleteError} />}
            <div className='divide-y min-h-full flex flex-col'>
                <div className="pb-6 pt-0.5 flex items-center justify-between">
                    <h2>Notifications</h2>
                </div>
                <RetrievalWrapper data={notis} error={error} skeleton={<SkeletonProfiles />}>
                    {(notis && notis.length > 0) ? (
                        <>
                            {notis.map((noti, index) => (
                                <Notification noti={noti} handleClick={deleteNoti} key={index} />
                            ))}
                            <span className='block pt-4 pb-8 text-center text-sm text-gray-400'>End of results</span>
                        </>
                    ):(
                        <div className='flex flex-col items-center justify-center py-10 grow'>
                            <TextBalloonIcon slash={true} className={'h-8 w-8 text-gray-400'} />
                            <h2 className='mt-4 mb-1'>No notifications found</h2>
                            <span>It looks like there hasn't been anything worth your attention.</span>
                        </div>
                    )}
                </RetrievalWrapper>
            </div>
        </MainWrapper>
    )
}