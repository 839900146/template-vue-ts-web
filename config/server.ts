module.exports = {
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
}
