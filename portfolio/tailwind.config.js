/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#09090B',
        surface: '#18181B',
        surface2: '#27272A',
        copper: '#C2410C',
        bronze: '#EA580C',
        amber: '#F59E0B',
        ink: '#FAFAFA',
        muted: '#A1A1AA',
        hairline: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['80px', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'hero-sm': ['44px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        subhead: ['22px', { lineHeight: '1.5' }],
        body: ['18px', { lineHeight: '1.7' }],
      },
      backgroundImage: {
        'copper-gradient': 'linear-gradient(135deg, #C2410C 0%, #EA580C 50%, #F59E0B 100%)',
        'copper-radial': 'radial-gradient(circle, rgba(194,65,12,0.25) 0%, rgba(194,65,12,0) 70%)',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(234, 88, 12, 0.35)',
        'glow-sm': '0 0 30px -8px rgba(234, 88, 12, 0.3)',
        card: '0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      animation: {
        aurora: 'aurora 30s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg)' },
          '33%': { transform: 'translate(4%, -6%) rotate(8deg)' },
          '66%': { transform: 'translate(-3%, 5%) rotate(-6deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
