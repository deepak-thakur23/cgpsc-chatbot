module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cgb: {
          50: '#f3fbff',
          100: '#eaf6ff',
          300: '#64b5f6',
          500: '#1976b2',
          700: '#0f5a8a',
          900: '#0b3b66'
        },
        accent: '#00bcd4'
      },
      borderRadius: {
        'xl-2': '12px'
      }
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}
