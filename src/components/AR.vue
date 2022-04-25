<template>
	<div class="container">
		<a-scene embedded arjs> <!-- "embedded" makes the scene to stick into the container -->
			<a-box position="0 1 -3" rotation="0 45 0" color="red"></a-box>
			<a-marker-camera preset='hiro'></a-marker-camera>
		</a-scene>
	</div>
</template>

<script>

export default {
	name: "AR",
}
</script>

<style scoped>
.container {
	height: 500px;
	overflow: hidden;
	display: flex;
	width: 495px;
}

a-scene {
	height: 100%;
	width: 100%;
	height: 500px;
	width: 495px;

}
</style>