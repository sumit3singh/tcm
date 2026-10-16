module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    
    theme: {
        screens: {
            'xs': '420px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        fontFamily: {
            sans: ["'Plus Jakarta Sans'", "Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        },
        extend: {
            colors: {
                primary: '#6366f1',
                accent: '#a21caf',
                glass: 'rgba(255,255,255,0.15)',
                darkglass: 'rgba(30,41,59,0.7)',
            },
            boxShadow: {
                glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #312e81 0%, #a21caf 100%)',
                'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(30,41,59,0.7) 100%)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};