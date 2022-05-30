import 'vue-router'

declare module 'vue-router' {
	// 这里是配置router.meta的类型
	interface RouteMeta {
		// 这是一个示例
		roles: string[]
	}
}
