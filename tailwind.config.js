module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: { extend: {
    colors: { ink: '#0b0f0d', panel: '#111815', accent: '#a3e635', muted: '#9aa69d' },
    fontFamily: { sans: ['DM Sans', 'ui-sans-serif', 'system-ui'], mono: ['DM Mono', 'ui-monospace', 'SFMono-Regular'] }
  }},
  plugins: [],
};
