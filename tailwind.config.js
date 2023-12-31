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
        "3.5xl": "0px 8px 16px 0px rgba(20, 11, 37, 0.25)",
      },
      colors: {
        cultured: "#F5F2F9",
        primary: "#9453FF",
        magnolia: "#F7F5FA",
        lavender: "#EDE3FF",
        "russian-violet": "#281C42",
        yellow: "#FFF539",
        neutral: {
          "grey-light": "#9387A8",
          "dark-grey": "#362355",
          grey: "#554766",
          "grey-lighter": "#CAC1D8",
          "grey-lightest": "#F2EBFD",
        },
        "deep-amethyst": "#9387A8",
        "majorelle-blue": "#703DDA ",
        "violets-are-blue": "#9370F6 ",
        orange: "#FCA50B",
        success: "#38B520",
        red: "#BB222A",
      },
      borderRadius: {
        "4xl": "40px",
        input: "6px 0px 0px 6px",
        "input-lg": "10px 0px 0px 10px",
        button: "0px 6px 6px 0px",
        "button-lg": "0px 10px 6px 0px",
        full: "100px",
        "hover-lg": "0px 0px 32px 32px",
        "hover-sm": "32px",
      },
      fontSize: {
        "3.5xl": ["32px", "40px"],
        "4.5xl": ["40px", "48px"],
      },
      gap: {
        5.5: "22px",
        25: "100px",
      },
      padding: {
        5.5: "20px",
        15: "80px",
        25: "100px",
        45: "180px",
        67.5: "270px",
      },
      backgroundImage: {
        "head-body": "url('/img/background-head-body.png')",
      },
      width: {
        75: "300px",
        120.75: "411px",
      },
    },
  },
  plugins: [],
};
