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
        base: "18px",
        nav: "11px", // add - for nav links
        h1: ["42px", { lineHeight: "1.15", letterSpacing: "-0.01em" }], // bump up
        h2: ["32px", { lineHeight: "1.2" }], // add
        h3: ["24px", { lineHeight: "1.3" }], // add
      },
      fontWeight: {
        light: "300",
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
