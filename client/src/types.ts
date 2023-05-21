type Metadata = {
    id: number
    createdAt: string
    updatedAt: string
}

export type UserTiny = {
    id: number
    username: string
    image?: string
}

export type User = {
    username: string
    image?: string
    about?: string
    name?: string
    link?: string
    follows: number
    followers: number
} & Metadata

export type UserDetailed = {
    followed: boolean
    followingMe: boolean
} & User

export type Post = {
    body: string
    userId: number
    repliedId?: number
    quotedId?: number
    likes: number
    dislikes: number
    replies: number
} & Metadata

export type PostDetailed = {
    User: {
        id: number
        username: string
        image?: string
    }
} & Post

export type Like = {
    postId: number
    userId: number
}

export type Dislike = {
    postId: number
    userId: number
}

export type NotiType = {
    postId?: number,
    isReply: boolean,
    targetUserId: number
    userId: number
    User: {
        id: number
        username: string
        image?: string
    }
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
    id: number,
    topics: string[],
    title: string,
    content: (HeadContent | TextContent | ListContent)[]
}