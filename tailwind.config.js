/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.{html,php}",
    "./src/**/*.{html,php,js,jsx,mjs,ts,tsx,mts}"
  ],
  theme: {
    extend: {
      color: {
        
      },
      backgroundImage: {
        "comp-eng": `url("/resources/academic/college_of_engineering/img/com-eng-ai.jpg")`,
        "geo-eng": `url("/resources/academic/college_of_engineering/img/survey-000.jpg")`,
      },
      fontFamily: {
        "auto-bus-bold": ["auto-bus-bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

