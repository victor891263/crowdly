/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{tsx, ts}", "./public/*.html"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['circular', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
