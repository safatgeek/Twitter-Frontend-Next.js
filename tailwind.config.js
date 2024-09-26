/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'sm-md': '670px',
        'sm-md-md': '750px',
        'md-lg': '800px', // A custom size between sm and md
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
