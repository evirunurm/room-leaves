<template>

</template>

<script>

export default {
	name: "AR",
	methods: {
		openAR() {
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
			img.setAttribute("id", "card");
			let assetItem = document.createElement('a-asset-item');
			assetItem.setAttribute("id", "avatarModel");
			assetItem.setAttribute("src", "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/softmind/scene.gltf");

			let camera = document.createElement('a-camera');
			camera.setAttribute("position", "0 0 0");
			camera.setAttribute("look-controls", "enabled: false");

			let entity = document.createElement('a-entity');
			entity.setAttribute("mindar-image-target", "targetIndex: 0");

			let plane = document.createElement('a-plane');
			plane.setAttribute("src", "#card");
			plane.setAttribute("position", "0 0 0");
			plane.setAttribute("height", "0.552");
			plane.setAttribute("width", "1");
			plane.setAttribute("rotation", "0 0 0");

			let model = document.createElement('a-gltf-model');
			model.setAttribute("rotation", "0 0 0");
			model.setAttribute("position", "0 0 0.1");
			model.setAttribute("scale", "0.005 0.005 0.005");
			model.setAttribute("src", "#avatarModel");
			model.setAttribute("animation", "property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate");

			assets.appendChild(img);
			assets.appendChild(assetItem);
			sceneEl.appendChild(assets);

			sceneEl.appendChild(camera);

			entity.appendChild(plane);
			entity.appendChild(model);
			sceneEl.appendChild(entity);


			entity.flushToDOM(true);
			sceneEl.flushToDOM(true);
			document.body.appendChild(sceneEl);
			console.log(sceneEl)

		}
	},
	beforeMount() {
		this.openAR();
	}
}
</script>

<style scoped>

</style>