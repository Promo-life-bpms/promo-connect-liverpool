/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.blade.php", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            colors: {
                "primary": "#E10098",
                "primary-dark": "#AB1D7E",
                "primary-light": "#F743BE",
                "primary-superlight":"#FBE9F3",
                "secondary": "#E10098",
                "secondary-dark": "#AB1D7E",
                "secondary-light": "#F743BE",
                "dark": "#464646",
                "dark-medium": "#555555",
                "dark-light": "#F5F5F5",
            },
        },
        borderColor: {
            "custom-border-color": "#FF5733",
            "focus-border-color": "#E10098", // Define el color de borde enfocado personalizado aquí
        },   
        ringColor: {
            "custom-ring-color": "#E10098", // Define el color de anillo personalizado aquí
        },

    },
    plugins: [require("flowbite/plugin")],
    variants: {
        extend: {
            borderColor: ['focus'], // Habilita las clases de borde enfocado
        },
    },

};
