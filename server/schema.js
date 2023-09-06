module.exports =`#graphql
    type User {
        id: ID!
        createdAt: String
        updatedAt: String
        username: String!
        about: String
        image: String
        follows: Int
        followers: Int
        followed: Boolean
        followingMe: Boolean
    }
    type Post {
        id: ID!
        createdAt: String!
        updatedAt: String!
        body: String!
        userId: Int!
        repliedId: Int
        quotedId: Int
        likes: Int!
        dislikes: Int!
        replies: Int!
        liked: Boolean
        disliked: Boolean
        User: User
        repliedPosts: [Post]
    }
    type Notification {
        id: ID!
        createdAt: String!
        updatedAt: String!
        postId: Int
        isReply: Boolean!
        targetUserId: Int!
        userId: Int!
        User: User
    }
    type Query {
        feed: [Post]
        trending: [Post]
        posts(body: String!): [Post]
        postsByUser(id: ID!): [Post]
        post(id: ID!): Post
        users(username: String!): [User]
        user(id: ID!): User
        following(followerId: ID!): [User]
        followers(followedId: ID!): [User]
        notifications: [Notification]
    }
    type Mutation {
        login(input: LoginInput!): String!
        addUser(input: AddUserInput!): String!
        followUser(id: ID!): Boolean
        addPost(input: AddPostInput!): String!
        likePost(id: ID!): Boolean
        dislikePost(id: ID!): Boolean
        editUser(input: EditUserInput!): Boolean
        editPost(input: EditPostInput!, id: ID!): Boolean
        deleteUser(id: ID!): Boolean
        deletePost(id: ID!, repliedId: ID): Boolean
        deleteLike(id: ID!): Boolean
        deleteDislike(id: ID!): Boolean
        unfollow(id: ID!): Boolean
        deleteNotification(id: ID!): Boolean
    }
    input LoginInput {
        username: String!
        password: String!
    }
    input AddUserInput {
        username: String!
        password: String!
    }
    input AddPostInput {
        body: String!
        repliedId: String
        quotedId: String
    }
    input EditUserInput {
        username: String
        about: String
    }
    input EditPostInput {
        body: String!
    }
`