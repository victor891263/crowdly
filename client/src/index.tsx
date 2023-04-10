import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from "./routes/home";
import Help from './routes/help';
import HelpTopic from "./routes/helpTopic";
import HelpArticle from "./routes/helpArticle";
import About from './routes/about';
import Login from './routes/login';
import YourFeed from './routes/yourFeed';
import Trending from './routes/trending';
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/feed",
        element: <YourFeed />
    },
    {
        path: "/trending",
        element: <Trending />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/login",
        element: <Login />
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
        path: "/help/articles/:article",
        element: <HelpArticle />
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
