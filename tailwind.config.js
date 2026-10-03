/** All colors, fonts, radii and type sizes live here. Components only use these names. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12201A',
        forest: '#1F3B2E',
        sage: '#D9E3D6',
        mist: '#F1F4EE',
        saffron: '#F4B400',
        muted: '#4A5A52',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 6.2vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        title: ['clamp(2rem, 4.2vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        stat: ['clamp(4rem, 8vw, 7rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      borderRadius: { pill: '9999px', card: '1.5rem', frame: '0.75rem' },
      spacing: { section: 'clamp(5rem, 11vw, 9rem)' },
      minHeight: { hero: '85svh' },
      aspectRatio: { portrait: '3 / 4' },
      zIndex: { top: '60' },
    },
  },
  plugins: [],
}
