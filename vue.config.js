const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const CompressionWebpackPlugin = 'compression-webpack-plugin'
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
	configureWebpack: {
		cache: {
			type: 'filesystem',
		},
		optimization: {
			minimize: true,
			splitChunks: {
				chunks: 'all',
				minSize: 30000,
				minChunks: 2,
				maxAsyncRequests: 30,
				maxInitialRequests: 30,
				enforceSizeThreshold: 50000,
			},
		},
		// 路径查找优化
		resolve: {
			modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
		},
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', path.join(__dirname, './src'))
			.set('@router', path.join(__dirname, './src/router'))
			.set('@services', path.join(__dirname, './src/services'))
			.set('@views', path.join(__dirname, './src/views'))
			.set('@assets', path.join(__dirname, './src/assets'))
			.set('@comp', path.join(__dirname, './src/components'))
			.set('@store', path.join(__dirname, './src/store'))
			.set('@utils', path.join(__dirname, './src/utils'))

		if (process.env.NODE_ENV === 'production') {
			config.plugin('compression-webpack-plugin').use(CompressionWebpackPlugin, [
				{
					filename: '[path][base].gz',
					algorithm: 'gzip',
					test: new RegExp('\\.(js|css)$'),
					threshold: 20480,
					minRatio: 0.6,
				},
			])
		}
	},
})
