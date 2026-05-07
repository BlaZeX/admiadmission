/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Nunito",
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        navy: "#0b1744",
        ink: "#172033",
        brand: "#2563eb",
        mist: "#eff6ff",
        skysoft: "#eef7ff",
        gold: "#f7b731",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(11, 23, 68, 0.12)",
        card: "0 18px 45px rgba(31, 41, 55, 0.08)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(37,99,235,0.20), transparent 32rem), radial-gradient(circle at 80% 10%, rgba(59,130,246,0.18), transparent 28rem)",
      },
    },
  },
  plugins: [],
};
