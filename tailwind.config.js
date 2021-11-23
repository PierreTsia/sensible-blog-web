module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'Open Sans', 'ui-sans-serif', 'system-ui'],
        serif: ['Montserrat', 'ui-serif', 'Georgia'],
        mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
      },
      screens: {
        '3xl': '1600px',
      },
    },
    // ...
  },
  // ...
}
