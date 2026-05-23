import { createRouter, createWebHistory } from 'vue-router';

export default () =>
	createRouter({
		history: createWebHistory(),
		scrollBehavior() {
			return { top: 0 };
		},
		routes: [
			{
				path: '/',
				name: 'index',
				component: () => import('../pages/Index.vue'),
			},
			{
				path: '/about',
				name: 'about',
				component: () => import('../pages/About.vue'),
			},
			{
				path: '/pricing',
				name: 'pricing',
				component: () => import('../pages/Pricing.vue'),
			},
			{
				path: '/eula',
				name: 'eula',
				component: () => import('../pages/Eula.vue'),
			},
		],
	});
