<template>
  <div class="PlantImage" :data-plant="plantId">
    <img class="img" :src="plantImage" >
    <button class="heart-it-button" :data-plant="plantId">
        <svg class="heart-it" width="32" height="32" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.39585 0.75C3.57733 0.75 1.29169 2.92456 1.29169 5.60742C1.29169 7.77315 2.18492 12.9132 10.9774 18.1092C11.1348 18.2013 11.3157 18.25 11.5 18.25C11.6844 18.25 11.8652 18.2013 12.0227 18.1092C20.8151 12.9132 21.7084 7.77315 21.7084 5.60742C21.7084 2.92456 19.4227 0.75 16.6042 0.75C13.7857 0.75 11.5 3.69389 11.5 3.69389C11.5 3.69389 9.21437 0.75 6.39585 0.75Z" stroke="#AF929D" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    <div v-if="!stock" class="plant-stock">
      <p>OUT OF STOCK</p>
    </div>
    <a v-if="clickable" :href="'/products/' + plantId" class="overlay">See more</a>
  </div>
</template>

<script>
export default {
  name: "PlantImage",
  props: {
    plantId: Number,
    stock: Boolean,
    clickable: Boolean
  },
  data() {
    return {
      plantImage: ""
    }
  },
  methods: {
    loadImg() {
      let img;
      try {
        img = require("../../public/plants/plant_" + this.plantId + ".png");
        this.plantImage = img;
      } catch (err) {
        console.log("Image not found for plant with id: " + this.plantId);
      }
    }
  },
  updated() {
    this.loadImg();
  },
  /* WHEN THE COMPONENT IS NOT SHOWN WITH V-IF */
  mounted() {
    this.loadImg();
  }
}
</script>

<style scoped>
.PlantImage {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  text-align: center;
  display: grid;
  place-content: center;
  color: white;
  transition: 0.2s ease-out;
}

.overlay:hover {
  opacity: 1;
}


.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heart-it-button {
  position: absolute;
  top: 0%;
  right: 0%;
  cursor: pointer;
  border: none;
  padding: 0.75rem;
  display: flex;
  background: none;
  z-index: 10;
}

.heart-it-button:hover > svg > path{
  fill: var(--pink);
}

.plant-stock {
  position: absolute;
  bottom: 0;
  right: 0;
}




</style>