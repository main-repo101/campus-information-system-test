/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.{html,php}",
    "./src/**/*.{html,php,js,jsx,mjs,ts,tsx,mts}"
  ],
  theme: {
    extend: {
      color: {
        
      },
      backgroundImage: {
        "eng-comp": `url("/resources/academic/college_of_engineering/img/com-eng-networking.jpg")`,
      },
      fontFamily: {
        "auto-bus-bold": ["auto-bus-bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

