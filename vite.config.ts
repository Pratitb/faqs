// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// replace 'faqs' with your actual repo name
export default defineConfig({
	base: '/faqs/',
	plugins: [react()],
});
