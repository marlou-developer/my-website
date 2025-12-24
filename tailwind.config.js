import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import headlessui from '@headlessui/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx', // for Breeze React/Inertia
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
             keyframes: {
                shake: {
                '0%, 100%': { transform: 'translateX(0)' },
                '20%': { transform: 'translateX(-6px)' },
                '40%': { transform: 'translateX(6px)' },
                '60%': { transform: 'translateX(-4px)' },
                '80%': { transform: 'translateX(4px)' },
                },
            },
            animation: {
                shake: 'shake 0.4s ease-in-out',
            },
        },
    },

    plugins: [
        forms,
        headlessui
    ],
}
