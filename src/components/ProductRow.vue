<template>
	<div class="product-row">
		<PlantImage :can-be-favorite="true" :initialFavoriteState="plant.isFavorite" class="product-image"
						:clickable="true" :plantId="plant.id"
						:stock="plant.stock > 0"></PlantImage>
		<div class="product-data">
			<div class="product-data-title">
				<p class="product-name">{{ plant.name }}</p>
				<div class="products-stars">
					<svg v-for="index in Math.floor(avgScore)" class="star" width="31" height="29" viewBox="0 0 31 29"
						  fill="none"
						  xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
							fill="#F2C72E"/>
					</svg>
					<svg v-if="avgScoreHalf" width="30" height="29" class="star" viewBox="0 0 30 29" fill="none"
						  xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
								d="M14.7414 0L11.2614 10.7102H1.70135H4.57764e-05L1.37643 11.7102L9.11067 17.3295L5.63071 28.0398H5.63075L7.00713 27.0398L14.7414 21.4205H14.7414L22.4757 27.0398L23.8521 28.0398L23.3264 26.4217L20.3721 17.3295L28.1064 11.7102L29.4828 10.7102H27.7815H18.2214L15.2672 1.61803L14.7414 0L14.7414 0.00013208V0ZM14.7414 20.1844V3.2362L14.7414 3.23607L17.2703 11.0193L17.4948 11.7102H18.2214H26.4051L19.7843 16.5205L19.1966 16.9476L19.4211 17.6385L21.95 25.4217L15.3292 20.6115L14.7414 20.1844L14.7414 20.1844Z"
								fill="#F2C72E"/>
					</svg>
					<svg v-for="index in 5 - (Math.floor(avgScore) + (avgScoreHalf ? 1 : 0))" width="31" height="29"
						  viewBox="0 0 31 29"
						  fill="none" xmlns="http://www.w3.org/2000/svg"
						  class="star">
						<path
							d="M15.5 1.61807L18.5044 10.8648L18.6167 11.2103H18.98H28.7025L20.8368 16.925L20.5429 17.1386L20.6552 17.4841L23.6596 26.7308L15.7939 21.016L15.5 20.8025L15.2061 21.016L7.34039 26.7308L10.3448 17.4841L10.4571 17.1386L10.1632 16.925L2.29747 11.2103H12.02H12.3833L12.4956 10.8648L15.5 1.61807Z"
							stroke="#F2C72E"/>
					</svg>
				</div>
				<p class="product-price">{{ plant.price }}</p>
			</div>
			<div class="product-buttons">
				<router-link class="view-link" :to="'/products/' + plant.id">
					<button class="view-button white-black">View</button>
				</router-link>
				<button @click="addToCart" class="cart-button">
					<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17.5243 5.87239H9.66422L6.00584 0.75453C5.86095 0.509069 5.65569 0.374066 5.39007 0.349519C5.12444 0.324973 4.87089 0.410885 4.62942 0.607253C4.2672 0.999991 4.24305 1.39273 4.55697 1.78547L7.41848 5.87239H2.09391C1.65925 5.87239 1.29099 6.0258 0.989147 6.33263C0.6873 6.63946 0.536377 7.00151 0.536377 7.4188V8.22882C0.536377 8.91611 0.850297 9.38248 1.47814 9.62794L3.61521 16.2922C3.7118 16.6359 3.90498 16.9488 4.19476 17.2311C4.48453 17.5134 4.81052 17.6545 5.17274 17.6545H14.4455C14.8077 17.6545 15.1337 17.5134 15.4234 17.2311C15.7132 16.9488 15.9064 16.6359 16.003 16.2922L18.1401 9.70158C18.7679 9.45612 19.0818 8.98975 19.0818 8.30245V7.49243C19.0818 7.02606 18.9309 6.63946 18.6291 6.33263C18.3272 6.0258 17.959 5.87239 17.5243 5.87239ZM2.09391 7.4188H8.57757L9.12089 8.15518C9.16919 8.15518 9.19334 8.17972 9.19334 8.22882H2.09391V7.4188ZM14.5179 15.8504V15.924C14.5179 15.9486 14.5058 15.9731 14.4817 15.9977C14.4575 16.0222 14.4455 16.0467 14.4455 16.0713H5.24518C5.19689 16.0713 5.17274 16.0222 5.17274 15.924L3.18055 9.77522H16.4377L14.5179 15.8504ZM10.4973 8.22882C10.6663 7.93426 10.7509 7.66426 10.7509 7.4188H17.5243V8.22882H10.4973ZM5.93339 14.6722C5.95754 14.844 6.05413 14.9913 6.22317 15.114C6.3922 15.2367 6.56123 15.2981 6.73027 15.2981H6.87515C7.06834 15.249 7.2253 15.1263 7.34604 14.9299C7.46677 14.7335 7.49092 14.5372 7.41848 14.3408L6.65782 11.2112C6.60953 11.0148 6.48879 10.8552 6.29561 10.7325C6.10243 10.6098 5.90925 10.5852 5.71606 10.6589C5.52288 10.708 5.36592 10.8307 5.24518 11.0271C5.12444 11.2234 5.1003 11.4075 5.17274 11.5794L5.93339 14.6722ZM12.7431 15.2981H12.8879C13.057 15.2981 13.226 15.2367 13.395 15.114C13.5641 14.9913 13.6607 14.844 13.6848 14.6722L14.4455 11.5057C14.4938 11.3094 14.4636 11.113 14.3549 10.9166C14.2462 10.7202 14.0953 10.6098 13.9021 10.5852C13.395 10.4871 13.0811 10.6712 12.9604 11.1375L12.1997 14.2672C12.0548 14.7581 12.2359 15.1017 12.7431 15.2981ZM9.8091 15.2981C10.3162 15.2981 10.5698 15.0281 10.5698 14.4881V11.3584C10.5698 10.843 10.3162 10.5852 9.8091 10.5852C9.302 10.5852 9.04845 10.843 9.04845 11.3584V14.4881C9.04845 15.0281 9.302 15.2981 9.8091 15.2981Z"
							fill="#104547"/>
					</svg>
				</button>
			</div>

		</div>
	</div>
</template>

<script>
import PlantImage from "@/components/PlantImage";

export default {
	name: "ProductRow",
	components: {
		PlantImage,
	},
	props: {
		plant: Object
	},
	data() {
		return {
			avgScore: null,
			avgScoreHalf: null
		}
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
		setAvgScore() {
			let sum = 0;
			let avg;
			for (let i = 0; i < this.plant.scores.length; i++) {
				sum += this.plant.scores[i].value;
			}
			avg = sum / this.plant.scores.length;
			this.avgScore = Math.floor(avg);
			this.avgScoreHalf = (avg - Math.floor(avg)) > 0.25;
		},
	},
	mounted() {
		this.setAvgScore();
	}
}
</script>

<style scoped>
.product-row {
	display: flex;
	gap: 2rem;
	width: 100%;
}

.product-image {
	width: 50%;
	height: 100%;
}

.product-data {
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.product-data-title {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-size: 1.2rem;
}

.product-buttons {
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 1rem;
}

.product-name {
	font-size: 1.1rem;
}

.product-price {
	opacity: 80%;
}

/* BUTTONS */
.view-link {
	display: block;
	width: 100%;
}

.view-button {
	background: none;
	border: 2px solid black;
	width: 100%;
	border-radius: 5rem;
	cursor: pointer;
	transition: 0.25s ease-out;
	min-width: 3rem;
	height: 100%;
}

.view-button:hover {
	background: black;
	color: white;
}

.cart-button {
	border: 2px solid var(--darkgreen);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 2.3rem;
	min-width: 2.3rem;
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

/* PHONE */
@media (max-width: 400px) {
	.products-stars .star {
		width: calc(100% / 5);
	}

	.product-image {
		min-width: 50%;
	}

	.product-data-title {
		gap: 0rem;
	}

	.product-data-title {
		font-size: 0.9rem;
	}

	.product-row {
		gap: 1rem;
	}

	.product-buttons {
		gap: 0.5rem;
	}

	.view-button {
		display: none;
	}
}

</style>