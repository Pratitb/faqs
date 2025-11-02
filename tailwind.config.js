/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(275, 100%, 97%)', // purple 100
				secondary: 'hsl(292, 16%, 49%)', // purple 600
				accent: 'hsl(292, 42%, 14%)', // purple 900
				title: '#2e1d31', // dark purple
				context: '#b8afb9', // light violet
			},
			fontFamily: {
				sans: ['Work Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
