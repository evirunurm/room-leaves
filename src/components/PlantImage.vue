<template>
	<div class="PlantImage">
		<img class="img" :src="plantImage">
		<button v-if="!isFavorite && canBeFavorite" @click="favorite" class="heart-it-button">
			<svg class="heart-it" width="32" height="32" viewBox="0 0 23 19" fill="none"
				  xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.39585 0.75C3.57733 0.75 1.29169 2.92456 1.29169 5.60742C1.29169 7.77315 2.18492 12.9132 10.9774 18.1092C11.1348 18.2013 11.3157 18.25 11.5 18.25C11.6844 18.25 11.8652 18.2013 12.0227 18.1092C20.8151 12.9132 21.7084 7.77315 21.7084 5.60742C21.7084 2.92456 19.4227 0.75 16.6042 0.75C13.7857 0.75 11.5 3.69389 11.5 3.69389C11.5 3.69389 9.21437 0.75 6.39585 0.75Z"
					stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<button v-if="isFavorite && canBeFavorite" @click="unfavorite" class="heart-it-button unheart-it-button">
			<svg class="unheart-it" width="32" height="32" viewBox="0 0 23 19" fill="none"
				  xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6.39585 0.75C3.57733 0.75 1.29169 2.92456 1.29169 5.60742C1.29169 7.77315 2.18492 12.9132 10.9774 18.1092C11.1348 18.2013 11.3157 18.25 11.5 18.25C11.6844 18.25 11.8652 18.2013 12.0227 18.1092C20.8151 12.9132 21.7084 7.77315 21.7084 5.60742C21.7084 2.92456 19.4227 0.75 16.6042 0.75C13.7857 0.75 11.5 3.69389 11.5 3.69389C11.5 3.69389 9.21437 0.75 6.39585 0.75Z"
					stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<div v-if="!stock" class="plant-stock">
		</div>
		<a v-if="clickable" :href="'/products/' + plantId" class="overlay">See more</a>
	</div>
</template>

<script>
import FavoriteService from "@/services/FavoriteService";

export default {
	name: "PlantImage",
	props: {
		plantId: Number,
		stock: Boolean,
		clickable: Boolean,
		initialFavoriteState: Boolean,
		canBeFavorite: Boolean,
		plantName: String,
	},
	data() {
		return {
			plantImage: "",
			isFavorite: ""
		}
	},
	methods: {
		loadImg() {
			let img;
			try {
				img = require("../../public/plants/plant_" + this.plantName.toLowerCase().split(" ").join("") + ".png");
				this.plantImage = img;
			} catch (err) {
				console.log("Image not found for plant with id: " + this.plantId);
			}
		},
		async favorite() {
			try {
				let data = await FavoriteService.create(localStorage.getItem("userId"), this.plantId);
				this.isFavorite = true;
			} catch (err) {
				console.log(err.message)
			}
		},
		async unfavorite() {
			try {
				let data = await FavoriteService.delete(localStorage.getItem("userId"), this.plantId);
				this.isFavorite = false;
			} catch (err) {
				console.log(err.message)
			}
		}
	},
	updated() {
		this.loadImg();
	},
	mounted() {
		this.loadImg(); /* WHEN THE COMPONENT IS NOT SHOWN WITH V-IF */
		this.$nextTick(() => {
			this.isFavorite = this.initialFavoriteState;
		})
	},
	watch: {
		initialFavoriteState: {
			handler() {
				this.isFavorite = this.initialFavoriteState;
			}
		}
	}
}
</script>

<style scoped>
.PlantImage {
	width: 100%;
	aspect-ratio: 1 / 1;
	overflow: hidden;
	position: relative;
	border: 1px solid rgba(0, 0, 0, 0.2);
}

.overlay {
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.5);
	opacity: 0;
	text-align: center;
	display: grid;
	place-content: center;
	color: white;
	transition: 0.2s ease-out;
}

.overlay:hover {
	opacity: 1;
}


.img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.heart-it-button {
	position: absolute;
	top: 0%;
	right: 0%;
	cursor: pointer;
	border: none;
	padding: 0.75rem;
	display: flex;
	background: none;
	z-index: 10;
}

.heart-it-button:hover > svg > path {
	fill: black;
}

.unheart-it-button > svg > path {
	fill: black;
}

.unheart-it-button:hover > svg > path {
	fill: none;
}

.plant-stock {
	position: absolute;
	bottom: 0;
	right: 0;
	color: white;
	border-radius: 20px;
	margin: 0.75rem; /* SAME AS HEART */
}

.plant-stock:before {
	content: "OUT OF STOCK";
	font-size: 1rem;
	padding: 0.15rem 0.75rem;
	border-radius: 20px;
	background: black;
	opacity: 0.5;
}

@media (max-width: 400px) {
	.plant-stock {
		position: absolute;
		bottom: 0;
		right: 0;
		color: white;
		margin: 0.5rem; /* SAME AS HEART */
	}

	.plant-stock:before {
		background: black;
		content: "NO STOCK";
		font-size: 0.6rem;
		padding: 0.1rem 0.5rem;
	}
}


</style>