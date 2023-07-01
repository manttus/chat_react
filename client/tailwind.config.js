/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3361FF",
        secondary: "#f8f8ff",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
