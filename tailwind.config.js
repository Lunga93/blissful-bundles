/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",    // Gold
        secondary: "#BE123C",  // Deep Pink/Red
        accent: "#F472B6",     // Soft Pink
        background: "#FFFDF7", // Creamy White
        textMain: "#4A0404",   // Dark Red/Brown
      },
      fontFamily: {
        sans: ['"Playfair Display"', 'serif'], // Elegant font for headings
        body: ['"Lato"', 'sans-serif'],        // Clean font for body text
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        blissful: {
          "primary": "#D4AF37",
          "secondary": "#BE123C",
          "accent": "#F472B6",
          "neutral": "#4A0404",
          "base-100": "#FFFDF7",
        },
      },
    ],
  },
}
