<template>
	<div class="container" id="ar-container">
		<a-scene id="ar-scene"
					embedded
					mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/card.mind; uiScanning: no"
					vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
			<a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
			<a-entity mindar-image-target="targetIndex: 0">
				<a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
			</a-entity>
		</a-scene>
	</div>
</template>

<script>

export default {
	name: "AR",
	methods: {
		resideVideo() {
			const container = document.getElementById("ar-container");
			const scene = document.getElementById("ar-scene");
			container.style.width = window.innerWidth + "px";
			container.style.height = window.innerHeight + "px";
			scene.style.width = window.innerWidth + "px";
			scene.style.height = window.innerHeight + "px";
			container.children[1].style.height = window.innerHeight + "px";
			container.children[1].style.width = window.innerWidth + "px";
		}
	},
	mounted() {
		setTimeout(() => {
			this.resideVideo();
		}, 2000);
		/*	window.addEventListener("resize", () => {
				setTimeout(() => {
					this.resideVideo();
				}, 1000);
			});*/
	}
}
</script>

<style scoped>

.container {
	overflow: hidden;
	/*	display: flex;*/
	width: 100px;
	height: 100px;
}

a-scene {
	height: 100px;
	max-width: 100vw;
	overflow: hidden;
	width: 100px;
}

.a-canvas {

}
</style>