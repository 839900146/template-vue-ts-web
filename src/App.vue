<template>
	<router-view />
</template>

<style lang="scss">
nav {
	padding: 30px;
	position: absolute;
	a {
		color: #2c3e50;
		font-weight: bold;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
