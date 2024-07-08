/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ffc107',
        'secondary-color': '#393b3c',
        'tertiary-color': '#634248',
        'quaternary-color': '#141414'
      },
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
        'loop-scroll': 'loop-scroll 80s linear infinite'
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
