import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        "b-1": "0px 0px 1px 0px",
      },
      gridTemplateColumns: {
        "wide-center": "2fr 5fr 2fr",
      },
      keyframes: {
        comeUp: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        vanish: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "come-up": "comeUp .2s ease-in-out 1",
        vanish: "vanish .2s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
