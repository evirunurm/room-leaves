<template>
	<main class="home">
		<WelcomeScreen></WelcomeScreen>
		<ExploreCategories></ExploreCategories>
		<ProductCarousel class="new-arrivals-wrapper" title="New Arrivals" :plants="plants"></ProductCarousel>
	</main>
</template>

<script>
// @ is an alias to /src
import PlantService from "@/services/PlantService";
import ImageCarousel from '@/components/ImageCarousel.vue'
import WelcomeScreen from '@/components/WelcomeScreen.vue'
import ExploreCategories from '@/components/ExploreCategories.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'

export default {
	name: 'Home',
	components: {
		ImageCarousel,
		WelcomeScreen,
		ExploreCategories,
		ProductCarousel
	},
	data() {
		return {
			plants: [],
			orderQuery: {
				"updatedAt": "DESC"
			}
		}
	},
	methods: {
		async fetchPlants() {
			let plants = await PlantService.getAll();
			this.plants = plants.data;
			this.orderPlants();
		},
		orderPlants() {
			this.plants.sort((curr, next) => {
				let currDate = Date.parse(curr["updatedAt"]);
				let nextDate = Date.parse(next["updatedAt"]);
				return nextDate - currDate;
			})
		}
	},
	mounted() {
		this.fetchPlants();
	}
}
</script>

<style scoped>
.home {
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	padding-bottom: 2.5rem;
}

.new-arrivals-wrapper {
	width: calc(100% - var(--general-margin) * 2);
	margin: 0 var(--general-margin);
}


</style>
