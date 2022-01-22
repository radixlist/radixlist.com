const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				mulish: ['Mulish', 'sans-serif'],
				philosopher: ['Philosopher', 'sans-serif']
			}
		}
	},

	plugins: [
		require('@tailwindcss/line-clamp'),
		function ({ addVariant }) {
			addVariant('supports-scrollbars', '@supports selector(::-webkit-scrollbar)');
			addVariant('scrollbar', '&::-webkit-scrollbar');
			addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
			addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
		}
	]
};

module.exports = config;
