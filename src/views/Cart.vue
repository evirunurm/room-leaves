<template>
	<main class="cart-container">
		<div class="cart-wrapper">
			<div>
				<h1 class="serif" v-if="items?.length > 0">My Cart ({{ items?.length }})</h1>
				<h1 class="serif" v-else="items.length == 0">My Cart</h1>
				<section class="cart-items">
					<p class="no-items-note" v-if="items?.length < 1 || !items">No items</p>
					<ProductCart @update="getFromLocal" v-for="item in items" :item="item"></ProductCart>
				</section>
			</div>
			<div class="cart-right">
				<section class="cart-section">
					<h2 class="serif">Subtotal</h2>
					<p class="no-items-note" v-if="items?.length < 1">Nothing to calculate here</p>
					<article v-if="items?.length > 0">
						<p class="subtotal-name">Subtotal</p>
						<p class="subtotal-value">{{ subtotal }}</p>
					</article>
					<article v-if="items?.length > 0">
						<p class="subtotal-name">Delivery fees</p>
						<p class="">On checkout</p>
					</article>
					<article v-if="items?.length > 0">
						<p class="subtotal-name">Tax (21%)</p>
						<p class="subtotal-value">{{ tax }}</p>
					</article>
					<article class="total-wrapper" v-if="items?.length > 0">
						<p class="subtotal-name total">Total</p>
						<p class="subtotal-value total">{{ Math.round((subtotal + delivery + tax) * 100) / 100 }}</p>
					</article>
				</section>
				<section class="cart-section checkout-section">
					<router-link to="/login">
						<button class="white" v-if="!loggedIn">Log in</button>
					</router-link>
					<p v-if="!loggedIn" class="checkout-divisor">or</p>
					<button @click="goToCheckout" class="green">Continue to checkout</button>
				</section>
			</div>
		</div>
	</main>
</template>

<script>
import ProductCart from "@/components/ProductCart";

export default {
	components: {
		ProductCart
	},
	data() {
		return {
			items: null,
			subtotal: 0,
			delivery: 0,
			tax: 0,
			loggedIn: localStorage.getItem('userId')
		}
	},
	methods: {
		getFromLocal() {
			let cart = JSON.parse(localStorage.getItem("cart"));
			this.items = cart;
		},
		loadPrice() {
			this.getTotal();
			this.getTax();
		},
		getTotal() {
			if (this.items) {
				this.subtotal = this.items.reduce((acc, curr) => {
					return acc + parseFloat(curr.price * curr.amount)
				}, 0);
				return this.subtotal;
			}

		},
		getTax() {
			this.tax = Math.round((this.subtotal / 100 * 21) * 100) / 100;
			return this.tax;
		},
		goToCheckout() {
			if (this.items.length !== 0) {
				this.$router.push("/checkout");
				return;
			}
			// Add err notification.
		}
	},
	mounted() {
		this.getFromLocal();
		this.loadPrice();
	},
	watch: {
		items: {
			// Watch for changes in array of objects
			deep: true,
			handler() {
				this.loadPrice();
			}
		}
	}
}
</script>

<style scoped>

.cart-container {
	display: grid;
	place-items: center;
}

.cart-wrapper {
	width: 100%;
	display: flex;
	min-height: 400px;
}

.cart-wrapper > div {
	width: 50%;
}

h1 {
	margin: 0 var(--general-margin);
}

h1, h2 {
	border-bottom: 2px solid black;
	padding-bottom: 0.5rem;
	font-weight: 500;
}

h2 {
	margin-bottom: 1rem;
}

.cart-items {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 3rem var(--general-margin);
	max-width: var(--general-max-width);
}

.subtotal-value:after {
	content: " €";
	font-size: 0.9em;
}

/* SECTIONS */

.cart-section {
	margin: 0 var(--general-margin) 0 var(--general-margin);
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

.cart-section > article {
	display: flex;
	width: 100%;
	justify-content: space-between;
}

.total {
	font-weight: 600;
}

.total-wrapper {
	margin: 0.5rem 0 0 0;
	padding: 0.5rem 0 0 0;
	border-top: 1px solid black;
}

.checkout-section {
	align-items: center;
}


.checkout-section button {
	width: 100%;
}

.checkout-divisor {
	margin: 0.5rem 0;
}

.no-items-note {
	opacity: 70%;
	align-self: center;
	pointer-events: none;
	padding: 1rem 0;
}

.cart-right {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: 2rem;
	margin-top: 10px; /* ALIGN WITH "My Cart title" */
}

@media (max-width: 1000px) {
	.cart-wrapper {
		max-width: var(--general-max-width);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}

	.cart-wrapper > div {
		width: 100%;
	}

}
</style>