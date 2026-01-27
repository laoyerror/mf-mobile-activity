/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#8c1d18',
        card: '#f4efec',
        bg: '#f3f3f3',
      },

      borderRadius: {
        sm: '0.12rem',
        md: '0.2rem',
        lg: '0.3rem',
        full: '9999px',
      },

      boxShadow: {
        card: '0 0.08rem 0.24rem rgba(0,0,0,0.08)',
      },
    },

    // 断点只用于「微调」，不是做 PC 布局
    screens: {
      sm: '640px',
      md: '768px', // iPad
      lg: '1024px', // PC
    },
  },
  plugins: [],
}
