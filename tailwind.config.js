/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          black: '#000000',
          dark: '#0A0A0A',
          card: '#121212',
          border: '#1E1E1E',
          muted: '#27272A',
          text: {
            primary: '#FFFFFF',
            secondary: '#A1A1AA',
            muted: '#71717A',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
