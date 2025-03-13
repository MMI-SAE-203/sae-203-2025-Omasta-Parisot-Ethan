/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#232323', 
        secondary: '#FEAE0B', 
        background: '#232323', 
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        irishgrover: ['Irish Grover', 'Regular'],
        mulish: ['Mulish', 'sans-serif'],
        spacemono: ['Space Mono', 'monospace'],
      },
      spacing: {
        18: '4.5rem',  
        72: '18rem',   
      },
      screens: {
        xs: '480px', 
        '2xl': '1536px', 
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      opacity: {
        90: '0.9',
        85: '0.85',
      },
    },
  },
  plugins: [],
}
