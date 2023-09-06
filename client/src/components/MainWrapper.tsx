import React, {ReactNode, useState} from "react"
import NotificationsContext from "../notificationsContext"
import Header from "./Header"
import useFetchNotifications from "../hooks/useFetchNotifications"
import PopUp from "./PopUp";

export default function MainWrapper({ children }: { children: ReactNode }) {
    const { notifications, setNotifications, error } = useFetchNotifications()
    const [successMsg, setSuccessMsg] = useState('')

    return (
        <NotificationsContext.Provider value={{ state: notifications, setState: setNotifications, error: error ? error.message : '', setSuccessMsg }}>
            <Header />
            <div>{children}</div>
            <PopUp msg={successMsg} color={'green'} />
        </NotificationsContext.Provider>
    )
}