<template>
	<router-view />
</template>

<style lang="scss">
nav {
	position: absolute;
	padding: 30px;

	a {
		color: #2c3e50;
		font-weight: bold;
		opacity: 0.9;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
