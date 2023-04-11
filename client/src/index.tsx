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

// function to change class of <html> tag accordingly based on value of theme variable
function toggleThemeClass() {
    if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}

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

// if theme variable has no value yet, give it a value based on user's system theme
if (!localStorage.getItem('theme')) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) localStorage.setItem('theme', 'dark');
    else localStorage.setItem('theme', 'light');
}

toggleThemeClass(); // once value has been given to theme variable, change class of <html> tag accordingly
window.addEventListener('storage', toggleThemeClass); // whenever theme variable is modified, change class of <html> tag accordingly

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
