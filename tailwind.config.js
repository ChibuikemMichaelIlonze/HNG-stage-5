/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				sora: ["Sora", "sans-serif"],
				work_sans: ["Work Sans", "sans-serif"],
			},
			colors: {
				border: "#B6B3C6",
				dark_black: "#141414",
				dark_blue: "#120B48",
				line: "#F4F6F8",
				login_text: "#434343",
				modal_text: "#413C6D",
				sub_header: "#1B233D",
				text: "#616163",
			},
		},
	},
	plugins: [],
};

