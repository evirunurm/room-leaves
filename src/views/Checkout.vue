<template>
	<main class="checkout-container">
		<div class="checkout-wrapper">
			<h1 class="serif">Checkout</h1>
			<section v-if="step === 1" class="step-1" id="step-1">
				<h2 class="serif">{{ step }}. Billing Address</h2>
				<div class="change-address-container"
					  v-if=" userData?.address === null || userData?.address === '' || !loggedIn ">
					<form id="address-form" class="address-container">
						<label for="address">Address</label>
						<textarea @input="changeAddress=true" v-model="newAddress" id="address" style="resize: none"
									 type="text"
									 maxlength="150"
									 minlength="10"></textarea>
					</form>
					<div class="structure-container">
						<p>Please, stick to the following structure:</p>
						<div class="your-info structure">
							<p>Name Surname</p>
							<p>Street, number, flat</p>
							<p>Zip code, city</p>
							<p>Country, State</p>
							<p>Telephone</p>
						</div>
					</div>

				</div>
				<div v-if=" userData?.address !== null && userData?.address !== '' && loggedIn">
					<p>Your address is:</p>
					<p class="your-info">{{ userData?.address }}</p>
					<p>Want to change it?</p>
					<p><a class="a-clickable" @click="changeAddress = true">Yes</a></p>
					<div class="change-address-container" v-if="changeAddress">
						<div class="address-container">
							<label for="address-change">Address</label>
							<textarea v-model="newAddress" id="address-change" name="address" style="resize: none" type="text"
										 maxlength="150"
										 minlength="10"></textarea>
						</div>

						<div class="structure-container structure">
							<p>Please, stick to the following structure:</p>
							<div class="your-info">
								<p>Name Surname</p>
								<p>Street, number, flat</p>
								<p>Zip code, city</p>
								<p>Country, State</p>
								<p>Telephone</p>
							</div>
						</div>
						<p><a class="a-clickable" @click="changeAddress = false">Cancel</a></p>
					</div>
				</div>
				<button @click="evalStep" class="green next-button">Next</button>
			</section>
			<section v-if="step === 2" class="step-2" id="step-2">
				<h2 class="serif">{{ step }}. Shipping Method</h2>
				<article class="container">
					<p>Choose a shipping method</p>
					<label for="upsExpress">
						<input v-model="order.shippingMethod" type="radio" name="shipping-method" id="upsExpress"
								 value="UPSE">
						<p class="label">UPS Express Shipping</p>
						<p class="opacity">No tracking (1 to 2 days)</p>
					</label>
					<label for="correosExpress">
						<input v-model="order.shippingMethod" type="radio" name="shipping-method" id="correosExpress"
								 value="CE">
						<p class="label">Correos Express Shipping</p>
						<p class="opacity">Full tracking (2 to 3 days)</p>
					</label>
				</article>
				<div class="buttons-container">
					<button @click="step--" class="white">Prev</button>
					<button @click="evalStep" class="green">Next</button>
				</div>
			</section>
			<section v-if="step === 3" class="step-3" id="step-3">
				<h2 class="serif">{{ step }}. Payment Method</h2>
				<article class="container">
					<p>Choose a payment method</p>
					<label for="card">
						<input v-model="order.paymentMethod" type="radio" name="payment-method" id="card" :value="1">
						<p class="label">Credit or Debit Card</p>
						<div v-if="order.paymentMethod === 1">
							<p>Accepted Card Types:</p>
							<div class="card-types">
								<img height="50" src="../assets/payment/american_express.png" alt="American Express">
								<img height="50" src="../assets/payment/mastercard.png" alt="Mastercard">
								<img height="50" src="../assets/payment/visa.png" alt="Visa">
							</div>
							<p>Card Details:</p>
							<form id="card-form" class="card-details">
								<input v-model="cardNumber" @input="formatCardNumber" maxlength="19" type="text"
										 placeholder="1234 1234 1234 1234">
								<div>
									<input v-model="cardDate" @input="formatCardExpiration" maxlength="5" type="text"
											 placeholder="MM/YY">
									<input v-model="cardCVC" type="text"
											 placeholder="CVC" maxlength="3">
								</div>
							</form>
						</div>
					</label>
					<label for="stripe">
						<input v-model="order.paymentMethod" type="radio" name="payment-method" id="stripe" :value="2">
						<p class="label">Stripe</p>
						<p v-if="order.paymentMethod===2">You'll be redirected to Stripe at the end of the checkout</p>
					</label>
				</article>
				<div class="buttons-container">
					<button @click="step--" class="white">Prev</button>
					<button @click="evalStep" class="green">Next</button>
				</div>
			</section>
			<section v-if="step === 4" class="step-4" id="step-4">
				<h2 class="serif">{{ step }}. Checkout Review</h2>
				<p v-if="loggedIn">You're logged in as {{ userData["full_name"] }}</p>
				<article>
					<p>Shipping address</p>
					<p class="your-info" v-if="changeAddress">{{ newAddress }}</p>
					<p class="your-info" v-else="changeAddress">{{ userData.address }}</p>
				</article>
				<article>
					<p>Shipping method</p>
					<p class="your-info">{{ order.shippingMethod }}</p>
				</article>
				<article>
					<p>Payment method</p>
					<div class="your-info" v-if="order.paymentMethod === 1">
						<p>Card **** **** **** {{ cardNumber.replaceAll(" ", "").substring(12) }}</p>
					</div>
					<div class="your-info" v-if="order.paymentMethod === 2">
						<p>You'll get redirected to Stripe's page.</p>
					</div>
				</article>
				<article>
					<p>Items</p>
					<div class="items">
						<ProductCheckout class="item" v-for="item in cart" :item="item"></ProductCheckout>
					</div>
					<div class="items-total">
						<div>
							<p>Subtotal</p>
							<p class="price">{{ subtotal }}</p>
						</div>
						<div>
							<p>Shipping</p>
							<p class="price">{{ delivery }}</p>
						</div>
						<div>
							<p>Tax</p>
							<p class="price">{{ tax }}</p>
						</div>
						<div>
							<p class="total">Total</p>
							<p class="price total">{{ Math.round((subtotal + delivery + tax) * 100) / 100 }}</p>
						</div>
					</div>
				</article>
				<div class="buttons-container">
					<button @click="step--" class="white">Prev</button>
					<button @click="submitOrder" class="green">Payment</button>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
import UserService from "@/services/UserService";
import OrderService from "@/services/OrderService";
import ProductCheckout from "@/components/ProductCheckout";

export default {
	name: "Checkout",
	components: {
		ProductCheckout
	},
	data() {
		return {
			loggedIn: localStorage.getItem("userId") !== null,
			userData: null,
			step: 1,
			changeAddress: false,
			newAddress: null,
			cardNumber: null,
			cardDate: null,
			cardCVC: null,
			cart: JSON.parse(localStorage.getItem("cart")),
			order: {
				paymentMethod: null,
				shippingMethod: null,
				billingAddress: null,
				details: [],
			},
			subtotal: null,
			delivery: null,
			tax: null,
		}
	},
	methods: {
		async fetchUser() {
			try {
				if (localStorage.getItem("userId")) {
					let data = await UserService.get(localStorage.getItem("userId"));
					this.userData = data.data;
				}
			} catch (err) {
				console.log(err.message);
				await this.logOut();
			}
		},
		formatCardNumber(event) {
			if (event.inputType === "insertText" && isNaN(parseInt(event.data))) {
				event.target.value = event.target.value.substring(0, event.target.value.length - 1);
				return;
			}
			if (event.target.value.replaceAll(" ", "").length % 4 === 0 && event.data !== null && event.target.value.length !== 18) {
				event.target.value += " ";
			}
		},
		formatCardExpiration(event) {
			if (event.inputType === "insertText" && isNaN(parseInt(event.data))) {
				event.target.value = event.target.value.substring(0, event.target.value.length - 1);
				return;
			}

			if (event.target.value.substring(0, 2) === "00" || parseInt(event.target.value.substring(0, 3)) > 12) {
				event.target.style.outline = "1px solid red"
			} else {
				event.target.style.outline = "inherit"
			}

			if (event.target.value.length === 2 && event.data !== null) {
				event.target.value += "/";
			}

		},
		loadPrice() {
			this.getTotal();
			this.getDelivery();
			this.getTax();
		},
		getTotal() {
			this.subtotal = this.cart.reduce((acc, curr) => {
				return acc + parseFloat(curr.price * curr.amount)
			}, 0);
			return Math.round((this.subtotal / 100) * 100) / 100;
		},
		getDelivery() {
			this.delivery = Math.round((this.subtotal / 100 * 10) * 100) / 100;
			return this.delivery;
		},
		getTax() {
			this.tax = Math.round((this.subtotal / 100 * 21) * 100) / 100;
			return this.tax;
		},
		evalStep() {
			if (this.step === 1 && this.validAddress(this.userData?.address) || (this.changeAddress && this.validAddress(this.newAddress))) {
				this.step++;
				return;
			}

			if (this.step === 2 && this.order.shippingMethod) {
				this.step++;
				return;
			}
			if (this.step === 3 && this.order.paymentMethod) {
				if (this.order.paymentMethod === 2) {
					this.step++;
					return;
				}
				if (this.order.paymentMethod === 1 && this.cardNumber && this.cardDate && this.cardCVC) {
					this.step++;
					return;
				}
			}
		},
		validAddress(address) {
			return address !== "" && address !== null && address !== undefined && address.length > 10;
		},
		async submitOrder() {
			for (let i = 0; i < this.cart.length; i++) {
				this.order.details.push({
					amount: this.cart[i].amount,
					plantId: this.cart[i].id,
				});
			}
			this.order.billingAddress = this.changeAddress ? this.newAddress : this.userData.address;
			try {
				let data = await OrderService.create(localStorage.getItem("userId"), this.order);
				localStorage.removeItem("cart");
				console.log(data)
			} catch (err) {
				console.log(err.message);
			}
		},
		async logOut() {
			localStorage.removeItem("accessToken");
			localStorage.removeItem("userId");
			await this.$router.push("/login");
		},
	},
	async mounted() {
		await this.fetchUser();
		this.loadPrice();
		console.log(this.loggedIn)
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

.step-1, .step-2, .step-3, .step-4 {
	display: flex;
	flex-direction: column;
	/*	gap: 1rem;*/
}

.your-info {
	color: var(--darkgreen);
	font-weight: 600;
}

.a-clickable {
	color: var(--lightgreen);
	cursor: pointer;
}

.a-clickable:hover {
	text-decoration: underline;
}

.change-address-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 1rem 0;
	/*	border: 1px solid black;*/
}

.address-container {
	display: flex;
	flex-direction: column;
}

textarea {
	height: 100px;
	padding: .5rem;
	color: var(--lightgreen);
}

.your-info p:before {
	content: "> ";
	color: rgba(0, 0, 0, 0.3)
}

.buttons-container {
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 1rem;
}

.buttons-container > button {
	max-width: 150px;
	width: 100%;
}

.next-button {
	align-self: flex-end;
	max-width: 150px;
	width: 100%;
}

/* STEP 3 */
.container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
}

.card-details {
	border: 1px solid black;
	padding: 1.5rem;
	margin: 0.5rem;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	max-width: 400px;
	gap: 1rem;
}

.card-details > input {
	padding: 0.5rem;
	color: var(--lightgreen)
}

.card-details > div {
	display: flex;
	width: 100%;
	gap: 1rem;
}

.card-details > div > input {
	display: flex;
	width: 50%;
	padding: 0.5rem;
	color: var(--lightgreen)
}

.card-types {
	display: flex;
	gap: 0.5rem;
}

label > .label {
	display: inline;
	margin-left: 0.5rem;
	font-weight: 600;
}

/* STEP 4 */

.step-4 {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}


.items {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1rem;
}

.item {
	max-height: 150px;
	max-width: 80%;
}

.price:after {
	content: "€";
	font-size: 0.9em;
}

.items-total {
	display: flex;
	flex-direction: column;
	margin: 2rem 0 1rem 0;
}

.items-total > div {
	display: flex;
	width: 100%;
	justify-content: space-between;
}

.total {
	font-weight: 600;
}
</style>