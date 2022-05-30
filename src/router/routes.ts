/**
 * 路由表
 */

import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		meta: { title: '首页', roles: ['all'] },
		component: () => import('@views/Home.vue'),
	},
	{
		name: '404',
		path: '/404',
		meta: { title: '页面不存在', roles: ['all'] },
		component: () => import('@/views/NotFount.vue'),
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/404',
	},
]

export default routes
