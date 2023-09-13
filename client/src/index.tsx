import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import './index.css'
import Help from './routes/help'
import HelpTopic from "./routes/helpTopic"
import HelpArticle from "./routes/helpArticle"
import HelpSearch from "./routes/helpSearch"
import About from './routes/about'
import Home from './routes/home'
import Post from "./routes/post"
import Profile from "./routes/profile"
import ErrorPage from './ErrorPage'
import initTheme from "./utilities/initTheme"
import reportWebVitals from './reportWebVitals'
import SearchPage from "./routes/searchPage"
import Notifications from "./routes/notifications"
import MainWrapper from "./components/MainWrapper"
import Unverified from "./routes/unverified"
import Verify from "./routes/verify"
import VerifyEmail from "./routes/verifyEmail"
import Login from "./routes/login"
import Join from "./routes/join"
import Recover from "./routes/recover"
import getCurrentUser from "./utilities/getCurrentUser"
import Reset from "./routes/reset"
import sysend from "sysend";

const currentUser = getCurrentUser()

// common routes
const routes = [
    {
        path: "/",
        element: <MainWrapper><Home /></MainWrapper>,
        errorElement: <ErrorPage />
    },
    {
        path: "/posts/:postId",
        element: <MainWrapper><Post /></MainWrapper>
    },
    {
        path: "/users/:userId",
        element: <MainWrapper><Profile /></MainWrapper>
    },
    {
        path: "/search",
        element: <MainWrapper><SearchPage /></MainWrapper>
    },
    {
        path: "/about",
        element: <MainWrapper><About /></MainWrapper>
    },
    {
        path: "/help",
        element: <MainWrapper><Help /></MainWrapper>
    },
    {
        path: "/help/:topic",
        element: <MainWrapper><HelpTopic /></MainWrapper>
    },
    {
        path: "/help/articles/:articleId",
        element: <MainWrapper><HelpArticle /></MainWrapper>
    },
    {
        path: "/help/search",
        element: <MainWrapper><HelpSearch /></MainWrapper>
    },
]

// if there is a logged-in user
const userRouter = createBrowserRouter([
    ...routes,
    {
        path: '/verifymail/:id',
        element: <VerifyEmail />
    },
    {
        path: "/notifications",
        element: <MainWrapper><Notifications /></MainWrapper>
    }
])

// if nobody is logged in
const guestRouter = createBrowserRouter([
    ...routes,
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/join",
        element: <Join />
    },
    {
        path: '/recover',
        element: <Recover />
    },
    {
        path: '/reset',
        element: <Reset />
    }
])

// if there is a logged-in user but that user hasn't verified their account
const unverifiedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Unverified />,
        errorElement: <ErrorPage />
    },
    {
        path: '/verify/:id',
        element: <Verify />
    }
])

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL
})
// process.env.REACT_APP_API_URL http://localhost:4000

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwt')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <ApolloProvider client={client}>
        <RouterProvider router={currentUser ? (currentUser.isVerified ? userRouter : unverifiedRouter) : guestRouter} />
    </ApolloProvider>
)

initTheme()

// if the user has closed all tabs and if they didnt select "remember me" when they logged in, log them out
sysend.track('close', data => {
    if ((data.count === 0) && (!localStorage.getItem('rememberMe'))) {
        localStorage.removeItem('jwt')
        localStorage.removeItem('rememberMe')
    }
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
