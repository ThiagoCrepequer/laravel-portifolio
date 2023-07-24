import defaultTheme from 'tailwindcss/defaultTheme';

export default ({
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'cardQualificacoes': "rgba(253, 83, 114, 0.1)"
            }
        },
    },

    experimental: {
        applyComplexClasses: true,
        layers: {
            customTags: ['utilities']
        }
    },

    plugins: [
        require("tw-elements/dist/plugin.cjs"),
        require("@material-tailwind/react/utils/withMT")
    ],
});
