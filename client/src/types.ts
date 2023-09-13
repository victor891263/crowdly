type Metadata = {
    id: string
    createdAt: string
    updatedAt: string
}

export type UserSmall = {
    id: string
    username: string
    image?: string
}

export type User = {
    username: string
    email: string
    newEmail?: string
    image?: string
    about?: string
    name?: string
    link?: string
    follows: number
    followers: number
    followed: boolean
    followingMe: boolean
} & Metadata

export type PostSmall = {
    body: string
    userId: number
    repliedId?: number
    quotedId?: number
    likes: number
    dislikes: number
    points: number
    quotes: number
    replies: number
    User: UserSmall
} & Metadata

export type Post = {
    liked: boolean
    disliked: boolean
    repliedPosts: PostSmall[]
} & PostSmall

export type Notification = {
    postId?: number
    isReply: boolean
    isQuote: boolean
    targetUserId: number
    seen: boolean
    userId: number
    User: UserSmall
} & Metadata

// help section

type HeadContent = {
    type: 'head',
    body: string
}

type TextContent = {
    type: 'text',
    body: string
}

type ListContent = {
    type: 'list',
    body: string[]
}

export type Article = {
    id: number
    topics: string[]
    title: string
    content: (HeadContent | TextContent | ListContent)[]
    lastUpdate: Date
}