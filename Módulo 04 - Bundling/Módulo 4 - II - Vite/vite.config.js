import { analyzer } from 'vite-bundle-analyzer';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression2';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    analyzer({
        analyzerMode: 'static',
        openAnalyzer: true,
        reportTitle: 'Bundle Analysis',
        fileName: 'bundle-report.html',
    }),
    checker({ typescript: true }),
    react(),
    compression({
        algorithms: [
          'gzip',
          'brotliCompress',
        ],
    }),
  ],
});