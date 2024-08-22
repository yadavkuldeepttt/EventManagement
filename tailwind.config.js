/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
  theme: {
    extend: {    
      colors: {
			"bs-danger": "#dc3545",
        "hover-danger": "#d91427",
      "green":"#008000"
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],
   daisyui: {
      themes: [ "light", "dark", "retro"],
 }
}

