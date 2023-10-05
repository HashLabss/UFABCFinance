/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
          colors: {
             
              background: '#191B1F',
              primary: '#730302',
              cprimary: '#CF0605',
              dprimary: '#460101',
              base: '#374151',
              cbase: '#4B5563',
              dbase: '#111928',
          },
          keyframes: {
              spin: {
                to: {
                  transform: 'rotate(360deg)',
                },
              },
          },

          animation: {
              spin: 'spin 2s linear infinite',
          },
      },
  },
  plugins: [],
}
