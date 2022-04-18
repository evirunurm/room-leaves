<template>
	<main class="categories">
		<h1 class="serif categories-title">Categories</h1>
		<section class="categories-wrapper">
			<CategoryDesc v-for="category in categories" :category="category"></CategoryDesc>
		</section>
	</main>
</template>

<script>
import CategoryDesc from "@/components/CategoryDesc";
import CategoryService from "@/services/CategoryService";

export default {
	components: {
		CategoryDesc,
	},
	data() {
		return {
			categories: [],
			colors: ["104547", "AF929D", "60894A"]
		}
	},
	methods: {
		async fetchCategories() {
			let categories = await CategoryService.getAll();
			this.categories = categories.data;
		},
		assignColors() {
			let round = 1;
			for (let i = 0; i < this.categories.length; i++) {
				if (i < this.colors.length) {
					this.categories[i].color = this.colors[i];
				} else {
					this.categories[i].color = this.colors[(i - this.colors.length) * round];
				}
			}
		}
	},
	async mounted() {
		await this.fetchCategories();
		this.assignColors();
	}
}
</script>

<style scoped>
* {
	box-sizing: border-box;
}

.categories {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.categories-wrapper {
	width: 100%;
	margin-bottom: 2.5rem;
}

.categories-title {
	width: calc(100% - var(--general-margin));
	display: block;
	margin: 0 var(--general-margin) var(--general-margin) var(--general-margin);
	max-width: var(--general-max-width);
	border-bottom: 2px solid black;
	padding: 0.5em 0;
	font-weight: 500;
}

</style>