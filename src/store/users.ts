import { defineStore } from 'pinia'

// users是一个id，必须写，同时也必须唯一
export default defineStore('users', {
	// 必须是一个函数，然后返回一个对象
	state: () => {
		return {
			userinfo: {},
			token: window.localStorage.getItem('x-token'),
		}
	},
	// 与vuex一致
	getters: {
		getToken(state) {
			// 也可以通过this访问，如this.token
			return state.token
		},
	},
	// actions 可以是同步也可以是异步
	actions: {
		// 登录
		login() {
			this.userinfo = {
				username: '黄某人',
				age: 18,
				phone: '19907766402',
			}
			this.token = 'gaelgjaioejfalmlae'
		},
	},
})
