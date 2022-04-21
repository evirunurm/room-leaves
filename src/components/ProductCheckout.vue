<template>
	<article class="product-cart">
		<PlantImage class="plant-image" :plant-id="item.id" :clickable="true" :stock="item.stock > 0"></PlantImage>
		<div class="plant-data">
			<div class="plant-data-section">
				<p class="plant-name">{{ item.name }}</p>
			</div>
			<div class="plant-data-section">
				<p>Amount: {{ item.amount }}</p>
				<p class="plant-price">Price: {{ Math.round(item.price * item.amount * 100) / 100 }}</p>
			</div>
		</div>
	</article>
</template>

<script>
import PlantImage from "@/components/PlantImage";

export default {
	name: "ProductCart",
	components: {
		PlantImage
	},
	props: {
		item: Object,
	}
}
</script>

<style scoped>
.product-cart {
	width: 100%;
	display: flex;
	gap: 2.5rem;
	position: relative;
}

.plant-data {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.plant-data-section {
	display: flex;
	flex-direction: column;
}


.plant-name {
	width: 100%;
	font-size: 1.3rem;
	word-wrap: break-word;
}

.plant-image {
	width: 150px;
	min-width: 125px;
}

.plant-price {
	font-weight: 600;
}

.plant-price:after {
	content: "€";
	font-size: 0.9em;
}


.remove-button svg {
	position: relative;
}

.remove-button:hover path {
	stroke: white;
}


@media (max-width: 450px) {
	.product-cart {
		width: 100%;
		display: flex;
		gap: 1rem;
		position: relative;
	}


	p {
		font-size: 1rem;
		line-height: 110%;
	}

	.plant-name {
		font-size: 1.1rem;
	}

	.plant-data-section {
		gap: 0.2rem;
	}

	/* TODO: BUTTON FOR MOBILE */

}
</style>