/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "905px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
