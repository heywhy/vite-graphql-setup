export default {
  optimizeDeps: {
    include: ['@apollo/client/core'],
    exclude: ['@apollo/client'],
  },
  plugins: [],
  proxy: {
    '/api': {
      target: process.env.VITE_API_URL || 'http://xactpoint.test',
      changeOrigin: true,
    },
  },
}
