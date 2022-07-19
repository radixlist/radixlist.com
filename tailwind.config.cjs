const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				roboto: ['roboto', 'sans-serif'],
				montserrat: ['montserrat', 'sans-serif'],
				alegreya: ['alegreya', 'serif'],
				'alegreya-sc': ['alegreya-sc', 'serif'],
				'source-code-pro': ['source-code-pro', 'monospace'],
				'acumin-pro': ['acumin-pro', 'sans-serif'],
				'acumin-pro-condensed': ['acumin-pro-condensed', 'sans-serif'],
				'acumin-pro-extra-condensed': ['acumin-pro-extra-condensed', 'sans-serif'],
				sans: ['roboto', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
