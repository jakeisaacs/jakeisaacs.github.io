/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  safelist: [
    {
        pattern: /grid-cols-./,
    },
    {
      pattern: /grid-rows-./,
    }
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#FF5733",
        yellow: "#FDCC49",
        grey: "#9BA5DE",
        purple: "#3B39CE",
        "translucent-blue": "rgba(34, 68, 160, 0.7)",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(13deg, rgba(107,107,107,1) 0%, rgba(148,187,233,1) 50%, rgba(107,107,107,1) 100%)",
        "gradient-bluesteel":
          "linear-gradient(90deg, rgba(85,188,242,1) 8%, rgba(81,81,255,1) 49%, rgba(0,212,255,1) 89%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url('./assets/cloud.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}