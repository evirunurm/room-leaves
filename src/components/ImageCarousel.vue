<template>
	<div class="container">
		<div id="carouselWrapper" class="wrapper">
			<div v-for="ad in ads" class="img-container">
				<img :src="ad.url" :alt="ad.url">
			</div>
		</div>
		<div class="controller">
			<div v-for="ad in ads">
				<button class="controller-button" @click="clearSlideTimer(); openSlide(ad.img); setSlideTimer(); "
						  v-show="this.selected != ad.img">
				</button>
				<button class="controller-button --marked" @click="clearSlideTimer(); openSlide(ad.img); setSlideTimer();"
						  v-show="this.selected == ad.img">
				</button>
			</div>
		</div>
	</div>
</template>

<script>
let interval;

export default {
	name: 'ImageCarousel',
	data() {
		return {
			selected: 1,
			ads: [
				{
					img: "1",
					url: require("../assets/ads/img1.jpg")
				},
				{
					img: "2",
					url: require("../assets/ads/img2.jpg")
				},
				{
					img: "3",
					url: require("../assets/ads/img3.jpg")
				},
			]
		}
	},
	methods: {
		openSlide(num) {
			this.selected = this.getNextSlideNum(num);
			document.getElementById("carouselWrapper").style.left = `-${(this.selected - 1) * 100}%`;
		},
		setSlideTimer() {
			interval = setInterval(() => {
				this.openSlide(parseInt(this.selected) + 1);
			}, 4000);
		},
		clearSlideTimer() {
			clearInterval(interval);
		},
		getNextSlideNum(slide) {
			if (slide > this.ads.length) {
				return 1;
			}
			return slide;
		}
	},
	mounted() {
		this.setSlideTimer();
	},
	beforeUnmount() {
		this.clearSlideTimer();
	}
}
</script>

<style scoped>
.container {
	height: 250px;
	width: calc(100% - (var(--general-margin) * 2));
	background: red;
	position: relative;
	overflow: hidden;
	max-width: 1150px;
}

.wrapper {
	display: flex;
	flex-direction: row;
	position: relative;
	transition: 0.5s ease-in-out;
}

.img-container {
	height: 250px;
	min-width: 100%;
}

.img-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.img-container:nth-child(1) {
	background: green;
}

.img-container:nth-child(2) {
	background: blue;
}

.img-container:nth-child(3) {
	background: yellow;
}

.img-container:nth-child(4) {
	background: brown;
}


.controller {
	position: absolute;
	bottom: 0.5em;
	left: 50%;
	transform: translate(-50%);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
}

.controller-button {
	border-radius: 50%;
	border: 2px solid white;
	background: none;
	width: 1rem;
	height: 1rem;
	cursor: pointer;
	box-shadow: 0 5px 8px 0px rgba(0, 0, 0, 0.5);
}

.controller-button.--marked {
	background: white;
}

</style>
