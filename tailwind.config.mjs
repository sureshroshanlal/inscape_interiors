/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['"TT Ramillas"', "serif"],
      //   serif: ['"TT Ramillas"', "serif"],
      // },
      // fontFamily: {
      //   sans: ['"Playfair Display"', "serif"],
      //   serif: ['"Playfair Display"', "serif"],
      // },
      fontFamily: {
        sans: ['"Cormorant Garamond"', "serif"],
        serif: ['"Cormorant Garamond"', "serif"],
      },
      fontSize: {
        base: "18px", // paragraph size
        h1: "38px", // hero h1 size
      },
      fontWeight: {
        light: "300",
      },
      colors: {
        background: "#EEECE3",
        hyperlink: "#301804",
        primary: "#EEECE3",
        secondary: "#301804",
      },
      spacing: {
        section: "100px", // vertical rhythm
        'section-sm': "80px",
        gutter: "24px", // horizontal padding
        header: "50px", // fixed header height
        heroX: "20px",
        heroBottom: "80px",
        heroText: "620px",
      },
    },
  },
  plugins: [],
};
