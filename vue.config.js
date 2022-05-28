const { defineConfig } = require('@vue/cli-service')
const path = require('path')
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
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', path.join(__dirname, './src'))
			.set('@router', path.join(__dirname, './src/router'))
			.set('@views', path.join(__dirname, './src/views'))
			.set('@assets', path.join(__dirname, './src/assets'))
			.set('@comp', path.join(__dirname, './src/components'))
			.set('@store', path.join(__dirname, './src/store'))
	},
})
