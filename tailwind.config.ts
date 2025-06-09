import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#1C8CCD', // Your logo color as primary
          50: '#E6F2FA',
          100: '#CCE4F5',
          200: '#99C9EB',
          300: '#66AEE1',
          400: '#3393D7',
          500: '#1C8CCD',
          600: '#1670A7',
          700: '#105481',
          800: '#0A385B',
          900: '#051C35',
          foreground: '#FFFFFF' // White text for readability
        },
        accent: {
          DEFAULT: '#0B1D51', // little-dark blue
  50: '#D6D9F5',
  100: '#B3B8ED',
  200: '#7F83E2',
  300: '#4C4FCD',
  400: '#2639B6',
  500: '#0B1D51',
  600: '#0A1743',
  700: '#071031',
  800: '#050B23',
  900: '#020512',
  foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#2BB3C0', // Teal for secondary accents
          50: '#E6F6F8',
          100: '#CCEDF1',
          200: '#99DBE3',
          300: '#66C9D5',
          400: '#33B7C7',
          500: '#2BB3C0',
          600: '#228F99',
          700: '#1A6B73',
          800: '#11484D',
          900: '#092426',
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: '#F5F5F5', // Light gray
          foreground: '#333333' // Dark gray text
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: '#FFFFFF', // White cards
          foreground: '#333333' // Dark text
        },
        sidebar: {
          DEFAULT: '#0A5A8A', // Dark blue sidebar
          foreground: '#FFFFFF',
          primary: '#1C8CCD',
          'primary-foreground': '#FFFFFF',
          accent: '#FF6B35',
          'accent-foreground': '#FFFFFF',
          border: '#1C8CCD',
          ring: '#1C8CCD'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        'section': '3rem',
        'grid-gap': '1.5rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;