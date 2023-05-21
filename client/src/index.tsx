import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from "./routes/home"
import Help from './routes/help'
import HelpTopic from "./routes/helpTopic"
import HelpArticle from "./routes/helpArticle"
import HelpSearch from "./routes/helpSearch"
import About from './routes/about'
import Auth from './routes/auth'
import Feed from './routes/feed'
import Post from "./routes/post"
import Profile from "./routes/profile"
import ErrorPage from './ErrorPage'
import initTheme from "./utilities/initTheme"
import reportWebVitals from './reportWebVitals'
import SearchResults from "./routes/searchResults";
import Notifications from "./routes/notifications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/feed",
        element: <Feed isFeed={true} />
    },
    {
        path: "/trending",
        element: <Feed />
    },
    {
        path: "/posts/:postId",
        element: <Post />
    },
    {
        path: "/users/:userId",
        element: <Profile showing={'posts'} />
    },
    {
        path: "/users/:userId/follows",
        element: <Profile showing={'follows'} />
    },
    {
        path: "/users/:userId/followers",
        element: <Profile showing={'followers'} />
    },
    {
        path: "/search",
        element: <SearchResults />
    },
    {
        path: "/notifications",
        element: <Notifications />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/login",
        element: <Auth />
    },
    {
        path: "/join",
        element: <Auth newUser={true} />
    },
    {
        path: "/help",
        element: <Help />
    },
    {
        path: "/help/:topic",
        element: <HelpTopic />
    },
    {
        path: "/help/articles/:articleId",
        element: <HelpArticle />
    },
    {
        path: "/help/search",
        element: <HelpSearch />
    },
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <RouterProvider router={router} />
)

initTheme()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
