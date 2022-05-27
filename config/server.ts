module.exports = {
	/**
	 * token保存至localStorage中的键
	 */
	tokenKey: 'webapp-user-token',
	/**
	 * 设置在xhr headers中token的键
	 */
	tokenKeyInRequest: 'x-token',
	/**
	 * 不同环境下, 发送请求的前缀
	 */
	apiPrefix: {
		dev: '/dev/api',
		prd: '/prd/api',
		test: '/test/api',
	},
	/**
	 * 前端代理服务器
	 */
	proxyServer: {
		server1: 'http://localhost:8001',
		server2: 'http://localhost:8002',
		server3: 'http://localhost:8003',
		server4: 'http://localhost:8004',
	},
	/**
	 * 静态资源存放目录
	 */
	assetDir: 'static',
	/**
	 * 静态资源路径前缀及网站二级目录
	 */
	publicPath: '/',
	/**
	 * 需要注入的全局数据（编译时使用）
	 */
	injectData: {
		...process.env, // 这一行不要删除，因为程序中有用到
	},
}
