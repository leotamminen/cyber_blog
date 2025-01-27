/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode using "class"
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Include app/ directory for Next.js
  ],
  theme: {
    extend: {
      colors: {
        // Extend color palette
        darkBackground: "#1a202c",
        darkText: "#a0aec0",
        lightBackground: "#f7fafc",
        lightText: "#2d3748",
      },
    },
  },
  plugins: [],
};
