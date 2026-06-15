export default {
  content: ['./app/index.html', './app/src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 20px 80px rgba(59, 130, 246, 0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(185, 190, 255, 0.4), transparent 35%), linear-gradient(180deg, #0b1225 0%, #14162c 100%)'
      },
      colors: {
        action: {
          purple: '#6c3cf5',
          blue: '#0f3b86',
          pink: '#ff73c3',
          cyan: '#4fd1c5'
        }
      }
    }
  },
  plugins: []
};
