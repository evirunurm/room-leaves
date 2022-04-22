<template>
	<article class="category-container" :style="'background: rgba(0,0,0,.7)'">
		<div class="category-wrapper">
			<div class="category-data">
				<h3 class="category-title">{{ category.name.charAt(0).toUpperCase() + category.name.slice(1) }}</h3>
				<p class="category-description">{{ category.description }}</p>
			</div>
			<div class="category-image">
				<picture>
					<img class="img" :src="loadImg(category.name.toLowerCase())" height="150" width="160" alt="">
				</picture>
				<router-link :to="'/products?category=' + category.id">More +</router-link>
			</div>
		</div>
	</article>

</template>

<script>
export default {
	name: "CategoryDesc",
	props: {
		category: Object,
	},
	methods: {
		loadImg(id) {
			let img;
			try {
				img = require('../assets/' + id + '-category.png');
				return img;
			} catch (err) {
				console.log("Image not found for plant with id: " + id);
			}
		}
	}
}
</script>

<style scoped>
:root {
	--category-color: v-bind(category);
}

.category-container {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}


.category-wrapper {
	width: 100%;
	display: flex;
	max-width: var(--general-max-width);
}

.category-data, .category-image {
	width: 50%;
}

/* CATEGORY IMAGE */
.category-image {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2em var(--general-margin);
}

.category-image > a {
	align-self: flex-end;
	color: white;
	text-decoration: none;
	font-weight: 300;
}

.category-image > a:hover {
	text-decoration: underline;
}

.img {
	object-fit: cover;
}

.img {
	-webkit-mask-image: url("~@/assets/category-mask.svg");
	-webkit-mask-size: 100% 90%;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: 0 0;
}

picture {
	position: relative;
}

picture::before {
	content: "";
	position: absolute;
	bottom: -28px;
	border-radius: 50%;
	left: 30px;
	background-color: rgba(255, 255, 255, 0.5);
	width: 100px;
	height: 100px;
	transform: translateY(-50%);
}

/* BORDER */
.category-data:after {
	content: "";
	position: absolute;
	height: 20%;
	width: 2px;
	background: white;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
}

/* CATEGORY TEXT */
.category-data {
	position: relative;
	color: white;
	padding: 2em var(--general-margin);
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.category-title {
	font-weight: 500;
}

.category-description {
	font-weight: 300;
}

@media (max-width: 400px) {
	.category-description {
		font-size: 0.85rem;
	}

	.img {
		height: 100px;
		width: 100px;
		-webkit-mask-size: 100% 90%;
		-webkit-mask-position: 1px 0;
	}

	picture::before {
		content: "";
		position: absolute;
		bottom: -22px;
		border-radius: 50%;
		left: 11px;
		background-color: rgba(255, 255, 255, 0.5);
		width: 80px;
		height: 80px;
		transform: translateY(-50%);
	}

}

</style>