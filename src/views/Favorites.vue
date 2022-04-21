<template>
	<main class="favorites-container">
		<div class="favorites-wrapper">
			<h1 class="serif">{{ name }}'s favorites</h1>
			<section class="favorite-plants">
				<p v-if="favorites.length === 0" class="warning-no-favorites">You have no favorite items</p>
				<ProductGrid v-for="favorite in favorites" class="plant-container"
								 :plant="favorite.plantData"></ProductGrid>
			</section>
		</div>
	</main>
</template>

<script>
import ProductGrid from "@/components/ProductGrid";
import UserService from "@/services/UserService";
import FavoriteService from "@/services/FavoriteService";

export default {
	name: "Favorites",
	components: {
		ProductGrid,
	},
	data() {
		return {
			favorites: [],
			name: "",
		}
	},
	methods: {
		async fetchFavorites() {
			try {
				let dataName = await UserService.get(localStorage.getItem("userId"));
				let data = await FavoriteService.getAll(localStorage.getItem("userId"));
				this.favorites = data.data;
				this.name = dataName.data["full_name"];
				for (let i = 0; i < this.favorites.length; i++) {
					this.favorites[i].plantData.isFavorite = true;
				}
			} catch (err) {
				console.log(err.message);
			}
		}
	},
	async mounted() {
		this.fetchFavorites();
	}
}
</script>

<style scoped>
h1 {
	margin: 0 0 2.5rem 0;
}

.favorites-container {
	display: flex;
	justify-content: center;
	margin-bottom: 2.5rem;
}

.favorites-wrapper {
	width: 100%;
	margin: 0 var(--general-margin);
	max-width: var(--general-max-width);
	display: flex;
	flex-direction: column;
}

.favorite-plants {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 2rem;
}

.plant-container {
	min-width: 100%;
}

.warning-no-favorites {
	opacity: 50%;
	width: 100%;
}


@media (max-width: 900px) {
	.favorite-plants {
		grid-template-columns: 1fr 1fr;
	}
}

@media (max-width: 450px) {
	.favorite-plants {
		grid-template-columns: 1fr;
	}
}


</style>