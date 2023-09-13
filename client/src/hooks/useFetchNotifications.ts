import {useEffect, useState} from "react"
import {Notification as NotificationType} from "../types"
import {gql, useQuery} from "@apollo/client"

export default function useFetchNotifications() {
    const [notifications, setNotifications] = useState<NotificationType[]>()

    const GET_NOTIFICATIONS = gql`
        query GetNotifications {
            notifications {
                id
                createdAt
                updatedAt
                postId
                isReply
                isQuote
                targetUserId
                seen
                userId
                User {
                    id
                    username
                    image
                }
            }
        }
    `
    const { error, data } = useQuery<{ notifications: NotificationType[] }>(GET_NOTIFICATIONS)

    useEffect(() => {
        if (data && (!notifications)) {
            setNotifications(data.notifications)
        }
    }, [data])

    return { notifications, setNotifications, error }
}