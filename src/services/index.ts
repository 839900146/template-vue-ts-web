import http from '@/utils/http'

export async function fetchUserInfo<T>() {
	return http.get<T>('/users/info')
}
