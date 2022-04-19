<template>
	<main class="categories">
		<div class="categories-deco">
			<img class="categories-deco-img" src="../assets/decoration/cork_plants.png" alt="">
		</div>
		<h1 class="serif categories-title">Categories</h1>
		<section class="categories-wrapper">
			<p class="no-categories-warning" v-if="categories.length === 0">There are no categories to see here...</p>
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
	max-width: var(--general-max-width);
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

.no-categories-warning {
	text-align: center;
}

.categories-deco {
	width: 100%;
	max-height: 300px;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
	margin-bottom: 2rem;
	max-width: 1150px;
}

.categories-deco-img {
	width: 100%;
}

</style>