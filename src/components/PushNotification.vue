<template class="this">
	<Transition name="fade" mode="out-in">
		<div id="notification" class="message">
			<p>{{ message }}</p>
		</div>
	</Transition>
</template>

<script>

export default {
	name: "PushNotification",
	props: {
		message: String,
	},
	/*watch: {
		show: {
			handler() {
				if (this.show) {
					document.getElementById("notification").style.display = "block";
				} else {
					document.getElementById("notification").style.display = "none";
				}

			}
		}
	}*/
}

</script>

<style scoped>

/* ANIMATION */

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.message {
	background: white;
	border-radius: 100px;
	box-shadow: 8px 8px 20px rgba(20, 80, 80, 0.35);
	padding: 0.75rem 3rem;
	max-width: 350px;
	width: fit-content;
}

#notification {
	transition: ease-out;
}
</style>