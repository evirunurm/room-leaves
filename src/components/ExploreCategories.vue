<template>
	<section class="explore-category-wrapper-container">
		<div class="explore-category-wrapper">
			<article class="explore-category-title">
				<h3>Explore</h3>
				<p>Discover your new favorites</p>
			</article>
			|
			<p class="no-categories-warning" v-if="categories.length === 0">There's been an error</p>
			<div v-for="category in categories.slice(0, limit)" class="category-container">
				<img :src="loadImg(category.name.toLowerCase())" alt="">
				<router-link class="category-title" :to="'/products?category=' + category.id">{{
						capitalize(category.name)
					}}
				</router-link>
			</div>
			<div class="explore-category-more">
				<router-link to="/categories">More +</router-link>
			</div>
		</div>
	</section>
</template>

<script>
import CategoryService from "@/services/CategoryService";

export default {
	name: "ExploreCategories",
	data() {
		return {
			categories: [],
			limit: 3
		}
	},
	methods: {
		capitalize(string) {
			return string.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
		},
		async fetchCategories() {
			let categories = await CategoryService.getAll();
			this.categories = categories.data;
		},
		loadImg(id) {
			let img;
			try {
				img = require('../assets/' + id + '-category.png');
				return img;
			} catch (err) {
				console.log("Image not found for plant with id: " + id);
			}
		}
	},
	mounted() {
		this.fetchCategories();
	}
}
</script>

<style scoped>

.explore-category-wrapper-container {
	background: var(--darkgreen);
	padding: 0 var(--general-margin);
	color: white;
	display: flex;
	justify-content: center;
}

.explore-category-wrapper {
	width: 100%;
	max-width: var(--general-max-width);;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.explore-category-title {
	max-width: 25%;
}

.explore-category-wrapper a {
	color: white;
	text-decoration: none;
	text-align: center;
}

.explore-category-more {
	display: flex;
	justify-content: flex-end;
	position: relative;
	bottom: 23px;
}

.explore-category-wrapper a:hover {
	text-decoration: underline;
}

.explore-category-wrapper .category-title {
	color: white;
	text-decoration: none;
}

.explore-category-wrappers .category-title:hover {
	text-decoration: underline;
	cursor: pointer;
}

.category-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	text-align: center;
	position: relative;
	bottom: 50px;
	gap: 0.5em;
}

.category-container img {
	height: 23vw;
	max-height: 150px;
	filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.3));

}

.no-categories-warning {
	padding: 3rem 0;
}

@media (max-width: 450px) {
	.explore-category-title h3 {
		font-size: 0.9rem;
	}

	.explore-category-title p {
		font-size: 0.7rem;
	}

	.category-container:nth-last-child(2), .category-container:nth-last-child(3) {
		display: none;
	}

	.category-container, .explore-category-more {
		bottom: 10px;
	}

	.explore-category-wrapper {
		font-size: 0.9rem;
		gap: 1em;
	}
}

@media (max-width: 550px) {

	.category-container:nth-last-child(2) {
		display: none;
	}
}

</style>