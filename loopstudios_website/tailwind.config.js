/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
