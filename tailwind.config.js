/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00f2ff',
        neonPurple: '#7000ff',
        darkBg: '#050505',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}