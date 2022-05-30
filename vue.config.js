const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const CompressionWebpackPlugin = 'compression-webpack-plugin'
const server = require('./config/server.ts')
const proxys = require('./config/proxy.ts')
const isDev = process.env.APP_ENV === 'dev'

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: server.publicPath,
	assetsDir: server.assetDir,
	productionSourceMap: isDev,
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
			extensions: ['.ts', '.js', '.vue', '.json'],
		},
		module: {
			// 不对下列文件进行编译
			// 注意：不要写vue,react之类的，不然有一定几率会出现诡异的，不可预测的bug
			noParse: /(loadsh|moment|jquery|chartjs)/,
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

		if (server.openCDN) {
			config.set('externals', {
				axios: 'axios',
				vue: 'Vue',
				'vue-router': 'VueRouter',
			})
			config.plugin('html').tap((args) => {
				args[0].openCDN = server.openCDN
				args[0].cdn = {
					js: [
						'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/axios/0.26.0/axios.min.js',
						'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/3.2.13/vue.global.min.js',
						'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue-router/4.0.3/vue-router.global.min.js',
					],
					css: [],
				}
				return args
			})
		}

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
