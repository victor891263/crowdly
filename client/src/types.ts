type metadata = {
    id: number
    createdAt: string
    updatedAt: string
}

export type User = {
    username: string
    image?: string
    about?: string
    name?: string
    link?: string
    follows: number
    followers: number
} & metadata

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
} & metadata

export type PostDetailed = {
    username: string
    image?: string
} & Post

export type Like = {
    postId: number
    userId: number
}

export type Dislike = {
    postId: number
    userId: number
}

export type Follow = {
    followerId: number
    followedId: number
}