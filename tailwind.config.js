module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0078D4", // Microsoft blue-600
        "primary-dark": "#106EBE", // Microsoft blue-700
        accent: "#FF8C00", // orange-500
        "accent-light": "#FFB347", // orange-300
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        "text-primary": "#323130", // gray-800
        "text-secondary": "#605E5C", // gray-600
        success: "#107C10", // green-700
        "success-light": "#4CAF50", // green-500
        warning: "#FF8C00", // orange-500
        error: "#D13438", // red-600
        border: "#E1DFDD", // gray-300
        "border-light": "#F3F2F1", // gray-100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(0, 0, 0, 0.1)',
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
    },
  },
  plugins: [],
}