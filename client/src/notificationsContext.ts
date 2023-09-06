import {createContext} from "react"
import {Notification} from "./types"

//@ts-ignore
const NotificationsContext = createContext<{
    state: Notification[] | undefined,
    setState: (e: Notification[]) => void,
    error: string,
    setSuccessMsg: (s: string) => void
}>()

export default NotificationsContext