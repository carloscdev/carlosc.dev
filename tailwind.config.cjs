module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      colors: {
        "primary": "var(--primary-color)",
        "primary-light": "var(--primary-color-light)",
        "secondary": "var(--secondary-color)",
        "secondary-light": "var(--secondary-color-light)",
        "custom-black": "var(--black-color)",
        "custom-gray": "var(--gray-color)",
      },
      boxShadow: {
        "button": "0 0 10px -1px var(--primary-color-light)",
        "icon": "0 0 5px -5px var(--secondary-color-light)"
      }
    },
  },
  plugins: [],
}
