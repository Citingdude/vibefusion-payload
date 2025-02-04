module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      display: ['Alegreya'],
      body: ['Alegreya Sans'],
    },
    colors: {
      accent: {
        light: '#D3D3F0',
        DEFAULT: '#6666CC',
        dark: '#161642',
      },
      light: {
        main: '#ffffff',
        alt: '#F4F4FB',
      },
      dark: {
        400: '#14141F',
        300: '#212133',
        200: '#2D2D47',
        100: '#3A3A5B',
      },
      transparent: 'transparent',
    },
    boxShadow: {
      'sm': '0 1px 2px 0 rgba(102,102,204,0.05)',
      'DEFAULT':
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(102,102,204,0.05)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(102,102,204,0.05)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(102,102,204,0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(102,102,204,0.05)',
      '2xl': '0 25px 50px -12px rgba(102,102,204,0.05)',
      'inner': 'inset 0 2px 4px 0 rgba(102,102,204,0.05)',
      'none': 'none',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'DEFAULT': '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '1rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '6xl': '6rem',
      '8xl': '8rem',
      'full': '9999px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
