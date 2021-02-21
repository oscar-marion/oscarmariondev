module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                primaryLight: "var(--color-primary-light)",
                secondary: "var(--color-secondary)",
                secondaryLight: "var(--color-secondary-light)",
                accent: "var(--color-accent)",
                accentLight: "var(--color-accent-light)",
                blue: "#0c2461",
                white: "#c0d1f7"
            }
        }
    },
    variants: {
        extend: {
            animation: ["hover"]
        }
    },
    plugins: []
};
