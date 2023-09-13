/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "1.5sm": "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        "2.5xl": "0px 4px 20px 0px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        cultured: "#F5F2F9",
        primary: "#9453FF",
        magnolia: "#F7F5FA",
        neutral: {
          "grey-light": "#9387A8",
          "dark-grey": "#362355",
        },
      },
    },
  },
  plugins: [],
};
