/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── User Provided Palette: 2. Peach + Coral + Vanilla ──
        vanilla: {
          DEFAULT: '#FEF0E5',
          50: '#FFFDFB',
          100: '#FEF9F5',
          200: '#FEF0E5',
          300: '#FCE5D3',
          400: '#F9D5BA',
        },
        peach: {
          DEFAULT: '#F5C7AF',
          50: '#FDF8F5',
          100: '#FAF0EA',
          200: '#F5C7AF',
          300: '#EDB293',
          400: '#E29772',
        },
        coral: {
          DEFAULT: '#EC897A',
          hover: '#E07666',
          50: '#FDF4F2',
          100: '#FCE7E4',
          200: '#F9CFCA',
          300: '#F5B0A6',
          400: '#EC897A',
        },
        terracotta: {
          DEFAULT: '#C35D51',
          hover: '#AD5B4D',
          50: '#FDF6F4',
          100: '#FBECE8',
          200: '#F6D2C9',
          300: '#EEB1A4',
          400: '#E28676',
          500: '#C35D51',
          600: '#AD5B4D',
          700: '#943E34',
        },
        golden: {
          DEFAULT: '#E5BB67',
          hover: '#D4A852',
          50: '#FCF9F1',
          100: '#F8F1DF',
          200: '#F0DFBA',
          300: '#E5BB67',
        },

        // ── Semantic Bindings (Oat & Honey Palette) ──
        'primary-bg': '#FFF9F0',
        'secondary-bg': '#FAF5EC',
        cream: '#FFF9F0',
        oat: '#FAF5EC',
        honey: '#F5C04A',
        'primary-green': {
          DEFAULT: '#C35D51',
          hover: '#AD5B4D',
        },
        'soft-green': '#9ADBC3',
        sage: {
          DEFAULT: '#9ADBC3',
          soft: '#FAF5EC',
        },
        'dark-typography': '#443026',
        'secondary-typography': '#766256',
        espresso: '#443026',
        dark: '#443026',
        dark_chocolate: '#443026',
        'dark-chocolate': '#443026',
        secondary_text: '#766256',
        'secondary-text': '#766256',
        muted_text: '#766256',
        'muted-text': '#766256',
        border_line: '#E0D6C9',
        'border-line': '#E0D6C9',
        line: '#E0D6C9',
        border_color: '#E0D6C9',
        'border-color': '#E0D6C9',
        ivory: {
          DEFAULT: '#FFF9F0',
        },
        white: '#FFFFFF',
        beige: {
          DEFAULT: '#FAF0EA',
        },
        blush: '#FAF0EA',
        burgundy: {
          DEFAULT: '#C35D51',
          hover: '#AD5B4D',
        },
        champagne: {
          DEFAULT: '#E5BB67',
          hover: '#D4A852',
        },
        slate_blue: {
          DEFAULT: '#C35D51',
          900: '#2D221E',
        },
        cocoa: {
          DEFAULT: '#2D221E',
        },
        dusty_rose: {
          DEFAULT: '#EC897A',
        },
        'dusty-rose': {
          DEFAULT: '#EC897A',
        },
      },
      fontFamily: {
        serif: ['"Bree Serif"', 'Georgia', 'serif'],
        display: ['"Bree Serif"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        '2xs': '0 1px 1px 0 rgba(53, 41, 31, 0.03)',
        'xs': '0 1px 2px 0 rgba(53, 41, 31, 0.05)',
        'soft': '0 2px 15px -3px rgba(45, 34, 30, 0.06), 0 10px 20px -2px rgba(45, 34, 30, 0.03)',
        'soft-lg': '0 10px 40px -10px rgba(45, 34, 30, 0.08)',
        'soft-xl': '0 20px 60px -15px rgba(45, 34, 30, 0.12)',
        'premium': '0 14px 38px rgba(45, 34, 30, 0.06)',
        'premium-lg': '0 24px 52px rgba(45, 34, 30, 0.10)',
      },
    },
  },
  plugins: [],
};
