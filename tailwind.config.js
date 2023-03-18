/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            ...colors,
            primary: "#1597E4",
            danger: "#D86161",
            dark: "#212121",
            darkGrey: "#7A7A7A",
            light: "#FAFAFA",
            lightGrey: "#E6E6E6",
        },
        fontFamily: {
            poppins: ["Poppins"],
        },
    },
    plugins: [],
};
