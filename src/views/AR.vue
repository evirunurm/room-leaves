<template>

</template>

<script>

export default {
	name: "AR",
	data() {
		return {
			objURI: "/plant_1.obj",
			mtlURI: "/plant_1.mtl",
		}
	},
	methods: {
		createAR() {
			let sceneEl = document.createElement('a-scene');
			// sceneEl.setAttribute("mindar-image", "imageTargetSrc: https://cdn.jsdelivr.net/gh/evirunurm/mind@main/targets.mind");
			// sceneEl.setAttribute('color-space', "sRGB");
			// sceneEl.setAttribute('renderer', "colorManagement: true, physicallyCorrectLights");
			sceneEl.setAttribute('vr-mode-ui', "enabled: false");
			sceneEl.setAttribute('device-orientation-permission-ui', "enabled: false");
			sceneEl.setAttribute('background', "color: red");

			let assets = document.createElement('a-assets');

			/*let img = document.createElement('img');
			img.setAttribute("id", "card");
			img.setAttribute("src", "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/card.png");
			img.setAttribute("id", "card");*/

			let assetObj = document.createElement('a-asset-item');
			assetObj.setAttribute("id", "obj");
			assetObj.setAttribute("src", this.objURI);

			let assetMtl = document.createElement('a-asset-item');
			assetMtl.setAttribute("id", "mtl");
			assetMtl.setAttribute("src", this.mtlURI);

			// let camera = document.createElement('a-camera');
			// camera.setAttribute("position", "0 0 0");
			// camera.setAttribute("look-controls", "enabled: false");

			let entity = document.createElement('a-entity');
			entity.setAttribute("mindar-image-target", "targetIndex: 0");

			let plane = document.createElement('a-plane');
			plane.setAttribute("src", "#card");
			plane.setAttribute("position", "0 0 0");
			plane.setAttribute("height", "0.552");
			plane.setAttribute("width", "1");
			plane.setAttribute("rotation", "0 0 0");

			// let model = document.createElement('a-gltf-model');
			// model.setAttribute("rotation", "0 0 0");
			// model.setAttribute("position", "0 0 0");
			// model.setAttribute("scale", "1 1 1");
			// model.setAttribute("src", "#avatarModel");
			// model.setAttribute("animation", "property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate");
			let plant = document.createElement('a-entity');
			plant.setAttribute("obj-model", "obj: #obj; mtl: #mtl");
			plant.setAttribute("position", "-1 0.5 -3")
			plant.setAttribute("rotation", "0 45 0")
			plant.setAttribute("height", "0.5");

			let box = document.createElement('a-box');
			box.setAttribute("height", "1");
			box.setAttribute("position", "-1 0.5 -3");
			box.setAttribute("rotation", "0 45 0");
			box.setAttribute("color", "#4CC3D9");


			/*assets.appendChild(img);*/
			assets.appendChild(assetObj);
			assets.appendChild(assetMtl);
			sceneEl.appendChild(assets);

			// sceneEl.appendChild(camera);

			/*entity.appendChild(plane);*/
			/*sceneEl.appendChild(entity);*/
			sceneEl.appendChild(plant);
			/*sceneEl.appendChild(box);*/

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