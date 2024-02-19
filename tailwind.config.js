/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    layout: {
      500: "#4088a9",
      700: "#284e74",
    },
    theme: {
      500: "#222831",
      700: "#2c3138",
    },
    hover: {
      700: "1e1e1e",
    },
  },
};

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Oswald"],
      body: ["Montserrat"],
      brand: ["revamped"],
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '10xl': '15.052rem',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      colors:colors
    },
  },
  plugins: [require("tailwindcss-animate"), nextui({  defaultTheme: "dark", // default theme from the themes object
  defaultExtendTheme: "dark"})],
  darkMode: "class",
};
