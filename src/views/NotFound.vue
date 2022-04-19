<template>
	<main class="not-found">
		<img class="image" src="../assets/not-found.png" alt="Not Found">
		<p class="serif message">Error 404<br>Page not found</p>
	</main>
</template>

<script>

</script>

<style scoped>

.not-found {
	height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;
}

.image {
	height: 50%;
	position: relative;
	left: 4%;
}

.message {
	font-size: 1.5rem;
	text-align: center;
}

</style>