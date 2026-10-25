module.exports = {
  style: {
    postcss: {
      // Tailwind must run before CRA's preset-env processing so the @tailwind
      // directives expand into utility CSS instead of being discarded.
      plugins: (plugins) => [
        require('tailwindcss')({ config: './tailwind.config.js' }),
        ...plugins,
      ],
    },
  },
};
