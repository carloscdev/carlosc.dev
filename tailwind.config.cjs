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
        "custom-white": "var(--white-color)",
        "custom-gray": "var(--gray-color)",
      },
      boxShadow: {
        "button": "0 20px 30px -10px var(--secondary-color-light)",
        "icon": "0 6px 15px -2px var(--secondary-color-light)"
      }
    },
  },
  plugins: [],
}
