/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // "lexend": ["Lexend"],
      // "serif": ["Playfair Display"],
      // "roboto": ["Roboto"],
      // "hand": ["Caveat"],
      // "lora": ["Lora"],
      // "frank": ["Frank Ruhl Libre"],
      // "dm-serif": ["DM Serif Display"],
    },
    extend: {
      colors: {
        "photo-black": "#131313",
        "github-black": "#24292f",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#131313",
            light: {
              color: theme("colors.zinc.400"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
