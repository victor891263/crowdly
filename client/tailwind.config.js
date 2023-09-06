/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{tsx, ts}", "./public/*.html"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
