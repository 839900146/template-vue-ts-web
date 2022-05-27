const server = require('./server.ts')
const ProxyServer = server.proxyServer
const ENV = process.env.APP_ENV || 'dev'

const proxys = {
	// 开发环境代理
	dev: [
		{
			prefix: '/api/v1',
			target: ProxyServer.server1,
		},
		{
			prefix: '/api/v2',
			target: ProxyServer.server2,
			pathRewrite: { '^': '' },
		},
	],
	// 测试环境代理
	test: [],
	// 为什么没有生产环境代理？因为生产环境不需要代理
}

// -------------------------------------------以下代码不要动------------------------------------

module.exports = (proxys[ENV] || []).slice().reduce((total, item) => {
	total[item.prefix] = {
		target: item.target,
		pathRewrite: item.pathRewrite || null,
		changeOrigin: true,
	}
	return total
}, {})
