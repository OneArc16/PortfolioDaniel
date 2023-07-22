/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  darkMode:'class',
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    boxShadow: {
      'custom-ligth': "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c"
    },
    extend: {
      boxShadow:["dark"],
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
        dark:{
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        }
      },
    },
  },
  plugins: [],
}

