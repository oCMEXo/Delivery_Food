import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react],
  base: '/Delivery_Food/',
  server: {
    proxy: {
      '/order': 'http://localhost:5178',
    }
  },
});
