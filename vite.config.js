import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	server: {
		port: 9000,
	},
	build: {
		minify: 'esbuild',
	},
	resolve: {
		alias: {
			'@components': resolve('src/components'),
			'@pages': resolve('src/pages'),
		},
	},
	plugins: [vue()],
});
