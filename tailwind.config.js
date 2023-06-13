/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Primary color for headers, buttons, etc.
        secondary: '#EF4444', // Secondary color for alerts, errors, etc.
        accent: '#10B981', // Accent color for highlights, icons, etc.
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'], // Font family for headings
        body: ['Inter', 'sans-serif'], // Font family for body text
      },
      fontSize: {
        '2xl': '1.5rem', // Custom font size for larger headings
      },
      spacing: {
        '72': '18rem', // Custom spacing value for specific layout needs
      },
    },
  },
  plugins: [],
}
