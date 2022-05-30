import axios, { AxiosRequestConfig } from 'axios'
const ENV = process.env
interface IResType<T = unknown> {
	code: number
	data?: T
	msg: string
	status: boolean
}

// 设置请求头和请求路径
axios.defaults.baseURL = ENV.VUE_APP_AXIOS_BASE_URL
axios.defaults.timeout = 60 * 1000

// 请求拦截
axios.interceptors.request.use(
	(config): AxiosRequestConfig => {
		const token = window.localStorage.getItem(ENV.VUE_APP_TOKEN_KEY)
		if (token && config.headers) {
			config.headers[ENV.VUE_APP_TOKEN_IN_HEADER_KEY] = token
		}
		return config
	},
	(error) => {
		return error
	},
)

// 响应拦截
axios.interceptors.response.use((res) => {
	return res.data
})

interface IHttp {
	get<T>(url: string, params?: unknown): Promise<IResType<T>>
	del<T>(url: string, params?: unknown): Promise<IResType<T>>
	post<T>(url: string, params?: unknown): Promise<IResType<T>>
	put<T>(url: string, params?: unknown): Promise<IResType<T>>
	upload<T>(url: string, params: unknown): Promise<IResType<T>>
	download(url: string): void
}

const http: IHttp = {
	get(url, params) {
		return axios.get(url, { params })
	},
	del(url, params) {
		return axios.delete(url, { params })
	},
	post(url, params) {
		return axios.post(url, params)
	},
	put(url, params) {
		return axios.put(url, params)
	},
	upload(url, file) {
		return axios.post(url, file, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
	download(url) {
		const iframe = document.createElement('iframe')
		iframe.style.display = 'none'
		iframe.src = url
		iframe.onload = function () {
			document.body.removeChild(iframe)
		}
		document.body.appendChild(iframe)
	},
}

export default http
