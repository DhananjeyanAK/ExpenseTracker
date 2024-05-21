/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          lavender: '#A892EE', // Add custom lavender color
          violet:'#40005D',
        },
      },
    },
  plugins: [],
}