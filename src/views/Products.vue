<template>
	<main class="products-container">
		<ImageCarousel class="carousel"></ImageCarousel>
		<section class="product-settings-wrapper">
			<button class="extra-button sort-filter-button" @click="isSortFilterOpened = !isSortFilterOpened">Sort and
				Filter
			</button>
			<button @click="rowView = !rowView" class="view-type-button extra-button">
				<svg v-if="!rowView" width="18" height="18" viewBox="0 0 18 18" fill="none"
					  xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 7.99997H7C7.26522 7.99997 7.51957 7.89461 7.70711 7.70708C7.89464 7.51954 8 7.26519 8 6.99997V0.999969C8 0.734753 7.89464 0.480399 7.70711 0.292863C7.51957 0.105326 7.26522 -3.05176e-05 7 -3.05176e-05H1C0.734784 -3.05176e-05 0.48043 0.105326 0.292893 0.292863C0.105357 0.480399 0 0.734753 0 0.999969V6.99997C0 7.26519 0.105357 7.51954 0.292893 7.70708C0.48043 7.89461 0.734784 7.99997 1 7.99997ZM11 7.99997H17C17.2652 7.99997 17.5196 7.89461 17.7071 7.70708C17.8946 7.51954 18 7.26519 18 6.99997V0.999969C18 0.734753 17.8946 0.480399 17.7071 0.292863C17.5196 0.105326 17.2652 -3.05176e-05 17 -3.05176e-05H11C10.7348 -3.05176e-05 10.4804 0.105326 10.2929 0.292863C10.1054 0.480399 10 0.734753 10 0.999969V6.99997C10 7.26519 10.1054 7.51954 10.2929 7.70708C10.4804 7.89461 10.7348 7.99997 11 7.99997ZM1 18H7C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5195 8 17.2652 8 17V11C8 10.7348 7.89464 10.4804 7.70711 10.2929C7.51957 10.1053 7.26522 9.99997 7 9.99997H1C0.734784 9.99997 0.48043 10.1053 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11V17C0 17.2652 0.105357 17.5195 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18ZM11 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5195 18 17.2652 18 17V11C18 10.7348 17.8946 10.4804 17.7071 10.2929C17.5196 10.1053 17.2652 9.99997 17 9.99997H11C10.7348 9.99997 10.4804 10.1053 10.2929 10.2929C10.1054 10.4804 10 10.7348 10 11V17C10 17.2652 10.1054 17.5195 10.2929 17.7071C10.4804 17.8946 10.7348 18 11 18Z"
						fill="black"/>
				</svg>
				<svg v-if="rowView" width="18" height="18" viewBox="0 0 18 18" fill="none"
					  xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18 11.7V16.2C18 16.6774 17.842 17.1352 17.5607 17.4728C17.2794 17.8104 16.8978 18 16.5 18H1.5C1.10218 18 0.720644 17.8104 0.43934 17.4728C0.158035 17.1352 0 16.6774 0 16.2V11.7C0 11.2226 0.158035 10.7648 0.43934 10.4272C0.720644 10.0896 1.10218 9.9 1.5 9.9H16.5C16.8978 9.9 17.2794 10.0896 17.5607 10.4272C17.842 10.7648 18 11.2226 18 11.7ZM16.5 0H1.5C1.10218 0 0.720644 0.189642 0.43934 0.527208C0.158035 0.864773 0 1.32261 0 1.8V6.3C0 6.77739 0.158035 7.23523 0.43934 7.57279C0.720644 7.91036 1.10218 8.1 1.5 8.1H16.5C16.8978 8.1 17.2794 7.91036 17.5607 7.57279C17.842 7.23523 18 6.77739 18 6.3V1.8C18 1.32261 17.842 0.864773 17.5607 0.527208C17.2794 0.189642 16.8978 0 16.5 0V0Z"
						fill="black"/>
				</svg>

			</button>
			<article v-if="isSortFilterOpened" class="sort-filter" id="sortFilterBox">
				<div class="sort">
					<select v-model="sortBy" @change="sort($event)">
						<option selected disabled value="">Order by</option>
						<option value="height">Height</option>
						<option value="price">Price</option>
						<option value="temperature">Temperature</option>
						<option value="score">Score</option>
					</select>
					<button class="white" @click="sortDesc=!sortDesc; sort($event)" v-if="sortDesc">DESC</button>
					<button class="white" @click="sortDesc=!sortDesc; sort($event)" v-if="!sortDesc">ASC</button>
				</div>
				<div class="filter">
					<p>Categories</p>
					<div v-for="category in categories">
						<label :for="category.name">
							<input @change="refreshFilter($event)" v-model="categoryFilter[category.id]" checked
									 data-filter="category" :id="category.name" :name="category.name"
									 type="checkbox">
							{{ category.name[0].toUpperCase() + category.name.substring(1) }}
						</label>
					</div>
				</div>
				<div class="filter">
					<p>Price</p>
					<div>
						<label class="value">{{ priceFilter }}€</label>
						<input data-filter="price" @input="refreshFilter($event)" class="filterInput" v-model="priceFilter"
								 type="range" step="1" min="0" :max="Math.round(maxPrice) + 1">
					</div>
				</div>
				<div class="filter">
					<p>Height</p>
					<div>
						<label class="value">{{ heightFilter }}m</label>
						<input data-filter="height" @input="refreshFilter($event)" class="filterInput" v-model="heightFilter"
								 type="range" step="0.1" min="0" :max="Math.round(maxHeight) + 1">
					</div>
				</div>
			</article>
		</section>
		<section v-if="!rowView" class="products-wrapper --grid">
			<p v-if="plants.length < 1" class="no-plants-warning">No plants in this forest...</p>
			<ProductGrid v-for="plant in plants"
							 :plant="plant"></ProductGrid>
		</section>
		<section v-if="rowView" class="products-wrapper --row">
			<p v-if="plants.length < 1" class="no-plants-warning">No plants in this forest...</p>
			<ProductRow v-for="plant in plants" :plant="plant"></ProductRow>
		</section>
	</main>
</template>

<script>
import ProductGrid from "../components/ProductGrid";
import ProductRow from "@/components/ProductRow";
import ImageCarousel from "@/components/ImageCarousel";
import PlantService from "@/services/PlantService";
import CategoryService from "@/services/CategoryService";
import FavoriteService from "@/services/FavoriteService";

export default {
	components: {
		ProductGrid,
		ProductRow,
		ImageCarousel
	},
	data() {
		return {
			plants: [],
			originalPlants: [],
			rowView: false,
			isSortFilterOpened: false,
			categories: [],
			categoryFilter: {},
			maxPrice: 100,
			priceFilter: this.maxPrice,
			maxHeight: 100,
			heightFilter: this.maxPrice,
			sortBy: "",
			sortDesc: false,
			favorite: []
		}
	},
	methods: {
		async fetchPlants() {
			let plants = await PlantService.getAll();
			this.originalPlants = plants.data;
			this.plants = this.originalPlants;
			let favorite = await FavoriteService.getAll(localStorage.getItem("userId"));
			this.favorite = favorite.data;
			for (let i = 0; i < this.plants.length; i++) {
				this.plants[i].isFavorite = this.favorite.some((fav) => {
					return fav.plantId === this.plants[i].id
				})
			}
		},
		async fetchCategories() {
			let categories = await CategoryService.getAll();
			this.categories = categories.data;
			/* Set to true each category inside filter object */
			for (let i = 0; i < this.categories.length; i++) {
				this.categoryFilter[this.categories[i].id] = true;
			}
		},
		setHigherPrice() {
			this.maxPrice = Math.max(...this.plants.map(plant => plant.price));
			this.priceFilter = Math.max(...this.plants.map(plant => plant.price));
		},
		setHigherHeight() {
			this.maxHeight = Math.max(...this.plants.map(plant => plant.height));
			this.heightFilter = Math.max(...this.plants.map(plant => plant.height));
		},
		refreshFilter() {
			/* Filter by Category, Price and Category */
			this.plants = this.originalPlants.filter(plant => {
				return plant.height <= this.heightFilter && plant.price <= this.priceFilter && this.categoryFilter[plant.categoryId] != false;
			});
		},
		sort() {
			this.plants.sort((curr, next) => {
				if (this.sortDesc) {
					return next[this.sortBy] - curr[this.sortBy];
				} else {
					return curr[this.sortBy] - next[this.sortBy];
				}
			});
		},
		extractRoute() {
			if ("category" in this.$route.query) {
				Object.keys(this.categoryFilter).forEach(key => {
					if (key === this.$route.query["category"]) {
						this.categoryFilter[key] = true;
					} else {
						this.categoryFilter[key] = false;
					}
				});
				this.refreshFilter()
			}


		},
	},
	async mounted() {
		await this.fetchPlants();
		await this.fetchCategories();
		this.setHigherPrice();
		this.setHigherHeight();
		this.extractRoute();
	}
}
</script>

<style scoped>

.products-container {
	margin: 0 var(--general-margin) var(--general-margin) var(--general-margin);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.carousel {
	width: 100%;
	margin: 1.5rem 0;
}

.--grid {
	display: grid;
	gap: var(--general-margin);
	grid-template-columns: 1fr 1fr;
}

.--row {
	display: flex;
	flex-direction: column;
	gap: var(--general-margin);
	width: 100%;
	max-width: calc(var(--general-max-width) - 150px);
}

.product-settings-wrapper {
	margin: 1.5rem var(--general-margin) 2.5rem var(--general-margin);
	max-width: calc(var(--general-max-width) - 150px); /* Size of the gap between each plant box */
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: relative;
}

.extra-button {
	border: 2px solid black;
	background: none;
	cursor: pointer;
	transition: 0.25s ease-out;
}

.extra-button:hover {
	background: black;
	color: white;
}

.extra-button:hover path {
	fill: white;
}

.sort-filter-button {
	padding: 0.3rem 1.25rem;
	font-size: 1rem;
}

.view-type-button {
	height: 2.42rem;
	width: 2.42rem;
	display: grid;
	place-items: center;
}

.sort-filter {
	position: absolute;
	bottom: 0;
	transform: translateY(100%);
	z-index: 100;
	background: white;
	border: 2px solid black;
	padding: 0.75rem 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.filter > p {
	font-weight: 500;
	margin-bottom: 0.5rem;
	border-bottom: 2px solid black;
}


.filter .value {
	opacity: 50%;
	display: block;
}

.sort {
	display: flex;
	gap: 1rem;
	margin-top: 0.5rem;
}

.sort > button {
	padding: 0.25rem 1rem;
	cursor: pointer;
	border-radius: 0;
	font-weight: 500;
}

.sort > select {
	cursor: pointer;
	border-radius: 0;
	border: 2px solid var(--darkgreen);
	font-size: 1rem;
	padding-left: 1em;
}

.no-plants-warning {
	align-self: center;
}

@media (max-width: 400px) {
	.sort-filter {
		width: 100%;
	}

	.sort {
		width: 100%;
		gap: 0;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.sort > button, .sort > select {
		padding: 0;
		cursor: pointer;
		border-radius: 0;
		font-weight: 500;
		width: 100%;
	}

	.sort > button {
		max-width: 50px;
	}


}

</style>