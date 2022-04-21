<template>
	<div id="notification" class="message">
		<p :style="'color:' + color">{{ message }}</p>
	</div>
</template>

<script>

export default {
	name: "PushNotification",
	props: {
		message: String,
		color: String
	}
}

</script>

<style scoped>

.message {
	background: white;
	border-radius: 100px;
	border: 1px solid black;
	padding: 0.75rem 3rem;
	max-width: 350px;
	width: fit-content;
	position: fixed;
	z-index: 500;
	bottom: 2.5rem;
	right: 2.5rem;
}

</style>