/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Subtle, modern sans stack with good rendering on Apple + Windows
        sans: [
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "sans-serif"
        ]
      },
      colors: {
        "adastra-bg": "#02040a",
        "adastra-accent": "#b6c3ff",
        "adastra-muted": "#a3a9b7",
        "adastra-soft": "#1b1f2b"
      },
      boxShadow: {
        "soft-glow": "0 0 45px rgba(255,255,255,0.10)"
      },
      backgroundImage: {
        "gradient-radial-soft":
          "radial-gradient(circle at top, rgba(148,163,255,0.25), transparent 60%)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

