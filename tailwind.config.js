/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      $error: '#dd2c00',
      $disabled: '#979797',
      $success: '#0779e4',
      $primary: '#21bf73',
      $textPrimary: '#393e46',
      $textSecondary: '#758184',
      $warning: '#ffa41b',
      white: '#ffffff',
    },
    fill: {
      error: '#dd2c00',
      success: '#0779e4',
      warning: '#ffa41b',
      $primary: '#21bf73'
    },
    maxWidth: {
      mascotapp: '144rem'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
