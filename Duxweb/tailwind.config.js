/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand — yellow, black, white only, per confirmed brand color code
        dux: {
          yellow: "#FECC02",
          "yellow-dark": "#E0B400",
          "yellow-light": "#FFF0B3",
          ink: "#000000",
          charcoal: "#1A1A1A",
          slate: "#4D4D4D",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F2F2F2",
          200: "#E5E5E5",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px -8px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
