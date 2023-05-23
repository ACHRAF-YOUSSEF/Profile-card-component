/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    sm: "375px",
    xl: "1440px",
    extend: {
      colors: {
        "blue-b1": "hsl(228, 45%, 44%)",
        "Dark-cyan": "hsl(185, 75%, 39%)",
        "Very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "Dark-grayish-blue": "hsl(227, 10%, 46%)",
        'Dark-gray': 'hsl(0, 0%, 59%)',
      },
      zIndex: {
        '1': '1',
      },
      height: {
        '1000': '1000px',
      }
    },
  },
  plugins: [],
};

