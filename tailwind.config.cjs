/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
      center: true,
      screens: {
        sm: "500px"
      }
    },
		extend: {},
	},
  daisyui: {
    themes: [
      {
        mydark: {
          "primary": "#d1d5db",
          "secondary": "#d1d5db",
          "accent": "#d1d5db",
          "neutral": "#272626",
          "base-100": "#000000",
          "info": "#0000FF",
          "success": "#008000",
          "warning": "#FFFF00",
          "error": "#FF0000",
        },
      },
    ],
  },
	plugins: [require("@tailwindcss/typography"), require("daisyui")]
}
