<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<hr />
		<h1>{{ store.userinfo }}</h1>
		<h1>{{ store.getToken }}</h1>
		<button @click="click">点击</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 要使用哪个store，就导入哪个
import useStore from '@/store/users'

export default defineComponent({
	name: 'HomeView',
	setup() {
		// 在setup中必须执行了useStore()后才能进行后续操作
		const store = useStore()
		function click() {
			// 调用action
			store.login()
		}

		return { click, store }
	},
})
</script>
