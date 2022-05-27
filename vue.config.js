const { defineConfig } = require('@vue/cli-service')
const server = require('./config/server.ts')
const proxys = require('./config/proxy.ts')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: server.publicPath,
	assetsDir: server.assetDir,
	productionSourceMap: false,
	devServer: {
		proxy: proxys,
	},
})
