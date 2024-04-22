/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "2rem",
      },
      screens: {
        "phone-sm": "360px",
        "custom-sm": "431px",
        sm: "579px",
        md: "769px",
        lg: "1025px",
        xlg: "1441px",
        xl: "2560px",
      },
      blur: {
        xl: "100px",
      },
      width: {
        45: "11.5rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      blur: {
        xl: "100px",
      },
      colors: {
        primary: {
          DEFAULT: "#7001FD",
        },
        blue: {
          pure: "#4DBAFF",
          light: "#c8eaff",
          medium: "#3784b5",
          dark: "#204e6b",
        },
        green: {
          pure: "#5cff73",
          light: "#ccffd4",
          medium: "#41b552",
          dark: "#276b30",
        },
        yellow: {
          icon: "#FFF84D",
          pure: "#f7ea57",
          light: "#fdf8cb",
          medium: "#afa63e",
          dark: "#686225",
        },
        red: {
          pure: "#ff5848",
          light: "#ffcbc6",
          medium: "#b53e33",
          dark: "#6b251e",
          "dashBoard-videos-color": "#ff695a",
        },
        pink: {
          pure: "#ff4ded",
          light: "#ffc8f9",
          medium: "#b537a8",
          dark: "#6b2064",
        },
        grey: {
          pure: "#555555",
          medium: "#EEEEEE",
          light: "#F1F3F6",
        },
        "brand-gradient": {
          "blue-pure": "#4DBAFF",
          "green-pure": "#72FD6A",
          "yellow-pure": "#f7ea57",
          "red-pure": "#FF5848",
          "pink-pure": "#FF4DED",
        },
        "orange-gradient": {
          "red-pure": "#FF5848",
          "yellow-pure": "#f7ea57",
        },
        "blue-gradient": {
          "blue-pure": "#4DBAFF",
          "yellow-pure": "#f7ea57",
        },
        "pink-gradient": {
          "pink-pure": "#FF4DED",
          "blue-pure": "#4DBAFF",
        },
        "green-gradient": {
          "green-pure": "#72FD6A",
          "yellow-pure": "#f7ea57",
        },
        low: {
          pure: "#090811",
          light: "#706E92",
          medium: "#232235", // Assuming this is not a typo and all have the same hex value
          dark: "#141321",
        },
        high: {
          pure: "#FFFFFF",
          light: "#F5F5F5",
          medium: "#E0E0E0",
          dark: "#CCCCCC",
        },
      },
      flex: {
        0: "0 0 auto",
      },

      opacity: {
        12: "0.12",
        38: "0.38",
        87: "0.87",
      },
      rotate: {
        "-270": "270deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        270: "270deg",
      },
      scale: {
        "-1": "-1",
      },
      zIndex: {
        "-1": -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        50: "12.5rem",
        90: "22.5rem",

        100: "25rem",
        120: "30rem",
        128: "32rem",
        140: "35rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
        200: "50rem",
        240: "60rem",
        256: "64rem",
        280: "70rem",
        320: "80rem",
        360: "90rem",
        400: "100rem",
        480: "120rem",

        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        max: "1215px",
      },
      minHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
      maxHeight: {
        none: "none",
      },
      minWidth: ({ theme }) => ({
        ...theme("spacing"),
        screen: "100vw",
      }),
      maxWidth: ({ theme }) => ({
        ...theme("spacing"),
        screen: "100vw",
      }),
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.25, 0.8, 0.25, 1)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {},
        sm: {
          css: {
            code: {
              fontSize: "1em",
            },
            pre: {
              fontSize: "1em",
            },
            table: {
              fontSize: "1em",
            },
          },
        },
      }),
      default: {
        primary: {
          50: "#004899",
          100: "#004899",
          200: "#004899",
          300: "#004899",
          400: "#004899",
          500: "#004899",
          600: "#004899",
          700: "#004899",
          800: "#004899",
          900: "#004899",
          950: "#004899",
          DEFAULT: "#004899",
        },
        slate: {
          50: "#fafafa",
          100: "#f4f4f4",
          200: "#ededed",
          300: "#dfdfdf",
          400: "#bbbbbb",
          500: "#9c9c9c",
          600: "#737373",
          700: "#606060",
          800: "#414141",
          900: "#202020",
          950: "#202020",
          DEFAULT: "#ededed",
        },
        warn: {},
        "on-warn": {},
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        ibm: ["IBM Plex Mono", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        base: "1.25rem",
        lg: "1.5rem",
        xl: "2rem",
        "1xl": "1.88rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
        "6xl": "5.5rem",
        "7xl": "6rem",
        "8xl": "6.5rem",
        "9xl": "7rem",
        "10xl": "7.5rem",
      },
    },
  },
  corePlugins: {
    appearance: false,
    container: false,
    float: false,
    clear: false,
    placeholderColor: false,
    placeholderOpacity: false,
    verticalAlign: false,
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".btn-gradient": {
          background: `linear-gradient(black, black) padding-box,
                       linear-gradient(to right, rgba(77, 186, 255, 1), rgba(92, 255, 115, 1), rgba(247, 234, 87, 1), rgba(255, 88, 72, 1), rgba(255, 77, 237, 1)) border-box`,
          borderRadius: "99em",
          border: "2px solid transparent",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
