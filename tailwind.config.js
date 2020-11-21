module.exports = {
  purge: [
    "./node_modules/@ableco/baseline/dist/baseline.esm.js",
    "./src/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.375rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      sans: ["Open Sans"],
    },
    colors: {
      transparent: "transparent",

      white: "#FFFFFF",
      black: "#000000",

      primary: {
        lightest: "#F8FBFE",
        lighter: "#DDECFC",
        light: "#8EADED",
        base: "#5B67ED",
        dark: "#434BA2",
        darker: "#232B5B",
      },

      secondary: {
        lightest: "#F6FDFE",
        lighter: "#D3F4F9",
        light: "#89D0F5",
        base: "#3EA2DA",
        dark: "#2D5C8E",
        darker: "#1A344E",
      },

      tertiary: {
        lightest: "#FDF9F4",
        lighter: "#F7E2C7",
        light: "#F0A178",
        base: "#E07242",
        dark: "#86432E",
        darker: "#4D161C",
      },

      quaternary: {
        lightest: "#FDF8FD",
        lighter: "#F4DEF5",
        light: "#CD89D4",
        base: "#A04EC7",
        dark: "#6B368F",
        darker: "#371C64",
      },

      neutral: {
        100: "#F6F8F9",
        200: "#E5E9EC",
        300: "#C2C9D0",
        400: "#A5ACB6",
        500: "#8A929F",
        600: "#6D7483",
        700: "#505667",
        800: "#2B2F43",
      },

      success: {
        lightest: "#F7FDF5",
        lighter: "#D8F7CF",
        light: "#75CD88",
        base: "#4EB775",
        dark: "#488B61",
        darker: "#1D3A34",
      },

      alert: {
        lightest: "#FDF9F8",
        lighter: "#F6E1DE",
        light: "#ED8795",
        base: "#F23B51",
        dark: "#B02849",
        darker: "#4F1538",
      },
    },
    extend: {
      boxShadow: {
        default: "0px 0px 4px rgba(54, 44, 73, 0.03)",
        md: "0px 4px 12px rgba(25, 30, 51, 0.06)",
        lg: "0px 0px 12px rgba(54, 44, 73, 0.08)",
      },
      borderRadius: {
        default: "0.5rem",
        lg: "1rem",
      },

      backgroundOpacity: {
        20: "0.2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
