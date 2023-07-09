/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    backgroundOpacity: false,
    borderOpacity: false,
    preflight: false,
    textOpacity: false,
  },
  mode: "jit",
  plugins: [],
  theme: {
    extend: {},
  },
}
