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
        display: ['clamp(2.25rem, 4.2vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        title: ['clamp(1.75rem, 3.2vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        stat: ['clamp(2.75rem, 5.5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      borderRadius: { pill: '9999px', card: '1.5rem', frame: '0.875rem' },
      spacing: { section: 'clamp(4rem, 8vw, 7rem)' },
      minHeight: { hero: 'min(82svh, 750px)' },
      aspectRatio: { portrait: '3 / 4' },
      zIndex: { top: '60' },
    },
  },
  plugins: [],
}
