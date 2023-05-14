import React from 'react';
import SunIcon from "../icons/SunIcon"
import MoonIcon from "../icons/MoonIcon"

export default function ThemeButton({ className }: { className: string }) {
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'dark') localStorage.setItem('theme', 'light');
        else localStorage.setItem('theme', 'dark');
        window.dispatchEvent(new Event('storage'));
    }

    return (
        <button onClick={toggleTheme}>
            <SunIcon className={'dark:hidden ' + className} />
            <MoonIcon className={'hidden dark:block p-[1px] ' + className} />
        </button>
    );
}