import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home.vue'
const ENV = process.env

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		name: '404',
		path: '/404',
		component: () => import('@/views/NotFount.vue'),
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/404',
	},
]

const router = createRouter({
	history: createWebHistory(ENV.BASE_URL),
	routes,
})

export default router
