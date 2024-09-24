/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0284c7",
        dark: "#111111" ,
        colorg: "#202020",
  
      },
      
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm:"3rem",

        },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
      }
    },
  },
  plugins: [],
}

