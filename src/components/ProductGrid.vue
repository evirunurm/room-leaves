<template>
	<div class="product-grid">
		<PlantImage :plant-name="plant.name" :can-be-favorite="true" :initialFavoriteState="plant.isFavorite"
						class="product-image"
						:clickable="true" :plantId="plant.id"
						:stock="plant.stock > 0"></PlantImage>
		<div class="product-data">
			<div class="product-data-title">
				<p class="product-name">{{ plant.name }}</p>
				<p class="product-price">{{ plant.price }}</p>
			</div>
			<button @click="addToCart($event);sendNotification(plant.name +' added to cart')" class="cart-button">
				<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.5243 5.87239H9.66422L6.00584 0.75453C5.86095 0.509069 5.65569 0.374066 5.39007 0.349519C5.12444 0.324973 4.87089 0.410885 4.62942 0.607253C4.2672 0.999991 4.24305 1.39273 4.55697 1.78547L7.41848 5.87239H2.09391C1.65925 5.87239 1.29099 6.0258 0.989147 6.33263C0.6873 6.63946 0.536377 7.00151 0.536377 7.4188V8.22882C0.536377 8.91611 0.850297 9.38248 1.47814 9.62794L3.61521 16.2922C3.7118 16.6359 3.90498 16.9488 4.19476 17.2311C4.48453 17.5134 4.81052 17.6545 5.17274 17.6545H14.4455C14.8077 17.6545 15.1337 17.5134 15.4234 17.2311C15.7132 16.9488 15.9064 16.6359 16.003 16.2922L18.1401 9.70158C18.7679 9.45612 19.0818 8.98975 19.0818 8.30245V7.49243C19.0818 7.02606 18.9309 6.63946 18.6291 6.33263C18.3272 6.0258 17.959 5.87239 17.5243 5.87239ZM2.09391 7.4188H8.57757L9.12089 8.15518C9.16919 8.15518 9.19334 8.17972 9.19334 8.22882H2.09391V7.4188ZM14.5179 15.8504V15.924C14.5179 15.9486 14.5058 15.9731 14.4817 15.9977C14.4575 16.0222 14.4455 16.0467 14.4455 16.0713H5.24518C5.19689 16.0713 5.17274 16.0222 5.17274 15.924L3.18055 9.77522H16.4377L14.5179 15.8504ZM10.4973 8.22882C10.6663 7.93426 10.7509 7.66426 10.7509 7.4188H17.5243V8.22882H10.4973ZM5.93339 14.6722C5.95754 14.844 6.05413 14.9913 6.22317 15.114C6.3922 15.2367 6.56123 15.2981 6.73027 15.2981H6.87515C7.06834 15.249 7.2253 15.1263 7.34604 14.9299C7.46677 14.7335 7.49092 14.5372 7.41848 14.3408L6.65782 11.2112C6.60953 11.0148 6.48879 10.8552 6.29561 10.7325C6.10243 10.6098 5.90925 10.5852 5.71606 10.6589C5.52288 10.708 5.36592 10.8307 5.24518 11.0271C5.12444 11.2234 5.1003 11.4075 5.17274 11.5794L5.93339 14.6722ZM12.7431 15.2981H12.8879C13.057 15.2981 13.226 15.2367 13.395 15.114C13.5641 14.9913 13.6607 14.844 13.6848 14.6722L14.4455 11.5057C14.4938 11.3094 14.4636 11.113 14.3549 10.9166C14.2462 10.7202 14.0953 10.6098 13.9021 10.5852C13.395 10.4871 13.0811 10.6712 12.9604 11.1375L12.1997 14.2672C12.0548 14.7581 12.2359 15.1017 12.7431 15.2981ZM9.8091 15.2981C10.3162 15.2981 10.5698 15.0281 10.5698 14.4881V11.3584C10.5698 10.843 10.3162 10.5852 9.8091 10.5852C9.302 10.5852 9.04845 10.843 9.04845 11.3584V14.4881C9.04845 15.0281 9.302 15.2981 9.8091 15.2981Z"
						fill="#104547"/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
import PlantImage from "../components/PlantImage";

export default {
	name: "ProductGrid",
	components: {
		PlantImage,
	},
	props: {
		plant: Object,
	},
	methods: {
		addToCart() {
			if (this.plant.stock > 0) {
				let cart = JSON.parse(localStorage.getItem("cart"));
				if (!cart) {
					cart = [];
				}
				// If cart contains an object with id = plant.id
				let itemArr = cart.filter(item => item.id === this.plant.id)
				if (itemArr?.length > 0) {
					itemArr[0].amount++;
				} else {
					cart.push({...this.plant, amount: 1});
				}
				localStorage.setItem("cart", JSON.stringify(cart));
			}
		},
		sendNotification(message) {
			this.$emit("notification", message)
		}
	}
}
</script>

<style scoped>

.product-grid {
	max-width: 300px;
}

.product-data {
	display: flex;
	justify-content: space-between;
	margin-top: 0.75em;
}

.product-name {
	font-size: 1.1rem;
}

.product-price {
	opacity: 80%;
}

.cart-button {
	border: 2px solid var(--darkgreen);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2.3rem;
	width: 2.3rem;
	cursor: pointer;
	transition: 0.15s ease-in;
	background: none;
}

.cart-button svg {
	position: relative;
}

.cart-button:hover {
	background: var(--darkgreen);
}

.cart-button:hover path {
	fill: white;
}

.product-price:after {
	content: "€";
	font-size: 0.9em;
}

@media (max-width: 400px) {
	.product-grid {
		height: 100%;
		min-width: 100%;
	}

	.product-data {
		display: flex;
		flex-direction: column;
	}

	.cart-button {
		align-self: flex-end;

	}

	.product-name {
		font-size: 1rem;
	}

	.product-price {
		font-size: 0.8rem;
	}

	.cart-button {
		height: 2rem;
		width: 2rem;
		min-width: 2rem;
		min-height: 2rem;
	}


}
</style>