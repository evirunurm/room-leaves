<template>

</template>

<script>

export default {
	name: "AR",
	data() {
		return {
			gltfURI: "/plant_1.gltf",
		}
	},
	methods: {
		createAR() {
			let sceneEl = document.createElement('a-scene');
			sceneEl.setAttribute("mindar-image", "imageTargetSrc: https://cdn.jsdelivr.net/gh/evirunurm/mind@main/targets.mind");
			sceneEl.setAttribute('color-space', "sRGB");
			sceneEl.setAttribute('renderer', "colorManagement: true, physicallyCorrectLights");
			sceneEl.setAttribute('vr-mode-ui', "enabled: false");
			sceneEl.setAttribute('device-orientation-permission-ui', "enabled: false");

			let assets = document.createElement('a-assets');

			let img = document.createElement('img');
			img.setAttribute("id", "card");
			img.setAttribute("src", "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/card.png");

			let camera = document.createElement('a-camera');
			camera.setAttribute("position", "0 0 0");
			camera.setAttribute("look-controls", "enabled: false");

			let entity = document.createElement('a-entity');
			entity.setAttribute("mindar-image-target", "targetIndex: 0");

			let plant = document.createElement('a-entity');
			plant.setAttribute("gltf-model", "url(/plant_1.gltf)");
			plant.setAttribute("position", "0 2 -2")
			plant.setAttribute("rotation", "0 -30 0")
			plant.setAttribute("height", "1");

			assets.appendChild(entity);
			sceneEl.appendChild(plant);
			sceneEl.appendChild(assets);
			sceneEl.appendChild(camera);

			plant.flushToDOM(true);
			entity.flushToDOM(true);
			sceneEl.flushToDOM(true);
			document.body.appendChild(sceneEl);

		},
		destroyAR() {
			document.querySelector("a-scene").remove();
			document.querySelector("video").remove();
			document.querySelectorAll(".mindar-ui-overlay").forEach(el => {
				el.remove();
			});
		}
	},
	beforeMount() {
		this.createAR();
	},
	beforeUnmount() {
		this.destroyAR();
	}
}
</script>

<style scoped>

</style>