/**
 * 路由守卫
 */

import { Router } from 'vue-router'
export default (router: Router) => {
	router.beforeEach((to, from, next) => {
		// 在此可自定义路由守卫，进行权限判断
		// to.meta.xxx的ts类型提示可在./router.d.ts中进行配置
		next()
	})
}
