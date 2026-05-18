import { createRouter, createWebHistory } from 'vue-router';

export default () =>
	createRouter({
		history: createWebHistory(),
		routes: [
			{
				path: '/',
				name: 'index',
				component: () => import('../pages/Index.vue'),
			},
			{
				path: '/eula',
				name: 'eula',
				component: () => import('../pages/Eula.vue'),
			},
		],
	});
