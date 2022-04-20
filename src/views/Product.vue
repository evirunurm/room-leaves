<template>
	<main class="product">
		<h1 class="serif">{{ plant.name }}</h1>
		<section class="plant-main">
			<PlantImage :can-be-favorite="true" class="plant-image" :stock="true" :clickable="false"
							:plantId="plantId"></PlantImage>
			<div class="plant-data">
				<div class="plant-values">
					<div class="plant-rating">
						<div class="plant-stars">
							<svg v-for="index in Math.floor(avgScore)" class="star" width="31" height="29" viewBox="0 0 31 29"
								  fill="none"
								  xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
									fill="#F2C72E"/>
							</svg>
							<svg v-if="avgScoreHalf" width="30" height="29" viewBox="0 0 30 29" fill="none"
								  xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
										d="M14.7414 0L11.2614 10.7102H1.70135H4.57764e-05L1.37643 11.7102L9.11067 17.3295L5.63071 28.0398H5.63075L7.00713 27.0398L14.7414 21.4205H14.7414L22.4757 27.0398L23.8521 28.0398L23.3264 26.4217L20.3721 17.3295L28.1064 11.7102L29.4828 10.7102H27.7815H18.2214L15.2672 1.61803L14.7414 0L14.7414 0.00013208V0ZM14.7414 20.1844V3.2362L14.7414 3.23607L17.2703 11.0193L17.4948 11.7102H18.2214H26.4051L19.7843 16.5205L19.1966 16.9476L19.4211 17.6385L21.95 25.4217L15.3292 20.6115L14.7414 20.1844L14.7414 20.1844Z"
										fill="#F2C72E"/>
							</svg>
							<svg v-for="index in 5 - (Math.floor(avgScore) + (avgScoreHalf ? 1 : 0))" width="31" height="29"
								  viewBox="0 0 31 29"
								  fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.5 1.61807L18.5044 10.8648L18.6167 11.2103H18.98H28.7025L20.8368 16.925L20.5429 17.1386L20.6552 17.4841L23.6596 26.7308L15.7939 21.016L15.5 20.8025L15.2061 21.016L7.34039 26.7308L10.3448 17.4841L10.4571 17.1386L10.1632 16.925L2.29747 11.2103H12.02H12.3833L12.4956 10.8648L15.5 1.61807Z"
									stroke="#F2C72E"/>
							</svg>
						</div>
						<div class="plant-stars plant-stars--hover">
							<button v-for="i in 5" :data-value="5 - i + 1" @click="sendScore" class="stars-button">
								<svg width="31" height="29"
									  viewBox="0 0 31 29"
									  fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15.5 1.61807L18.5044 10.8648L18.6167 11.2103H18.98H28.7025L20.8368 16.925L20.5429 17.1386L20.6552 17.4841L23.6596 26.7308L15.7939 21.016L15.5 20.8025L15.2061 21.016L7.34039 26.7308L10.3448 17.4841L10.4571 17.1386L10.1632 16.925L2.29747 11.2103H12.02H12.3833L12.4956 10.8648L15.5 1.61807Z"
										stroke="#F2C72E"/>
								</svg>
							</button>
						</div>
						<div class="plant-review">
							<div class="plant-review-title">
								<p class="plant-review-title">{{ lastReview.clientName }}</p>
								<div class="plant-review-stars">
									<svg v-for="index in Math.floor(lastReview.value)" class="star-small" width="31" height="29"
										  viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
											fill="#F2C72E"/>
									</svg>
									<svg v-if="(lastReview.value - Math.floor(lastReview.value)) > 0.25" width="30" height="29"
										  class="star-small" viewBox="0 0 30 29"
										  fill="none"
										  xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd"
												d="M14.7414 0L11.2614 10.7102H1.70135H4.57764e-05L1.37643 11.7102L9.11067 17.3295L5.63071 28.0398H5.63075L7.00713 27.0398L14.7414 21.4205H14.7414L22.4757 27.0398L23.8521 28.0398L23.3264 26.4217L20.3721 17.3295L28.1064 11.7102L29.4828 10.7102H27.7815H18.2214L15.2672 1.61803L14.7414 0L14.7414 0.00013208V0ZM14.7414 20.1844V3.2362L14.7414 3.23607L17.2703 11.0193L17.4948 11.7102H18.2214H26.4051L19.7843 16.5205L19.1966 16.9476L19.4211 17.6385L21.95 25.4217L15.3292 20.6115L14.7414 20.1844L14.7414 20.1844Z"
												fill="#F2C72E"/>
									</svg>
									<svg
										v-for="index in 5 - (Math.floor(lastReview.value) + ((lastReview.value - Math.floor(lastReview.value)) > 0.25 ? 1 : 0))"
										class="star-small"
										width="31" height="29"
										viewBox="0 0 31 29"
										fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M15.5 1.61807L18.5044 10.8648L18.6167 11.2103H18.98H28.7025L20.8368 16.925L20.5429 17.1386L20.6552 17.4841L23.6596 26.7308L15.7939 21.016L15.5 20.8025L15.2061 21.016L7.34039 26.7308L10.3448 17.4841L10.4571 17.1386L10.1632 16.925L2.29747 11.2103H12.02H12.3833L12.4956 10.8648L15.5 1.61807Z"
											stroke="#F2C72E"/>
									</svg>

								</div>
							</div>
							<p class="plant-review-data">{{ lastReview.message }}</p>
						</div>
					</div>
					<p class="plant-price">{{ plant.price }}</p>
				</div>
				<div class="plant-options">
					<router-link class="router-cart" to="/cart">
						<button @click="addToCart" class="green cart-button">Add to Cart</button>
					</router-link>
					<button class="white--white ar-button">Visualize in AR</button>
				</div>
			</div>
		</section>
		<section class="plant-about">
			<h2>About {{ plant.name }}</h2>
			<article>
				<p>{{ plant.description }}</p>
				<div class="plant-stats">
					<div class="plant-stat" v-if="plant.humidity">
						<div class="plant-stat-name">
							<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.66053 0.147016C5.70697 0.100453 5.76215 0.0635098 5.82289 0.0383034C5.88364 0.0130969 5.94876 0.00012207 6.01453 0.00012207C6.08029 0.00012207 6.14541 0.0130969 6.20616 0.0383034C6.2669 0.0635098 6.32208 0.100453 6.36853 0.147016C6.89953 0.679016 8.17253 2.21102 9.31453 4.05002C10.4445 5.87002 11.5145 8.10002 11.5145 10.001C11.5145 11.845 10.9865 13.353 10.0045 14.405C9.02153 15.46 7.63053 16.001 6.01453 16.001C4.39953 16.001 3.00853 15.46 2.02453 14.405C1.04153 13.353 0.514526 11.845 0.514526 10.001C0.514526 8.09902 1.58453 5.87102 2.71453 4.05002C3.85653 2.21002 5.12953 0.680016 5.66053 0.147016Z"
									fill="#104547"/>
							</svg>
							<p>Humidity</p>
						</div>
						<p class="plant-stat-data">{{ plant.humidity }}%</p>
					</div>
					<div class="plant-stat" v-if="plant.temperature">
						<div class="plant-stat-name">
							<svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.00125 14.5005C5.60569 14.5005 5.21901 14.6178 4.89011 14.8376C4.56121 15.0574 4.30486 15.3697 4.15349 15.7352C4.00211 16.1006 3.96251 16.5028 4.03968 16.8907C4.11685 17.2787 4.30733 17.6351 4.58704 17.9148C4.86674 18.1945 5.22311 18.3849 5.61107 18.4621C5.99903 18.5393 6.40116 18.4997 6.76661 18.3483C7.13207 18.1969 7.44442 17.9406 7.66419 17.6117C7.88395 17.2828 8.00125 16.8961 8.00125 16.5005C8.00125 15.9701 7.79053 15.4614 7.41546 15.0863C7.04039 14.7113 6.53168 14.5005 6.00125 14.5005ZM10.5012 12.5005V5.00055C10.5012 3.80708 10.0271 2.66248 9.18323 1.81857C8.33931 0.974655 7.19472 0.500549 6.00125 0.500549C4.80777 0.500549 3.66318 0.974655 2.81927 1.81857C1.97535 2.66248 1.50125 3.80708 1.50125 5.00055V12.5005C0.810091 13.2838 0.335376 14.2338 0.12406 15.2568C-0.087255 16.2797 -0.0278489 17.3402 0.296403 18.3331C0.620654 19.3261 1.19852 20.2172 1.97283 20.9183C2.74714 21.6194 3.69107 22.1062 4.71125 22.3305C5.13504 22.4271 5.5669 22.4841 6.00125 22.5005C7.16187 22.506 8.29915 22.1746 9.27526 21.5467C10.2514 20.9188 11.0244 20.0212 11.5007 18.9628C11.977 17.9044 12.1361 16.7306 11.9587 15.5836C11.7813 14.4366 11.275 13.3656 10.5012 12.5005ZM8.50125 19.5705C7.7056 20.276 6.66229 20.6365 5.60083 20.5728C4.53938 20.509 3.54672 20.0262 2.84125 19.2305C2.13577 18.4349 1.77526 17.3916 1.83902 16.3301C1.90279 15.2687 2.3856 14.276 3.18125 13.5705C3.27574 13.4779 3.35091 13.3675 3.4024 13.2456C3.4539 13.1237 3.4807 12.9929 3.48125 12.8605V5.00055C3.48125 4.33751 3.74464 3.70162 4.21348 3.23278C4.68232 2.76394 5.31821 2.50055 5.98125 2.50055C6.64429 2.50055 7.28017 2.76394 7.74901 3.23278C8.21786 3.70162 8.48125 4.33751 8.48125 5.00055V12.9405C8.4818 13.0729 8.5086 13.2037 8.56009 13.3256C8.61159 13.4475 8.68676 13.5579 8.78125 13.6505C9.19 14.0454 9.50991 14.5229 9.71967 15.0511C9.92943 15.5793 10.0242 16.1461 9.99773 16.7139C9.97123 17.2816 9.82407 17.8371 9.56602 18.3435C9.30798 18.8499 8.945 19.2955 8.50125 19.6505V19.5705Z"
									fill="#104547"/>
							</svg>
							<p>Temperature</p>
						</div>
						<p class="plant-stat-data">{{ plant.temperature }}ºC</p>
					</div>
					<div class="plant-stat">
						<div class="plant-stat-name">
							<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.01453 17.0001L1.51453 13.8001M5.01453 1.00012L5.01453 17.0001L5.01453 1.00012ZM5.01453 1.00012L8.51453 4.20012L5.01453 1.00012ZM5.01453 1.00012L1.51453 4.20012L5.01453 1.00012ZM5.01453 17.0001L8.51453 13.8001L5.01453 17.0001Z"
									stroke="#104547" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>

							<p>Height</p>
						</div>
						<p class="plant-stat-data">{{ plant.height * 100 }}cm</p>
					</div>
				</div>
			</article>

		</section>
		<section>
			<ProductCarousel title="More like this one" :plants="sameCategoryPlants"></ProductCarousel>
		</section>
	</main>
</template>

<script>
import PlantImage from '@/components/PlantImage';
import ProductCarousel from '@/components/ProductCarousel';
import PlantService from "@/services/PlantService";
import ScoresService from "@/services/ScoresService";


export default {
	components: {
		ProductCarousel,
		PlantImage,
	},
	data() {
		return {
			plantId: parseInt(this.$route.params.id),
			plant: {},
			sameCategoryPlants: [],
			lastReview: {
				name: "Marina Poppins",
				value: 5,
				comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni..."
			},
			avgScore: 5,
			avgScoreHalf: false,
			scored: false,
			usersScoreId: null,
			usersScoreValue: null
		}
	},
	methods: {
		async fetchPlantData() {
			let plant = await PlantService.get(this.plantId);
			this.plant = plant.data;
		},
		async fetchPlants(id) {
			let plants = await PlantService.getAll(id);
			this.sameCategoryPlants = plants.data.filter(plant => {
				return plant.categoryId === this.plant.categoryId && plant.id !== this.plant.id
			});
		},
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
		setLastReview() {
			let reviews = this.plant.scores;
			reviews.sort((curr, next) => {
				let currDate = Date.parse(curr["updatedAt"]);
				let nextDate = Date.parse(next["updatedAt"]);
				return nextDate - currDate;
			});
			if (reviews.length > 0) {
				this.lastReview = reviews[0];
			}
		},
		async sendScore(event) {
			let score = Array.from(event.target.attributes).find(item => item.name === "data-value").value;
			try {
				if (this.scored === true) {
					if (this.usersScoreValue == score) {
						return;
					}
					let res = await ScoresService.update(this.usersScoreId, {
						value: score,
						plantId: this.plantId,
						clientId: localStorage.getItem("userId")
					});
				} else {
					let res = await ScoresService.create({
						value: score,
						plantId: this.plantId,
						clientId: localStorage.getItem("userId")
					});
				}
				await this.fetchPlantData();
				this.setAvgScore();
				this.setLastReview();
				this.checkIfScored();
			} catch (err) {
				console.log(err.message)
			}
		},
		checkIfScored() {
			for (let i = 0; i < this.plant.scores.length; i++) {
				if (this.plant.scores[i].clientId == localStorage.getItem("userId")) {
					this.scored = true;
					this.usersScoreId = this.plant.scores[i].id;
					this.usersScoreValue = this.plant.scores[i].value;
				}
			}
		}
	},
	async mounted() {
		await this.fetchPlantData();
		await this.fetchPlants(this.plant.id);
		this.checkIfScored();
		this.setAvgScore();
		this.setLastReview();
	}
}
</script>

<style scoped>

section {
	width: 100%;
	max-width: var(--general-max-width);
	margin-bottom: 2rem;
}

.product {
	padding: 0 var(--general-margin);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
}

.plant-main {
	display: flex;
	width: 100%;
	max-width: var(--general-max-width);
	gap: 2.5rem;
	margin-top: 1rem;
}

.plant-main > .plant-image {
	width: 50%;
	height: 100%;
}

h1 {
	border-bottom: 2px solid black;
	width: 100%;
	text-align: center;
	padding: 0 0 0.5rem 0;
	max-width: var(--general-max-width);
}

/* Right / Under */
.plant-data {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 50%;
}

.plant-price {
	font-size: 1.25rem;
}

.plant-price:after {
	content: "€";
	font-size: 0.8em;
	font-weight: 600;
}

/* Buttons */
.plant-options {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1rem;
}

.plant-options > button:hover {
	text-decoration: underline;
}

.ar-button:after {
	content: "new";
	color: var(--pink);
	position: relative;
	left: 0.75em;
	font-size: 0.85em;
}

.router-cart > button {
	width: 100%;
}

.plant-review {
	margin-bottom: 1rem;
}

.star-small {
	height: 1.25rem;
}

/* Review */
.plant-review-data {
	max-height: 100px;
	overflow-y: scroll;
}

.plant-review-data::-webkit-scrollbar {
	width: 0.75rem;
}

/* Scroll Track */
.plant-review-data::-webkit-scrollbar-track {
	background: rgba(0, 0, 0, 0.25);
}

/* Scroll Handle */
.plant-review-data::-webkit-scrollbar-thumb {
	background: rgba(0, 0, 0, 0.5);
}

/* Scroll Handle on hover */
.plant-review-data::-webkit-scrollbar-thumb:hover {
	background: rgba(0, 0, 0, 1);
}


/* About Plant */
.plant-about > h2 {
	margin-bottom: 1.5rem;
}

.plant-about > article {
	display: flex;
	justify-content: space-between;
}

.plant-about > article > p {
	width: 40%;
}

.plant-stats {
	width: 40%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;
}

.plant-stat {
	display: flex;
	justify-content: space-between;
}

.plant-stat-name {
	display: flex;
	align-items: center;
	gap: 1em;
}

.plant-stat-data {
	color: var(--darkgreen);
	font-weight: 500;
}

.plant-review-stars {
	position: relative;
	left: -6px;
	display: flex;
}

.plant-review-title {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 0.5rem;
}

.plant-values {
	width: 100%;
}

.plant-rating {
	position: relative;
}

.plant-stars--hover {
	position: absolute;
	top: 0;
	background: white;
	opacity: 0;
	display: flex;
	flex-direction: row-reverse;
}

.plant-stars--hover:hover {
	opacity: 1;
}

.stars-button {
	padding: 0;
	border: none;
	background: none;
	cursor: pointer;
}

.plant-stars--hover .stars-button:hover path, .plant-stars--hover .stars-button:hover ~ .stars-button path {
	fill: #F2C72E;
}

.stars-button svg, .stars-button path {
	pointer-events: none;
}

/* Mobile */
@media (max-width: 650px) {
	.plant-main {
		flex-direction: column;
		margin-top: 0.5rem;
	}

	.plant-main > .plant-image {
		width: 100%;
	}

	.plant-data {
		width: 100%;
	}

	.plant-review-data {
		max-height: 100%;
		overflow-y: auto;
	}

	.plant-values {
		margin-bottom: 1.5rem;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.plant-review {
		display: none;
	}

	.plant-about > article {
		flex-direction: column;
	}

	.plant-about > article > p {
		width: 100%;
		margin-bottom: 1.5rem;
	}

	.plant-stats, .plant-stat {
		width: 100%;
	}


}
</style>