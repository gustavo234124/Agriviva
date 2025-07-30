export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    darkMode: 'class', // <<< AGREGAMOS ESTO
  theme: {
    extend: {
      colors: {
        'text-primary': 'var(--color--text-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};
