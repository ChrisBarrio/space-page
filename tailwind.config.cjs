/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ping: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        ping: 'ping 1.5s infinite',
      }
    },
  },
  backgroundImage: {
    'homeBg': "url('public/background-home-desktop.jpg')",
  },
  plugins: [],
}
