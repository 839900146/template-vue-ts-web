import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import beforeEach from './beforeEach'
const ENV = process.env

const router = createRouter({
	history: createWebHistory(ENV.BASE_URL),
	routes,
})

// 集成路由守卫
beforeEach(router)

export default router
