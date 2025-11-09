/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // important for dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",         // light mode background
        foreground: "#111827",         // light mode text
        "card-bg": "#ffffff",
        "card-text": "#111827",
        primary: "#3b82f6",            // blue
        secondary: "#6366f1",          // indigo
        border: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
