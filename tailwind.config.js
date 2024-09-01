import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1-2-1": "1fr 2fr 1fr",
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
