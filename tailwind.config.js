/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"], // Add DM Sans as a font family
      },
      colors: {
        'deal-purple': '#6B46C1', // Replace with your desired purple color
        'deal-orange': '#ED8936', // Replace with your desired orange color
      },
    },
  },
  plugins: [],
}