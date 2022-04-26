<template>
	<div class="container">
		<a-scene embedded
					mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/card.mind;"
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
			console.log(AFRAME)
			let x = document.getElementById("arjs-video");

			x.style.width = "500px";
			console.log(x)
		}
	},
	mounted() {

	}
}
</script>

<style scoped>
body {
	overflow: hidden;
}

.container {
	overflow: hidden;
	display: flex;
	width: 100%;
}

a-scene {
	/*	!*	height: 100%;*!
		width: 100vw !important;
		max-width: 100vw !important;*/
	height: 500px;
	width: 100%;

}
</style>