<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<hr />
		<h1>{{ store.state.count }}</h1>
		<button @click="click">点击</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@store/index'

export default defineComponent({
	name: 'HomeView',
	setup() {
		const store = useStore()

		const click = () => {
			store.commit('increment')
		}

		return { store, click }
	},
})
</script>
