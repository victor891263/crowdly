import {Article} from "../types";

export default function getHelpArticles(): Article[] {
    return [
        {
            id: 1,
            topics: ['getting started'],
            title: 'Signing up on Crowdly',
            content: [
                {
                    type: 'text',
                    body: 'Unlike other social media websites, our platform does not require an email address for registration. Instead, you only need to choose a unique username and a password.'
                },
                {
                    type: 'head',
                    body: 'Signing up'
                },
                {
                    type: 'list',
                    body: [
                        'Click on the "Join" button at the top or the "Create account" and "Join" buttons in the feed and about pages respectively.',
                        'On the registration page, enter a unique username that you want to associate with your account. The username should be distinctive and not already in use by another user.',
                        'Choose a strong password. It is important to select a password that is unique and not easily guessable.',
                        'Once you have entered a unique username and a strong password, click on the "Create account" button to complete the registration process.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Username availability'
                },
                {
                    type: 'text',
                    body: 'Ensuring a unique username is essential to maintain a distinct identity on our social media web app. Here are some important points to consider regarding username availability:'
                },
                {
                    type: 'list',
                    body: [
                        'Usernames must be unique. If a username is already taken by another user, you will need to choose an alternative username.',
                        'If a user decides to delete their account, their username will become available for new users to select.'
                    ]
                }
            ],
            lastUpdate: new Date(2023, 4, 22)
        },
        {
            id: 2,
            topics: ['your profile'],
            title: 'Managing your account',
            content: [
                {
                    type: 'head',
                    body: 'Changing your username'
                },
                {
                    type: 'list',
                    body: [
                        'You can change your username by clicking on the "Edit profile" on your profile page.',
                        'The new username must be unique and not already in use by another user.',
                        'Once you have successfully changed your username, the previous username becomes available for other users to select.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Username availability'
                },
                {
                    type: 'text',
                    body: 'Ensuring a unique username is essential to maintain a distinct identity on our social media web app. Here are some important points to consider regarding username availability:'
                },
                {
                    type: 'list',
                    body: [
                        'Usernames must be unique. If a username is already taken by another user, you will need to choose an alternative username.',
                        'If a user decides to delete their account, their username will become available for new users to select.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Managing your password'
                },
                {
                    type: 'text',
                    body: 'To ensure the security of your account, it is important to manage your password effectively. Here are some key points to remember:'
                },
                {
                    type: 'list',
                    body: [
                        'Your password is essential for accessing your account, and it cannot be changed or revealed once the account is created.',
                        'It is recommended to choose a strong and unique password to prevent unauthorized access to your account.',
                        'Make sure to remember your password and avoid sharing it with others.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Adding a bio'
                },
                {
                    type: 'text',
                    body: `With a character limit of 255, it's essential to make every word count and write a compelling introductory paragraph about yourself.`
                },
                {
                    type: 'list',
                    body: [
                        'Go to your profile page and click on the "Edit profile" button.',
                        'In the window that appeared, type your bio in the "About you" section.',
                        'You can include relevant links in your bio.',
                        'The bio cannot contain more than 255 characters.'
                    ]
                },
            ],
            lastUpdate: new Date(2023, 4, 22)
        },
        {
            id: 3,
            topics: ['getting started', 'posts and replies'],
            title: 'Creating a post',
            content: [
                {
                    type: 'text',
                    body: 'A post allows you to communicate with the wider audience of Crowdly, expressing your thoughts, sharing updates, or engaging in discussions. To create a post, follow these steps:'
                },
                {
                    type: 'list',
                    body: [
                        'Locate the text box provided for creating posts. In desktop view, this text box is always visible, except on the "about" and "help" sections. In mobile view, you can find it on the "feed" and "trending" pages.',
                        'Enter your desired content within the character limit of 255. Keep in mind that brevity and clarity can make your post more impactful.',
                        'Once you have written your post, click on the "submit" button below the text box to publish it.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Visibility and engagement'
                },
                {
                    type: 'text',
                    body: 'Once your post is submitted, it becomes visible to everyone on Crowdly. Here are some important points to understand:'
                },
                {
                    type: 'list',
                    body: [
                        'Your post will appear in your own feed, allowing you to easily keep track of your own activity.',
                        'Users who follow you will see your post in their respective feeds, increasing its visibility among your followers.',
                        'Other users can interact with your post by giving it a like or dislike. This provides a way for users to express their reaction to your content.',
                        'Additionally, users can reply to your post, initiating a conversation and encouraging further engagement.'
                    ]
                },
            ],
            lastUpdate: new Date(2023, 4, 22)
        },
        {
            id: 4,
            topics: ['posts and replies'],
            title: 'Editing a post',
            content: [
                {
                    type: 'text',
                    body: `Editing a post allows you to update its content and ensure the accuracy and relevance of your messages. Here, we\'ll guide you through the steps of editing a post, highlight important considerations, and clarify the impact of post editing on user interactions. To edit a post, follow these steps:`
                },
                {
                    type: 'list',
                    body: [
                        'Locate the post you wish to edit on the respective page or within your feed.',
                        'Click on the "edit" button associated with the post. This will open the edit window, enabling you to modify the post\'s content.',
                        'Make the desired changes to the post by modifying the text in the textbox provided.',
                        'Once you are satisfied with the edits, click the "submit" button to save the updated post.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Visibility and notifications'
                },
                {
                    type: 'text',
                    body: 'After editing a post, it is important to understand the impact on its visibility and notifications:'
                },
                {
                    type: 'list',
                    body: [
                        'The updated post will be immediately visible to anyone who views it, including users who have already seen the original version.',
                        'No notifications are sent to users when a post is edited. Therefore, changes made to a post will not be explicitly brought to the attention of others.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Revision history and record-keeping'
                },
                {
                    type: 'text',
                    body: 'On Crowdly, there is no revision history or record-keeping of previous changes made to a post. Once a post is edited and saved, only the most recent version is accessible. It is essential to exercise caution and review your edits before submitting, as previous versions cannot be retrieved or referenced.'
                },
                {
                    type: 'head',
                    body: 'User interactions and editing'
                },
                {
                    type: 'text',
                    body: 'Editing a post does not affect the ability of users to react or reply to it. Users can still engage with the post, provide likes or dislikes, and participate in conversations by replying to the edited version of the post.'
                },
            ],
            lastUpdate: new Date(2023, 4, 22)
        },
        {
            id: 5,
            topics: ['posts and replies'],
            title: 'Deleting a post',
            content: [
                {
                    type: 'text',
                    body: `Deleting a post allows you to remove your content from the platform. Here, we'll explain the steps to delete a post, highlight the consequences of deletion, and emphasize that deleted posts cannot be recovered. To delete a post:`
                },
                {
                    type: 'list',
                    body: [
                        'Visit the post page containing the post you want to delete.',
                        'Click on the "edit" button associated with the post. This will open the edit window.',
                        'Within the edit window, locate the delete button positioned at the bottom-left corner.',
                        'Click on the delete button to remove the post permanently from the platform.\n'
                    ]
                },
                {
                    type: 'head',
                    body: `Consequences of post deletion`
                },
                {
                    type: 'list',
                    body: [
                        'All reactions made to the post, including likes, dislikes, and other responses, will be removed and no longer visible to users.',
                        'Any quotes or replies associated with the post will also be deleted, resulting in the removal of related discussions and conversations.',
                        'Deleted posts cannot be retrieved or restored. Once a post is deleted, it is permanently removed from the platform.'
                    ]
                },
            ],
            lastUpdate: new Date(2023, 4, 22)
        },
        {
            id: 6,
            topics: ['getting started', 'quoting posts'],
            title: 'Quoting a post',
            content: [
                {
                    type: 'text',
                    body: 'Quoting allows you to share a post from another user while adding your own commentary. By quoting a post, you create a new post that combines the original content with your thoughts, which will be visible on your profile. To quote a post on Crowdly, follow these simple steps:'
                },
                {
                    type: 'list',
                    body: [
                        'Click on the option to quote the post',
                        'A quote window will appear, allowing you to add your own commentary to the quoted post.',
                        'Enter your commentary in the provided text box, expressing your thoughts or providing context to the original post.',
                        'Enter your commentary in the provided text box, expressing your thoughts or providing context to the original post.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Interactivity of quoted posts'
                },
                {
                    type: 'text',
                    body: 'Quoted posts on Crowdly possess the same interactive features as other posts. Here are the key points to understand:'
                },
                {
                    type: 'list',
                    body: [
                        'Users can like, dislike, and reply to your quoted post, providing feedback and engaging in conversations.',
                        'Quoted posts can be further quoted by other users, allowing for the expansion of discussions and the sharing of perspectives.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Editing and deletion of quoted posts'
                },
                {
                    type: 'text',
                    body: 'Similar to other posts, you have the ability to edit or delete quoted posts on Crowdly. The consequences of editing or deleting a quoted post are as follows:'
                },
                {
                    type: 'list',
                    body: [
                        'Editing a quoted post allows you to modify both your commentary and the original content. The changes made will be reflected in the quoted post.',
                        'Deleting a quoted post will remove it from your profile and also eliminate all associated likes, dislikes, replies, and any subsequent quotes. Deleted quoted posts cannot be recovered.'
                    ]
                },
            ],
            lastUpdate: new Date(2023, 4, 22)
        },
        {
            id: 7,
            topics: ['posts and replies'],
            title: 'Replying to a post',
            content: [
                {
                    type: 'text',
                    body: 'Replying allows you to engage in conversations and interact with posts submitted by other users. Here, we\'ll explain how to reply to a post, discuss the visibility and interactive aspects of replies, and outline the editing and deletion options for your replies. To reply to a post:'
                },
                {
                    type: 'list',
                    body: [
                        'Visit the page of the post you want to reply to on Crowdly.',
                        'Locate the textbox directly underneath the post, positioned above existing replies.',
                        'Type your reply in the provided textbox, expressing your thoughts, sharing insights, or engaging with the original post.',
                        'Once you have composed your reply, click the "submit" button to post it.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Visibility and interactivity of replies'
                },
                {
                    type: 'list',
                    body: [
                        'Your reply will be visible to anyone who visits the post page, allowing for broader engagement and participation in discussions.',
                        'Users can express their reaction to your reply by giving it a like or dislike, encouraging feedback and indicating agreement or disagreement.',
                        'Anyone can reply to your reply, initiating a chain of conversations and facilitating a diverse exchange of perspectives.',
                        'It is also possible for users to quote your reply, further expanding on its content and sharing it along with their commentary.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Notifications and reply interactions'
                },
                {
                    type: 'text',
                    body: 'When you reply to a post on Crowdly, the user who made the original post will receive a notification, alerting them to your response. This encourages meaningful interactions and increases the likelihood of continued engagement between users.'
                },
                {
                    type: 'head',
                    body: 'Editing and deleting replies'
                },
                {
                    type: 'list',
                    body: [
                        'Editing a reply allows you to modify its content, providing an opportunity to clarify or enhance your response.',
                        'Deleting a reply will remove it from the post page, along with all associated likes, dislikes, quotes, and replies. Deleted replies cannot be recovered.'
                    ]
                },
            ],
            lastUpdate: new Date(2023, 4, 22)
        },
        {
            id: 8,
            topics: ['getting started', 'likes and dislikes'],
            title: 'Liking and disliking',
            content: [
                {
                    type: 'text',
                    body: 'Reacting allows you to express your agreement or disagreement with a post through likes and dislikes. To react to a post on Crowdly, follow these steps:'
                },
                {
                    type: 'list',
                    body: [
                        'Locate the post you wish to react to on Crowdly.',
                        'Click on the respective "like" or "dislike" button associated with the post.',
                        'By clicking the button, you express your agreement or disagreement, or simply indicate whether you like or dislike the post.'
                    ]
                },
                {
                    type: 'text',
                    body: 'Each post on Crowdly displays the total number of likes and dislikes it has received. This information provides an overview of the overall sentiment and reception of the post within the community.'
                },
                {
                    type: 'head',
                    body: 'Managing reactions'
                },
                {
                    type: 'list',
                    body: [
                        'You can remove your like or dislike from a post at any time by clicking on the respective reaction button again.',
                        'You can switch from liking a post to disliking a post, or vice versa, by clicking on the opposite reaction button.',
                        'It is important to note that you cannot like and dislike a post simultaneously. You can only choose one reaction for each post.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Notifications'
                },
                {
                    type: 'text',
                    body: 'When you like or dislike a post on Crowdly, a notification will be sent to the user who made the post. This notification informs them about the reaction received and encourages engagement and further interactions. When someone else likes or dislikes your posts, quotes, and replies, you will be notified too.'
                },
                {
                    type: 'head',
                    body: 'Limitations'
                },
                {
                    type: 'text',
                    body: `You cannot like or dislike posts that you have made, including replies and quotes. This limitation ensures that the reaction feature remains focused on engaging with others' content and promoting diverse perspectives within the community.`
                },
            ],
            lastUpdate: new Date(2023, 4, 22)
        },
        {
            id: 9,
            topics: ['getting started', 'following users'],
            title: 'Following a user',
            content: [
                {
                    type: 'text',
                    body: 'Following a user allows you to establish connections and curate your feed by receiving updates on their submitted posts. To follow a user on Crowdly, follow these steps:'
                },
                {
                    type: "list",
                    body: [
                        'Find the profile of the user you wish to follow.',
                        'Click on the "Follow" button associated with their profile.'
                    ]
                },
                {
                    type: 'head',
                    body: 'Visibility of posts'
                },
                {
                    type: 'text',
                    body: `If you go to the "feed" page after you've just created a new account, it'll be empty as you haven't followed any users yet. When you follow a user, the posts they submitted will appear on your feed, assuming that they've submitted posts at all.`
                },
                {
                    type: 'text',
                    body: `Just as you see posts from users you follow, your own posts will appear in the feeds of users who follow you. This reciprocal connection ensures that your content reaches a wider audience within the Crowdly community.`
                },
                {
                    type: 'head',
                    body: 'Unfollowing'
                },
                {
                    type: 'text',
                    body: `You can unfollow a user anytime by clicking the "Unfollow" button associated with their profile. Unfollowing a user will remove their posts from your feed. If you decide to re-establish a connection with a user you previously unfollowed, simply click the "Follow" button on their profile again.`
                },
                {
                    type: 'head',
                    body: 'Notifications'
                },
                {
                    type: 'text',
                    body: `When you follow a user on Crowdly, a notification will be sent to that user. This notification informs them that you have chosen to connect with them on the platform, fostering engagement and potential interactions.`
                },
                {
                    type: 'text',
                    body: `If a user decides to delete their profile on Crowdly, all their posts and associated reactions will be removed from the platform. If you were following such a user, their posts will no longer appear in your feed. This ensures that the content you see remains relevant and up-to-date.`
                },
            ],
            lastUpdate: new Date(2023, 4, 22)
        }
    ]
}