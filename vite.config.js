import { defineConfig } from 'vite';
import { resolve } from 'path';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	server: {
		port: 9000,
	},
	build: {
		minify: 'esbuild',
	},
	css: {
		preprocessorOptions: {
			less: {
				charset: false,
				javascriptEnabled: true,
			},
		},
	},
	resolve: {
		alias: {
			'@components': resolve('src/components'),
			'@locales': resolve('src/locales'),
		},
	},
	plugins: [
		vue(),
		Components({
			dts: false,
			resolvers: [
				AntDesignVueResolver({
					importStyle: false,
				}),
			],
		}),
	],
});
