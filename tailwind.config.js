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
        // Colors for light mode
        lightGradientStart: "#1e3a8a", // Blue 800
        lightGradientMid: "#0891b2", // Cyan 700
        lightGradientEnd: "#2563eb", // Blue 500
        // Colors for dark mode
        darkGradientStart: "#111827", // Gray 900
        darkGradientMid: "#000000", // Black
        darkGradientEnd: "#1e40af", // Blue 900
        // General text colors
        darkText: "#a0aec0",
        lightText: "#2d3748",
      },
    },
  },
  plugins: [],
};
