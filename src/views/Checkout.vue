<template>
	<main class="checkout-container">
		<div class="checkout-wrapper">
			<h1 class="serif">Checkout</h1>
			<section v-if="step === 1" class="step-1" id="step-1">
				<h2>{{ step }}. Billing Address</h2>
				<div v-if=" userData?.address === null || userData?.address === '' ">
					<label for="address">Address</label>
					<textarea v-model="newAddress" id="address" name="address" style="resize: none" type="text"
								 maxlength="150"
								 minlength="10"></textarea>
					<p>Please, stick to the following structure:</p>
					<div class="your-info">
						<p>Name Surname</p>
						<p>Street, number, flat</p>
						<p>Zip code, city</p>
						<p>Country, State</p>
						<p>Telephone</p>
					</div>
				</div>
				<div v-if=" userData?.address !== null && userData?.address !== '' ">
					<p>Your address is:</p>
					<p class="your-info">{{ userData?.address }}</p>
					<p>Want to change it?</p>
					<p><a class="a-clickable" @click="changeAddress = true">Yes</a></p>

					<div v-if="changeAddress">
						<label for="address-change">Address</label>
						<textarea v-model="newAddress" id="address-change" name="address" style="resize: none" type="text"
									 maxlength="150"
									 minlength="10"></textarea>
						<p>Please, stick to the following structure:</p>
						<div class="your-info">
							<p>Name Surname</p>
							<p>Street, number, flat</p>
							<p>Zip code, city</p>
							<p>Country, State</p>
							<p>Telephone</p>
						</div>
						<p><a class="a-clickable" @click="changeAddress = false">Cancel</a></p>
					</div>
				</div>
				<button @click="step++" class="white">Next</button>
			</section>
			<section v-if="step === 2" class="step-2" id="step-2">
				<h2>{{ step }}. Shipping Method</h2>
				<div>
					<label for="upsExpress">
						<input type="radio" name="shipping-method" id="upsExpress" value="UPSE">
						UPS Express Shipping
						<p class="opacity">No tracking (1 to 2 days)</p>
					</label>
					<label for="correosExpress">
						<input type="radio" name="shipping-method" id="correosExpress" value="CE">
						Correos Express Shipping
						<p class="opacity">Full tracking (2 to 3 days)</p>
					</label>
				</div>


				<button @click="step--" class="white">Prev</button>
				<button @click="step++" class="white">Next</button>
			</section>
			<section v-if="step === 3" class="step-3" id="step-3">
				<h2>{{ step }}. Payment Method</h2>
				<div>
					<label for="card">
						<input type="radio" name="payment-method" id="card" value="card">
						Credit or Debit Card
					</label>
					<div>
						<p>Accepted Card Types:</p>
						<p>Card Details:</p>
						<div class="card-details">
							<input @input="formatCardNumber" type="number" placeholder="1234 1234 1234 1234">
						</div>
					</div>
					<label for="stripe">
						<input type="radio" name="payment-method" id="stripe" value="stripe">
						Stripe
					</label>
				</div>

				<button @click="step--" class="white">Prev</button>
				<button @click="step++" class="white">Next</button>
			</section>
			<section v-if="step === 4" class="step-4" id="step-4">
				<h2>{{ step }}. Checkout Review</h2>


				<button @click="step--" class="white">Prev</button>
				<button @click="step++" class="white">Next</button>
			</section>
		</div>
	</main>
</template>

<script>
import UserService from "@/services/UserService";

export default {
	name: "Checkout",
	data() {
		return {
			loggedIn: localStorage.getItem("userId") !== null,
			userData: null,
			step: 1,
			changeAddress: false,
			newAddress: "",
		}
	},
	methods: {
		async fetchUser() {
			let data = await UserService.get(localStorage.getItem("userId"));
			this.userData = data.data;
			// TODO: Delete
			this.userData.address = "Street x";
			console.log(this.userData)
		},

	},
	mounted() {
		this.fetchUser();
	}
}
</script>

<style scoped>
h1 {
	margin: 0 0 2rem 0;
}

.checkout-container {
	display: flex;
	justify-content: center;
	margin: 0 var(--general-margin);
}

.checkout-wrapper {
	width: 100%;
	max-width: var(--general-max-width);
	margin: 0 0 2rem 0;
}

/* STEP 1 */

.step-1 {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.your-info {
	color: var(--darkgreen);
	border: 1px solid black;
}

.a-clickable {
	color: var(--lightgreen);
	cursor: pointer;
}

.a-clickable:hover {
	text-decoration: underline;
}
</style>