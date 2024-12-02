import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary': '#009975',
				'secondary': '#ddd',
				'instagram': '#833AB4'
			}
		},
	},
	plugins: [animations],
}
