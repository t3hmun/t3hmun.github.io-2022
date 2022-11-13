/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#F8F8F7",
          150: "#EEEDEC",
          850: "#231F1E",
          950: "#0E0D0C",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.blue.700"),
              "&:hover": {
                color: theme("colors.blue.500"),
              },
            },
            h2: {
              color: theme("colors.amber.500"),
            },
            h3: {
              color: theme("colors.amber.600"),
            },
            h4: {
              color: theme("colors.amber.700"),
            },
            h5: {
              color: theme("colors.amber.800"),
            },
            h6: {
              color: theme("colors.amber.900"),
            },
          },
        },
        invert: {
          // invert is the name used for the typography dark theme, it just redefines the underlying CSS variables for the colours.
          // The custom colours defined in DEFAULT don't use the so invert inherits them.
          css: {
            a: {
              color: theme("colors.blue.300"),
              "&:hover": {
                color: theme("colors.blue.400"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
