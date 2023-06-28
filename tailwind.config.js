/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vite-back": "#1E1E20",
        "vite-text": "#DFDFD6",
        "vite-subtext": "#999998",
        "vite-button": "#747BFF",
        "vite-sub-button": "#2C2C30",
        "vite-emojis-back": "#1E1E20",
        "vite-cards": "#252529",
      },
    },
  },
  plugins: [],
};
