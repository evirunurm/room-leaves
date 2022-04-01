<template>
  <div class="PlantImage" :id="plantId">
      <img class="img" :src="plantImage" >
  </div>
</template>

<script>
export default {
  name: "PlantImage",
  props: {
    plantId: String,
  },
  data() {
    return {
      plantImage: this.loadImg(this.plantId)
    }
  },
  methods: {
    loadImg(id) {
      let img;
      try {
        img = require("../../public/plants/plant_" + id + ".png");
        return img;
      } catch (err) {
        console.log("Image not found for plant with the id: " + id);
      }
    }
  }
}
</script>

<style scoped>
.PlantImage {
  background: red;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>