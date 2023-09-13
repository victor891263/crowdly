module.exports =`#graphql
    type User {
        id: ID!
        createdAt: String
        updatedAt: String
        email: String
        newEmail: String
        username: String!
        name: String
        about: String
        link: String
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
        points: Int!
        quotes: Int!
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
        isQuote: Boolean!
        targetUserId: Int!
        seen: Boolean!
        userId: Int!
        User: User
    }
    type Query {
        verifyUser(id: ID!): String
        verifyNewEmail(id: ID!): Boolean
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
        sendRecoveryInstructions(email: String!): Boolean
        resetAccount(id: ID!, password: String!): Boolean
        login(input: LoginInput!): String
        addUser(input: AddUserInput!): String
        followUser(id: ID!): Boolean
        addPost(input: AddPostInput!): String
        likePost(id: ID!): Boolean
        dislikePost(id: ID!): Boolean
        cancelEmailUpdate: Boolean
        editUser(input: EditUserInput!, newImg: String): User
        editUserEmail(email: String!): Boolean
        editUserPassword(currentPassword: String!, newPassword: String!): Boolean
        editPost(input: EditPostInput!, id: ID!): Boolean
        deleteUser: Boolean
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
        email: String!
        username: String!
        password: String!
    }
    input AddPostInput {
        body: String!
        repliedId: String
        quotedId: String
        targetUserId: String
    }
    input EditUserInput {
        username: String
        name: String
        about: String
        link: String
        image: String
    }
    input EditPostInput {
        body: String!
    }
`