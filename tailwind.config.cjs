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
      },
      //blinking avatar
      keyframes: {
        blink: {
          '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'scaleY(1)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'scaleY(0.1)' },
        },
        breath: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      },
      animation: {
        blink: 'blink 3.2s infinite',
        breath: 'breath 2.5s ease-in-out infinite',
      },
      //blinking avatar
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}
