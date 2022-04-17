<template>
	<main class="favorites-container">
		<div class="favorites-wrapper">
			<h1 class="serif">User's favorites</h1>
			<section class="favorite-plants">
				<ProductGrid v-for="favorite in favorites" class="plant-container"
								 :plant="favorite.plantData"></ProductGrid>
			</section>
		</div>
	</main>
</template>

<script>
import ProductGrid from "@/components/ProductGrid";
import FavoriteService from "@/services/FavoriteService";

export default {
	name: "Favorites",
	components: {
		ProductGrid,
	},
	data() {
		return {
			favorites: []
		}
	},
	methods: {
		async fetchFavorites() {
			try {
				let data = await FavoriteService.getAll(localStorage.getItem("userId"));
				this.favorites = data.data;
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
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
}

.plant-container {
	min-width: 100%;
}

@media (max-width: 450px) {
	.favorite-plants {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}
}


</style>