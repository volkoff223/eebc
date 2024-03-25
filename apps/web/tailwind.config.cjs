/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: ['winter']
	},

	plugins: [require('daisyui')]
};

module.exports = config;
