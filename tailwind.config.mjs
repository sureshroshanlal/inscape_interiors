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
        base: "18px", // standard base for buttons, inputs, and general body
        lg: ["20.5px", { lineHeight: "1.7" }], // increased by 2 pts for description paragraphs
        xl: ["22.5px", { lineHeight: "1.6" }], // enlarged descriptions
        nav: "11px", // nav links
        h1: ["42px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h2: ["32px", { lineHeight: "1.2" }],
        h3: ["24px", { lineHeight: "1.3" }],
      },
      fontWeight: {
        light: "700",
        normal: "700",
        medium: "700",
        semibold: "700",
        bold: "700",
      },
      colors: {
        background: "#EEECE3",
        hyperlink: "#301804",
        primary: "#EEECE3",
        secondary: "#301804",
        "site-text": "#301804",  // add this
        "site-bg": "#EEECE3",    // add this
      },
      spacing: {
        section: "100px", // vertical rhythm
        "section-sm": "80px",
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
