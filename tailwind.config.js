const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        container: '1440px',
        'container-lg': '1200px',
        'container-md': '960px',
        'container-sm': '768px',
      },
      width: {
        container: '1440px',
        'container-lg': '1200px',
        'container-md': '960px',
        'container-sm': '768px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
